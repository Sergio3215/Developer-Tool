import ReactContainer from "./ReactContainer";
import IframeSimulator from "./iframeSimulator";

export default function Container({option, menuOptions}){
    return (
        <>
            {
                (option == "Iframe Test")?
                <IframeSimulator/>
                :
                <ReactContainer/>
            }
        </>
    )
}