import { useRef, useState } from "react";

export const RefExample = () => {

    const [num, setCount] = useState(0)
    const saveNum = useRef(0)
    let unSaveNum = 0

    const autoFocus = useRef(null)

    const OnClick = () => {
        // setCount(num + 1)
        // setCount(num + 1)
        setCount((prev) => prev + 1)
        
        saveNum.current += 1
        unSaveNum += 1

        console.log(`saveNum: ${saveNum.current} -- unSaveNum: ${unSaveNum}`)
    }
    
    const OnClickFocus = () => {
        autoFocus.current.focus()
    }

    return (
        <div>
            <p>{num}</p>
            <button onClick={OnClick}>Click me</button>
            <button onClick={OnClickFocus}>Click me 2</button>

            <input ref={autoFocus} placeholder="Yoo"/>
        </div>
    )
}