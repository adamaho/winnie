import { Button } from "winnie-react";

import "./App.css";

function App() {
  return (
    <div className="center">
      <div className="row">
        <Button attrs={{ disabled: true }}>Button</Button>
        <Button color="red" attrs={{ disabled: true }}>
          Button
        </Button>
      </div>
      <div className="row">
        <Button variant="soft" attrs={{ disabled: true }}>
          Button
        </Button>
        <Button color="red" variant="soft" attrs={{ disabled: true }}>
          Button
        </Button>
      </div>
      <div className="row">
        <Button variant="ghost" attrs={{ disabled: true }}>
          Button
        </Button>
        <Button color="red" variant="ghost" attrs={{ disabled: true }}>
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;
