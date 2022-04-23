import { Routes, Route } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="./projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
