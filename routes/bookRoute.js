import express from "express";
import { addBook, getmyBook,getidBook } from "../controller/booking.js";
const router=express.Router();
router.post("/booking",addBook);
router.get  ("/get",getmyBook);
router.get  ("/getid/:id",getidBook);
export default router