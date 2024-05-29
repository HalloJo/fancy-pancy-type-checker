import { ChangeEvent, useState } from "react";
import fancyLogo from "./assets/fancy-type-checker-logo.svg";

import "./App.scss";

const App = () => {
  const baseSentence = "The quick brown fox jumps over the lazy dog";

  const [text, setText] = useState(baseSentence);

  const handleTextChange = (
    event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>
  ) => {
    setText(event.target.value);
  };

  return (
    <div className="h-screen">
      <div className="flex justify-between flex-row h-full">
        <div className="p-8">
          <img
            src={fancyLogo}
            className="h-20 mb-4"
            alt="Fancy Type Checker logo"
          />

          <div>
            <label htmlFor="">Text to check.</label>
            <input type="text" value={text} onChange={handleTextChange} />
          </div>
        </div>
        <textarea
          className="w-[75%] p-8 h-full text-7xl"
          value={text}
          onChange={handleTextChange}
        />
      </div>
    </div>
  );
};

export default App;
