import Logger from '../utils/Logger';

const loggerUtil = new Logger;

export default (req, res, next) => {
    loggerUtil.changeStrategy('toFile');
    loggerUtil.log(`Request from: ${req.originalUrl}, method: ${req.method}`);
    next();
};