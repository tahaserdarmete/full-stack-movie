const bodyParser = require("../utils/bodyParser");
const crypto = require("crypto");
const fs = require("fs");

const keys = [
  "title",
  "year",
  "rating",
  "description",
  "direktor",
  "duration",
  "language",
];

const postRequest = async (req, res) => {
  //
  if (req.url === "/api/movies") {
    const body = await bodyParser(req);

    console.log(body);

    if (!body.genre.length > 0 || !body.cast.length > 0) {
      return res.end("Genre ve Cast dizileri boş bırakılamaz.");
    }

    const eksikKeyler = keys.filter((key) => !body[key]);

    if (eksikKeyler.length > 0) {
      eksikKeyler.join(", ");

      res.writeHead(400);
      res.end(`${eksikKeyler} değerleri boş bırakılamaz.`);
      return;
    }

    // kaydedeceğimiz veriye ID ekliyoruz.
    body.id = crypto.randomUUID();

    // json dosyasından verileri al
    let data = fs.readFileSync("./data/movies.json", "utf-8");

    // JSON' dan JS okunabilir formatına çevir.
    data = JSON.parse(data);

    // mevcut filmlerin üstüne yeni filmi ekle
    data.push(body);

    // JSON dosyasını güncelle (yeni diziyi üzerine yaz.)
    fs.writeFileSync("./data/movies.json", JSON.stringify(data));

    // client' a cevap gönder.
    res.writeHead(201);

    // eklenen veriyi kullanıcınında geri gönderiyoruz.
    return res.end(JSON.stringify(body));
  }

  return res.end("Geçersiz bir yola istek attınız.");
};

module.exports = postRequest;
