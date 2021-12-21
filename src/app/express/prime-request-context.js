const { uuid: uuidv4 } = require('uuid');

function primeRequestContext(req, res, next) {
    req.context = {
        traceId: uuid()
    }
    next();
}

module.exports = primeRequestContext;