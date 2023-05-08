import Aeroplane from "../models/addflight.js"
export const addAeroplane=async(req,res,next)=>{
    try{

        const newAeroplane=new Aeroplane(req.body)
        await newAeroplane.save();
        res.status(200).send(newAeroplane); 
    }
    catch(err){
        next(err);
    }
}

export const getAeroplane=async(req,res,next)=>{
    const response=await Aeroplane.find({})
    if(response.length>=1){
        res.status(200).json({"msg":"sucess","data":response})
    }
    else{
        res.status(200).json({"msg":"failed"})
    }
}
export const deleteAeroplane=async(req,res,next)=>{
    try{
        await Aeroplane.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted the Flight");
    }
    catch(err)
    {
        next(err);
    }
}


export const searchAeroplane= async(req,res)=>{
    try{
        const getName = req.params.id
        console.log(getName);
       const response= await Aeroplane.find({$or:[{ name :  { "$regex": getName,$options:"i"}},{from:{"$regex":getName,$options:"i"}}]})
       console.log(response)
       res.status(200).json({"msg":"sucess","data":response})    
    }catch(err){
        console.log(err)
        res.status(200).send("error",err)
    }
}
export const searchdateAeroplane= async(req,res)=>{
    try{
        const getName = req.params.id
        console.log(getName);
       const response= await Aeroplane.find({startDate: { $lte: getName },endDate: { $gte: getName}
      }) //$gte: ISODate
       console.log(response)
       
       res.status(200).json({"msg":"sucess","data":response})    
    }catch(err){
        console.log(err)
        res.status(200).send("error",err)
    }
}
export const searchtimeAeroplane= async(req,res)=>{
    try{
        const getName = req.params.id
        console.log(getName);
       const response= await Aeroplane.find({arrival:{$lte: getName},departure:{$gte:getName} })
       console.log(response)
       
       res.status(200).json({"msg":"sucess","data":response})    
    }catch(err){
        console.log(err)
        res.status(200).send("error",err)
    }
}