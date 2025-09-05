"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [display, setDisplay] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNumber = (number: string) => {
    setDisplay(display + number);
  };
  const handleOperator = (operator: string) => {
    setDisplay(display + operator);
  };
  const clear = () => {
    setDisplay("");
  };
  const calculate = async () => {
    setLoading(true);
    const request = await fetch("https://ai.hackclub.com/chat/completions", {
      method: "POST",
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content:
              "You are a calculator. The user will input an equation, and you will respond with the answer, without any explanation or code blocks.",
          },
          {
            role: "user",
            content: display,
          },
        ],
        model: "meta-llama/llama-4-maverick-17b-128e-instruct",
      }),
    });
    const response = await request.json();
    setDisplay(response.choices[0].message.content);
    setLoading(false);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">AI Calculator</h1>
        <div className="mb-2 w-fit rounded-lg p-2 flex justify-end items-center text-right text-2xl border min-h-14 min-w-full">
          {display}
        </div>
        <div className="flex gap-2">
          <Button
            disabled={loading}
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("7")}
          >
            7
          </Button>
          <Button
            disabled={loading}
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("8")}
          >
            8
          </Button>
          <Button
            disabled={loading}
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("9")}
          >
            9
          </Button>
          <Button
            disabled={loading}
            variant="secondary"
            className="flex-grow"
            onClick={() => handleOperator("/")}
          >
            /
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            disabled={loading}
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("4")}
          >
            4
          </Button>
          <Button
            disabled={loading}
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("5")}
          >
            5
          </Button>
          <Button
            disabled={loading}
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("6")}
          >
            6
          </Button>
          <Button
            disabled={loading}
            variant="secondary"
            className="flex-grow"
            onClick={() => handleOperator("*")}
          >
            *
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            disabled={loading}
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("1")}
          >
            1
          </Button>
          <Button
            disabled={loading}
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("2")}
          >
            2
          </Button>
          <Button
            disabled={loading}
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("3")}
          >
            3
          </Button>
          <Button
            disabled={loading}
            variant="secondary"
            className="flex-grow"
            onClick={() => handleOperator("-")}
          >
            -
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            disabled={loading}
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("0")}
          >
            0
          </Button>
          <Button
            disabled={loading}
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber(".")}
          >
            .
          </Button>
          <Button
            disabled={loading}
            variant="secondary"
            className="flex-grow"
            onClick={calculate}
          >
            =
          </Button>
          <Button
            disabled={loading}
            variant="secondary"
            className="flex-grow"
            onClick={() => handleOperator("+")}
          >
            +
          </Button>
        </div>
        <Button disabled={loading} variant="destructive" onClick={clear}>
          Clear
        </Button>
      </div>
    </div>
  );
}
