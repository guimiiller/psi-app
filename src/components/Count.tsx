"use client";

import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export function Count() {
    const [ref1, inView1] = useInView({ triggerOnce: true });
    const [ref2, inView2] = useInView({ triggerOnce: true });
    const [ref3, inView3] = useInView({ triggerOnce: true });

    return (
        <section className="bg-backgroundcolor pt-36 pb-20 responsive-count">
            <div className="max-w-5xl mx-auto text-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center" ref={ref1}>
                        {inView1 && (
                            <CountUp
                                end={200}
                                duration={2}
                                className="text-6xl font-bold text-colorTextGreen"
                            />
                        )}
                        <p className="mt-4 text-colorTextGray text-lg">Pacientes atendidos</p>
                    </div>
                    <div className="flex flex-col items-center" ref={ref2}>
                        {inView2 && (
                            <CountUp
                                end={8}
                                duration={2}
                                className="text-6xl font-bold text-colorTextGreen"
                            />
                        )}
                        <p className="mt-4 text-colorTextGray text-lg">Anos de experiência</p>
                    </div>
                    <div className="flex flex-col items-center" ref={ref3}>
                        {inView3 && (
                            <CountUp
                                end={15}
                                duration={2}
                                className="text-6xl font-bold text-colorTextGreen"
                            />
                        )}
                        <p className="mt-4 text-colorTextGray text-lg">Certificações conquistadas</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
