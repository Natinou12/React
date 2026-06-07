import { useState, useEffect, useRef } from "react";

function Cronometro() {

    const [isExecutando, setIsExecutando] = useState(false)
    const [tempoDecorrido, setTempoDecorrido] = useState(0)
    const intervaloIdRef = useRef(null)
    const tempoInicialRef = useRef(0)

    useEffect(() => {
        if (isExecutando) {
            intervaloIdRef.current = setInterval(() => {
                setTempoDecorrido(Date.now() - tempoInicialRef.current)
            }, 10);
        }

        return () => {
            clearInterval(intervaloIdRef.current)
        }
    }, [isExecutando])

    function começar() {
        setIsExecutando(true)

        tempoInicialRef.current = Date.now() - tempoDecorrido

        console.log(tempoInicialRef.current)
    }

    function parar() {
        setIsExecutando(false)
    }

    function resetar() {
        setTempoDecorrido(0)
        setIsExecutando(false)
    }

    function formatarTempo() {
        // let horas = Math.floor(tempoDecorrido / (1000 * 60 * 60))
        let minutos = Math.floor(tempoDecorrido / (1000 * 60) % 60)
        let segundos = Math.floor(tempoDecorrido / (1000) % 60)
        let milissegundos = Math.floor((tempoDecorrido % 1000) / 10)

        // horas = String(horas).padStart(2, "0")
        minutos = String(minutos).padStart(2, "0")
        segundos = String(segundos).padStart(2, "0")
        milissegundos = String(milissegundos).padStart(2, "0")

        return `${minutos}:${segundos}:${milissegundos}`
    }
    
    return(
        <>
        <div className="cronometro">
            <div className="display">
                {formatarTempo()}
            </div>
            <div className="controles">
                <button className="começar-botao" onClick={começar}>Começar</button>
                <button className="parar-botao" onClick={parar}>Parar</button>
                <button className="resetar-botao" onClick={resetar}>Resetar</button>
            </div>
        </div>
        
        </>
    )
}

export default Cronometro