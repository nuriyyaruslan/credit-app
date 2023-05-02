import Clients from "./components/Clients";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Client from "./components/Client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddClient from "./components/AddClient";
import TakeClient from "./components/TakeCredit";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/client/:id" element={<Client />} />
        <Route path="/addclient" element={<AddClient/>} />
        <Route path="/takecredit" element={<TakeClient/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
