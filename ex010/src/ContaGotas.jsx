import { useState } from "react"

function ContaGotas() {

    const [cor, setCor] = useState("#FFFFFF")

    // Troca cor

    const handleTrocaCor = (event) => {
        setCor(event.target.value)
    }

    return(
        <div className="conta-gotas-container">
            <h1>Conta Gotas</h1>
            <div className="cor-display" style={{backgroundColor: cor}}>
                <p>Cor selecionada: {cor}</p>
            </div>
            <label>
                Selecione uma cor: <br />
                <input type="color" value={cor} onChange={handleTrocaCor}/>
            </label>
        </div>
    )
}

export default ContaGotas