import Ejercicio1 from './components/Ejercicio1/Ejercicio1'
import Footer from './components/Footer'
import Header from './components/Header'
import TituloPrincipal from './components/TituloPrincipal'
import Lista from './components/Lista'
import './index.css'
import { productos, productosCondicional } from './constants/productos'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <TituloPrincipal />
        <Ejercicio1 />
        <Lista param={productos} /> 
      </main>
      <Footer />
    </>
  )
}
