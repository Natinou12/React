import Estudante from "./Estudante"

function App() {
    return (
      <>
        <Estudante nome="José" idade={23} isEstudando={true} />
        <Estudante nome="Patrick" idade={46} isEstudando={false} />
        <Estudante nome="Juan" idade={19} isEstudando={true} />
        <Estudante nome="Carla" idade={26} isEstudando={false} />
        <Estudante />
      </>
    )
}

export default App
