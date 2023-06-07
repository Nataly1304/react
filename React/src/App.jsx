import Messagge from "./components/messagge"
import Counter from "./components/Contador"
import Footer from "./components/Footer"
import "./mensaje.css"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {

  return (
    <>
      <Messagge classList text="Desde un botton"/>
      <p>hola</p>
      <Messagge text="Desde otro botton"/>
      <Counter/>
      <Footer text="Esto es prueba"/>
      <Header text="No sabo que poner"/>
      <Main text="No sabe que hacer"/>
  
    </>
  )
}

export default App
