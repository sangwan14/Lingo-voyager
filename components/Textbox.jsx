import OpenAI from 'openai';
import { select } from "@material-tailwind/react";
import { useState, useRef } from "react";
import * as rangy from 'rangy/lib/rangy-classapplier';
import 'rangy/lib/rangy-highlighter'; 
import 'rangy/lib/rangy-core.js'; 
import 'rangy/lib/rangy-textrange';
import 'rangy/lib/rangy-serializer';

const Textbox = ({ readOnly, setApiResponse, setIsLoading, apiKey }) => {
  const [textInput, setTextInput] = useState("");
  
  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
  }); 

  const callApi = async (selectedText) => {
    const prompt = `What does "${selectedText}" in "${textInput}" translate to in english. Just say the translation.`;
    const params = {
      messages: [{ role: 'user', content: prompt}],
      model: 'gpt-3.5-turbo',
      stream: true
    };
    setIsLoading(true);
    const stream = await openai.beta.chat.completions.stream(params);
    for await (const chunk of stream) {
      setApiResponse(chunk.choices[0]?.delta?.content || '');
    }
    const chatCompletion = await stream.finalChatCompletion();
    setIsLoading(false);
    setApiResponse(chatCompletion.choices[0].message.content);
  };

  function handleTextChange(event) {
    setTextInput(event.target.value);
  }

  const handleTextSelection = () => {
    const selection = rangy.getSelection();
    selection.expand("word", {
      wordOptions: {
          wordRegex: /[a-záéíóúüñ0-9]+(['\-][a-záéíóúüñ0-9]+)*/gi

      }
    });
    const selectedText = selection.toString();
    callApi(selectedText);
  };

  if (readOnly) {
    
    return (
      <div
        className="cursor-pointer flex flex-wrap p-10 w-3/6 text-2xl overflow-auto"
        onMouseUp={handleTextSelection}
      >
        {textInput}
      </div>
    );
  }
  return (
    <div className="flex p-10 text-2xl w-3/6">
      <textarea
        placeholder="Enter your phrase here!"
        className="grow outline-none resize-none"
        onChange={handleTextChange}
        value={textInput}
      />
    </div>
  );
};

export default Textbox;
