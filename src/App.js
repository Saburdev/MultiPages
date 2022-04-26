import { Routes, Route } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
