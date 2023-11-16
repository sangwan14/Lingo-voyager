import Image from "next/image";
import Header from "../components/Header";
import Textbox from "../components/Textbox";
import Result from "../components/Result";
import Actions from "../components/Actions";
import React, { useState } from "react";

export default function Home() {
  const [textareaReadOnly, setTextareaReadOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState("");
  const [apiKey, setApiKey] = useState(null);

  return (
    <main className="h-screen">
      <div className="h-1/6">
        <Header setApiKey={setApiKey}></Header>
      </div>
      <div className="flex h-4/6">
        <Textbox readOnly={textareaReadOnly} setResponse={setApiResponse} setIsLoading={setIsLoading} apiKey={apiKey}></Textbox>
        <Result apiResponse={apiResponse} apiKey={apiKey}></Result>
      </div>
      <div className="h-1/6">
        <Actions onStartButtonClick={() => setTextareaReadOnly((prevVal) => !prevVal)} isLoading={isLoading} textareaReadOnly={textareaReadOnly}></Actions>
      </div>
    </main>
  );
}
