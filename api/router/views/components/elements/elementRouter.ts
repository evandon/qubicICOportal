import { Router } from "express";

const elementRouter = Router();
//little building blocks

elementRouter.get('/header',(req, res) =>{res.send('element')});
elementRouter.get('/main',(req, res) =>{res.send('element')});
elementRouter.get('/section',(req, res) =>{res.send('element')});
elementRouter.get('/footer',(req, res) =>{res.send('element')});
elementRouter.get('/ul',(req, res) =>{res.send('element')});
elementRouter.get('/li',(req, res) =>{res.send('element')});
elementRouter.get('/blockquote',(req, res) =>{res.send('element')});
elementRouter.get('/span',(req, res) =>{res.send('element')});
elementRouter.get('/button',(req, res) =>{res.send('element')});
elementRouter.get('/div',(req, res) =>{res.send('element')});
elementRouter.get('/link',(req, res) =>{res.send('element')});
elementRouter.get('/input',(req, res) =>{res.send('element')});
elementRouter.get('/form',(req, res) =>{res.send('element')});
elementRouter.get('/label',(req, res) =>{res.send('element')});
elementRouter.get('/textarea',(req, res) =>{res.send('element')});
elementRouter.get('/p',(req, res) =>{res.send('element')});
elementRouter.get('/a',(req, res) =>{res.send('element')});
elementRouter.get('/img',(req, res) =>{res.send('element')});

export default elementRouter;