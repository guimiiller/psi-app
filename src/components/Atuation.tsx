'use client';

import { useState } from "react";
import { Button } from "./Button";

export function Atuation() {
  const [selectedArea, setSelectedArea] = useState("Ansiedade");

  const areas = [
    {
      title: "Ansiedade",
      subtitle: "Lorem Ipsum é simplesmente",
      description: [
        "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem",
        "Bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos",
      ],
    },
    {
      title: "Depressão",
      subtitle: "Lorem Ipsum é simplesmente",
      description: [
        "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem",
        "Bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos",
      ],
    },
  ];

  const handleAreaClick = (area: string) => {
    setSelectedArea(area);
  };

  const currentArea = areas.find((area) => area.title === selectedArea);

  return (
    <section className="flex flex-col items-center px-4 py-16 justify-center gap-8 bg-backgroundcolor responsive-atuation">
      <div>
        <h2 className="text-colorTextGreen text-3xl">ÁREAS DE ATUAÇÃO</h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center px-4 py-8 md:px-16 lg:justify-center lg:gap-8 lg:py-16 w-full">
        <div
          className="flex flex-col pl-14 pr-28 border rounded-md border-colorTextGreen justify-center mb-8 lg:mb-0 lg:w-[700px] lg:h-[500px] md:w-[500px] md:h-[500px] sm:w-full area-container"
        >
          <h3 className="text-base text-colorTextGray mb-1">Sobre Mim</h3>
          <h2 className="text-[35px] text-colorTextGreen mb-8 uppercase">
            {currentArea?.title}
          </h2>
          <h4 className="text-lg font-medium text-colorTextGreen mb-4">
            {currentArea?.subtitle}
          </h4>
          {currentArea?.description.map((paragraph, index) => (
            <p className="text-colorTextGray mb-4 text-base" key={index}>
              {paragraph}
            </p>
          ))}
          <Button isMargin={true} />
        </div>

        <div
          className="grid gap-4 lg:flex lg:flex-col mb-24 buttons-grid"
          style={{ width: "100%", maxWidth: "300px" }}
        >
          {areas.map((area) => (
            <button
              key={area.title}
              onClick={() => handleAreaClick(area.title)}
              className={`p-4 rounded-md shadow-md text-white ${
                selectedArea === area.title
                  ? "bg-colorTextHover"
                  : "bg-colorTextGreen hover:bg-colorTextHover"
              } transition-colors lg:w-full sm:h-[150px] md:h-[180px] lg:h-[193px]`}
            >
              {area.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}