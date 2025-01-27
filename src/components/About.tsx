import Image from "next/image";

export function About() {
    return (
        <section className="bg-backgroundcolor flex flex-col md:flex-row items-center justify-center py-24 px-4 responsive-section-about">
            <div className="flex flex-col flex- max-w-xl w-full md:ml-10 lg:ml-20 responsive-about">
                <h4 className="text-lg text-colorTextGray mb-2">Sobre Mim</h4>
                <h2 className="text-5xl text-colorTextGreen mb-6 md:mb-16">
                    PSI. LUDIMYLA LOPES
                </h2>
                <p className="text-colorTextGray text-base">
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de{" "}
                    <span className="text-colorTextGreen">impressos</span>, e vem sendo utilizado desde o século XVI, quando um impressor{" "}
                    <span className="text-colorTextGreen">desconhecido</span> pegou uma
                </p>
                <p className="text-colorTextGray text-base my-6">
                    Bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum{" "}
                    <span className="text-colorTextGreen">sobreviveu</span> não só a cinco séculos
                </p>
                <p className="text-colorTextGray text-base">
                    Como também ao salto para a <span className="text-colorTextGreen">editoração</span> eletrônica, permanecendo essencialmente
                    inalterado.
                </p>

                <div className="flex flex-col mt-8 md:mt-16 max-w-lg">
                    <Image src={"/quotes.svg"} alt="" width={30} height={30} />
                    <h3 className="text-colorTextGreen text-xl md:text-2xl ml-4 md:ml-10 italic font-medium">
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria
                    </h3>
                </div>
            </div>
            <div className="flex-1 mt-10 md:mt-0">
                <div className="w-60 h-80 md:w-72 md:h-96 mx-auto md:ml-10 lg:ml-36 border border-colorTextGreen"></div>
            </div>
        </section>
    );
}
