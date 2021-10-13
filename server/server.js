const express = require("express");
const cors = require("cors");
const app = express();

require("./config/mongoose.config");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const AuthorRoutes = require("./routes/author.routes");
AuthorRoutes(app);

const port = 8000;
app.listen(port, () => console.log("In the port", port));
