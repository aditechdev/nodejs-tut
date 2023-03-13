const express = require('express');
const multer = require('multer');
require('./config');
const Product = require('./product');

const app = express();
app.use(express.json());

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) { 
            cb(null, "uploads")
        }, 
        filename: function (req, file, cb) { 

            cb(null, file.fieldname+"-"+Date.now()+".jpg")
        }
    })
}).single("user_file");

app.post('/create', async(req, res) => {
    let data = new Product(req.body);
    let result =await data.save();
    console.log(result);
    res.send(result);

})
app.get('/list', async(req, res) => {
    let data =await Product.find();
    // let result =await data.save();
    // console.log(result);
    res.send(data);

})
app.delete('/delete/:_id', async (req, res) => {
    // console.log(req.params);
    let data = await Product.deleteOne(req.params);
    // let result =await data.save();
    // console.log(result);
    res.send(data);

})
app.put('/update/:_id', async(req, res) => {
    let data = await Product.updateOne(req.params, {
        $set: req.body });
    // let result =await data.save();
    // console.log(result);
    res.send(data);

})

app.get('/search/:key', async (req, res) => {
    console.log(req.params.key);
    let data = await Product.find(
        {
            "$or": [
                { "name": {$regex:req.params.key} },
                { "brand": {$regex:req.params.key} }
            ]
        }
    );
    res.send(data);
})

// app.post('upload', await(req, res)=> {
    
// })


 
app.post('/upload', upload, async (req, res) => {
    res.send("DONE");
    

});


app.listen(4700)