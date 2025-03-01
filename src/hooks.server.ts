import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.user = Boolean(event.cookies.get("user"))

    const response = await resolve(event)

    return response
}