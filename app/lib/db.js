import mongoose from "mongoose";

// let connetion = global.connection;

export async function connectDB(){

    try{

        if(!global.connection){
            global.connection = await mongoose.connect('mongodb://localhost:27017/catDB');
            // global.connection = await mongoose.connect('mongodb+srv://replyshootofficial_db_user:Vy9BWKJhFseciHO4@cluster0.rm8qkmu.mongodb.net/catDB');


            

            console.log("New connection created")
        }else{
            console.log("Connection resused")
        }

        return global.connection;
        
    }catch(e){
        console.log(e.message);
    }


}
