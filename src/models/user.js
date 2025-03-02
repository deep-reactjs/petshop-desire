const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    phoneNumber: {
      type: Number,
      minLength: 10,
    },
    role: {
      type: String,
      enum: ["SuperAdmin", "Admin", "User"],
      required: true,
      default: "User",
    },
    isActive: {
      type: Boolean,
      default: true,
      required: true,
    },
    shops: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shop",
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  try {
    const data = this;
    const encryptedPassword = await bcrypt.hash(data.password, 10);
    data.password = encryptedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
