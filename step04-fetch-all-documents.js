require('dotenv').config();
const mongoose = require('mongoose');

(async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true});
        console.log('mongoose is ready for business');

        //define a schema
        const studentSchema = mongoose.Schema({
            name:{type:String, index:true},
            age: Number,
        });

        // creating a model
        const Student = mongoose.model('Students',studentSchema);

        // fetching the students data from collection
        const result = await Student.find();
        result.forEach(item=>{
            console.log("Name: ",item.name,", Age: ",item.age );
        })

    }catch(error){
        console.log(error)
    }
})()