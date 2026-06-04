import { useState } from "react"

function MeuComponente() {

    const [carros, setCarros] = useState([])
    const [carroAno, setAno] = useState(new Date().getFullYear())
    const [carroFabricante, setFabricante] = useState("")
    const [carroModelo, setModelo] = useState("")

    function handleAdicionarCarro() {
        const carroNovo = {ano: carroAno, fabricante: carroFabricante, modelo: carroModelo}

        setCarros(prevCarro => [...prevCarro, carroNovo])

        setAno(new Date().getFullYear())
        setFabricante("")
        setModelo("")
    }

    function handleRemoverCarro(index) {
        setCarros(prevCarro => prevCarro.filter((_, i) => i !== index))
    }

    function handleTrocarAno(evento) {
        setAno(evento.target.value)
    }

    function handleTrocarFabricante (evento) {
        setFabricante(evento.target.value)
    }

    function handleTrocarModelo (evento) {
        setModelo(evento.target.value)
    }
    
    return(
        <>
            <div>
                <h2>Lista de Carros</h2>
                <ul>
                    {carros.map((carro, index) => <li key={index} onClick={() => handleRemoverCarro(index)}>
                        {carro.ano} {carro.fabricante} {carro.modelo}
                    </li> )}
                </ul>

                <input type="number" value={carroAno} onChange={handleTrocarAno} /> <br />
                <input type="text" value={carroFabricante} onChange={handleTrocarFabricante} placeholder="Fabricante"/> <br />
                <input type="text" value={carroModelo} onChange={handleTrocarModelo} placeholder="Modelo"/> <br />

                <button onClick={handleAdicionarCarro}>Adicione o carro</button>
            </div>
        </>
    )
}

export default MeuComponente