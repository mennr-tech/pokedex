import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Pokemon from "./Pages/Pokemon";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}
