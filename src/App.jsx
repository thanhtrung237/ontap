import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Contact from "./pages/Contact.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import BookTable from "./components/BookTable.jsx";
import MenuList from "./components/MenuList.jsx";
import "./index.css";

export const OrderContext = createContext();

function App() {
  const [order, setOrder] = useState([]);
  console.log("App rendered");

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      <Router>
        <Header />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-table" element={<BookTable />} />
            <Route path="/menu-list" element={<MenuList />} /> 
          </Routes>
        </div>
        <Footer />
      </Router>
    </OrderContext.Provider>
  );
}

export default App;