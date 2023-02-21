import { Header } from "./components/Header/Header";
import { Login } from "./pages/Login/Login";
import './app.css'
import { Navigate, Route, Routes } from "react-router-dom";
import { Order } from "./pages/Order/Order";
import { Customers } from "./pages/Customers/Customers";
import { Category } from "./pages/Category/Category";
import { Products } from "./pages/Products/Products";
import { Technologies } from "./pages/Technologies/Technologies";
import { Address } from "./pages/Address/Address";
import { Carusel } from "./pages/Carusel/Carusel";
import { useSelector } from "react-redux"

function App() {
  const state = useSelector((state) => state.token);
  if(state.token){
    return <div className="d-flex">
        <Header/>
        <Routes>
          <Route path="/" element={<Navigate to="/order"/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/customers" element={<Customers/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/technologies" element={<Technologies/>}/>
          <Route path="/address" element={<Address/>}/>
          <Route path="/carusel" element={<Carusel/>}/>
        </Routes>
    </div>
  }else{
    return <Login/> 
  }
}

export default App;
