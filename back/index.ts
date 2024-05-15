import  fibcheck from './fibchecker/fibcheck';

const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');


app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.options('*', cors());

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
