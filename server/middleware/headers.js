module.exports = function(req, res, next){

<<<<<<< HEAD
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods' ,'GET, POST, PUT, DELETE');
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    next();
    };
=======
res.header('access-control-allow-origin', '*');
res.header('access-control-allow-methods' ,'GET, POST, PUT, DELETE');
res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

next();
};
>>>>>>> 30605ddb2e9055c2dab0b0ce9f1afd83e7bd64f5
