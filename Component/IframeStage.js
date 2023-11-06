export default function IframeStage({url}){
    return <iframe className="dark text-foreground bg-black" src={url} width={500} height={700} frameBorder={0}/>
}