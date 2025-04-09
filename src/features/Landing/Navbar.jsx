import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='fixed w-full z-50 shadow-lg backdrop-blur-md'>
            <div className='flex items-center justify-between px-6 md:px-12 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white'>
                {/* Logo */}
                <Link to="/">
                    <h1 className='text-2xl font-bold tracking-wide animate-fade-in-down'>HablemosOnline</h1>
                </Link>

                {/* Botón hamburguesa en móviles */}
                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Menú en pantallas grandes */}
                <ul className='hidden md:flex gap-6 font-medium text-lg'>
                    <li>
                        <Link to='/tipos' className='hover:text-yellow-300 transition-all duration-300 hover:underline underline-offset-4'>
                            Tipos de comunicación
                        </Link>
                    </li>
                    <li>
                        <Link to='/funciones' className='hover:text-yellow-300 transition-all duration-300 hover:underline underline-offset-4'>
                            Funciones del lenguaje
                        </Link>
                    </li>
                    <li>
                        <Link to='/no-verbal' className='hover:text-yellow-300 transition-all duration-300 hover:underline underline-offset-4'>
                            Comunicación no verbal
                        </Link>
                    </li>
                    <li>
                        <Link to='/equipo' className='hover:text-yellow-300 transition-all duration-300 hover:underline underline-offset-4'>
                            Trabajos del equipo
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Menú desplegable en móviles */}
            {isOpen && (
                <ul className='md:hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-6 py-4 space-y-3'>
                    <li>
                        <Link to='/tipos' onClick={() => setIsOpen(false)} className='block hover:text-yellow-300'>
                            Tipos de comunicación
                        </Link>
                    </li>
                    <li>
                        <Link to='/funciones' onClick={() => setIsOpen(false)} className='block hover:text-yellow-300'>
                            Funciones del lenguaje
                        </Link>
                    </li>
                    <li>
                        <Link to='/no-verbal' onClick={() => setIsOpen(false)} className='block hover:text-yellow-300'>
                            Comunicación no verbal
                        </Link>
                    </li>
                    <li>
                        <Link to='/equipo' onClick={() => setIsOpen(false)} className='block hover:text-yellow-300'>
                            Trabajos del equipo
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
