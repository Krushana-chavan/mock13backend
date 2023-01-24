require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connet = require("./Config/Mongoose.config");
const userRoute = require("./Routes/user.rote");
// const bugRoute = require("./Routes/bug.route");
const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Server Running fine");
});
app.use("/user", userRoute);
// app.use("/bugs", bugRoute);

app.listen(port, () => {
  connet()
    .then(() => console.log("Connected to Database"))
    .catch((e) => console.log(e.message));
  console.log(`Server is running at https://localhost:${port}`);
});
