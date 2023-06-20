import { state } from '../domain/state.ts';
import { loadState } from './loadState.ts';

export async function onActivate(): Promise<void> {
    if (!state) {
        await loadState();
    }
}
