import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carroussel from './components/Carroussel';
import Searchbar from './components/Searchbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Searchbar />
        <Carroussel />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
