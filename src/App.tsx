import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let onSelectItem = (item: string) => console.log(item);
  const [showAlert, setShowAlert] = useState(false);
  const [showHelloWorld, setShowHelloWorld] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={onSelectItem}
      ></ListGroup>
      {showHelloWorld && (
        <Alert onClose={() => setShowHelloWorld(false)}>
          <span>HELLO WORLD</span>
        </Alert>
      )}
      <Button onClick={() => setShowHelloWorld(true)}>Confirm</Button>
      <Button type="secondary" onClick={() => setShowHelloWorld(false)}>
        Cancel
      </Button>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>YOU CLICKED ME</Alert>
      )}
      <Button onClick={() => setShowAlert(true)}>Show alert</Button>
    </div>
  );
}

export default App;
