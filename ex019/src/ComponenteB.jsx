import ComponenteC from "./ComponenteC"

function ComponenteB() {

    return(
        <div className="caixa">
            <h1>Componente B</h1>
            <ComponenteC />
        </div>
    )
}

export default ComponenteB