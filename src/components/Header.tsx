'use client'

import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Função para monitorar o scroll e fechar o menu se a página for rolada
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setMenuOpen(false); // Fecha o menu ao rolar para baixo
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className="absolute top-0 left-0 w-full z-50 bg-transparent transition duration-400 text-uppercase tracking-wider mt-5">
            <nav className="flex justify-between items-center w-full h-16 px-6 lg:px-12">
                {/* Logo */}
                <Link href="/" className="hover:scale-110 transition-transform duration-300">
                    <h2 className="text-colorTextGreen text-sm uppercase">LOGO</h2>
                </Link>

                {/* Navegação Desktop */}
                <ul className="hidden md:flex justify-center items-center gap-10 lg:gap-32 mx-auto">
                    <li><Link href="/" className="text-colorTextBtn text-sm tracking-wider hover:text-gray-300 transition">Home</Link></li>
                    <li><Link href="#atuation" className="text-colorTextBtn text-sm tracking-wider hover:text-gray-300 transition">Áreas de atuação</Link></li>
                    <li><Link href="#about" className="text-colorTextBtn text-sm tracking-wider hover:text-gray-300 transition">Sobre</Link></li>
                    <li><Link href="#patients" className="text-colorTextBtn text-sm tracking-wider hover:text-gray-300 transition">Pacientes</Link></li>
                    <li><Link href="#contact" className="text-colorTextBtn text-sm tracking-wider hover:text-gray-300 transition">Contato</Link></li>
                </ul>

                {/* Botão Mobile */}
                <div 
                    className="block md:hidden cursor-pointer z-50 relative"
                    onClick={() => setMenuOpen(!isMenuOpen)}
                >
                    <div className={`w-7 h-0.5 bg-colorTextGreen rounded-full my-1 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[6px] bg-white" : ""}`}></div>
                    <div className={`w-7 h-0.5 bg-colorTextGreen rounded-full my-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></div>
                    <div className={`w-7 h-0.5 bg-colorTextGreen rounded-full my-1 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[6px] bg-white" : ""}`}></div>
                </div>
            </nav>

            {/* Menu Mobile */}
            <div className={`fixed top-0 right-0 w-full h-full bg-colorTextGreen flex flex-col items-center justify-center md:hidden transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <ul className="flex flex-col items-center justify-center gap-6">
                    <li><Link href="/" className="text-white text-lg uppercase tracking-wider px-4 py-2 hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link href="#about" className="text-white text-lg uppercase tracking-wider px-4 py-2 hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>Sobre</Link></li>
                    <li><Link href="#projects" className="text-white text-lg uppercase tracking-wider px-4 py-2 hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>Projetos</Link></li>
                    <li><Link href="#contact" className="text-white text-lg uppercase tracking-wider px-4 py-2 hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>Contato</Link></li>
                </ul>
            </div>
        </header>
    );
}
