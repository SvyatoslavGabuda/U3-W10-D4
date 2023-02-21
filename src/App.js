import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
import Favorites from "./components/Favorites";
import AllSearch from "./components/AllSearch";
import JustClassComp from "./components/JustClassComp";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/allSearch" element={<AllSearch />} />
        <Route path="/classComponent" element={<JustClassComp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
