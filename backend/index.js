const express = require("express");
const cors = require("cors")
const app = express();

const userRoute = require("./routes/userRoute");
const horaireRoute = require("./routes/horairRoute")
const rapportRoute = require("./routes/rapportRoute")
const accessRoute = require("./routes/accessRoute")

app.use(cors());
app.use(express.json());



app.use("/user" , userRoute);
app.use("/horaire", horaireRoute);
app.use("/rapport", rapportRoute);
app.use("/access", accessRoute)



app.listen(5000 || process.env.PORT)
