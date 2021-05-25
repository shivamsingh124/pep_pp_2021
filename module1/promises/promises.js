const fs = require ("fs");
let pendingpromise= fs.promises.readFile("./f1.txt","utf8");    // at this point it gives a object to pendingpromise where the data or error will be updated
console.log(pendingpromise)
//promise have two function then and catch
//then is for sucess
//catch is for failure attaches a callback 
pendingpromise.then( function (data)
{
    console.log("inside scb")
    console.log(data + "")
    //if path given dosent exist it automatically goes to catch function
});
pendingpromise.catch( function (err)
{
    console.log("inside fcb")
    console.log(err )
});