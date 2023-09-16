import { Button } from "winnie-react";

import "./App.css";

function App() {
  return (
    <div className="center">
      <div className="row">
        <Button color="grey">Button</Button>
        <Button color="grey" variant="soft">
          Button
        </Button>
        <Button color="grey" variant="ghost">
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;
