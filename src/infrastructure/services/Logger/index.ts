import * as API from '../API/index';
import { isString } from '../../../../src_old/common/utils/validation/isString';

type LogMethods = 'info' | 'warn' | 'error';

function logObject(data: string | UnknownObject, type: LogMethods): void {
    const logObj = isString(data)
        ? {
              type,
              message: data,
          }
        : { ...data, type };

    API.log(logObj);
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
