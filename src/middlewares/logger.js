export default (req, res, next) => {
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);
    next();
};