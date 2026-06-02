import { useState } from "react";

function Componente() {
    const [nome, setNome] = useState("Guest")
    const [quantidade, setQuantidade] = useState(1)
    const [instrucoes, setInstrucoes] = useState("")
    const [metodo, setMetodo] = useState("")
    const [entrega, setEntrega] = useState("Entrega")

    function handleTrocaNome(evento) {
        setNome(evento.target.value)
    }

    function handleTrocaQuantidade(evento) {
        setQuantidade(evento.target.value)
    }

    function handleTrocaInstrucoes(evento) {
        setInstrucoes(evento.target.value)
    }

    function handleTrocaMetodo(evento) {
        setMetodo(evento.target.value)
    }

    function handleTrocaEntrega(evento) {
        setEntrega(evento.target.value)
    }

    return(
        <div>
            <input value={nome} onChange={handleTrocaNome}/>
            <p>Nome: {nome}</p>

            <input type="number" value={quantidade} onChange={handleTrocaQuantidade} min="1" max="5" />
            <p>Quantidade: {quantidade}</p>

            <textarea value={instrucoes} onChange={handleTrocaInstrucoes} placeholder="Instruções de Entrega"></textarea>
            <p>Instruções: {instrucoes}</p>

            <select value={metodo} onChange={handleTrocaMetodo}>
                <option>Selecione uma opção</option>
                <option value="Dinheiro">Dinheiro</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Cartão-presente</option>
            </select>
            <p>Pagamento: {metodo}</p>

            <label>
                <input type="radio" value="Buscar" checked={entrega === "Buscar"} onChange={handleTrocaEntrega}/>
                Buscar
            </label>
            <label>
                <input type="radio" value="Entrega" checked={entrega === "Entrega"} onChange={handleTrocaEntrega}/>
                Entrega
            </label>
            <p>
                Forma de envio: {entrega}
            </p>
        </div>
    )
}

export default Componente