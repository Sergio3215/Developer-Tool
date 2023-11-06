import { Button, ButtonGroup, NextUIProvider } from "@nextui-org/react";
import Navi from "../Component/Navi";
import Container from "../Component/Container";
import { useEffect, useState } from "react";

export default function App() {

    const [option, setOption] = useState('Iframe Test');

    const sizePage = ()=>{
        document.querySelector('body').style.height = innerHeight+'px';
        document.querySelector('main').style.height = innerHeight+'px';
        // document.querySelector('iframe').style.height = innerHeight - 200+'px';
        document.querySelector('iframe').style.width = "60%";
    }

    useEffect(()=>{
        sizePage();
        window.addEventListener("resize", sizePage)
        // document.querySelector('iframe').style.height = "70%";
        // document.querySelector('iframe').style.width = "70%";
    },[])

    const handlerClickSelect = (value) => {
        setOption(value);
    }

    return (
        <>
            <Navi handlerClickSelect={handlerClickSelect} />
            <Container option={option} />
        </>
    )
}