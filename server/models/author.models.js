const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Author Name is required"],
      minLength: [5, "Author Name must be atleast 5 characters"],
    },
    authorimg: {
      type: String,
      required: [true, "Author image url is required"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Author", AuthorSchema);
