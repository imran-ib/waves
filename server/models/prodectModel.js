const mongoose = require("mongoose");

Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxlength: 100
    },
    description: {
      type: String,
      required: true,
      maxlength: 1000
    },
    price: {
      required: true,
      type: Number,
      maxlength: 255
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
      required: true
    },
    wood: {
      type: Schema.Types.ObjectId,
      ref: "Wood",
      required: true
    },
    shipping: {
      required: true,
      type: Boolean
    },
    available: {
      required: true,
      type: Boolean
    },
    frets: {
      required: true,
      type: Number
    },
    sold: {
      type: Number,
      maxlength: 100,
      default: 0
    },
    publish: {
      required: true,
      type: Boolean
    },
    image: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
