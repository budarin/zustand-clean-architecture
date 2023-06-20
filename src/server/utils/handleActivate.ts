import { onActivate } from './onActivate.ts';

export function handleActivate(event: ExtendableEvent): void {
    event.waitUntil(onActivate());
    clients.claim();
}
