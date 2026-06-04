import { useState } from "react";

function MeuComponente() {

    const [carro, setCarro] = useState({
        ano: "2022", 
        fabricante: "Toyota", 
        modelo: "Corolla"
    })

    function handleTrocaAno(evento) {
        setCarro(prevCarro => ({...prevCarro, ano: evento.target.value}))
    }

        function handleTrocaFabricante(evento) {
        setCarro(prevCarro => ({...prevCarro, fabricante: evento.target.value}))
    }

        function handleTrocaModelo(evento) {
        setCarro(prevCarro => ({...prevCarro, modelo: evento.target.value}))
    }

    return(
        <>
            <div>
                <p>Seu carro favorito é: {carro.ano} {carro.fabricante} {carro.modelo} </p>

                <input type="number" value={carro.ano} onChange={handleTrocaAno} placeholder="Ano"/> <br />
                <input type="text" value={carro.fabricante} onChange={handleTrocaFabricante} placeholder="Fabricante"/> <br />
                <input type="text" value={carro.modelo} onChange={handleTrocaModelo} placeholder="Modelo"/> <br />
            </div>
        </>
    )
}

export default MeuComponente