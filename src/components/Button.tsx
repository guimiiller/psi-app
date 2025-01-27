import Link from "next/link"

export function Button({isMargin}: {isMargin: boolean}){
    return(
        <>
             <div className={`"max-w-xs sm:mt-6" ${isMargin ? "mt-14" : "mt-10"}`}>
                <Link href="#" className="bg-transparent text-colorTextBtn border border-colorTextGreen py-4 px-7 uppercase text-sm transition hover:bg-colorTextGreen hover:text-white">
                    AGENDE SUA CONSULTA
                </Link>
            </div>   
        </>
    )
}