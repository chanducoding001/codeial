const express=require("express");
const port=8000;
const app=express();
app.use('/',require("./routes"));
app.listen(port,(err)=>{
    if(err){
        console.log("error",err);
        return;
    }
    console.log("server started at port ",port);
})