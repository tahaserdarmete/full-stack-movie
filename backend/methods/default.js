const defaultRequest = (req, res) => {
  res.statusCode = 404;

  res.write(
    JSON.stringify({
      success: false,
      message: "Attığınız istek türüne izin verilmiyor.",
    })
  );

  return res.end();
};

module.exports = defaultRequest;
