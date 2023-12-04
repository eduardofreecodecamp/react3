import Mmovil from "../components/Main/Mmovil"

const Movil = ({carrito, setCarrito}) => {
  return (
    <>
    <h3 className="text-center py-5">Smartphone</h3>
    <Mmovil carrito={carrito} setCarrito={setCarrito}/>
    </>
    
  )
}

export default Movil