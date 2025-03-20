import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Service from "./components/Service/Service";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import AboutUs from "./components/Aboutus/Aboutus";
import Gallery from "./components/Gallery/Gallery";
import { Uae } from "./components/UAEPage/Uae";
import BusinessTrade from "./components/BusinessTrade/Businesstrade";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="uae" element={<Uae />} />
          <Route path="business" element={<BusinessTrade />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
