const express = require("express");
const app = express();
require("dotenv").config();
const dbCalling = require("./config/Db");
const cors = require('cors');

// Apply CORS middleware before routes
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    optionsSuccessStatus: 200
}));

// Call the database setup function
dbCalling();
// Authentication Routes
const router = require("./routes/AuthenticationRoutes");
app.use("/api/auth", router);

// Simple route to verify server is working
app.get("/", (req, res) => {
    res.send(" - E-shop backend -");
});

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port`, port);
});
