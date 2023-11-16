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
  const [model, setModel] = useState('gpt-3.5-turbo');

  return (  
    <main className="mode-dark h-screen bg-white dark:bg-black">
      <div className="h-1/6">
        <Header setApiKey={setApiKey} setModel={setModel}></Header>
      </div>
      <div className="flex h-4/6">
        <Textbox readOnly={textareaReadOnly} setApiResponse={setApiResponse} setIsLoading={setIsLoading} isLoading={isLoading} apiKey={apiKey} model={model}></Textbox>
        <Result apiResponse={apiResponse} apiKey={apiKey}></Result>
      </div>
      <div className="h-1/6">
        <Actions onStartButtonClick={() => setTextareaReadOnly(!textareaReadOnly)} isLoading={isLoading} textareaReadOnly={textareaReadOnly}></Actions>
      </div>
    </main>
  );
}
