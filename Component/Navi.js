import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useEffect, useState } from "react"

export default function Navi({ handlerClickSelect }) {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        const options = ["Iframe Test", "ReactJS Test"];
        setMenu(options);
    }, [])

    const handlerClick = (value) => {
        handlerClickSelect(value.target.innerText);
    }

    return (
        <>
            <Navbar isBordered>
                <NavbarContent className="sm:flex gap-4" justify="center">
                    {
                        menu.map(menu => {
                            return (

                                <NavbarItem>
                                    <li className=" block decoration-0 cursor-pointer" onClick={(e) => handlerClick(e)} value={menu}>{menu}</li>
                                </NavbarItem>
                            )
                        })
                    }
                </NavbarContent>
            </Navbar>
            <nav className="w-full bg-red-500">
                <ul className="flex gap-5">
                </ul>
            </nav>
        </>
    )
}