import { useState, useEffect } from "react"

function App() {
  
  const [largura, setLargura] = useState(window.innerWidth)
  const [altura, setAltura] = useState(window.innerHeight)

  function handleRedimensionar() {
    setLargura(window.innerWidth)
    setAltura(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener("resize", handleRedimensionar)
    console.log("EVENTO ADICIONADO")

    return() => {
      window.removeEventListener("resize", handleRedimensionar)
      console.log("EVENTO REMOVIDO")
      }
  }, [])

  useEffect(() => {
    document.title = `Altura: ${altura} Largura: ${largura}`
  }, [altura, largura])

  return (
    <>
      <p>Altura da janela: {altura}px</p>
      <p>Largura da janela: {largura}px</p>
    </>
  )
}

export default App
