import PropTypes from "prop-types"

function Estudante(props) {

    // Substituto do defaultProps

    const nome = props.nome ?? "Guest"
    const idade = props.idade ?? 0
    const isEstudando = props.isEstudando ?? false

    return (
        <div className="estudante">
            <p>
                Nome: {nome} <br />
                Idade: {idade} <br />
                Estuda: {isEstudando ? "Sim." : "Não." }
            </p>
        </div>
    )
}

/* Simplesmente não funciona

Estudante.propTypes = {
    nome: PropTypes.string,
    idade: PropTypes.number,
    isEstudando: PropTypes.bool
}

*/

/* O mesmo do de antes

Estudante.defaultProps = {
    nome: "Guest",
    idade: 0,
    isEstudando: false
}

*/

export default Estudante