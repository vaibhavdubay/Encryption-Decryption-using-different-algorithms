const express = require('express');
const router = express.Router();

const Data = require('../Models/Data');


// Retrive data
router.get('/getdata', (req, res, next)=>{
    Data.find(function(err, getdata){
        res.json(getdata)
    });
});


// Add data
router.post('/data', (req, res, next)=>{
    let newData = new Data({
        email : req.body.email,
        textin : req.body.textin,
        algoin : req.body.algoin,
        keyin : req.body.keyin
    });
    newData.save((err, Data)=>{
        if(err){
            res.json({msg:'Failed to add data'});
        }
        else{
            res.json({msg:'Data added successfully (Do not worry we know the value of privacy)'});
        }
    });
});

router.delete('/data/all/:id', (req, res, next)=>{
    Data.remove({_v: req.param.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});
router.delete('/data/:id', (req, res, next)=>{
    Data.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});


module.exports = router;