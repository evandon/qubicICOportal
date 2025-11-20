import { Router } from "express";

const elementRouter = Router();

//little building blocks

elementRouter.get('/header', (req, res) =>{});
elementRouter.get('/container', (req, res) =>{});
elementRouter.get('/main', (req, res) =>{});
elementRouter.get('/main', (req, res) =>{});
elementRouter.get('/section', (req, res) =>{});
elementRouter.get('/footer', (req, res) =>{});
elementRouter.get('/ul')
elementRouter.get('/li')
elementRouter.get('/blockquote')
elementRouter.get('/span')
elementRouter.get('/div')
elementRouter.get('/p')
elementRouter.get('/a') 
elementRouter.get('/img')

export default elementRouter;