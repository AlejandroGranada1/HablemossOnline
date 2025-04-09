import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white py-6 mt-16 shadow-inner">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <p className="text-sm">&copy; {new Date().getFullYear()} HablemosOnline. Todos los derechos reservados.</p>
                
                <ul className="flex gap-4 text-sm font-medium">
                    <li>
                        <Link to="/tipos" className="hover:text-yellow-300 transition-colors duration-300">
                            Tipos
                        </Link>
                    </li>
                    <li>
                        <Link to="/funciones" className="hover:text-yellow-300 transition-colors duration-300">
                            Funciones
                        </Link>
                    </li>
                    <li>
                        <Link to="/no-verbal" className="hover:text-yellow-300 transition-colors duration-300">
                            No verbal
                        </Link>
                    </li>
                    <li>
                        <Link to="/equipo" className="hover:text-yellow-300 transition-colors duration-300">
                            Equipo
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
