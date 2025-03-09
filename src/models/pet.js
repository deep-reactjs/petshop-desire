const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
      trim: true,
    },
    category: {
      type: String,
      enum: ["mammals", "birds", "fish"],
      default: "mammals",
    },
    breed: {
      type: String,
      trim: true,
    },
    age: {
      type: Number,
    },
    imgUrl: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["available", "sold", "reserved"],
      default: "available",
    },
    color: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    shopId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
    },
  },
  {
    timestamps: true,
  }
);

const petModel = new mongoose.model("Pet", petSchema);
module.exports = petModel;
