import React, { useState } from "react";

const TodoInput = (props) => {
  const [inputText, setInputText] = useState();
 
  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          placeholder="add todo"
          className="input-box-todo"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          className="add-btn"
          onClick={() => {
            props.addList(inputText);
            setInputText("");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
