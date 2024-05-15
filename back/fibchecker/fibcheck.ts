export default function fibcheck(n: number, memo: { [key: number]: bigint } = {}): bigint {
    if (n <= 1) {
      return BigInt(n);
    }
    if (memo[n]) {
      return memo[n];
    }
    memo[n] = fibcheck(n - 1, memo) + (fibcheck(n - 2, memo));
    return memo[n];
  }
