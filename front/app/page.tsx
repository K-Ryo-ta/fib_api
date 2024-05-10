'use client'
import { MouseEventHandler, useEffect, useState } from "react";

export default function Home() {
  const [fibonachnumber, setFibonachnumber] = useState<number | null>(null);

  const handlEvent: MouseEventHandler<HTMLButtonElement> = async (event) => {
    const response = await fetch(`http://localhost3000/fib?=${fibonachnumber}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fibonachnumber),
    });
    return response.json();
  };

  const handleFibonach = (value: string) => {
    const number = parseInt(value);
    if (number) {
      setFibonachnumber(number);
    }
  };

  console.log(fibonachnumber);

  return (
    <div>
      <h1>フィボナッチ数列チェッカー</h1>
      <input
        type="number"
        value={fibonachnumber || ""}
        onChange={(e) => handleFibonach(e.target.value)}
      />
      <button onClick={handlEvent}>Check</button>
    </div>
  );
}
