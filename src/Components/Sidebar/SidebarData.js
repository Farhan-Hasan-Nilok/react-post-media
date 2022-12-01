import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';

export const sidebarData = [
    {
        title: 'Home',
        path: '/',
        icons: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },

    {
        title: 'Friend',
        path: '/',
        icons: <MdIcons.MdPeopleAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Marketplace',
        path: '/',
        icons: <AiIcons.AiFillShop />,
        cName: 'nav-text'
    },
    {
        title: 'Friend',
        path: '/',
        icons: <MdIcons.MdOutlineOndemandVideo />,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/',
        icons: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Save',
        path: '/',
        icons: <FaIcons.FaSave />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/',
        icons: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
]