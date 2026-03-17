import { HashRouter, Routes, Route } from "react-router-dom";
import Startseite from "./components/StartSeite/StartSeite";
import CafePage from "./components/CafePage/CafePage";
import ScrollToTop from "./hooks/ScrollToTop.tsx";


function App() {
  return (
    <HashRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Startseite />} />
        <Route path="/cafe/:id" element={<CafePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;