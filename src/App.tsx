import "./App.css";
import { Welcome } from "./components/Welcome/Welcome";
import Technology from "./components/Technology/Technology";
import Project from "./components/Project/Project";
function App() {
  return (
    <>
      <Welcome />
      <Technology />
      <Project />
      <footer style={{ height: 200 }}></footer>
    </>
  );
}

export default App;
