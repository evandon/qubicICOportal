import { Router } from "express";
import viewsRouter from "./views/viewRouter.ts";
const router = Router();

router.get("/", (req, res) => {
    res.status(200).send("Hello from the API!");
})

router.use("/views",viewsRouter)

export default router;