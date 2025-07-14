const fs = require("fs");

const getRequest = (req, res) => {
  //
  console.log(req.url);

  // İd almak için kullanıyoruz.
  const id = req.url.split("/")[3];

  //
  const path = req.url.substring(0, req.url.lastIndexOf("/"));

  if (req.url === "/api/movies") {
    // movies.json dosyasından filmleri oku

    const movies = fs.readFileSync("./data/movies.json", "utf-8");

    return res.end(movies);
  }

  if (path === "/api/movies" && id) {
    const movies = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    const movie = movies.find((item) => item.id === id);

    if (movie) {
      return res.end(JSON.stringify(movie));
    }

    res.writeHead(404);
    return res.end(
      JSON.stringify({success: false, message: "Aranan film bulunamadı."})
    );
  }

  res.writeHead(404);
  return res.end("Aradığınız yol bulunamadı.");
};

module.exports = getRequest;
