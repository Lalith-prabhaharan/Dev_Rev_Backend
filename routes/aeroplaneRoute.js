import express from "express";
import { addAeroplane,getAeroplane ,deleteAeroplane,searchAeroplane,searchdateAeroplane,searchtimeAeroplane} from "../controller/aeroplane.js";
const router=express.Router();
router.post("/add",addAeroplane);
router.get("/get",getAeroplane);
router.delete("/:id",deleteAeroplane);
router.get("/get/:id",searchAeroplane);
router.get("/getdate/:id",searchdateAeroplane);
router.get("/gettime/:id",searchtimeAeroplane);
export default router