import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Details from "../pages/Details";


export default function Approuter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites/>} />
      <Route path="/country/:code" element={<Details />} />
    </Routes>
  )
}
