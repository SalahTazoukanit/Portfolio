import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./views/Homepage";
import "./index.css";
import ToolsPage from "./views/ToolsPage";
import AllProjectsPage from "./views/AllProjectsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/all-projects" element={<AllProjectsPage />} />
          <Route path="/tools" element={<ToolsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
