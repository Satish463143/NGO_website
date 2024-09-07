const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(
    cors({
        origin: '*',
        methods: 'GET,PUT,PATCH,POST,DELETE',
    })
);

const client = new MongoClient(process.env.MONGO_URL, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Database connected!");
    } finally {
        await client.close();
    }
}
run().catch(console.dir);

const port = process.env.PORT;

app.listen(port, () => console.log("Listening to server on port " + port));