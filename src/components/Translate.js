import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";
Convert;
const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Hindi", value: "hi" },
  { label: "Arabic", value: "ar" },
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};
export default Translate;
