import { redirect } from "@sveltejs/kit"
import { db } from "@/prisma"

export async function load({ request, params: { slug } }) {
    const link = await db.link.findUnique({
        where: {
            slug
        }
    })

    if (!link) return

    redirect(302, link.url)
}