const mongoose = require("mongoose");

const woodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 100
  }
});

const Wood = mongoose.model("Wood", woodSchema);

module.exports = { Wood };
