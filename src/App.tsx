import "./App.css";
import { Welcome } from "./components/Welcome/Welcome";
import Technology from "./components/Technology/Technology";

function App() {
  return (
    <>
      <Welcome />
      <Technology />
      <footer style={{ height: 200 }}></footer>
    </>
  );
}

export default App;
