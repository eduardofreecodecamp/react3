import Mtodos from "../components/Main/Mtodos"
const Todos = ({carrito, setCarrito}) => {
  return (
    <>
    <h3 className="text-center py-5">Todos</h3>
    <Mtodos carrito={carrito} setCarrito={setCarrito}/>
    </>
  )
}

export default Todos