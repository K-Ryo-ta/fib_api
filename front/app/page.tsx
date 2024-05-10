'use client'
import { MouseEventHandler, useEffect, useState } from "react";

export default function Home() {
  const [fibonachnumber, setFibonachnumber] = useState<number | null>(null);
  const [result, setResult] = useState<number | null>(null);

  const handlEvent: MouseEventHandler<HTMLButtonElement> = async (event) => {
    const response = await fetch(`http://localhost:3000/fib/${fibonachnumber}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fibonachnumber }),
      mode: 'cors',
    });
    const data = await response.json();
    setResult(data.fib);
  };

  const handleFibonach = (value: string) => {
    const number = parseInt(value);
    if (number) {
      setFibonachnumber(number);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="font-bold text-4xl mb-10 text-white">フィボナッチ数列チェッカー</h1>
      <div className="flex mb-10">
        <input
          type="number"
          value={fibonachnumber || ""}
          onChange={(e) => handleFibonach(e.target.value)}
          className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Enter a number"
        />
        <button
          onClick={handlEvent}
          className="px-4 py-2 rounded-r-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        >
          Check
        </button>
      </div>
      <p className="text-white text-2xl">
        結果: {result !== null && (
          <span className="font-bold">{result}</span>
        )}
      </p>

    </div>
  );
}
