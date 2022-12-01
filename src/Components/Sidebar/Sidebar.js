import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {sidebarData} from './SidebarData';
import './Sidebar.css';
import { Cross as Hamburger } from 'hamburger-react';
const Sidebar = () => { 
    const  [isOpen, setOpen] = useState(false);

    // const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <div className = "navbar">
            {/* <Link to = "#" className = "menu-bars">
                <Hamburger toggled={isOpen} size='25' color='rgb(146, 144, 144)' rounded toggle = {setOpen}/>
            </Link> */}
        </div>
        <nav className='nav-menu active'>
        <ul className = 'nav-menu-items'>
            {sidebarData.map((item, index) => {
                return (
                    <li key = {index} className = {item.cName}>
                        <Link to = {item.path}>
                            {item.icons}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
        </nav>
        </>
    );
};

export default Sidebar;