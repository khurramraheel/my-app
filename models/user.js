import mongoose from "mongoose";


export default mongoose.models.user ||  mongoose.model('user', {
    name: String,
    email: String,
    password: String,
    role: {type:String, default:'customer'},
})

// create a  new user

// let u1 = new User({
//     name: 'ali',
//     email: 'ali@gmail.com',
//     password: 'adasdasdas'
// });

// u1.save();
