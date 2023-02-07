import mongoose from 'mongoose';

const Connection = async (username , password)=>{
    mongoose.set('strictQuery', true);
    const URL =  `mongodb+srv://${username}:${password}@cluster0.b9co2k0.mongodb.net/?retryWrites=true&w=majority`;
    try
    {
        mongoose.connect(URL , {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        
         
        }).then(() =>{
            console.log('database connected');
        })
   

    } catch(error){
        console.log("error: ", error.message);

    }
    
}


export default Connection;