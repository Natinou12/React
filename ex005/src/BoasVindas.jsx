
function BoasVindas(props) {

    /* Método 1

                if (props.isLogado) {
                return (
                    <h2>Boas-Vindas {props.usuario}!</h2>
                )
            } else {
                return (
                    <h2>Por favor faça login para prosseguir.</h2>
                )
            }
        }
    */

    /* Método 4

    const boasVindas = <h2 className="boas-vindas">Boas-Vindas {props.usuario}!</h2>
    const logIn = <h2 className="login">Por favor faça login para prosseguir.</h2>

    return (props.isLogado ? boasVindas : logIn)

    */

    /* Método 3

    const logRes = (props.isLogado) ? <h2>Boas-Vindas {props.usuario}!</h2> : <h2>Por favor faça login para prosseguir.</h2>

    return logRes

    */

    // Método 4

    const usuario = props.usuario ?? "Guest"

    return (props.isLogado ? <h2 className="boas-vindas">Boas-Vindas {usuario}!</h2> : <h2 className="login">Por favor faça login para prosseguir.</h2>)

}

export default BoasVindas