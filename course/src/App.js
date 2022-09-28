import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Win Zaw Htoo");
  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Page NOT FOUND</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
