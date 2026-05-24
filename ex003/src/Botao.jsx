
// Estilo em módulo
// import estilo from "./Botao.module.css"

// Inline

function Botao() {
    const estilo = {

    backgroundColor: "rgb(0, 38, 255)",

    color: "white",

    padding: "10px 20px",

    borderRadius: "10px",

    border: "none",

    cursor: "pointer",

    }
    return(
        <button style={estilo}>Clique-me</button>
    )
}

export default Botao