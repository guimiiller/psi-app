import Image from "next/image";

export function About() {
    return (
        <section 
            id="about" 
            className="flex flex-col items-center justify-center py-20 px-4 responsive-section-about w-full" 
            style={{ 
                backgroundImage: "url('./bannersec2.png')", 
                backgroundRepeat: "no-repeat", 
                backgroundPosition: "center", 
                backgroundSize: "cover" 
            }}
        >
            <div className="flex items-center justify-center">
                <div className="flex flex-col max-w-[790px] w-full md:ml-10 lg:ml-20 responsive-about mr-20">
                    <h4 className="text-lg text-colorTextGray mb-2">Quem sou eu</h4>
                    <h2 className="text-5xl text-colorTextGreen mb-6 md:mb-16">PSI. [NOME DA PSI.]</h2>
                    
                    <div className="max-w-[600px]">
                        <p className="text-colorTextGray text-base">
                            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de 
                            <span className="text-colorTextGreen"> impressos</span>, e vem sendo utilizado desde o século XVI, quando um impressor 
                            <span className="text-colorTextGreen"> desconhecido</span> pegou uma
                        </p>
                        <p className="text-colorTextGray text-base my-6">
                            Bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum 
                            <span className="text-colorTextGreen"> sobreviveu</span> não só a cinco séculos
                        </p>
                        <p className="text-colorTextGray text-base">
                            Como também ao salto para a <span className="text-colorTextGreen"> editoração</span> eletrônica, permanecendo essencialmente
                            inalterado.
                        </p>
                    </div>
                    
                    <div className="flex flex-col mt-8 md:mt-16 max-w-lg">
                        <Image src={"/quotes.svg"} alt="Quotes Icons" width={30} height={30} />
                        <h3 className="text-colorTextGreen text-xl md:text-2xl ml-4 md:ml-10 italic font-medium">
                            Lorem Ipsum é simplesmente uma simulação de texto da indústria
                        </h3>
                    </div>
                </div>
                
                <div className="flex-1 mt-10 md:mt-0 flex flex-col items-center">
                    <div className="w-60 h-80 md:w-72 md:h-96 mx-auto md:ml-10 lg:ml-36 border border-colorTextGreen"></div>
                    <h3 className="text-colorTextGray text-base mt-3 mr-10 crp">CRP 77/77777</h3>
                </div>
            </div>
        </section>
    );
}