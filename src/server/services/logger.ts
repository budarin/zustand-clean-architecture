const { log } = console;

export const loggerMethods = ['info', 'warn', 'error'];

export const logger = {
    info: (data: object): void => {
        log('%c[INFO]', 'color: blue; font-weight: 600;', data);
    },
    warn: (data: object): void => {
        log('%c[WARN]', 'color: #ff9905; font-weight: 600;', data);
    },
    error: (data: object): void => {
        log('%c[ERROR]', 'color: #E56353;; font-weight: 600;', data);
    },
};

export type LoggerKey = keyof typeof logger;
