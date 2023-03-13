// READ EVAL PRINT LOOP
const express = require('express');
const EventEmitter = require('events');


const event = new EventEmitter();
let count = 0;

const app = express();

event.on("countApi", () => { 
    count++;
    console.log("EVENT CALLED", count);
})
app.get('/', (req, res) => { 
    res.send("API CALLED");
    event.emit("countApi");
})
app.get('/search', (req, res) => { 
    res.send("Search API CALLED");
})

app.get('/update', (req, res) => { 
    res.send("Update API CALLED");
})

// app.listen(4700, () => {
//     console.log('App listening on port 4700');
// });
app.listen(4700);