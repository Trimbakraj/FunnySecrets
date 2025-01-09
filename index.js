
import express from "express"; 
import axios from "axios"; 


const app=express(); 
const port=3000; 

app.use(express.static('public')); 


app.get("/",async (req,res)=>{ 

    try{
        const response=await axios.get("https://secrets-api.appbrewery.com/random");   
        const result=response.data;
        let Secret=result.secret;  
        let User=result.username;
        res.render("index.ejs",{secret:Secret,user:User});  
    } 
    catch(error){
      console.log(error.response.data);
      res.status(500);
    }
    
});


app.listen(port,(req,res)=>{
    console.log("the app is listening on port "+port);
});



