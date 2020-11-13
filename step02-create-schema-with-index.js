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

        // creating an instance of model 'student'
        const student1 = new Student({name: 'Abbas', age:'26'})

        // saving the student data
        const result = await student1.save();
        console.log(result);


    }catch(error){
        console.log(error)
    }
})()