const fs = require("fs");

const deleteRequest = (req, res) => {
  //
  console.log("REQUEST URL:", req.url);

  const path = req.url.substring(0, req.url.lastIndexOf("/"));

  const id = req.url.split("/")[3];

  if (path === "/api/movies" && id) {
    // Bütün filmleri alalım
    const movies = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    // bizden istenilen id parametresine sahip film var mı bak
    const found = movies.find((item) => item.id === id);

    // eğer bulunan eleman yoksa hata döndür
    if (!found) {
      res.writeHead(404);
      return res.end("Silmek istediğiniz film bulunamadı.");
    }

    // Eğer silmek istenilen film varsa o filmi movies.json' dan çıkart.
    const filtered = movies.filter((item) => item.id !== id);
    // ID' si silmek istediğimiz elemanın ID' sine eşit olmayanlar filtered dizisine aktarılır, eşit olan ise diziden elenir.

    // Filtrelenmiş (silinmek istenilen eleman çıkarılmış) dizimizi tekrardan movies.json' a yazmamız lazım.
    fs.writeFileSync("./data/movies.json", JSON.stringify(filtered));

    // clienta cevap gönder
    res.writeHead(200);
    return res.end("Film başarıyla silindi.");
  }

  if (!id) {
    res.writeHead(404);
    return res.end("Silmek istediğiniz filmin id sini belirtin.");
  }

  res.writeHead(400);
  return res.end("Geçersiz istek attınız.");
};

module.exports = deleteRequest;
