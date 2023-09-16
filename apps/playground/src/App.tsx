import { Button } from "winnie-react";

import "./App.css";

function App() {
  return (
    <div className="center">
      <div className="row">
        <Button size="small" radius="small">
          Button
        </Button>
        <Button size="small" radius="medium">
          Button
        </Button>
        <Button size="small" radius="large">
          Button
        </Button>
      </div>

      <div className="row">
        <Button size="medium" radius="small">
          Button
        </Button>
        <Button size="medium" radius="medium">
          Button
        </Button>
        <Button size="medium" radius="large">
          Button
        </Button>
      </div>

      <div className="row">
        <Button size="large" radius="small">
          Button
        </Button>
        <Button size="large" radius="medium">
          Button
        </Button>
        <Button size="large" radius="large">
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;
