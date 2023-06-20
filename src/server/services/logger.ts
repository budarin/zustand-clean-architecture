const { log } = console;

export const logger = {
    info: (data: object) => {
        log('%c[INFO]', 'color: blue; font-weight: 600;', data);
    },
    warn: (data: object) => {
        log('%c[WARN]', 'color: #ff9905; font-weight: 600;', data);
    },
    error: (data: object) => {
        log('%c[ERROR]', 'color: #E56353;; font-weight: 600;', data);
    },
};

export const loggerMethods = ['info', 'warn', 'error'];

export type LoggerKey = keyof typeof logger;
