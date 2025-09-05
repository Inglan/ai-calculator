"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [display, setDisplay] = useState("");

  const handleNumber = (number: string) => {
    setDisplay(display + number);
  };
  const handleOperator = (operator: string) => {
    setDisplay(display + operator);
  };
  const clear = () => {
    setDisplay("");
  };
  const calculate = () => {};

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">AI Calculator</h1>
        <div className="mb-2 w-fit rounded p-2 flex justify-end items-center text-right text-2xl border min-h-14 min-w-full">
          {display}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("7")}
          >
            7
          </Button>
          <Button
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("8")}
          >
            8
          </Button>
          <Button
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("9")}
          >
            9
          </Button>
          <Button
            variant="secondary"
            className="flex-grow"
            onClick={() => handleOperator("/")}
          >
            /
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("4")}
          >
            4
          </Button>
          <Button
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("5")}
          >
            5
          </Button>
          <Button
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("6")}
          >
            6
          </Button>
          <Button
            variant="secondary"
            className="flex-grow"
            onClick={() => handleOperator("*")}
          >
            *
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("1")}
          >
            1
          </Button>
          <Button
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("2")}
          >
            2
          </Button>
          <Button
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("3")}
          >
            3
          </Button>
          <Button
            variant="secondary"
            className="flex-grow"
            onClick={() => handleOperator("-")}
          >
            -
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber("0")}
          >
            0
          </Button>
          <Button
            variant="outline"
            className="flex-grow"
            onClick={() => handleNumber(".")}
          >
            .
          </Button>
          <Button variant="secondary" className="flex-grow" onClick={calculate}>
            =
          </Button>
          <Button
            variant="secondary"
            className="flex-grow"
            onClick={() => handleOperator("+")}
          >
            +
          </Button>
        </div>
        <Button variant="destructive" onClick={clear}>
          Clear
        </Button>
      </div>
    </div>
  );
}
