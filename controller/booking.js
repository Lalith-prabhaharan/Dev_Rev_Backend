import Book from "../models/book.js"
export const addBook=async(req,res,next)=>{
    try{
        const newBook=new Book(req.body)
        await newBook.save();
        res.status(200).send(newBook); 
    }
    catch(err){
        next(err);
    }
}
export const getmyBook =async(req,res,next)=>{
    const response=await Book.find({})
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

export const getidBook =async(req,res,next)=>{
    try{
        const id=req.params.id
        const response=await Book.find({flight_id:id})
        res.status(200).json({"msg":"sucess","data":response})    
    }
    catch(err){
        console.log(err)
        res.status(200).send("error",err)
    }
}
