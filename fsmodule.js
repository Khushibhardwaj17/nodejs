const fs = require('fs');

//fs.readFile('file.txt','utf8',(err, data)=>{
//    console.log(err,data)
//})
//console.log("Finished reading file")
// if fs.readfile takes time then server first runs next console.log=> non blocking io model
//const a=fs.readFileSync('file.txt')
//console.log(a.toString())
//console.log("Finished reading file")
//fs.writeFile('file.text',"This is a data",()=>{
//    console.log("Written to the file")
//});
//console.log("Finished reading file")

b=fs.writeFileSync('file2.text',"This is a data",()=>{
    console.log("b")
});
console.log("Finished reading file")