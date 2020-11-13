require('dotenv').config();
const mongoose = require('mongoose');

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('mongoose is open for working');

        // defining a schema
        const studentSchema = new mongoose.Schema({
            name: String,
            age: String,
        })

        // Creating a model
        const Student = mongoose.model('Students', studentSchema);

        // Creating an instance of model 'Student'
        const student1 = new Student({name:'Murtaza', age:'22'});

        // Saving the student details
        const result = await student1.save(); 
        console.log('Result: ',result);

    } catch (error) {
        console.log('mongoose connection error', error);
    }
})();