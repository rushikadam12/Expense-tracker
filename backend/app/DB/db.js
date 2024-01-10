require('dotenv').config();

const mongoose=require('mongoose')

const connectDb=async()=>{
    try{   
            const db=await mongoose.connect(process.env.URI)
            console.log('connected to database')
            return db
            
            
    }catch(error){
        console.log(error)
        console.log("Failed to connect database")
        process.exit(0)
    }

}
process.on('SIGINT', async() => {
    try{
    mongoose.connection.close();
    console.log('MongoDB connection closed due to application termination')
    process.exit(0);
    }catch(error){
        console.log('MongoDB connection closed due to application termination',error);
        process.exit(1);
    }
  });
  
module.exports=connectDb;