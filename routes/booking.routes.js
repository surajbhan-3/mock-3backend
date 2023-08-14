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
        const bookingData = await BookingModel.find()
          .populate('user', '-password')
          .populate('flight');
        res.send(bookingData);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
})




bookingRouter.patch("/dashboard/:id", async(req,res)=>{
       const id = req.params.id;
      

       try {

        const bookingData = await BookingModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(bookingData);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
})






bookingRouter.delete("/dashboard/:id", async(req,res)=>{
    const id = req.params.id;
   
    try {
         await BookingModel.findByIdAndDelete(id);


      res.status(204).send({ message:"booking deleted" });
    } catch (error) {


      res.status(500).send({ error: error.message });
    }


})

module.exports ={ bookingRouter}