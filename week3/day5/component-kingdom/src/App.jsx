import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="main">
        <div id="left">
          <Sidebar />
        </div>
        <div id="right">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
