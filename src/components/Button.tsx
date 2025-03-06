import Link from "next/link";
import Image from "next/image";

export function Button({ isMargin, variant }: { isMargin: boolean; variant: "filled" | "transparent" }) {
    return (
        <div className={`max-w-xs ${isMargin ? "mt-14" : "mt-10"}`}>
            <Link
                href="#"
                className={`
                    flex items-center justify-center gap-2
                    ${variant === "filled" ? "bg-colorTextGreen text-white hover:bg-colorTextHover" : "bg-transparent text-colorTextBtn border border-colorTextGreen"} 
                    py-[17px] px-7 uppercase text-[16px] transition 
                    hover:bg-colorTextGreen hover:text-white
                `}
            >
                AGENDE SUA CONSULTA  
                <Image src={'/whatswhite.svg'} alt="Whats Icon" width={27} height={27} />
            </Link>
        </div>
    );
}
