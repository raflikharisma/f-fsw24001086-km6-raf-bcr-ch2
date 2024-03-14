//core package
const http = require("http");
const fs = require("fs");
const path = require("path");

const url = require("url");

const PUBLIC_DIR = path.join(__dirname, "../public");
const PORT = 8000;

const server = (req, res) => {
  if (req.url === "/") {
    res.end("INI DEFAULT SERVER");
  } else if (req.url === "/search") {
    res.end("INI HALAMAN SEARCH");
  } else {
    res.end("empty");
  }
};
http.createServer(server).listen(PORT);
console.log(`Server is Running..PORT: ${PORT}`);
