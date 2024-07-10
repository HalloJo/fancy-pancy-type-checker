import { ChangeEvent, useEffect, useState } from "react";
import fancyLogo from "./assets/fancy-type-checker-logo.svg";

import "./App.scss";
import "../src/fonts.scss";
import { FontMap, fontMap } from "./data/fontmap";
import { buttons } from "./data/buttons";

const App = () => {
  const baseSentence = "The quick brown fox jumps over the lazy dog";

  const [text, setText] = useState(baseSentence);
  const [fontSize, setFontSize] = useState<number>(50);
  const [fontWeight, setFontWeight] = useState<number>(400);
  const [lineHeight, setLineHeight] = useState<number>(1);
  const [font, setFont] = useState<string>("");
  const [colors, setColors] = useState({
    bgColor: "#000000",
    textColor: "#ffffff",
  });
  const [showMobileMessage, setShowMobileMessage] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth < 768;

      setShowMobileMessage(isMobile);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.addEventListener("resize", checkMobile);
    };
  }, []);

  const handleTextChange = (
    event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>
  ) => {
    setText(event.target.value);
  };

  const handleColorChange = (bgColor: string, textColor: string) => {
    setColors({ bgColor, textColor });
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
      {showMobileMessage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center p-8">
          <div className="bg-black p-8 rounded-lg text-center border border-[#646cff] flex flex-col items-center justify-center">
            <h2 className="text-2xl mb-4 text-[#5ADB9D] font-bold">
              Please visit this website on a tablet or desktop.
            </h2>
            <p className="text-lg">
              Mobile experience is not fully supported yet. Cheers!
            </p>
          </div>
        </div>
      )}

      <div className="flex justify-between flex-row h-full">
        <div className="p-8 flex-1">
          <img
            src={fancyLogo}
            className="h-20 mb-8"
            alt="Fancy Type Checker logo"
          />
          <div className="bg-black p-4 rounded-xl flex flex-col gap-6 ">
            <div className="flex flex-col">
              <label htmlFor="text" className="font-bold">
                Text to check
              </label>
              <input
                type="text"
                name="text"
                value={text}
                onChange={handleTextChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="font" className="font-bold">
                Typeface
              </label>
              <select name="font" onChange={handleStyleChange}>
                {Object.keys(fontMap).map((fontName) => (
                  <option key={fontName} value={fontName}>
                    {fontName}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label
                className=" w-full flex justify-between font-bold"
                htmlFor="typesize"
              >
                Font size{" "}
                <span className="font-bold text-[#5ADB9D]">{fontSize}px</span>
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
                className="w-full flex justify-between font-bold"
                htmlFor="fontweight"
              >
                Font weight{" "}
                <span className="font-bold text-[#5ADB9D]">{fontWeight}</span>
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
                className="w-full flex justify-between font-bold"
                htmlFor="lineheight"
              >
                Line-height <span className="text-[#5ADB9D]">{lineHeight}</span>
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
            <div className="flex gap-3">
              {buttons.map((item, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleColorChange(item.bgColor, item.textColor)
                  }
                  style={{
                    backgroundColor: item.bgColor,
                    color: item.textColor,
                  }}
                  className={`p-2 cursor-pointer`}
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>
        </div>
        <textarea
          className={`w-[75%] p-8 h-full text-7xl ${font}`}
          value={text}
          style={{
            fontSize: `${fontSize}px`,
            fontWeight: `${fontWeight}`,
            lineHeight: `${lineHeight}`,
            background: `${colors.bgColor}`,
            color: `${colors.textColor}`,
          }}
          onChange={handleTextChange}
        />
      </div>
    </div>
  );
};

export default App;
