import React from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <AppRouter />;
    </>
  );
}

export default App;
