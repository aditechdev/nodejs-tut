const mongoose = require('mongoose');
// const dbConnect = require('./mongodb');


const main = async () => { 
    
    await mongoose.connect('mongodb://localhost:27017/e-comm')
    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number,
        brand: String,
        category: String,
    });

    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = new ProductsModel({ name: "M8" , price: 1000, brand:"MI", category: "Mobile"});
    let results = await data.save();
    console.log(results);
    // console.log("Main funtion called");
    // let data = await dbConnect();
    // data = await data.find().toArray();
    // console.log(data);
}

main();
