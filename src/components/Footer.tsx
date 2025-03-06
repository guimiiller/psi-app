import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="flex justify-around items-center w-full bg-backgroundcolor py-5 responsive-footer">
            
            {/* Políticas de Privacidade */}
            <Link href={'/privacy'}>
                <h2 className="text-colorTextGreen text-sm uppercase">
                    Políticas de Privacidade
                </h2>
            </Link> 

            {/* Ícones das redes sociais */}
            <div className="flex gap-2">
                {[
                    { href: "https://instagram.com", src: "/instagram.svg", alt: "Instagram" },
                    { href: "https://facebook.com", src: "/facebook.svg", alt: "Facebook" },
                    { href: "https://linkedin.com", src: "/linkedin.svg", alt: "LinkedIn" }
                ].map((social, index) => (
                    <Link 
                        key={index} 
                        href={social.href} 
                        target="_blank" 
                        className="text-colorTextBtn text-xl hover:text-gray-300 transition-transform duration-300 hover:scale-105"
                    >
                        <Image src={social.src} alt={social.alt} width={25} height={25} />
                    </Link>
                ))}
            </div>
            
            {/* Direitos autorais */}
            <div>
                <p className="text-colorTextGreen text-[14px]">
                    © 2025 by Crow. Todos os direitos reservados
                </p>
            </div>

        </footer>
    );
}
