var mongoose = require("mongoose");

var StaffSchema = mongoose.Schema({

    staffNo:{
        type: Number,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    department:{
        type: String,
        require: true
    },
    salary:{
        type: Number,
        require: true
    },
});

var Staff = module.exports = mongoose.model('Staff',StaffSchema)