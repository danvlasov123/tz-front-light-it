const { Schema, model } = require("mongoose");

const ProductShema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = model("Product", ProductShema);
