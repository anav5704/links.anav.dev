import { redirect, type Actions } from "@sveltejs/kit"
import type { Link } from "@prisma/client"
import { db } from "@/prisma"

export const load = async ({ locals, url }) => {
    if (!locals.user) {
        redirect(303, "/login")
    }

    const search = url.searchParams.get("search")

    const links = await db.link.findMany({
        where: search ? {
            AND: search.split(" ").map((subSearch) => ({
                OR: [
                    {
                        title: {
                            contains: subSearch,
                            mode: "insensitive"
                        }
                    },
                    {
                        subtitle: {
                            contains: subSearch,
                            mode: "insensitive"
                        }
                    },
                    {
                        slug: {
                            contains: subSearch,
                            mode: "insensitive"
                        }
                    },
                    {
                        url: {
                            contains: subSearch,
                            mode: "insensitive"
                        }
                    },
                ],
            }))
        } : {},
        orderBy: {
            index: "asc"
        }
    })

    return { links }
}

export const actions: Actions = {
    createLink: async ({ request, locals }) => {
        if (!locals.user) {
            redirect(303, "/login")
        }

        const data = await request.formData()

        const title = data.get("title") as string
        const subtitle = data.get("subtitle") as string
        const slug = data.get("slug") as string
        const url = data.get("url") as string
        const hidden = data.get("hidden") as string

        await db.link.create({
            data: {
                title,
                subtitle,
                slug,
                url,
                hidden: Boolean(hidden)
            }
        })

        redirect(303, "/dash")
    },

    updateLink: async ({ request, locals }) => {
        if (!locals.user) {
            redirect(303, "/login")
        }

        const data = await request.formData()

        const id = data.get("id") as string
        const title = data.get("title") as string
        const subtitle = data.get("subtitle") as string
        const slug = data.get("slug") as string
        const url = data.get("url") as string
        const hidden = data.get("hidden") as string

        await db.link.update({
            where: {
                id
            },
            data: {
                title,
                subtitle,
                slug,
                url,
                hidden: Boolean(hidden)
            }
        })

        redirect(303, "/dash")
    },

    reorderLink: async ({ request, locals }) => {
        if (!locals.user) {
            redirect(303, "/login")
        }

        const data = await request.formData()

        const links = JSON.parse(data.get("links") as string)

        await db.$transaction([
            ...links.map((link: Link) =>
                db.link.update({
                    where: {
                        id: link.id

                    },
                    data: {
                        index: link.index

                    }
                })
            )])

        redirect(303, "/dash")
    },

    deleteLink: async ({ request, locals }) => {
        if (!locals.user) {
            redirect(303, "/login")
        }

        const data = await request.formData()

        const id = data.get("id") as string

        await db.link.delete({
            where: {
                id
            }
        })

        redirect(303, "/dash")
    }

}