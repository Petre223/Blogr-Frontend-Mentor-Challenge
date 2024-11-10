import { useState } from "react";
import Buttons from "./Buttons";
import { footer } from "../Data/Footer";
import { Menu } from "./Menu";
import logo from "../images/logo.svg";

export const Header = () => {
    const [navLinks, setNavLinks] = useState(footer)
    return (
        <>
            <header className="absolute p-5">
                <div>
                    <img src={logo} alt="Blogr logo" />
                </div>
                {/* Links */}
                <nav>
                    <ul>
                        {navLinks.map(( { id, title, links }) => (
                            <li key={id}>{title}</li>
                        ))}
                    </ul>
                </nav>
                <Buttons />
                <Menu />
            </header>
        </>
    )
}