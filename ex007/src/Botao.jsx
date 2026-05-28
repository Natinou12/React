
function Botao() {

    const handleClick = (e) => e.target.textContent = "Clicou!" // e = evento

    // const handleClick = () => console.log("Clicou! 😃")

    /* let contar = 0

    const handleClick = (nome) => {
        if (contar < 100) {
            contar++

            console.log(`${nome} você me clicou ${contar} vezes!`)
        } else {
            console.log("Ok, já chega.")
        }
    }

    */

    // const handleCLick2 = (nome) => console.log(`${nome} pare de clicar!`)

    return(
        <button type="button" onDoubleClick={(e) => handleClick(e)} >Clique-me!</button>
    )
}

export default Botao