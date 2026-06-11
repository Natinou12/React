import { Outlet } from "react-router-dom"
import Navbar from "./componentes/Navbar"

function App() {


  return (
    <>
      <Navbar />
      <h1>React Router</h1>
      <Outlet />
      <p>Footer</p>
    </>
  )
}

export default App
