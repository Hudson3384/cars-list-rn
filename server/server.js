const express = require('express');
const app = express();

app.use(express.json());

const validUser = {
  user: "teste",
  password: "123"
};

const carBrands = [
  { "codigo": "1", "nome": "Acura" },
  { "codigo": "2", "nome": "Agrale" },
  { "codigo": "3", "nome": "Alfa Romeo" },
  { "codigo": "4", "nome": "AM Gen" },
  { "codigo": "5", "nome": "Asia Motors" },
  { "codigo": "189", "nome": "ASTON MARTIN" },
  { "codigo": "6", "nome": "Audi" },
  { "codigo": "207", "nome": "Baby" },
  { "codigo": "7", "nome": "BMW" },
  { "codigo": "8", "nome": "BRM" },
  { "codigo": "123", "nome": "Bugre" },
  { "codigo": "238", "nome": "BYD" },
  { "codigo": "236", "nome": "CAB Motors" },
  { "codigo": "10", "nome": "Cadillac" },
  { "codigo": "245", "nome": "Caoa Chery" },
  { "codigo": "161", "nome": "Caoa Chery/Chery" },
  { "codigo": "11", "nome": "CBT Jipe" },
  { "codigo": "136", "nome": "CHANA" },
  { "codigo": "182", "nome": "CHANGAN" },
  { "codigo": "12", "nome": "Chrysler" },
  { "codigo": "13", "nome": "Citroën" },
  { "codigo": "14", "nome": "Cross Lander" },
  { "codigo": "241", "nome": "D2D Motors" },
  { "codigo": "15", "nome": "Daewoo" },
  { "codigo": "16", "nome": "Daihatsu" },
  { "codigo": "246", "nome": "DFSK" },
  { "codigo": "17", "nome": "Dodge" },
  { "codigo": "147", "nome": "EFFA" },
  { "codigo": "18", "nome": "Engesa" },
  { "codigo": "19", "nome": "Envemo" },
  { "codigo": "20", "nome": "Ferrari" },
  { "codigo": "249", "nome": "FEVER" },
  { "codigo": "21", "nome": "Fiat" },
  { "codigo": "149", "nome": "Fibravan" },
  { "codigo": "22", "nome": "Ford" },
  { "codigo": "190", "nome": "FOTON" },
  { "codigo": "170", "nome": "Fyber" },
  { "codigo": "199", "nome": "GEELY" },
  { "codigo": "23", "nome": "GM - Chevrolet" },
  { "codigo": "153", "nome": "GREAT WALL" },
  { "codigo": "24", "nome": "Gurgel" },
  { "codigo": "240", "nome": "GWM" },
  { "codigo": "152", "nome": "HAFEI" },
  { "codigo": "214", "nome": "HITECH ELECTRIC" },
  { "codigo": "25", "nome": "Honda" },
  { "codigo": "26", "nome": "Hyundai" },
  { "codigo": "27", "nome": "Isuzu" },
  { "codigo": "208", "nome": "IVECO" },
  { "codigo": "177", "nome": "JAC" },
  { "codigo": "28", "nome": "Jaguar" },
  { "codigo": "29", "nome": "Jeep" },
  { "codigo": "154", "nome": "JINBEI" },
  { "codigo": "30", "nome": "JPX" },
  { "codigo": "31", "nome": "Kia Motors" },
  { "codigo": "32", "nome": "Lada" },
  { "codigo": "171", "nome": "LAMBORGHINI" },
  { "codigo": "33", "nome": "Land Rover" },
  { "codigo": "34", "nome": "Lexus" },
  { "codigo": "168", "nome": "LIFAN" },
  { "codigo": "127", "nome": "LOBINI" },
  { "codigo": "35", "nome": "Lotus" },
  { "codigo": "140", "nome": "Mahindra" },
  { "codigo": "36", "nome": "Maserati" },
  { "codigo": "37", "nome": "Matra" },
  { "codigo": "38", "nome": "Mazda" },
  { "codigo": "211", "nome": "Mclaren" },
  { "codigo": "39", "nome": "Mercedes-Benz" },
  { "codigo": "40", "nome": "Mercury" },
  { "codigo": "167", "nome": "MG" },
  { "codigo": "156", "nome": "MINI" },
  { "codigo": "41", "nome": "Mitsubishi" },
  { "codigo": "42", "nome": "Miura" },
  { "codigo": "43", "nome": "Nissan" },
  { "codigo": "44", "nome": "Peugeot" },
  { "codigo": "45", "nome": "Plymouth" },
  { "codigo": "46", "nome": "Pontiac" },
  { "codigo": "47", "nome": "Porsche" },
  { "codigo": "185", "nome": "RAM" },
  { "codigo": "186", "nome": "RELY" },
  { "codigo": "48", "nome": "Renault" },
  { "codigo": "195", "nome": "Rolls-Royce" },
  { "codigo": "49", "nome": "Rover" },
  { "codigo": "50", "nome": "Saab" },
  { "codigo": "51", "nome": "Saturn" },
  { "codigo": "52", "nome": "Seat" },
  { "codigo": "247", "nome": "SERES" },
  { "codigo": "183", "nome": "SHINERAY" },
  { "codigo": "157", "nome": "smart" },
  { "codigo": "125", "nome": "SSANGYONG" },
  { "codigo": "54", "nome": "Subaru" },
  { "codigo": "55", "nome": "Suzuki" },
  { "codigo": "165", "nome": "TAC" },
  { "codigo": "56", "nome": "Toyota" },
  { "codigo": "57", "nome": "Troller" },
  { "codigo": "58", "nome": "Volvo" },
  { "codigo": "59", "nome": "VW - VolksWagen" },
  { "codigo": "163", "nome": "Wake" },
  { "codigo": "120", "nome": "Walk" }
];

const modelData = {
  "modelos": [
    { "codigo": 24, "nome": "AM-825 Luxo 4.0 Diesel" },
    { "codigo": 25, "nome": "AM-825 Super Luxo 4.0 Diesel" },
    { "codigo": 26, "nome": "Hi-Topic SLX/SDX/DLX Full Diesel" },
    { "codigo": 27, "nome": "Hi-Topic STD Diesel" },
    { "codigo": 28, "nome": "Hi-Topic Van 2.7 Diesel (furgão)" },
    { "codigo": 29, "nome": "Jipe Rocsta GT 4x4 2.2 Diesel" },
    { "codigo": 30, "nome": "Topic Carga 2.7 Diesel (furgão)" },
    { "codigo": 31, "nome": "Topic Luxo Diesel" },
    { "codigo": 32, "nome": "Topic Super Luxo Diesel" },
    { "codigo": 33, "nome": "Towner Coach Full" },
    { "codigo": 34, "nome": "Towner Furgão" },
    { "codigo": 35, "nome": "Towner Glass Van" },
    { "codigo": 36, "nome": "Towner Luxo" },
    { "codigo": 37, "nome": "Towner Multiuso 5p" },
    { "codigo": 38, "nome": "Towner Panel Van" },
    { "codigo": 39, "nome": "Towner Pick-Up" },
    { "codigo": 40, "nome": "Towner SDX / DLX/ STD" },
    { "codigo": 41, "nome": "Towner Super Luxo" },
    { "codigo": 42, "nome": "Towner Truck" }
  ],
  "anos": [
    { "codigo": "1999-1", "nome": "1999 Gasolina" },
    { "codigo": "1999-3", "nome": "1999 Diesel" },
    { "codigo": "1998-1", "nome": "1998 Gasolina" },
    { "codigo": "1998-3", "nome": "1998 Diesel" },
    { "codigo": "1997-1", "nome": "1997 Gasolina" },
    { "codigo": "1997-3", "nome": "1997 Diesel" },
    { "codigo": "1996-1", "nome": "1996 Gasolina" },
    { "codigo": "1996-3", "nome": "1996 Diesel" },
    { "codigo": "1995-1", "nome": "1995 Gasolina" },
    { "codigo": "1995-3", "nome": "1995 Diesel" },
    { "codigo": "1994-1", "nome": "1994 Gasolina" },
    { "codigo": "1994-3", "nome": "1994 Diesel" },
    { "codigo": "1993-1", "nome": "1993 Gasolina" },
    { "codigo": "1993-3", "nome": "1993 Diesel" }
  ]
};

app.post('/signIn', (req, res) => {
  const { user, password } = req.body;

  if (user === validUser.user && password === validUser.password) {
    res.json({
      error: false,
      user: {
        id: 1,
        name: "John Smith",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
      }
    });
  } else {
    res.status(401).json({
      error: true,
      message: "Usuário e/ou senha inválido(s)."
    });
  }
});

app.get('/carros/marcas', (_, res) => {
  res.json(carBrands);
});

app.get('/carros/marcas/:id/modelos', (_, res) => {
  res.json(modelData);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
