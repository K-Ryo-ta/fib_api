import  fibcheck from './fibchecker/fibcheck';

const express = require('express');
const app = express();
require("dotenv").config();
const cors = require('cors');

const port = process.env.PORT || 8000;
app.use(express.json());

app.use(cors());

//postメソッドを用いた時の実装
// app.post(`/fib/:fibnumber`, (req: any, res: any) => {
//   const fibonachnumber = req.params.fibnumber;
//   const result = fibcheck(fibonachnumber).toString();
//   res.send({ "result": result });
// });

//getメソッドを用いた時の実装
app.get(`/fib/:fibnumber`, (req: any, res: any) => {
  const fibonachnumber = req.params.fibnumber;
  const result = fibcheck(fibonachnumber).toString();
  res.send({ "result": result });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
