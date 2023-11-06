import { useState } from "react";
import { Input } from "@nextui-org/react";
import {Button} from '@nextui-org/button'

export default function Search({handlerClick}){
    const [label, setLabel] = useState('');
    return(
    <div className="flex">
        <Input
          type="url"
          placeholder="https://www.example.com"
          labelPlacement="outside"
          onChange={(e)=>setLabel(e.target.value)}
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small"></span>
            </div>
          }
        />
        <Button onClick={()=>handlerClick(label)}>
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
            stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
            Buscar
        </Button>
    </div>
    )
}