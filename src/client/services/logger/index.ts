import { log } from '../api/api';
import { isString } from '../../../common/validation_utils/isString';

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

function info(data: string | UnknownObject) {
    logObject(data, 'info');
}

function warn(data: string | UnknownObject) {
    logObject(data, 'warn');
}

function error(data: string | UnknownObject) {
    logObject(data, 'error');
}

const logger = {
    info,
    warn,
    error,
};

export default logger;
