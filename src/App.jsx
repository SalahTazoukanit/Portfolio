import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./views/Homepage";
import "./index.css";
import LeftBlock from "./components/LeftBlock";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/all-projects" /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
