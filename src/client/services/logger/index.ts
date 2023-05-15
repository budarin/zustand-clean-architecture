import { log } from '../api/api';
import { isString } from '../../../common/validation_utils/isString';

type LogMethods = 'info' | 'warning' | 'error';

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

function warning(data: string | UnknownObject) {
    logObject(data, 'warning');
}

function error(data: string | UnknownObject) {
    logObject(data, 'error');
}

const logger = {
    info,
    warning,
    error,
};

export default logger;
