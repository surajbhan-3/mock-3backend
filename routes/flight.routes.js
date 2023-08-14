const {Router} = require("express")
const flightRouter = Router()
const {FlightModel} = require("../models/flight.model");
const jwt = require("jsonwebtoken");

require("dotenv").config()






flightRouter.post("/flights", async(req,res)=>{
  

    try {
       const addData = new FlightModel(req.body)
        await addData.save();
        return res.status(201).send(addData)
    } catch (error) {
       
        return res.send({"msg":error.message})
    }
})



flightRouter.get("/flights", async(req,res)=>{


       try {
        
        const allFlights = await FlightModel.find();

        return res.status(200).send(allFlights)
        
        
       } catch (error) {
        return res.send({"msg":error.message})
        
       }
})




flightRouter.get("/flights/:id", async(req,res)=>{
       const id = req.params.id;
      

    try {

          const flightData = await FlightModel.findById({_id:id})
          
           return res.status(200).send(flightData)
          
     
    } catch (error) {

        return res.send({"msg":error.message})
     
    }
})



flightRouter.patch("/flights/:id", async(req,res)=>{
    const id = req.params.id;
    const payload = req.body;
   console.log(payload)

 try {


       const flightData = await FlightModel.findByIdAndUpdate({_id:id},payload)
       
       if(!flightData){
         return res.status(404).send("Error")
       }
       return res.status(204).send(flightData)
       
  
 } catch (error) {

     return res.send({"msg":error.message})
  
 }
})



flightRouter.delete("/flights/:id", async(req,res)=>{
    const id = req.params.id;
   

 try {
    

       const flightData = await FlightModel.findByIdAndDelete({_id:id})
       
        return res.status(202).send("Data has been deleted")
       
  
 } catch (error) {

     return res.send({"msg":error.message})
  
 }
})

module.exports ={ flightRouter}