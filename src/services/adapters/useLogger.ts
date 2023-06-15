import * as Logger from '../contracts/Logger/index.ts';

interface Logger {
    info(data: string | UnknownObject): void;
    warn(data: string | UnknownObject): void;
    error(data: string | UnknownObject): void;
}

export function useLogger(): Logger {
    return Logger;
}
