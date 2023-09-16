import { Button } from "winnie-react";

import "./App.css";

function App() {
  return (
    <div className="center">
      <div className="row">
        <Button>Hello World</Button>
        <Button color="red">Hello World</Button>
      </div>
      <div className="row">
        <Button size="1">Open</Button>
        <Button size="2">Open</Button>
        <Button size="3">Open</Button>
      </div>
    </div>
  );
}

export default App;
