import { log } from '../api/api';
import { isString } from '../../../common/utils/validation/isString';

type LogMethods = 'info' | 'warn' | 'error';

function logObject(data: string | UnknownObject, type: LogMethods) {
    const logObj = isString(data)
        ? {
              type,
              message: data,
          }
        : { ...data, type };

    log(logObj);
}

export function info(data: string | UnknownObject) {
    logObject(data, 'info');
}

export function warn(data: string | UnknownObject) {
    logObject(data, 'warn');
}

export function error(data: string | UnknownObject) {
    logObject(data, 'error');
}

export type Logger = {
    info: typeof info;
    warn: typeof warn;
    error: typeof error;
};
