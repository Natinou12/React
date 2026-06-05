import { useState, useEffect } from "react"

function MeuComponente() {

    const [contar, setContar] = useState(0)
    const [cor, setCor] = useState("green")

    useEffect(() => {
        document.title = `Contagem: ${contar} ${cor}`
    }, [contar, cor])

    function adicionarContar() {
        setContar(prevContar => prevContar + 1)
    }

    function diminuirContar() {
        setContar(prevContar => prevContar - 1)
    }

    function trocarCor() {
        setCor(prevCor => prevCor === "green" ? "red" : "green")
    }

    return(
        <>
            <p style={{color: cor}} >Contagem: {contar}</p>
            <button onClick={adicionarContar}>Aumentar</button>
            <button onClick={diminuirContar}>Diminuir</button> <br />
            <button onClick={trocarCor}>Mudar cor</button>
        </>
    )
}

export default MeuComponente