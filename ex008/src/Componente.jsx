import { useState } from "react";

function Componente() {
    const [nome, setNome] = useState("Guest")
    const [idade, setIdade] = useState(0)
    const [isTrabalhando, setTrabalho] = useState(false)

    const updateNome = () => {
        setNome("Carlos")
    }

    const addIdade = () => {
        setIdade(idade + 1)
    }

    const altTrabalho = () => {
        setTrabalho(!isTrabalhando)
    }

    return(
        <div>
            <p>
                Nome: {nome}
            </p>
            <button type="button" onClick={updateNome}>Colocar o nome</button>

            <p>
                Idade: {idade}
            </p>
            <button type="button" onClick={addIdade}>Adicionar idade</button>

            <p>
                Trabalha: {isTrabalhando  ? "Sim" : "Não"}
            </p>
            <button type="button" onClick={altTrabalho}>Alterar trabalho</button>
        </div>
    )
}

export default Componente