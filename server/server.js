const express = require("express");
const cors = require("cors");
const aiRoutes = require("./routes/aiRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

app.listen(PORT, () => {
  console.log(`server started at port number ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1> this is home page</h1>`);
});
