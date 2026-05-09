function Comida() {
    const comidas = ["Laranja", "Banana"]

    return(
        <ul>
            <li>Maçã</li>
            <li>Pêra</li>
            <li>{comidas[0]}</li>
            <li>{comidas[1]}</li>
        </ul>
    )
}

export default Comida