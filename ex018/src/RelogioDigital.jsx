import { useState, useEffect } from "react";

function RelogioDigital () {

    const [tempo, setTempo] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTempo(new Date())
        } , 1000)

        return() => {
            clearInterval(intervalId)
        }
    }, [])

    function formatarTempo () {
        let horas = tempo.getHours()
        const minutos = tempo.getMinutes()
        const segundos = tempo.getSeconds()

        return `${padZero(horas)}:${padZero(minutos)}:${padZero(segundos)}`
    }

    function padZero(numero) {
        return (numero < 10 ? "0" : "") + numero
    } 

    return(
        <div className="relogio-conteiner">
            <div className="relogio">
                <span>{formatarTempo()}</span>
            </div>
        </div>
    )
}

export default RelogioDigital