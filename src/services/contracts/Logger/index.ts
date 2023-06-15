import { useApi } from '../../adapters/useApi.ts';
import { isString } from '../../../domain/entities/validation_utils/isString.ts';

type LogMethods = 'info' | 'warn' | 'error';

function logObject(data: string | UnknownObject, type: LogMethods): void {
    const api = useApi();
    const logObj = isString(data)
        ? {
              type,
              message: data,
          }
        : { ...data, type };

    api.log(logObj);
}

export function info(data: string | UnknownObject): void {
    logObject(data, 'info');
}

export function warn(data: string | UnknownObject): void {
    logObject(data, 'warn');
}

export function error(data: string | UnknownObject): void {
    logObject(data, 'error');
}

export type Logger = {
    info: typeof info;
    warn: typeof warn;
    error: typeof error;
};
