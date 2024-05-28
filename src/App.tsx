import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

const App = () => {
  const defaultFoxSentence = "The quick brown fox jumps over the lazy dog";

  const [defaultSentence, setDefaultSentence] = useState(defaultFoxSentence);

  return (
    <div>
      <div>
        <h1>Hello World</h1>
      </div>
      <textarea className="output">{defaultSentence}</textarea>
    </div>
  );
};

export default App;
