import { useState, useEffect, useRef } from "react"

function MeuComponente() {

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    useEffect(() => {
        console.log("COMPONENTE RENDERIZADO")
        console.log(inputRef1)
    })

    function handleClick1 () {
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor = "cyan"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick2 () {
        inputRef2.current.focus()
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = "cyan"
        inputRef3.current.style.backgroundColor = ""

    }

    function handleClick3 () {
        inputRef3.current.focus()
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = "cyan"

    }

    return(
        <div>
            <button onClick={handleClick1}>
                Clique-me 1!
            </button>
            <input ref={inputRef1}/>

            <button onClick={handleClick2}>
                Clique-me 2!
            </button>
            <input ref={inputRef2}/>

            <button onClick={handleClick3}>
                Clique-me 3!
            </button>
            <input ref={inputRef3}/>
        </div>

    )
 }

export default MeuComponente