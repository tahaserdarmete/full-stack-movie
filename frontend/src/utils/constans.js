const presentYear = new Date().getFullYear();

export const inputs = [
  {name: "title", label: "Başlık", type: "text"},
  {name: "description", label: "Açıklama", type: "text"},
  {name: "rating", label: "Puan", type: "number", min: 1, max: 10},
  {name: "year", label: "Yıl", tpye: "number", min: 1900, max: presentYear},
  {name: "direktor", label: "Yönetmen", type: "text"},
  {name: "duration", label: "Süre", type: "text"},
  {name: "cast", label: "ekip ( , ile ayırınız)", type: "text"},
  {name: "genre", label: "Kategoriler ( , ile ayırınız", type: "text"},
  {name: "language", label: "Dil", type: "text"},
];
