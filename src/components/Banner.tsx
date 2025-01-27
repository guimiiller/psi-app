import Link from "next/link";
import { Button } from "./Button";

export function Banner() {
    return (
        <section className="min-h-screen bg-cover bg-bottom bg-gradient-to-t from-black/70 via-black/70 to-transparent flex items-center w-full" 
            style={{ backgroundImage: "url('/BannerBg.jpg')", backgroundPosition:"top" }}>
            <div className="flex flex-col max-w-2xl ml-16 mt-32 text-white space-y-12 sm:ml-8 sm:mt-16 items-start text-left text-align-banner">
                <h1 className="text-colorTextGreen tracking-wider text-7xl ">
                    PSICÓLOGA LUDIMYLA LOPES
                </h1>
                <h2 className="text-xl font-light text-colorTextGray sm:text-lg">
                    Aqui, você encontra um espaço seguro para o autoconhecimento e o bem-estar emocional.
                </h2>
                <Button />
            </div>
        </section>
    );
}
