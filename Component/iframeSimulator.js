
import { useState } from 'react'
import IframeStage from './IframeStage'
import Search from './Search'

export default function IframeSimulator() {

    const [url, setUrl] = useState("");

    const handlerClick = (value)=>{
        setUrl(value)
    }

    return (
        <>
            <Search handlerClick={handlerClick}/>
            <IframeStage url={url}/>
        </>
    )
}