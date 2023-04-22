const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/codeial_development");
const db=mongoose.connection;
db.on("error",console.error.bind(console,"error connecting to database"));
db.once("open",()=>{
    console.log("connected to Database :: Mongodb");

})
module.exports=db;