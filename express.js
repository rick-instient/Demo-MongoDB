const express = require("express");
const app = express();


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rickkarinstient:VslUlwPfAnJhUqSb@cluster0.si3pzbr.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function postData() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        let response = await client.db("rick").collection("users").insertOne({ name: "Rick", role: "owner" });
        console.log(response);
        return response;
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

async function getData() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        let response = await client.db("rick").collection("users").find().toArray();
        console.log(response);
        return response;
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}


app.get("/", async(req, res) => {
    let dbresponse = await postData();
    res.status(200).send(dbresponse);
})


app.get("/get", async(req, res) => {
    let dbresponse = await getData();
    res.status(200).send(dbresponse);
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("listening at the port 3000")
})

//git temp
