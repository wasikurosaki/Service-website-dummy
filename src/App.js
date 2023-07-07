import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import "./Style/App.scss"
import "./Style/Header.scss"
import "./Style/Home.scss"
import "./Style/Colors.scss"
import "./Style/Footer.scss"
import "./Style/Contact.scss"
import "./Style/Services.scss"
import "./Style/mediaquery.scss"



import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact"
import Services from "./Components/Services"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/ >
        <Route path="/contact" element={<Contact/>}/ >
        <Route path="/services" element={<Services/>}/ >

      </Routes>
      <Footer/>

    </Router>

  );
}

export default App;
