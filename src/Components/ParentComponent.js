import { useCallback,useState } from "react"
import ChildComponent from "./ChildComponent"
const ParentComponent  =  ()=>{
const [count,set_counter] =  useState(0);
    const handleClick = useCallback(()=>{
        "A am created again"
        set_counter(count+1);
    },[count])

    return(
        <>
        <ChildComponent onClick ={handleClick}> HEY I AM THE CHILD</ChildComponent>
        </>
    )
}

export default ParentComponent