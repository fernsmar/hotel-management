var express = require("express");
var router = express.Router();

var Staff = require('../models/Staff')


router.get('/staff',function(req,res){
    Staff.find().then((staffs) => {
        res.json(staffs)
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

router.get('/staff/:staffNo',function(req,res){
    Staff.find({staffNo:req.params.staffNo}).then((staffs) => {
        if(staffs){
        res.json(staffs)
        }else{
            res.sendStatus(404);
        }
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})



router.post('/staff',function(req,res){
    var newStaff = {
        staffNo: req.body.staffNo,
        name: req.body.name,
        department: req.body.department,
        salary: req.body.salary
    }
    var staff = new Staff(newStaff)

    staff.save().then(() => {
        console.log("New Staff Created")
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
    res.send("Success")
})

router.delete('/staff/:staffNo',function(req,res){
    Staff.findOneAndRemove({staffNo:req.params.staffNo}).then(() =>{
        res.send("Deleted")
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

router.put('/staff/:staffNo',function(req,res){
    var newStaff = {
        staffNo: req.body.staffNo,
        name: req.body.name,
        department: req.body.department,
        salary: req.body.salary
    }
    Staff.findOneAndUpdate({staffNo:req.params.staffNo}, { $set: newStaff }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Staff Update :' + JSON.stringify(err, undefined, 2)); }
    });

})

module.exports = router;