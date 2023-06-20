export function respondWith404() {
    return new Response(null, {
        status: 404,
    });
}
