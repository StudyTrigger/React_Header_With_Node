import React, { useEffect, useState } from "react";
import { getMenuItems } from "../services/menu.service";
import '../style.css'

const Header = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
            const data = await getMenuItems();
            setMenuItems(data);
        };
        fetchMenu();
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">Study Trigger</div>
                <ul className="navbar-links">
                    {menuItems.map((item) => (
                         <li><a key={item._id}>{item.menuName}</a></li>
                    ))}
                    {/* <li><a href="#contact">Contact</a></li> */}
                </ul>
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            {/* <header className="bg-blue-600 text-white p-4">
                <nav className="flex space-x-4">
                    {menuItems.map((item) => (
                        <a key={item._id} href={item.link} className="hover:underline">
                            {item.menuName}
                        </a>
                    ))}
                </nav>
            </header> */}
        </>

    );
};

export default Header;
