import "./styles.css";

import Button from "./components/Button";

const name = ["Talib"];

export default function App() {
  return (
    <div className="App">
      <h1>Create a Button Component</h1>
      <Button
        text="Button"
        name={name}
        onClick={() => alert(`${name} click me`)}
      ></Button>
    </div>
  );
}
