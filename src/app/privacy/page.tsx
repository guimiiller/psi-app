import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Política de Privacidade - [Nome da Psicóloga]",
  description:
    "Leia a Política de Privacidade de [Nome da Psicóloga], onde explicamos como coletamos, usamos e protegemos suas informações pessoais com total segurança e transparência.",
  keywords: "Política de Privacidade, Psicologia, privacidade, segurança de dados, coleta de informações",
  openGraph: {
    title: "Política de Privacidade - [Nome da Psicóloga]",
    description:
      "[Nome da Psicóloga] respeita sua privacidade e proteção dos seus dados. Leia nossa política para entender como tratamos suas informações.",
    url: "https://www.seusite.com.br/politica-de-privacidade",
    siteName: "[Nome da Psicóloga]",
    type: "article",
  },
  twitter: {
    card: "summary",
    site: "@seudominio", // Se houver Twitter associado
    title: "Política de Privacidade - [Nome da Psicóloga]",
    description:
      "Entenda como [Nome da Psicóloga] coleta e usa seus dados com segurança e transparência em nossa Política de Privacidade.",
  },
  robots: "index, follow",
};

export default function PrivacyPolicy() {
  return (
    <section className="h-screen flex items-center justify-center p-5 bg-backgroundcolor">
      <div className="max-w-3xl bg-colorTextGreen rounded-lg pt-6 pb-4 px-4 shadow-lg">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-white text-center text-2xl font-bold mb-4">Política de Privacidade</h1>
          <p className="text-white text-center text-sm mb-6">Última atualização: 16/02/2025</p>
        </div>

        <h2 className="text-white text-xl font-semibold mt-4">1. Introdução</h2>
        <p className="text-white text-base leading-relaxed">
          Bem-vindo(a) ao site de [Nome da Psicóloga]. Sua privacidade é importante para nós. Esta
          política explica como coletamos, usamos e protegemos suas informações.
        </p>

        <h2 className="text-white text-xl font-semibold mt-4">2. Coleta de Informações</h2>
        <p className="text-white text-base leading-relaxed">
          Podemos coletar informações como nome, e-mail, telefone e dados de
          navegação para melhorar nossos serviços.
        </p>

        <h2 className="text-white text-xl font-semibold mt-4">3. Uso das Informações</h2>
        <p className="text-white text-base leading-relaxed">
          Utilizamos seus dados para comunicação, suporte e melhorias nos nossos
          serviços.
        </p>

        <h2 className="text-white text-xl font-semibold mt-4">4. Segurança</h2>
        <p className="text-white text-base leading-relaxed">
          Implementamos medidas para proteger seus dados contra acessos não autorizados.
        </p>

        <h2 className="text-white text-xl font-semibold mt-4">5. Contato</h2>
        <p className="text-white text-base leading-relaxed">
          Para dúvidas, entre em contato pelo e-mail: <strong>[seuemail@seudominio.com]</strong>
        </p>
        <div className="mt-4">
          <Link href={'/'}>
            <Image src={'/arrowback.svg'} alt="Arrow Icon" width={40} height={40}/>
          </Link>
        </div>
      </div>
    </section>
  );
}
