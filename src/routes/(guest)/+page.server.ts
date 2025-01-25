import { db } from "@/prisma"

export async function load() {
    const links = db.link.findMany({
        orderBy: {
            index: "asc"
        }
    })

    return { links }
}