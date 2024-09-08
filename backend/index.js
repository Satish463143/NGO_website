const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const projectRoutes = require('./routes/ProjectRoutes');
app.use('/api', projectRoutes);

app.use(
    cors({
        origin: '*',
        methods: 'GET,PUT,PATCH,POST,DELETE',
    })
);

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database connected!");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });

const port = process.env.PORT;

app.listen(port, () => console.log("Listening to server on port " + port));