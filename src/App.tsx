import "./App.css";
import { ComponentTest } from "./components";
import ComponentTestAsync from "./components/ComponentTestAsync";

function App() {
  return (
    <div className="App">
      <ComponentTestAsync />
      <ComponentTest name="Gentleman" />
    </div>
  );
}

export default App;
