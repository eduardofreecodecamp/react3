import Mlaptops from "../components/Main/Mlaptops"

const Laptops = ({carrito, setCarrito}) => {
  return (
    <>
     <h3 className="text-center py-5">Laptops</h3>
    <Mlaptops carrito={carrito} setCarrito={setCarrito}/>
    </>
   
  )
}

export default Laptops