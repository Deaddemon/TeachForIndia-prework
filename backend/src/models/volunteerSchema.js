import mongoose from "mongoose";

 const volunteerSchema = new mongoose.Schema({
    title:{
        type: String,
        required : true,
        trim : true,
        min: 5,
        max: 100
    } ,
    slug :{
        type : String
    },
    description:{
        type: String,
        required: true,
        min: 50,
        max: 500
    },
    location: {
        type: {
          type: String,
          enum: ['Point']
        },
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    },
    commitment:{
        type: Number,
        min:0,
        max:24
    },
    email :{
        type : String,
        required : true
    } 
} ,
{
    timestamps: true
}
);

const Volunteer = mongoose.model('Volunteer' , volunteerSchema);
export default Volunteer;