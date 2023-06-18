import React from 'react';
import { menu } from './../../constants/constantes';
import { NavLink, Link } from 'react-router-dom';
export const MenuCard = () =>{
    return (
        <ul className='space-y-2 font-medium'>
            {menu.map( m =>
                (<li key={m.id}>
                    <Link to={m.to} 
                    className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                        <svg aria-hidden='true' className={m.svg.class} fill='currentColor' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d={m.svg.path_d1}  clipRule="evenodd"></path>
                        </svg>
                        <span className="ml-3">{m.name}</span>
                    </Link>
                </li>)
            )}
        </ul>
    )
}