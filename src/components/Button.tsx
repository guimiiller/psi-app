import Link from "next/link"

export function Button(){
    return(
        <>
             <div className="max-w-xs mt-10 sm:mt-6">
                <Link href="#" className="bg-transparent text-colorTextBtn border border-colorTextGreen py-4 px-7 uppercase text-sm transition hover:bg-colorTextGreen">
                    AGENDE SUA CONSULTA
                </Link>
            </div>   
        </>
    )
}