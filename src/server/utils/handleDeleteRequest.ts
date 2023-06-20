import { respondWith404 } from './respondWith404.ts';

export async function handleDeleteRequest(request: Request, method: string): Promise<Response> {
    switch (method) {
        case 'delete_category': {
            const data: Category = await request.json();
            const response = new Response(JSON.stringify(data), {
                status: 200,
            });

            return response;
        }

        case 'delete_todo': {
            const data: Todo = await request.json();
            const response = new Response(JSON.stringify(data), {
                status: 200,
            });

            return response;
        }

        default: {
            return respondWith404();
        }
    }
}
