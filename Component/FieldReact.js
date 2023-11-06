export default function FieldReact({handlerChange}){
    return <textarea onChange={(e)=>handlerChange(e.target.value)}></textarea>
}