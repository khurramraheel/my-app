import mongoose from "mongoose";


export default mongoose.models.product ||  mongoose.model('product', {
    title: String,
    images:[],
    price: Number,
    description: String,
    createdBy:String,
    active:{
        type: Boolean,
        default:false
    },
    rating: {
        type: Number,
        // required:true
    }
})