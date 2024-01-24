import { Contact, Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import Gallary from "./pages/Gallary";
function App() {
  return (
    <div className="App ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/contact" element={<Contact/>}  />
          <Route path="/gallary" element={<Gallary/>}  />
          <Route path="*" element={<PageNotFound/>}  />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
