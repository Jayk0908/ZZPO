import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Bedrijven from "./Bedrijven";

function MyPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bedrijven" element={<Bedrijven />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<MyPage />, root);
