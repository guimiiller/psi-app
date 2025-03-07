'use client';

import { useRouter } from 'next/navigation';

export function Articles() {
    const router = useRouter();

    const articles = [
        {
            title: "Saúde Mental no Dia a Dia",
            description: "Dicas práticas para manter uma boa saúde mental na rotina agitada.",
            image: "/article1.jpg",
            slug: "saude-mental"
        },
        {
            title: "Ansiedade e Como Lidar",
            description: "Estratégias eficazes para gerenciar e reduzir a ansiedade.",
            image: "/article2.jpg",
            slug: "ansiedade"
        },
        {
            title: "Importância da Terapia",
            description: "Entenda os benefícios da terapia e como ela pode transformar sua vida.",
            image: "/article3.jpg",
            slug: "terapia"
        }
    ];

    return (
        <section className="bg-backgroundcolor py-16 px-6 text-center">
            <div>
                <h2 className="text-colorTextGreen text-3xl mb-20 text-center">
                    CONTEÚDOS PARA SEU BEM-ESTAR
                </h2>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-10 responsive-cards">
                {articles.map((article, index) => (
                    <div 
                        key={index} 
                        className="relative rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 h-96 flex items-end border-[3px] border-colorTextGreen"
                        onClick={() => router.push(`/articles/${article.slug}`)}
                    >
                        {/* Imagem de fundo */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center" 
                            style={{ backgroundImage: `url(${article.image})` }}
                        ></div>
                        
                        {/* Sobreposição escura para legibilidade */}
                        <div className="absolute inset-0 bg-black/45"></div>

                        {/* Texto */}
                        <div className="relative p-6 text-left text-white z-10">
                            <h3 className="text-xl font-medium text-colorTextGreen">{article.title}</h3>
                            <p className="text-sm mt-2">{article.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
