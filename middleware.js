module.exports =  reqFilter = (req, res, next) => { 
    if (!req.query.age) {
        res.send("PLEASE PROVEDE AFE");
    }else  if (req.query.age < 18) {
        res.send("Below Age");
    }  else { 
    next();

    }
    // console.log('reqfilter');
}