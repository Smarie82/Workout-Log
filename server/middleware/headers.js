module.exports = function(req, res, next){

    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods' ,'GET, POST, PUT, DELETE');
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('access-control-request-methods', 'GET');
    res.header('access-control-request-headers', 'Content-Type, Authorization');
    res.header('access-control-request-headers', 'no-referrer, strict-origin-when-cross-origin');
    
    next();
    };
