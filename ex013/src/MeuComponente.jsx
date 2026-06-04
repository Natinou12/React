import { useState } from "react"

function MeuComponente() {

    const [comidas, setComidas] = useState(["Maçã", "Banana", "Pêra"])

    function handleAdicionarComida() {
        const comidaNova = document.querySelector("#comidaInput").value

        document.querySelector("#comidaInput").value = ""

        setComidas(prevComida => ([...prevComida, comidaNova]))
    }

    function handleRemoverComida(index) {
        setComidas(comidas.filter((_, i) => i !== index))
    }

    return(
        <>
            <div>
                <h2>Lista de Comidas</h2>
                <ul>
                    {comidas.map((comida, index) => <li key={index} onClick={() => handleRemoverComida(index)}>{comida}</li> )}
                </ul>

                <input type="text" id="comidaInput" placeholder="Comida"/>
                <button onClick={handleAdicionarComida}>Adicionar comida</button>
            </div>
        </>
    )
}

export default MeuComponente