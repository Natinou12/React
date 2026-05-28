import { useState } from "react"

function Contador() {
    const [contar, setContar] = useState(0)

    const incrementar = () => {
        setContar(contar + 1)
    }

    const decrementar = () => {
        setContar(contar - 1)
    }

    const resetar = () => {
        setContar(0)
    }

    return(
        <div className="contador-container">
            <p className="contador-display">
                {contar}
            </p>
            <button type="button" className="contador-botao" onClick={decrementar}>Diminuir</button>
            <button type="button" className="contador-botao" onClick={resetar}>Resetar</button>
            <button type="button" className="contador-botao" onClick={incrementar}>Aumentar</button>
        </div>
    )
}

export default Contador