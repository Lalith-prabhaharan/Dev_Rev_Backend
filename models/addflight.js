import mongoose from "mongoose";
const aeroplaneSchema = new mongoose.Schema({
  flight_id:{
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  arrival: {
    type: String,
    required: true
  },
  departure: {
      type: String,
      required: true
    },
    startDate:{
      type: String,
      required: true
    },
    endDate:{
      type: String,
      required: true
    },
    price:{
      type: String,
      required: true
    },
  capacity: {
    type: Number,
    required: false,
    default: 60
  },
  remaining: {
    type: Number,
    required: false,
    default: 60
  }
});

export default mongoose.model('Aeroplane', aeroplaneSchema);