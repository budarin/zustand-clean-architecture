import { LoggerKey, logger, loggerMethods } from '../services/logger.ts';

export async function logInfo(request: Request) {
    const data = await request.json();
    const { type, ...rest } = data;

    if (loggerMethods.includes(type)) {
        logger[type as LoggerKey](rest);
    } else {
        logger.error({ msg: 'Не известный тип логгирования', data });
    }

    const response = new Response(null, {
        status: 200,
    });

    return response;
}
