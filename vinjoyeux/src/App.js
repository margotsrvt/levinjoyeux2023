import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Homepage />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
