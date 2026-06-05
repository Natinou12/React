import { useContext } from "react"
import { usuarioContexto } from "./ComponenteA"

function ComponenteD() {

    const usuario = useContext(usuarioContexto) 

    return(
        <div className="caixa">
            <h1>Componente D</h1>
            <h2>Adeus, {usuario}</h2>
        </div>
    )
}

export default ComponenteD