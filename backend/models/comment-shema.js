const { Schema, model } = require("mongoose");

const CommentShema = new Schema({
  rate: { type: String, required: true },
  id_entry: { type: String, required: true },
  username: { type: String, required: true },
  text: { type: String, required: true },
  created_at: { type: String, required: true },
});

module.exports = model("Comment", CommentShema);
