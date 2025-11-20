// import {compRouter} from './components/index.ts';  
import { Router } from "express";
import compRouter from "./components/compRouter.ts";

const viewsRouter = Router();
viewsRouter.use('/components',compRouter);



export default viewsRouter;