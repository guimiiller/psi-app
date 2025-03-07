import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";

export function Banner() {
    return (
        <section className="min-h-screen bg-cover bg-bottom bg-gradient-to-t from-black/70 via-black/70 to-transparent flex items-center w-full section-banner" 
            style={{ backgroundImage: "url('/BannerBg.jpg')", backgroundPosition:"left" }}>
            <div className="responsive-banner flex flex-col">
                <div className="flex flex-col max-w-2xl mb-10 ml-16 mt-24 text-white items-start text-left text-align-banner">
                    <h1 className="text-colorTextGreen tracking-wider text-7xl my-[48px]">
                        PSICÓLOGA [NOME DA PSI.]
                    </h1>
                    <h2 className="text-xl font-light text-colorTextGray sm:text-lg mb-2">
                        Aqui, você encontra um espaço seguro para o autoconhecimento e o bem-estar emocional.
                    </h2>
                    <Button isMargin={false} variant="filled" />
                    <div className="flex gap-2 mt-[40px]">
                        <div className=" bg-colorTextGreen rounded-full p-[6px] transition-transform duration-300 hover:scale-105 cursor-pointer">
                            <Image src={'/instagramwhite.svg'} alt="Whats Icon" width={26} height={26}/>
                        </div>
                        <div className=" bg-colorTextGreen rounded-full p-[6px] transition-transform duration-300 hover:scale-105 cursor-pointer">
                            <Image src={'/linkedinwhite.svg'} alt="Whats Icon" width={26} height={26}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 mt-10">
                <div className="w-60 h-80 mx-auto lg:ml-36 border border-colorTextGreen image-banner"></div>
            </div>
        </section>
    );
}
