
function Lista(props) {

    const categoria = props.categoria
    const itensLista = [...props.itens]

    // Eu não tenho a mínima ideia do que essa linha faz além de organizar alfabéticamente e ser uma arrow function
    itensLista.sort((a, b) => a.nome.localeCompare(b.nome))

    /* Filtro de calorias

    const frutasBaixaCal = frutas.filter(fruta => fruta.calorias < 100 )
    const frutasAltaCal = frutas.filter(fruta => fruta.calorias > 100 )

    */

    const listaItens = itensLista.map(itensLista => <li key={itensLista.id}> {itensLista.nome}: &nbsp; <strong>{itensLista.calorias}</strong> </li> )

    return (
        <>
            <h3 className="categoria-tit">{categoria}</h3>
            <ul className="itens">{listaItens}</ul>
        </>
)
}

export default Lista