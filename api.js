const express = require('express');
const dbConnect = require('./mongodb');
const app = express();
const mongodb = require('mongodb');

app.use(express.json());

app.get('/', async(req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
})
app.post('/', async (req, res) => {
    console.log(req.body);
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result);
})
app.put('/', async (req, res) => {
    console.log(req.body);
    let data = await dbConnect();
    let result = await data.updateOne({ name: req.body.name }, {
        $set: req.body
    });
    res.send({status: "Update"});
})
app.delete('/:id', async (req, res) => {
    console.log(req.params.id);
    let data = await dbConnect();
    let result = await data.deleteOne({ _id: new mongodb.ObjectId( req.params.id) });
    res.send(result);
})

app.listen(4700);