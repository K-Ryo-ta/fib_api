const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
// const Big = require('big.js');

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.options('*', cors());

app.post(`/fib/:fibnumber`, (req: any, res: any) => {
  const fibonachnumber = req.params.fibnumber;

  function fib(n: number, memo: { [key: number]: bigint } = {}): bigint {
    if (n <= 1) {
      return BigInt(n);
    }
    if (memo[n]) {
      return memo[n];
    }
    memo[n] = fib(n - 1, memo) + (fib(n - 2, memo));
    return memo[n];
  }

  const result = fib(fibonachnumber).toString();
  res.send({ fib: result });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
