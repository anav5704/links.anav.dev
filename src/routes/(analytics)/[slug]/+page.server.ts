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


    await db.click.create({
        data: {
            linkId: link.id,
            referrer: request.headers.get("referer") || "direct",
            country: request.headers.get("cf-ipcountry") || null,
        }
    })

    redirect(302, link.url)
}