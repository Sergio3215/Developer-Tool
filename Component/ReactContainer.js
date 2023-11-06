import { useState } from "react";
import FieldReact from "./FieldReact";
import ViewReact from "./ViewReact";

export default function ReactContainer(){

    const [script, setScript] = useState("")

    const handlerChange = (value)=>{
        setScript(value);
    }

    return(
        <>
            {/* <FieldReact handlerChange={handlerChange}/> */}
            <ViewReact script={script}/>
        </>
    )
}