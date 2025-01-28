import { db } from "@/prisma"

export async function load() {
    const links = db.link.findMany({
        where: {
            hidden: false
        },
        orderBy: {
            index: "asc"
        }
    })

    return { links }
}