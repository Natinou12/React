import Lista from "./Lista"

function App() {

    const frutas = [{
        nome: "banana", calorias: 105, id: 1
    }, 
    {
        nome: "laranja", calorias: 45, id: 2
    }, 
    {
        nome: "abacaxi", calorias: 37, id: 3
    }, 
    {
        nome: "tomate", calorias: 22, id: 4
    }, 
    {
        nome: "pêra", calorias: 75, id: 5
}
]

    const vegetais = [{
        nome: "batata", calorias: 110, id: 6
    }, 
    {
        nome: "aipo", calorias: 15, id: 7
    }, 
    {
        nome: "cenoura", calorias: 25, id: 8
    }, 
    {
        nome: "milho", calorias: 63, id: 9
    }, 
    {
        nome: "brócolis", calorias: 50, id: 10
}
]

    return (
        <>
            {frutas.length > 0 ? <Lista itens={frutas} categoria="Frutas"/> : null}
            {vegetais.length > 0 ? <Lista itens={vegetais} categoria="Vegetais"/> : null}
        </>
    )
}

export default App
