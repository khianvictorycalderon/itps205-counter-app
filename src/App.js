import { useState } from "react";

export default function App() {
  
  const [counter, setCounter] = useState(0);
  const BUTTONS = [
    {
      label: "-",
      action: () => setCounter(item => item - 1)
    },
    {
      label: "0",
      action: () => setCounter(0)
    },
    {
      label: "+",
      action: () => setCounter(item => item + 1)
    },
  ]
  
  return (
    <div className="content">
      sfsaf
    </div>
  );
}