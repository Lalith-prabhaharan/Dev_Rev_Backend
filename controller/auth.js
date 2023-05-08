import passengers from "../models/passengers.js";
export const signup=async(req,res,next)=>{
    try{
        const newPassenger=new passengers(req.body)
        await newPassenger.save();
        res.status(200).send(newPassenger);
    }
    catch(err){
        next(err);
    }
}
export const login =async(req,res,next)=>{
    const response=await passengers.find({email:req.body.email,password:req.body.password})
    console.log(response);
  
    if(response.length>=1)
    {
        res.status(200).json({"msg":"sucess","data":response})
    }
    else
    {
        res.status(200).json({"msg":"failed"})
    }
}