import ComponenteD from "./ComponenteD"
import { useContext } from "react"
import { usuarioContexto } from "./ComponenteA"

function ComponenteC() {

    const usuario = useContext(usuarioContexto)

    return(
        <div className="caixa">
            <h1>Componente C</h1>
            <h2>Olá denovo, {usuario}</h2>
            <ComponenteD />
        </div>
    )
}

export default ComponenteC