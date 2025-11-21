import { Router } from "express";
import MainHeader from "../../../views/mods/mainHeader.ts"

const modRouter = Router();
modRouter.get("/main-header", (req, res) => {
  try {
    res.status(200).send(MainHeader(true));
    console.log("Main Header component served")
  } catch (err) {
    res.status(500).send({msg:"Error loading Main Header component",err});
  }
});

export default modRouter;