const http = require("http");
const fs = require("fs");
const filePath = "./index.html";
const NEW_CONTENT = "<h1>Hello World</h1><p>This is Amaan</p>";
const path = require("path");
const express = require("express");
const app = express();
fs.writeFile(filePath, NEW_CONTENT,{flag: 'a+'}, err=>{
    if(err){
        console.log("Error while reading File:- " + err);
        return;
    }
});

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname, filePath));//__dirname  tells you the absolute path of the directory containing the currently executing file
});
app.listen(5000, ()=>{
    console.log("Server is listening on port 5000...");
});