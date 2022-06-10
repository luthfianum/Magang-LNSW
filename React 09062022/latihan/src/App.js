import { React } from 'react';
import { TablePage } from './pages/TablePage';
import { AboutUs } from './pages/AboutUs';
import { AddProduct } from './pages/AddProduct';
import { EditProduct } from './pages/EditProduct';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<TablePage />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/add" element={<AddProduct />} />
          <Route exact path="/edit/:id" element={<EditProduct />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
