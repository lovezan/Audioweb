



const express =require("express")
const app=express();
const hbs=require("hbs")
const path=require("path")
const port =890;
//use absolute path
// console.log(__dirname);
// console.log(path.join(__dirname,"../static")); //check the path first
//builtin midddleware
const staticPath = path.join(__dirname,"../static/css");
const staticPathjs = path.join(__dirname,"../static/js");
const staticPathsongs = path.join(__dirname,"../static/songs");
const staticPathimages = path.join(__dirname,"../static/images");
app.use(express.static(staticPath));
app.use(express.static(staticPathjs));
app.use(express.static(staticPathsongs));
app.use(express.static(staticPathimages));

app.set("view engine","hbs");
// console.log(path.join(__dirname,"../views/templates")); //check the path first
// template route engine
// app.set("views",path.join(__dirname,"../views"));
app.set("views",path.join(__dirname,"../views/templates"));
// app.set("src",path.join(__dirname,"../src"));
// app.set("views",path.join(__dirname,"../views/partials"));
hbs.registerPartials(path.join(__dirname,"../views/partials"))

app.get('',(req,res)=>{
    res.render("index",{
        joinname:"hassan talib"
    });

})

app.get('/',(req,res)=>{
    res.send("hello from the express its new express tutorial just nothing started by talib hassan ")
})


app.get('/about',(req,res)=>{
    res.render("about")

}) 
app.get('/contact',(req,res)=>{
    res.render("contact")

}) 
app.get('/signin',(req,res)=>{
    res.render("signin")

}) 
app.get("/about/*",(req,res)=>{
    res.render("404",{
        errorcomment:"Opps this about page couldn't found!!"
    });
    
});
app.get("*",(req,res)=>{
    res.render("404",{
        errorcomment:"Opps page couldn't found!!"
    });
    
});
// app.get('/nothing',(req,res)=>{
//     res.send("this page is not found !")
// })

app.listen(890,()=>{ 
    console.log(`hello worls on port ${port}`)
})

//--------------------------
