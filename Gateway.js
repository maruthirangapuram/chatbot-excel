const logger = require('@broadridge/logger');

const exec = () => {
    logger.info(`This is a gateway process. This would be an entry point `);

    for(let i=0;i<100;i++) {
        logger.info(`Value is ${i}`);
    }
}

exec();