import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AddExpense from "./pages/add-expense/AddExpense";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addexpense" element={<AddExpense />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
