const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();

const subscriptionSchema = new mongoose.Schema({
  subscriberName: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true, min: 1 },
  subscriptionAmount: { type: Number, required: true },
  subscriptionType: {
    type: String,
    enum: ["monthly", "yearly"],
    required: true,
  },
  membershipPackage: { type: String, required: true },
  startDate: { type: Date, required: true, default: Date.now },
  renewalDate: { type: Date, required: true },
});

const AuthSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    userdp: {
      type: String,
      default:
        "https://i.pinimg.com/originals/a6/f3/c5/a6f3c55ace829310723adcb7a468869b.png",
    },
    userbio: {
      type: String,
      default: "Tell us about yourself",
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    package: {
      type: String,
      enum: ["basic", "advanced", "pro"],
      default: "basic",
    },
    cart: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Product",
      },
    ],
    subscriptionhistory: [subscriptionSchema],
    wishlist: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Product",
      },
    ],
    productpurchasehistory: [
      {
        type: mongoose.Types.ObjectId,
        ref: "ProductPurchase",
      },
    ],
  },
  { timestamps: true }
);

AuthSchema.pre("save", async function (next) {
  const gensalt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, gensalt);
  next();
});

AuthSchema.methods.checkPassword = async function (password) {
  const checkPassword = await bcrypt.compare(password, this.password);
  return checkPassword;
};

AuthSchema.methods.newHashPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

module.exports = mongoose.model("Client", AuthSchema);