import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './page/Inicio'
import Movil from './page/Movil'
import Laptops from './page/Laptops'
import Tienda from './page/Tienda'
import Contacto from './page/Contacto'
import Todos from './page/Todos'
import { useState } from 'react'

function App() {
  
  const [carrito, setCarrito] = useState([]);

  return (
    <>

   <BrowserRouter>
      <Header carrito={carrito} setCarrito={setCarrito}/>
      <Routes>

        <Route path="/" element={<Inicio/>} />
        <Route path="/Inicio" element={<Inicio/>} />
        <Route path="/Movil" element={<Movil carrito={carrito} setCarrito={setCarrito}/>} />
        <Route path="/Laptops" element={<Laptops carrito={carrito} setCarrito={setCarrito}/>} />
        <Route path="/Todos" element={<Todos carrito={carrito} setCarrito={setCarrito}/>} />
        <Route path="/Tienda" element={<Tienda/>} />
        <Route path="/Contacto" element={<Contacto/>} />

        <Route path="*" element={<Inicio/>} />

      </Routes>
      <Footer/>
   </BrowserRouter>
     
    </>
  )
}

export default App
