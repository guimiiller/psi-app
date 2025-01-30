"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type Benefit = {
    icon: string;
    title: string;
    description: string;
};

const benefits: Benefit[] = [
    { icon: "/self.svg", title: "Autoconhecimento", description: "Compreenda melhor suas emoções e pensamentos." },
    { icon: "/smile.svg", title: "Menos ansiedade", description: "Gerencie a ansiedade e viva com mais leveza." },
    { icon: "/hands.svg", title: "Relacionamentos saudáveis", description: "Aprenda a construir conexões mais fortes e equilibradas." },
    { icon: "/life.svg", title: "Qualidade de vida", description: "Desenvolva hábitos que promovem bem-estar e felicidade." }
];

export function Benefits() {
    const [open, setOpen] = useState(false);
    const [selectedBenefit, setSelectedBenefit] = useState<Benefit | null>(null);

    const handleOpenModal = (benefit: Benefit) => {
        setSelectedBenefit(benefit);
        setOpen(true);
    };

    return (
        <TooltipProvider>
            <section className="flex flex-col items-center px-4 py-20 justify-center gap-8 bg-backgroundcolor">
                <h2 className="text-colorTextGreen text-3xl">BENEFÍCIOS DA TERAPIA</h2>

                <div className="flex flex-wrap justify-center gap-8 mt-14">
                    {benefits.map((benefit, index) => (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <div
                                    className="h-[240px] w-[280px] bg-colorTextGreen rounded-md flex flex-col items-center justify-center gap-6 cursor-pointer transform transition-transform duration-300 hover:scale-105"
                                    onClick={() => handleOpenModal(benefit)}
                                >
                                    <Image src={benefit.icon} alt={benefit.title} width={60} height={60} />
                                    <h4 className="text-white text-center text-[17px]">{benefit.title}</h4>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="bg-colorTextGreen text-white text-sm px-2 py-1 rounded shadow-md">
                                Clique para saber mais
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>

                {/* Modal */}
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent className="bg-colorTextGreen p-6 rounded-sm shadow-lg text-center border-none flex flex-col items-center justify-center">
                        <DialogHeader className="flex flex-col items-center justify-center">
                            {selectedBenefit && (
                                <>
                                    <Image src={selectedBenefit.icon} alt={selectedBenefit.title} width={60} height={60} className="mx-auto"/>
                                    <DialogTitle className="text-xl font-normal text-white mt-4">{selectedBenefit.title}</DialogTitle>
                                </>
                            )}
                        </DialogHeader>
                        <p className="text-white mt-2">{selectedBenefit?.description}</p>
                    </DialogContent>
                </Dialog>
            </section>
        </TooltipProvider>
    );
}
