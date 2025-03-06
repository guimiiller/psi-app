"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export function Count() {
    const [ref1, inView1] = useInView({ triggerOnce: true });
    const [ref2, inView2] = useInView({ triggerOnce: true });
    const [ref3, inView3] = useInView({ triggerOnce: true });

    return (
        <section className="bg-colorTextGreen py-24 responsive-count">
            <div className="max-w-5xl mx-auto text-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center" ref={ref1}>
                        {inView1 && (
                            <CountUp
                                end={200}
                                duration={2}
                                suffix=" +"
                                className="text-6xl font-bold text-backgroundcolor"
                            />
                        )}
                        <p className="mt-4 text-backgroundcolor text-lg">Pacientes atendidos</p>
                    </div>
                    <div className="flex flex-col items-center" ref={ref2}>
                        {inView2 && (
                            <CountUp
                                end={8}
                                duration={2}
                                className="text-6xl font-bold text-backgroundcolor"
                            />
                        )}
                        <p className="mt-4 text-backgroundcolor text-lg">Anos de experiência</p>
                    </div>
                    <div className="flex flex-col items-center" ref={ref3}>
                        {inView3 && (
                            <CountUp
                                end={15}
                                duration={2}
                                className="text-6xl font-bold text-backgroundcolor"
                            />
                        )}
                        <p className="mt-4 text-backgroundcolor text-lg">Certificações conquistadas</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
