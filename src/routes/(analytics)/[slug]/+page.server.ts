import { isRedirect, redirect } from "@sveltejs/kit"
import { db } from "@/prisma"

export async function load({ request, params: { slug } }) {
    const link = await db.link.findUnique({
        where: {
            slug
        }
    })

    if (!link) {
        return
    }

    await db.link.update({
        where: {
            id: link.id,
        },
        data: {
            clicks: ++link.clicks
        }
    })

    redirect(302, link.url)
}