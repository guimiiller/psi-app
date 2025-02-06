import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="flex justify-around items-center w-full bg-backgroundcolor py-5">

            <Link href="/" className="hover:scale-110 transition-transform duration-300">
                <h2 className="text-colorTextGreen text-sm uppercase">Psicoly</h2>
            </Link>
            

            <ul className="flex justify-center items-center gap-10 lg:gap-20">
                <li><Link href="/" className="text-colorTextBtn text-sm tracking-wider hover:text-gray-300 transition">Home</Link></li>
                <li><Link href="#about" className="text-colorTextBtn text-sm tracking-wider hover:text-gray-300 transition">Sobre</Link></li>
                <li><Link href="#projects" className="text-colorTextBtn text-sm tracking-wider hover:text-gray-300 transition">Projetos</Link></li>
                <li><Link href="#contact" className="text-colorTextBtn text-sm tracking-wider hover:text-gray-300 transition">Contato</Link></li>
            </ul>
            

            <div className="flex gap-2">
                <Link href="https://instagram.com" target="_blank" className="text-colorTextBtn text-xl hover:text-gray-300 transition-transform duration-300 hover:scale-105">
                    <Image src={'/instagram.svg'} alt="" width={25} height={25}/>
                </Link>
                <Link href="https://facebook.com" target="_blank" className="text-colorTextBtn text-xl hover:text-gray-300 transition-transform duration-300 hover:scale-105">
                    <Image src={'/facebook.svg'} alt="" width={25} height={25}/>
                </Link>
                <Link href="https://linkedin.com" target="_blank" className="text-colorTextBtn text-xl hover:text-gray-300 transition-transform duration-300 hover:scale-105">
                    <Image src={'/linkedin.svg'} alt="" width={25} height={25}/>
                </Link>
            </div>
        </footer>
    );
}
