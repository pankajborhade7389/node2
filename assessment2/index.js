const express = require("express");

const index = express();

index.get('/',function(req,res){
    
    const jsonData = {name:"pankaj",age:"26"};
    res.write("<h1>Express Node</h1>");
    res.write(JSON.stringify(jsonData));
    res.end();
})

index.get("/api/main", function (req, res) {
    res.send("<h3>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.</h3>");
})

index.listen(3004);
