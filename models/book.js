import mongoose from "mongoose";
import Aeroplane from "./addflight.js"
const bookSchema = new mongoose.Schema({
  flight_id:{
    type: String,
    required: true
  },
  user:{
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  flight_name: {
    type: String,
    required: true
  },
  flight_from:{
    type: String,
    required: true
  },
  flight_to:{
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true
  },
  nop: {
    type: String,
    required: true
  },
  date:{
    type:String,
    required:false
  },
  phone: {
    type: String,
    required: true
  }
});

bookSchema.pre("save",async function(next){
  console.log(this.nop)
    let response=await Aeroplane.find({flight_id:this.flight_id});
    console.log(response);
    response=response[0];
    response.remaining= response.remaining-this.nop;
    if(response.remaining<1){
      console.log("Slot is Full")
    }
    else{
      const update=await Aeroplane.findOneAndUpdate({flight_id:this.flight_id},response,{
        new:true,
      })
    }
})

export default mongoose.model('Book', bookSchema);