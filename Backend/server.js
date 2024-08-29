const express = require("express");
const app = express();
require("dotenv").config();
const dbCalling = require("./config/Db");
const cors = require('cors');
//Routes
const router = require("./routes/AuthenticationRoutes");
app.use(express.json());
// server code
const port = process.env.PORT || 8000;

//AUTH ROUTES
app.use("/api/auth", router);

//cors apply there 
app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true,
}))

//caled the db
dbCalling();
app.get("/", (req, res) => {
    res.send(" - E-shop backend -");
});
app.listen(port, () => {
    console.log(`Server is running`, port);
});