import Image from "next/image";

export function Whats() {
  return (
    <div className="fixed bottom-4 right-4 z-50 whats">
      <a href="https://api.whatsapp.com/send?phone=+99999999&text=Olá!%20" target="_blank">
        <div className="relative">
          <Image
            src={'/whatswhite.svg'}
            alt="Fale Conosco pelo Whatsapp"
            width={65}
            height={65}
            title="Fale Conosco pelo Whatsapp"
            className="w-16 h-16 bg-colorTextGreen rounded-full p-2 shadow-lg"
          />
          <span className="absolute top-[-5px] right-[-5px] bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
            1
          </span>
        </div>
      </a>
    </div>
  );
}
