const  express = require("express");
require("dotenv").config()
const {connection} = require("./config/db")
const {userRouter} = require("./routes/users.routes")
const {flightRouter} = require("./routes/flight.routes")
const {bookingRouter} = require("./routes/booking.routes")
const {auth} = require("./middleware/auth")
const app = express()
app.use(express.json())

app.get("/api",(req,res)=>{
    res.send("Welcome to homp page")
})
app.use("/api", userRouter)
app.use("/api",flightRouter)
app.use("/api",auth,bookingRouter)


app.listen(process.env.PORT, async()=>{

         try {
            await connection 
            
         } catch (error) {
            console.log(error)
         }

       console.log(`Server is running at ${process.env.PORT}`);

} )