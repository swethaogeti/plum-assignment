import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { SingleImagePage } from "./pages/SingleImagePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/images/:imgId" element={<SingleImagePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
