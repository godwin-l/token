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


exports.postToken = (req,res)=>{

    var token = new Token({
        apikey: "mt7oh17gfd3qp8dnbiy3n5kb6vom8wot",
        clientid: "ZjF-sSHRwLyrZW5PWP_hZ2rzvYmqOYD-ShrBp1BgnwvPJH4EjCPWDbHQGH_V8peboPKjWxDgBQCynmAr-kU_nQ==",
        clientsecret: "ebEc8GH231ciHiMlsQ4EerwgznuIo7aox-NORfkSJjLtciqVkKDtu4RJOs9LjnPHGjK0Xk5kIQ4NuZlMcT0CE8wWPzcxn_YF",
    });
    token.save((err)=>{
        if(err){
            res.send({
                status: 'fail',
                data: {}
              });
        }
        else{
            res.send(
                {
                    status: 'success',
                    code: 200,
                    data: {}
                  }
            );
        }
    });
}

