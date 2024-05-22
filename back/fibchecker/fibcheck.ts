//なぜメモ化をするのか
//number型で表現できる部分なら問題ないが、bigint型になると計算が遅くなってしまう。
//なぜなら、計算処理を再起的に呼び出しているため、計算量が増えると、一度した計算をもう一度行うことになってしまい、結果的に計算量が、O(2^n)になってしまう。
//具体的には、fibcheck(4)はfibcheck(3)とfibcheck(2)を計算する必要があり、fibcheck(3)はfibcheck(2)とfibcheck(1)を計算する必要があり、fibcheck(2)はfibcheck(1)とfibcheck(0)を計算する必要があるため、fibcheck(1)とfibcheck(2)が2回計算されているのがわかり、二重に計算している。
//そのため、メモ化を行うことで、事前に計算結果を保存し、再度計算する際に、一度保存した計算結果を呼び出すだけで済むようになるので、計算量がO(n)になり、計算が早くなる。

export default function fibcheck(n: number, memo: { [key: number]: bigint } = {}): bigint {
    if (typeof n !== 'number') {
      throw new Error('Input must be a number');
    }
    if (n < 1) {
      throw new Error('Input must be greater than or equal to 1');
    }
    if (n <= 2) {
      return BigInt(1);
    }
    if (memo[n]) {
      return memo[n];
    }
    memo[n] = fibcheck(n - 1, memo) + (fibcheck(n - 2, memo));
    return memo[n];
    
    
  }
