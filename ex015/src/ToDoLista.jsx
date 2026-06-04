import { useState } from "react"

function ToDoLista() {
    
    const [tarefas, setTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")

    function handleTrocaInput (evento) {
        setNovaTarefa(evento.target.value)
    }

    function adicionarTarefa () {
        if(novaTarefa.length !== 0) {
            setTarefas(prevTarefa => ([...prevTarefa, novaTarefa]))

            setNovaTarefa("")
        }
    }

    function deletarTarefa (index) {
        const tarefasAtualizadas = tarefas.filter((_, i) => i !== index)

        setTarefas(tarefasAtualizadas)
    }

    function moverTarefaCima (index) {
        if (index > 0 ) {
            const tarefasAtualizadas = [...tarefas];

            [tarefasAtualizadas[index], tarefasAtualizadas[index - 1]] = [tarefasAtualizadas[index - 1], tarefasAtualizadas[index]]

            setTarefas(tarefasAtualizadas)
        }
    }

    function moverTarefaBaixo (index) {
        if (index < tarefas.length - 1 ) {
            const tarefasAtualizadas = [...tarefas];

            [tarefasAtualizadas[index], tarefasAtualizadas[index + 1]] = [tarefasAtualizadas[index + 1], tarefasAtualizadas[index]]

            setTarefas(tarefasAtualizadas)
        }
    }


    return (
        <>
            <div className="to-do-lista">
                <h1>To-Do-Lista</h1>
            </div>

            <div>
                <input 
                    className="colocar-tarefa"
                    type="text"
                    placeholder="Coloque uma tarefa..."
                    value={novaTarefa}
                    onChange={handleTrocaInput}
                    />
                <button 
                    className="add-botao"
                    onClick={adicionarTarefa}

                    >
                    Adicionar tarefa
                </button>
            </div>

            <ol>
                {tarefas.map((tarefa, index) => <li key={index}>
                    <span className="texto">{tarefa}</span>
                    <button 
                        className="deletar-botao"
                        onClick={() => deletarTarefa(index)}
                        >
                        Deletar
                    </button>
                    <button 
                        className="mover-botao"
                        onClick={() => moverTarefaCima(index)}
                        >
                        👆
                    </button>
                    <button 
                        className="mover-botao"
                        onClick={() => moverTarefaBaixo(index)}
                        >
                        👇
                    </button>
                </li> )}
            </ol>
        </>
    )
}


export default ToDoLista