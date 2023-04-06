import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Templates from "./Pages/Templates/Templates";
import Contact from "./Pages/Contact/Contact";
import Header from "./Component/Header/Header";
import Price from "./Pages/Price/Price";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Main />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/price" element={<Price />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
