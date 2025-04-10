import { useState } from 'react';
import Navbar from '../Landing/Navbar';
import Footer from '../Landing/Footer';

export default function Equipo() {
    const integrantes = [
        {
            nombre: 'Alejandro Granada Muñoz',
            foto: '/imgs/Nano.jpg',
            documentos: [
                {
                    nombre: 'La Sapa Caramelo',
                    archivo: '/docs/TrabNano/SapaNano.pdf',
                },
                {
                    nombre: 'Tipos de comunicación',
                    archivo: '/docs/TrabNano/AGM-JELUtdc.pdf',
                },
                {
                    nombre: 'Funcion del lenguaje',
                    archivo: '/docs/TrabNano/Referencial-Lenguaje.pdf',
                },
                {
                    nombre: 'Comunicacion no verbal',
                    archivo: '/docs/TrabNano/LaKinesis.pdf',
                },
            ],
        },
        {
            nombre: 'Juan Esteban Londoño Uribe',
            foto: '/imgs/Bama.jpg',
            documentos: [
                {
                    nombre: 'Tipos de comunicación',
                    archivo: '/docs/TrabBama/AGM-JELUtdc.pdf',
                },
                {
                    nombre: 'Funcion del lenguaje',
                    archivo: '/docs/TrabBama/Referencial-Lenguaje.pdf',
                },
                {
                    nombre: 'Comunicacion no verbal',
                    archivo: '/docs/TrabBama/Proxemia.pdf',
                },
            ],
        },
        {
            nombre: 'Brayan Mariaca Durango',
            foto: '/imgs/Mariaca.jpg',
            documentos: [
                {
                    nombre: 'La Sapa Caramela',
                    archivo: '/docs/TrabMariaca/LasapaMaricaca.pdf',
                },
                {
                    nombre: 'Tipos de comunicación',
                    archivo: '/docs/TrabMariaca/TiposdeComu.pdf',
                },
                {
                    nombre: 'Funcion del lenguaje',
                    archivo: '/docs/TrabMariaca/metalinguística.pdf',
                },
                {
                    nombre: 'Comunicacion no verbal',
                    archivo: '/docs/TrabMariaca/LaKinesis.pdf',
                },
            ],
        },
        {
            nombre: 'Samuel Mora Franco',
            foto: '/imgs/Mra.jpg',
            documentos: [
                {
                    nombre: 'Tipos de comunicación',
                    archivo: '/docs/TrabMora/TiposdeComu.pdf',
                },
                {
                    nombre: 'Funcion del lenguaje',
                    archivo: '/docs/TrabMora/Referencial.pdf',
                },
                {
                    nombre: 'Comunicacion no verbal',
                    archivo:
                        '/docs/TrabMora/EmblemasAdemanes.pdf',
                },
            ],
        },
    ];

    const [activo, setActivo] = useState(null);

    const toggle = (index) => {
        setActivo(activo === index ? null : index);
    };

    return (
        <>
            <section className='min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4'>
                <h1 className='text-3xl md:text-4xl font-bold text-center text-blue-700 mb-10 mt-4'>Nuestro equipo</h1>

                <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'>
                    {integrantes.map((persona, index) => (
                        <div
                            key={index}
                            className='bg-white rounded-2xl shadow-xl p-6 transition-transform hover:scale-105'>
                            <button
                                onClick={() => toggle(index)}
                                className='flex flex-col items-center w-full focus:outline-none'>
                                <img
                                    src={persona.foto}
                                    alt={persona.nombre}
                                    className='w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4'
                                />

                                <h2 className='text-lg font-semibold text-center text-gray-800'>{persona.nombre}</h2>

                                <span className='text-sm text-blue-600 mt-2 hover:underline'>
                                    {activo === index ? 'Ocultar documentos' : 'Ver documentos'}
                                </span>
                            </button>

                            {activo === index && (
                                <div className='mt-4 border-t pt-3'>
                                    <p className='text-sm text-gray-600 mb-2'>📄 Documentos:</p>
                                    <ul className='space-y-1 text-base'>
                                        {persona.documentos.map((doc, i) => (
                                            <li key={i}>
                                                <a
                                                    href={doc.archivo}
                                                    download
                                                    className='text-blue-700 hover:underline'>
                                                    🔗 {doc.nombre}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>


        </>
    );
}
