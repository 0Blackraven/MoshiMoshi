import { useRef } from "react"
import Button from "./button";
import {Navigation} from "lucide-react";

const links = ['nexus', 'vault', 'prologue', 'about', 'contact'];

const NavBar = () => {

    const navRef = useRef<HTMLDivElement|null>(null);

    return (
        <div ref={navRef} className="fixed top-0 inset-x-0 z-50 h-16 transition-all duration-700 sm:inset-x-6">
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between">
                    <div className="flex items-center gap-7">
                        <img 
                            src="/img/logo.png"
                            alt="logo"
                            className="w-10"
                        />
                        <Button
                            id="product-btn"
                            title="Products"
                            leftIcon={<Navigation className="size-4 fill-black stroke-0"/>}
                            parentClass="bg-blue-50 md:flex hidden items-center justify-center gap-2"
                        />
                    </div>

                    <div className="flex items-center h-full">
                        <div className="hidden md:block">
                            {links.map(link => (
                                <a className="nav-hover-btn" key={link} href={`#${link.toLowerCase()}`}>
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default NavBar