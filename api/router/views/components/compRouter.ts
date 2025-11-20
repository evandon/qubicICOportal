import { Router } from "express";
import logo from "../../../views/components/branding/logo.ts";

const compRouter = Router();
compRouter.get('/logo', (req, res) =>{
  try{
    res.status(200).send(logo(200))
    console.log("Logo component served")
  }catch(err){
    res.status(500).send("Error loading logo component")
  }

})
export default compRouter;