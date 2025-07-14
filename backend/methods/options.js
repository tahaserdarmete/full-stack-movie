const optionsRequest = (req, res) => {
  // Frontend den bir istek atıldığında bu isteğin kabul edilip edilmediğini yoklamak için öncesinde OPTIONS isteği yollar.

  // OPTIONS' a cevap gelmezse istek türünün kabul edilmediğini düşünür ve asıl isteği atmaz.

  // Fakat eğer kabul ediliyorsa (headerlerda kabul edilen istek türü belirtilmişse ) options' ın ardından asıl isteği atar.

  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS");

  // body' e sahip isteklerde JSON tarzında veri gönderebilmemizi sağlar.
  res.setHeader("Access-ControlAllow-Headers", "Content-Type");

  res.end();
};

module.exports = optionsRequest;
