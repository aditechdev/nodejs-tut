const dbConnect = require("./mongodb");


deleteData = async ()=>{
    let data = await dbConnect();
    let results =await data.deleteOne({
        name:"M31"
    })

    console.log(results);

}
 
deleteData();