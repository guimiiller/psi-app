import Image from "next/image"

export function Contact(){
    return(
        <section className="relative flex flex-col items-center pt-20 pb0 justify-center bg-backgroundcolor">
            <div className="mb-20">
                <h2 className="text-colorTextGreen text-3xl uppercase">Entre em contato</h2>
            </div>

            <div className="relative w-full flex justify-center">
                {/* Caixinha de Contato */}
                <div className="absolute top-10 left-1/2 transform -translate-x-96 bg-colorTextGreen shadow-lg p-6 rounded-md z-10 w-96 contact-box">
                    <p className="text-white flex"><Image src={'/phone.svg'} alt="" width={18} height={18} className="mr-2" /> Telefone</p>
                    <p className="text-white mb-4">(11) 98765-4321</p>

                    <p className="text-white flex"><Image src={'/local.svg'} alt="" width={18} height={18} className="mr-2" />  Endereço</p>
                    <p className="text-white mb-4">Av. Paulista, São Paulo - SP</p>

                    <p className="text-white flex"><Image src={'/clock.svg'} alt="" width={18} height={18} className="mr-2" />  Horário</p>
                    <p className="text-white mb-4">Seg a Sex: 08h - 18h</p>
                </div>

                {/* Mapa */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197353585598!2d-46.659069224842405!3d-23.561354478799878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1738677805157!5m2!1spt-BR!2sbr"
                    width="600" 
                    height="450"  
                    loading="lazy" 
                    className="w-full"
                ></iframe>
            </div>
        </section>
    )
}
