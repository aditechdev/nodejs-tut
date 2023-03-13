const dbConnect = require('./mongodb');


const update = async() => { 

    const db = await dbConnect(); 

    const results = await db.updateMany({name: "ABC MOBILE"},{$set: {name: "VIMEOO ALPHA"}});
    
    console.warn(results);
}

update();