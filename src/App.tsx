import { ChangeEvent, useState } from "react";
import fancyLogo from "./assets/fancy-type-checker-logo.svg";

import "./App.scss";
import "../src/fonts.scss";
import { FontMap, fontMap } from "./data/fontmap";

const App = () => {
  const baseSentence = "The quick brown fox jumps over the lazy dog";

  const [text, setText] = useState(baseSentence);
  const [fontSize, setFontSize] = useState<number>(50);
  const [fontWeight, setFontWeight] = useState<number>(400);
  const [lineHeight, setLineHeight] = useState<number>(1);
  const [font, setFont] = useState<string>("");

  const handleTextChange = (
    event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>
  ) => {
    setText(event.target.value);
  };

  const handleStyleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name } = event.target;

    if (name === "typesize") {
      setFontSize(parseInt(event.target.value, 10));
    } else if (name === "fontweight") {
      setFontWeight(parseInt(event.target.value, 10));
    } else if (name === "lineheight") {
      setLineHeight(parseFloat(event.target.value));
    } else if (name === "font") {
      const selectedValue = event.target.value as keyof FontMap;
      setFont(fontMap[selectedValue]);
      console.log(selectedValue);
    }
  };

  return (
    <div className="h-screen">
      <div className="flex justify-between flex-row h-full">
        <div className="p-8 flex-1">
          <img
            src={fancyLogo}
            className="h-20 mb-8"
            alt="Fancy Type Checker logo"
          />
          <div className="bg-black p-4 rounded-xl">
            <div className="flex flex-col">
              <label htmlFor="text">Text to check</label>
              <input
                type="text"
                name="text"
                value={text}
                onChange={handleTextChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="font">Typeface</label>
              <select name="font" onChange={handleStyleChange}>
                {Object.keys(fontMap).map((fontName) => (
                  <option key={fontName} value={fontName}>
                    {fontName}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="w-full flex justify-between" htmlFor="typesize">
                Font size <span>{fontSize}px</span>
              </label>
              <input
                type="range"
                name="typesize"
                min="12"
                max="200"
                value={fontSize}
                onChange={handleStyleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                className="w-full flex justify-between"
                htmlFor="fontweight"
              >
                Font weight <span>{fontWeight}</span>
              </label>
              <input
                type="range"
                name="fontweight"
                min={100}
                max={900}
                step={100}
                value={fontWeight}
                onChange={handleStyleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                className="w-full flex justify-between"
                htmlFor="lineheight"
              >
                Line-height <span>{lineHeight}</span>
              </label>
              <input
                type="range"
                name="lineheight"
                min={0}
                max={2}
                step={0.25}
                value={lineHeight}
                onChange={handleStyleChange}
              />
            </div>
            {/* <div className="flex flex-col">
              <label className="w-full flex justify-between" htmlFor="italic">
                Italic
              </label>
              <input
                type="checkbox"
                name="italic"
                onChange={handleStyleChange}
                checked={italic}
              />
            </div> */}
          </div>
        </div>
        <textarea
          className={`w-[75%] p-8 h-full text-7xl ${font}`}
          value={text}
          style={{
            fontSize: `${fontSize}px`,
            fontWeight: `${fontWeight}`,
            lineHeight: `${lineHeight}`,
          }}
          onChange={handleTextChange}
        />
      </div>
    </div>
  );
};

export default App;
