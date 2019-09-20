var express = require('express');
var Token = require('../models/token');

exports.viewToken = (req,res)=>{
    Token.find().exec((err,data)=>{
        if(err){
            console.log(err)
            res.send({
                status: 'fail',
                data: {}
              });
        }
        else{
            res.send({
                    status: 'success',
                    code:200,
                    data: data
                  });
                }
    });
}

