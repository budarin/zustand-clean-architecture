import { self } from '../index.ts';

export function handleInstall(event: ExtendableEvent): void {
    self.skipWaiting();
}
