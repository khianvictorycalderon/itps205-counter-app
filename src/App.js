import { useState } from "react";

export default function App() {
  
  const [counter, setCounter] = useState(0);
  const BUTTONS = [
    {
      label: "-",
      action: () => setCounter(item => item - 1),
      style: { backgroundColor: "red" }
    },
    {
      label: "0",
      action: () => setCounter(0),
      style: { backgroundColor: "gray" }
    },
    {
      label: "+",
      action: () => setCounter(item => item + 1),
      style: { backgroundColor: "blue" }
    },
  ];

  const [messageInput, setMessageInput] = useState("Hello World");
  
  return (
    <div className="content">
      
      <div>

	<p>ITPS205 Finals Hands On Quiz 2</p>
	<p>by Khian Victory D. Calderon - BSIT-2A</p>
	<hr/>

        <h2 className="counter-label">{counter}</h2>

        <div className="buttons-container">
          {BUTTONS.map((item, index) => (
            <button
              key={`${item.label}-${index}`}
              onClick={item.action}
              style={item.style}
            >
              {item.label}
            </button>
          ))}
        </div>

        {counter >= 5 && (
          <h3 className="goal-label">Goal Reached!</h3>
        )}

        <hr/>

        <input
          type="text"
          className="input-box"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />

        <h3>Typed Text:</h3>
        <span>{messageInput}</span>

      </div>

    </div>
  );
}