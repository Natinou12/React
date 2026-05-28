
function Imagem() {
    const imagemUrl = './src/assets/gato.jpg'

    const handleClick = (e) => e.target.style.display = "none"

    return(
        <img src={imagemUrl} alt="Gato" onClick={(e) => handleClick(e)}/>
    )
}

export default Imagem