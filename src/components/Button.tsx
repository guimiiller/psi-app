import Link from "next/link"

export function Button({isMargin, variant}: {isMargin: boolean, variant: "filled" | "transparent"}) {
    return (
        <div className={`max-w-xs ${isMargin ? "mt-14" : "mt-10"}`}>
            <Link
                href="#"
                className={`
                    ${variant === "filled" ? "bg-colorTextGreen text-white hover:bg-colorTextHover" : "bg-transparent text-colorTextBtn border border-colorTextGreen"} 
                    py-4 px-7 uppercase text-sm transition 
                    hover:bg-colorTextGreen hover:text-white
                `}
            >
                AGENDE SUA CONSULTA
            </Link>
        </div>
    )
}
