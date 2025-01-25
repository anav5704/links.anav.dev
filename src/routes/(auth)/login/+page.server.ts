import { redirect, type Actions } from "@sveltejs/kit"
import { PASSWORD } from "$env/static/private"

export const load = async ({ locals }) => {
    if (locals.user) {
        redirect(303, "/dash")
    }
}

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData()
        const password = data.get("password")

        if (!password) {
            return {
                error: "Password is required"
            }
        }

        if (password !== PASSWORD) {
            return {
                error: "Password is incorrect"
            }
        }

        cookies.set("user", "true", {
            path: "/",
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7
        })

        redirect(303, "/dash")
    }
}