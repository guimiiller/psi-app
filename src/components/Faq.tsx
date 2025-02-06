import Image from "next/image";
import { Button } from "./Button";

export function Faq() {
    return (
        <section className="flex flex-col items-center px-4 py-20 justify-center responsive-faq"  style={{backgroundImage:"url('./bannersec4.png')", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover"}}>
            <div className="mb-20">
                <h2 className="text-colorTextGreen text-3xl uppercase text-center">
                    Perguntas Frequentes
                </h2>
            </div>

            <div className="w-full max-w-3xl space-y-10">

                <div className="flex items-start gap-4">
                    <Image src={'/question.svg'} alt="" width={50} height={50} className="border-2 border-colorTextGray rounded-full "/>
                    <p className="bg-colorTextGreen text-white  p-5 rounded-lg w-full text-[17px]">
                        COMO FUNCIONA A PRIMEIRA SESSÃO?
                    </p>
                </div>
                <div className="flex items-start gap-4">
                    <p className="bg-gray-200 text-colorTextGray p-4 rounded-lg w-full text-[17px]">
                        A primeira sessão é um espaço para você falar sobre suas questões e entender como a terapia pode te ajudar. Também é o momento de esclarecer dúvidas e alinhar expectativas sobre o processo.
                    </p>
                    <Image src={'/user.svg'} alt="" width={50} height={50} className="border-2 border-colorTextGray rounded-full "/>
                </div>


                <div className="flex items-start gap-4">
                    <Image src={'/question.svg'} alt="" width={50} height={50} className="border-2 border-colorTextGray rounded-full "/>
                    <p className="bg-colorTextGreen text-white p-5 rounded-lg w-full text-[17px]">
                        COM QUE FREQUÊNCIA DEVO FAZER TERAPIA?
                    </p>
                </div>
                <div className="flex items-start gap-4">
                    <p className="bg-gray-200 text-colorTextGray  p-4 rounded-lg w-full text-[17px]">
                        A frequência ideal varia para cada pessoa, mas o mais comum é uma sessão por semana. Durante o acompanhamento, isso pode ser ajustado conforme sua necessidade e evolução.
                    </p>
                    <Image src={'/user.svg'} alt="" width={50} height={50} className="border-2 border-colorTextGray rounded-full "/>
                </div>
            </div>
            <Button isMargin={true} variant="filled"/>
        </section>
    );
}
