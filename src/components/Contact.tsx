import Image from "next/image";
import Link from "next/link";

export function Contact() {
    return (
        <section id="contact" className="relative flex flex-col items-center pt-20 pb-0 justify-center bg-backgroundcolor">
            <div className="mb-20">
                <h2 className="text-colorTextGreen text-3xl uppercase">Entre em contato</h2>
            </div>

            <div className="relative w-full flex justify-center">
                {/* Caixinha de Contato */}
                <div className="absolute top-10 left-1/2 transform -translate-x-96 bg-colorTextGreen shadow-lg p-6 rounded-md z-10 w-96 contact-box">
                    <p className="text-white flex">
                        <Image src={'/phone.svg'} alt="Phone Icon" width={18} height={18} className="mr-2" />
                        Telefone
                    </p>
                    <p className="text-white mb-4">
                        <Link href={'/'}>(11) 99999-9999</Link>
                    </p>

                    <p className="text-white flex">
                        <Image src={'/local.svg'} alt="Local Icon" width={18} height={18} className="mr-2" />
                        Endereço
                    </p>
                    <p className="text-white mb-4">
                        <Link 
                            href={'https://www.google.com/maps/place/Av.+Paulista,+S%C3%A3o+Paulo+-+SP/@-23.561354,-46.656494,1614m/data=!3m1!1e3!4m6!3m5!1s0x94ce59c8da0aa315:0xd59f9431f2c9776a!8m2!3d-23.5613545!4d-46.6564943!16zL20vMDNiNzU4?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoASAFQAw%3D%3D'} 
                            target="_blank"
                        >
                            Av. Paulista, São Paulo - SP
                        </Link>
                    </p>

                    <p className="text-white flex">
                        <Image src={'/clock.svg'} alt="Clock Icon" width={18} height={18} className="mr-2" />
                        Horário
                    </p>
                    <p className="text-white mb-4">
                        <Link href={'/'}>Seg a Sex: 08h - 18h</Link>
                    </p>
                </div>

                {/* Mapa */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197353585598!2d-46.659069224842405!3d-23.561354478799878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1738677805157!5m2!1spt-BR!2sbr"
                    width="600"
                    height="450"
                    loading="lazy"
                    className="w-full map"
                ></iframe>
            </div>
        </section>
    );
}
