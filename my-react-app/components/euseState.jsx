import { useState } from "react";



export const StateExample = () => {
    const [num, setCount] = useState(0)

    const OnClick = () => {
        // setCount(num + 1)
        // setCount(num + 1)
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
        
    }
    
    
    
    return (
        <div>
            <p>{num}</p>
            <button onClick={OnClick}>Click me</button>
            <button>Click me 2</button>
        </div>
    )
}
