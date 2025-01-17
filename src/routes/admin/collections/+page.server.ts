import type { Actions } from "@sveltejs/kit"
import { db } from "../../../prisma"

export async function load() {
    const collections = await db.collection.findMany({
        orderBy: {
            index: "asc"
        }
    })

    return { collections }
}

export const actions: Actions = {
    create: async ({ request }) => {
        const data = await request.formData()

        const title = data.get("title") as string
        const index = data.get("index") as string

        await db.collection.create({
            data: {
                title,
                index: parseInt(index),
            }
        })

        return { success: true }
    },

    update: async ({ request }) => {
        const data = await request.formData()

        const id = data.get("id") as string
        const title = data.get("title") as string
        const index = data.get("index") as string

        await db.collection.update({
            where: {
                id
            },
            data: {
                title,
                index: parseInt(index),
            }
        })

        return { success: true }
    },

    delete: async ({ request }) => {
        const data = await request.formData()

        const id = data.get("id") as string

        await db.collection.delete({
            where: {
                id
            }
        })

        return { success: true }
    }
}