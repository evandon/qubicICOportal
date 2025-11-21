import { Router } from "express";
import compRouter from "./components/compRouter.ts";
import modRouter from "./mods/modRouter.ts";

const viewsRouter = Router();
viewsRouter.use('/components',compRouter);
viewsRouter.use("/mod", modRouter)

export default viewsRouter;