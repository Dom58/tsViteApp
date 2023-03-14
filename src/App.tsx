import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>TypeScript Catchup!</h1>
      <Link to={"/buckets"}>Buckets</Link>
    </>
  );
}

export default App;
