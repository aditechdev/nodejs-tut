const dbConnect = require('./mongodb');


const insert = async() => { 

    const db = await dbConnect(); 

    const results =await db.insertOne({
        name: "ABC MOBILE", brand: "VIVO", price: "3230", category:"mobile"
    });
    if (results.acknowledged) {
    console.log("Data inserted");
        
    }
}

insert();