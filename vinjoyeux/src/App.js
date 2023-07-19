import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carroussel from './components/Carroussel';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Carroussel />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
