const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
    {
        user : { type: mongoose.Types.ObjectId, ref: 'UserModel' },
        flight : { type: mongoose.Types.ObjectId, ref: 'FlightModel' }
      }
)


const BookingModel = mongoose.model("book", bookingSchema)


module.exports = {BookingModel}
