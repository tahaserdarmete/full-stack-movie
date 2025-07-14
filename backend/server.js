const http = require("http");
const fs = require("fs");
const getRequest = require("./methods/get");
const deleteRequest = require("./methods/delete");
const optionsRequest = require("./methods/options");
const postRequest = require("./methods/post");
const defaultRequest = require("./methods/default");

// 1-) Önce sunucuyu oluştur.

const server = http.createServer((req, res) => {
  //   CORS hatalarını engelleme

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  console.log("İSTEK TÜRÜ:", req.method);

  switch (req.method) {
    case "GET":
      return getRequest(req, res);
    case "POST":
      return postRequest(req, res);
    case "DELETE":
      return deleteRequest(req, res);
    case "OPTIONS":
      return optionsRequest(req, res);
    default:
      return defaultRequest(req, res);
  }

  return res.end("Sunucumuza Hosgeldiniz. Fullstack Movie App");
});

// 2-) Oluşturulan Server' ı ayağa kaldır.

const port = 4080;

server.listen(port, () => {
  console.log(`Sunucu ${port} portuna gelen istekleri dinlemeye başladı`);
});
