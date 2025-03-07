"use client"

import { notFound } from "next/navigation";

type Article = {
    title: string;
    content: string;
};

// Define os artigos e informa ao TypeScript que pode ser indexado por string
const articles: Record<string, Article> = {
    "saude-mental": {
        title: "Saúde Mental no Dia a Dia",
        content: `
            <h2 class="text-2xl font-semibold text-[#4CAF93] mt-8 mb-4">A Importância de Cuidar da Saúde Mental</h2>
            <p class="text-lg text-gray-800 mb-4">
                A saúde mental é fundamental para o bem-estar geral e desempenha um papel crucial em todas as áreas da nossa vida.
                Em um mundo repleto de desafios e demandas diárias, muitas vezes negligenciamos os cuidados com nossa mente, o que
                pode afetar diretamente nosso corpo e nossas emoções. Manter uma saúde mental equilibrada é essencial para
                enfrentar o estresse e os desafios do cotidiano.
            </p>
            
            <h3 class="text-2xl font-semibold text-[#4CAF93] mb-3">Dicas para Cuidar da Sua Saúde Mental</h3>
            <p class="text-lg text-gray-800 mb-4">
                Aqui estão algumas dicas simples para ajudar a manter uma boa saúde mental:
            </p>
            <ul class="list-disc pl-5 text-lg text-gray-800">
                <li><strong>Exercícios físicos:</strong> A prática regular de atividades físicas ajuda a liberar endorfinas, proporcionando sensações de bem-estar e reduzindo o estresse.</li>
                <li><strong>Meditação:</strong> Técnicas como mindfulness e respiração profunda ajudam a reduzir a ansiedade e aumentar a clareza mental.</li>
                <li><strong>Alimentação balanceada:</strong> Comer de forma saudável impacta diretamente na saúde do cérebro, ajudando a controlar o humor e a energia.</li>
                <li><strong>Descanso:</strong> Garantir uma boa noite de sono é vital para o funcionamento mental e emocional.</li>
            </ul>

            <h3 class="text-2xl font-semibold text-[#4CAF93] mt-6 mb-3">A Prática Diária</h3>
            <p class="text-lg text-gray-800 mb-4">
                Incorporar essas práticas na rotina pode ser um desafio, mas o impacto na saúde mental pode ser significativo. 
                Comece com pequenas ações e vá ajustando conforme as necessidades do seu corpo e mente. O importante é cuidar de si mesmo 
                para manter um equilíbrio saudável.
            </p>
        `
    },
    "ansiedade": {
        title: "Ansiedade e Como Lidar",
        content: `
            <h2 class="text-2xl font-semibold text-[#4CAF93] mt-8 mb-4">Entendendo a Ansiedade</h2>
            <p class="text-lg text-gray-800 mb-4">
                A ansiedade é uma resposta natural do corpo ao estresse, mas quando em excesso, pode interferir no bem-estar diário. 
                Compreender como a ansiedade se manifesta e as formas de lidar com ela é crucial para manter a saúde mental.
            </p>
            
            <h3 class="text-2xl font-semibold text-[#4CAF93] mb-3">Principais Causas da Ansiedade</h3>
            <p class="text-lg text-gray-800 mb-4">
                As causas da ansiedade podem variar de pessoa para pessoa, mas alguns fatores comuns incluem:
            </p>
            <ul class="list-disc pl-5 text-lg text-gray-800 mb-4">
                <li><strong>Pressões no trabalho ou nos estudos:</strong> A alta demanda por resultados pode gerar sensação de sobrecarga.</li>
                <li><strong>Relacionamentos interpessoais:</strong> Conflitos com amigos, familiares ou colegas podem causar estresse emocional.</li>
                <li><strong>Incertezas sobre o futuro:</strong> Medo de mudanças ou o que está por vir pode gerar preocupações excessivas.</li>
            </ul>

            <h3 class="text-2xl font-semibold text-[#4CAF93] mt-6 mb-3">Estratégias para Controlar a Ansiedade</h3>
            <p class="text-lg text-gray-800 mb-4">
                Felizmente, existem diversas maneiras de controlar a ansiedade. Algumas delas incluem:
            </p>
            <ul class="list-disc pl-5 text-lg text-gray-800 mb-4">
                <li><strong>Respiração profunda:</strong> Técnicas de respiração ajudam a acalmar o sistema nervoso e diminuir os sintomas da ansiedade.</li>
                <li><strong>Exercícios físicos:</strong> A prática regular de atividades físicas ajuda a reduzir o estresse e liberar endorfinas, que promovem sensações de bem-estar.</li>
                <li><strong>Planejamento e organização:</strong> Estabelecer metas realistas e gerenciar o tempo pode diminuir a sobrecarga mental.</li>
            </ul>
            
            <h3 class="text-2xl font-semibold text-[#4CAF93] mt-6 mb-3">Busque Ajuda Profissional</h3>
            <p class="text-lg text-gray-800 mb-4">
                Se a ansiedade persistir e começar a afetar a qualidade de vida, procurar a ajuda de um profissional de saúde mental pode ser essencial. 
                A terapia e, em alguns casos, a medicação, são abordagens eficazes para o tratamento da ansiedade.
            </p>
        `
    },
    "terapia": {
        title: "Importância da Terapia",
        content: `
            <h2 class="text-2xl font-semibold text-[#4CAF93] mt-8 mb-4">O que é Terapia?</h2>
            <p class="text-lg text-gray-800 mb-4">
                A terapia é uma forma de tratamento que oferece suporte psicológico para quem busca entender e lidar com questões emocionais.
                Ela pode ser realizada de diversas formas, incluindo terapias cognitivas, comportamentais, psicanalíticas, entre outras.
            </p>
            
            <h3 class="text-2xl font-semibold text-[#4CAF93] mb-3">Por que a Terapia é Importante?</h3>
            <p class="text-lg text-gray-800 mb-4">
                A terapia tem diversos benefícios, tanto para quem está enfrentando dificuldades emocionais, quanto para aqueles que querem se
                desenvolver emocionalmente. Alguns dos principais benefícios incluem:
            </p>
            <ul class="list-disc pl-5 text-lg text-gray-800 mb-4">
                <li><strong>Autoconhecimento:</strong> A terapia permite que a pessoa se entenda melhor e se conheça em um nível profundo.</li>
                <li><strong>Resolução de conflitos internos:</strong> Muitas vezes, a terapia ajuda a resolver dilemas internos, promovendo a paz interior.</li>
                <li><strong>Apoio emocional:</strong> Em momentos difíceis, o terapeuta oferece um espaço seguro e acolhedor para expressar sentimentos.</li>
                <li><strong>Melhoria no bem-estar:</strong> Ao aprender a lidar com emoções, o bem-estar geral melhora significativamente.</li>
            </ul>

            <h3 class="text-2xl font-semibold text-[#4CAF93] mt-6 mb-3">Como Funciona a Terapia?</h3>
            <p class="text-lg text-gray-800 mb-4">
                A terapia pode ser realizada de forma individual ou em grupo. Durante as sessões, o terapeuta utiliza técnicas específicas 
                para ajudar o paciente a entender suas emoções, pensamentos e comportamentos. O número de sessões pode variar dependendo 
                das necessidades da pessoa.
            </p>
            
            <h3 class="text-2xl font-semibold text-[#4CAF93] mt-10 mb-3">Terapia como Prevenção e Desenvolvimento Pessoal</h3>
            <p class="text-lg text-gray-800 mb-4">
                A terapia não é apenas para quem enfrenta problemas psicológicos graves, mas também para aqueles que desejam melhorar sua
                qualidade de vida, alcançar um autoconhecimento mais profundo e desenvolver habilidades emocionais para lidar com as 
                adversidades do dia a dia.
            </p>
        `
    }
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
    const article = articles[params.slug];

    if (!article) return notFound(); 

    return (
        <main className="mx-auto py-10 px-5 bg-[#FBFBFB]" style={{backgroundImage:"url('../bannersec3.png')", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover"}}>
            <div className="max-w-6xl mx-auto rounded-md shadow-xl p-10">
                <h1 className="text-4xl font-semibold text-[#4CAF93] mb-6">{article.title}</h1>
                <div className="text-lg text-gray-800" dangerouslySetInnerHTML={{ __html: article.content }}></div>
            </div>
        </main>
    );
}
