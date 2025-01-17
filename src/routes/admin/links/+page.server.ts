import type { Actions } from "@sveltejs/kit"
import { db } from "../../../prisma"

export async function load() {
    const links = await db.link.findMany({
        orderBy: [
            {
                index: "asc"
            },
            {
                Collection: {
                    index: "asc"
                }
            }
        ]
    })

    const collections = await db.collection.findMany({
        orderBy: {
            index: "asc"
        }
    })

    return { links, collections }
}

export const actions: Actions = {
    create: async ({ request }) => {
        const data = await request.formData()

        const title = data.get("title") as string
        const slug = data.get("slug") as string
        const url = data.get("url") as string
        const index = data.get("index") as string
        const collectionId = data.get("collectionId") as string

        await db.link.create({
            data: {
                title,
                slug,
                url,
                index: parseInt(index),
                collectionId
            }
        })

        return { success: true }
    },


    update: async ({ request }) => {
        const data = await request.formData()

        const id = data.get("id") as string
        const title = data.get("title") as string
        const slug = data.get("slug") as string
        const url = data.get("url") as string
        const index = data.get("index") as string
        const collectionId = data.get("collectionId") as string

        await db.link.update({
            where: {
                id
            },
            data: {
                title,
                slug,
                url,
                index: parseInt(index),
                collectionId
            }
        })

        return { success: true }
    },

    delete: async ({ request }) => {
        const data = await request.formData()

        const id = data.get("id") as string

        await db.link.delete({
            where: {
                id
            }
        })

        return { success: true }
    }
}