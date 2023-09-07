const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://root:root@cluster0.4brnzrd.mongodb.net/networkApiDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);


mongoose.set("debug", true);

module.exports = mongoose.connection;