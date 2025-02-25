import winston from "winston";

const logger = winston.createLogger({
    level: "info",
    transports: [new winston.transports.Console()]
});

export function logInfo(message) {
    logger.info(message);
}

export function logError(message) {
    logger.error(message);
}
