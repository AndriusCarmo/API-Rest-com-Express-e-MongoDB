import http from "http";

const server= http.createServer((req,res)=>{
    res.writeHead(200,{ "Content-type": "text/plain"});
    res.end("Curso de Node.js");

});