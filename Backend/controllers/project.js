'use strict'
var controller = {
    home: function(rq,rs){
        console.log('controller home: ', rq.body);
        return rs.status(200).send({
            message : 'Soy home'
        });
    },
    test: function(rq,rs){
        console.log('controller test: ', rq.body);
        return rs.status(200).send({
            message : 'Soy test'
        });
    },
};

module.exports = controller;