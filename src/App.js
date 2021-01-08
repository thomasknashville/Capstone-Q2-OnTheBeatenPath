import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home.js";
import Parks from "./components/parks/Parks";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Parks />
      <Navigation />
    </div>
  );
}

export default App;
