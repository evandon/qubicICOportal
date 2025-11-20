import { Router } from "express";
import elementRouter from "./elements/elementRouter.ts";
import brandingRouter from "./branding/brandingRouter.ts";

const compRouter = Router();
compRouter.use('/branding',brandingRouter);
compRouter.use('/elements',elementRouter);
// Additional component routes can be added here

export default compRouter;