const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.MongoUri)


module.exports = {connection}



