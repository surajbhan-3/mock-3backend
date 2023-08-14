const {Router} = require("express")
const bookingRouter = Router()
const {BookingModel} = require("../models/booking.model");
const jwt = require("jsonwebtoken");

require("dotenv").config()





bookingRouter.post("/booking", async(req,res)=>{
  const {flight}=req.body;
  console.log(flight)

    try {
       const bookFlight= new FlightModel({
         user:req.userdId, flight:flight
       })

       console.log(bookFlight)
        await bookFlight.save();
        return res.status(201).send(bookFlight)
    } catch (error) {
       
        return res.send({"msg":error.message})
    }
})



bookingRouter.get("/dashboard", async(req,res)=>{


       try {
        
        const allFlights = await BookingModel.findById();

        return res.status(200).send(allFlights)
        
        
       } catch (error) {
        return res.send({"msg":error.message})
        
       }
})




bookingRouter.get("/dashboard/:id", async(req,res)=>{
       const id = req.params.id;
      

    try {

          const flightData = await FlightModel.findById({_id:id})
          
           return res.status(200).send(flightData)
          
     
    } catch (error) {

        return res.send({"msg":error.message})
     
    }
})



bookingRouter.patch("/dashboard/:id", async(req,res)=>{
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



bookingRouter.delete("/dashboard/:id", async(req,res)=>{
    const id = req.params.id;
   

 try {
    

       const flightData = await FlightModel.findByIdAndDelete({_id:id})
       
        return res.status(202).send("Data has been deleted")
       
  
 } catch (error) {

     return res.send({"msg":error.message})
  
 }
})

module.exports ={ bookingRouter}