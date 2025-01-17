import { db } from "../prisma"

export async function load() {
    const collections = db.collection.findMany({
        include: {
            links: {
                orderBy: {
                    index: "asc"
                }
            }
        },
        orderBy: {
            index: "asc"
        }
    })

    return { collections }
}