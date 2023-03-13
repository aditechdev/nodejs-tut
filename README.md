https://nodejs.org/dist/latest-v18.x/docs/api/


node ./index.js -> To Run the command

console.log("SSUB"); --> PRINT
console.warn(""); --> PRINT

== -> Match the Value 
eg: "20" == 20 true

=== -> Match the value and type
eg: "20" is not equal to 20

Create Array
const arr = [1,2,3,4];
console.log(arr[0])


Exxport
module.exports={ 

    x: 10,
    y:20
}

Import
const app = require('./app');

Create file
const fs = require('fs');
fs.writeFileSync("hellow.txt", "Hey yes")


// To know the directory name 
console.log(__dirname);
// To know the directory name 

console.log(__filename);

// Create serve
const http = require('http');

http.createServer((req, res) =>{
    res.write("<H1>THID IS AWESOME<H1>");
    res.end();
}).listen(4500);


npm install --> To Get Node Module


install sudo npm install -g --force nodemon

NodeJs is Single threaded and async


// TO CREAT FILE

const input = process.argv;
if (input[2] == "add") {
    
    fs.writeFileSync(input[3], input[4])
    
} else if (input[2] == "remove") {

    fs.unlinkSync(input[3]);
} else { 
    console.log("Invalid Input");
}
---------- CONSOLE ------------------------
node index.js add orange.txt 'heloo orrage'

node index.js remove orange.txt


-----------------------------------
Create file inside directory

const dirPath = path.join(__dirname, 'files');
console.log(dirPath)
 for (let index = 0; index < 5; index++) {
     // const element = array[index];
     fs.writeFileSync(dirPath+"/Hello"+index+".txt", "a simple text file");
    
 }

---------------------------------
read file
fs.readdir(dirPath,(errr, files)=> { console.warn(files) });


---------------------------------

CRUD WITH FILE SYSTEM


READ 
const filePath = `${dirPath}/aplle.txt`

fs.readFile(filePath,'utf8',(err, filePath)=> {
    console.log(filePath);
});

UPDATE 

fs.appendFile(filePath, ' and file name is apple.txt ', (err) => {
    console.log(err);
})

RENAME FILE 
fs.rename(filePath, `${dirPath}/alpha.txt`, (err) => { 
    console.log(err);
})

DELETE

fs.unlinkSync(filePath);


-----------------------------
Buffer

A SMALL memory required by nodeJs to Perform operation

------------------------

TO DELAY A RESPONSE
console.log("oKK");
setTimeout(() => {
console.log("oKK2");
    
}, 2000);
console.log("oKK3");

------------------------------------------
PROMISE

let a = 20;
let b = 0;

let waitingData = new Promise((resolve, reject) => { 
    setTimeout(() => {
        // b = 20;
        resolve(30);
    }, 2000);
})

waitingData.then((data) => { 
    b = data;
console.log(a + b);

})

-----------------------------------------
HOW NODE JS WORK 
CALL BACK 
API 
CALLbACK QUEUE


THis is called EVENT LOOP
CALL StACK -> NODE API
                !
            CALLBACK QUUE


---------------------------------

Create Simple API 

const express = require('express');

const app = express();

app.get(
    '', (req, res) => { 
        console.log("SEND FROM BROWSER"+ req.query.name);
        res.send("HELLO THiS IS HOMEPAGE " +req.query.name);
    }
);

app.get('/about', (req, res) => { 
    res.send("THIS IS ABOUT PAGE ");
})
app.get('/help', (req, res) => { 
    res.send("THIS IS HELP PAGE ");
})


app.listen(4500, () => {
    console.log('App listening on port 3000!');
});



---------------------------
GET HTML INSIDE 

const express = require('express');
const path = require('path');


const app = express();
const publicPath = path.join(__dirname, 'public')
console.log(publicPath);

app.use(express.static(publicPath))

app.listen(4500)
 ------------------------------------

 SET ERROR PAGE 
 const express = require('express');
const path = require('path');


const app = express();
const publicPath = path.join(__dirname, 'public')
console.log(publicPath);

// app.use(express.static(publicPath))
app.get('', (_, res) => { 
    res.sendFile(`${publicPath}/index.html`)
});
app.get('/about', (_, res) => { 
    res.sendFile(`${publicPath}/about.html`)
});
app.get('*', (_, res) => { 
    res.sendFile(`${publicPath}/nopaage.html`)
});

app.listen(4500)


------------------------------
Use template engine 

Create file like this
views/profile.ejs

in index.js
app.set('view engine', 'ejs');
app.get('/profile', (_, res) => { 
    res.render('profile');
})

-------------------------
Application level Middle Ware

const reqFilter = (req, res, next) => { 
    if (!req.query.age) {
        res.send("PLEASE PROVEDE AFE");
    }else  if (req.query.age < 18) {
        res.send("Below Age");
    }  else { 
    next();

    }
    // console.log('reqfilter');
}

app.use(reqFilter);

--------------------------------

Route Level Middleware
const { profile } = require('console');
const express = require('express');
const path = require('path');
const reqfilter = require('./middleware')
const route = express.Router();

const app = express();

route.use(reqfilter);



// app.use(reqFilter);

app.get('/',(req, res) => { 

    res.send("WELCOME TO HOMEPAGE");
});
route.get('/help',(req, res) => { 

    res.send("WELCOME TO HOMEPAGE");
});
route.get('/profile',(req, res) => { 

    res.send("WELCOME TO HOMEPAGE");
});
route.get('/about',(req, res) => { 

    res.send("WELCOME TO HOMEPAGE");
});
app.get('/contact',(req, res) => { 

    res.send("WELCOME TO HOMEPAGE");
});


app.use('/',route);

app.listen(4500)

install mongodb
https://www.youtube.com/watch?v=s1WQ0eEpqqg
https://www.youtube.com/watch?v=NLw7Tln6IeM
brew services restart mongodb/brew/mongodb-community

mongosh
show dbs -> to view db
exit

use youtube
db.createCollection('playlist')
show collections

db.playlist.drop() --> Remove collection 
db.dropDatabase() -- > Remove database

insert data in collection
db.product.insertOne({name: "M31", brand: "Samsung", price: "25000", category: "mobile"})

to display data 
db.product.find()


to update one 
db.product.updateOne({name:"N91"},{$set:{brand:'OPPO'}})

db.product.deleteOne({brand:"OPPO"})



--------------CONNECT MONGO DP TO NODE----------------

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';

const database = "e-comm";

const client =new  MongoClient(url);

async function getData() {
    let results = await client.connect();
    let db = results.db(database);
    let collection = db.collection("product");
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();



