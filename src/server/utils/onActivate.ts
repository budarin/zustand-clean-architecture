import { loadState } from './loadState.ts';

export async function onActivate(): Promise<void> {
    await loadState();
}
