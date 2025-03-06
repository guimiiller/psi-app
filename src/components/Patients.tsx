'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from './Button';

interface Patients {
  name: string;
  age: number;
  message: string;
  image: string;
}

const patients: Patients[] = [
  {
    name: 'Aliyah Brown',
    age: 27,
    message:
      'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem. Bandeja de tipos e os embaralhou para fazer um livro.',
    image: '/testimonial1.svg',
  },
  {
    name: 'John Doe',
    age: 34,
    message:
      'Lorem Ipsum sobreviveu não só a cinco séculos, mas também ao salto para a editoração eletrônica.',
    image: '/testimonial1.svg',
  },
  {
    name: 'Jane Smith',
    age: 29,
    message:
      'Se você precisa de um texto de preenchimento, Lorem Ipsum é a solução perfeita!',
    image: '/testimonial1.svg',
  },
];

export function Patients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === patients.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? patients.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id='patients' className="flex flex-col items-center px-4 py-20 responsive-patients"  style={{backgroundImage:"url('./bannersec3.png')", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover"}}>
      <div>
        <h2 className="text-colorTextGreen text-3xl mb-8 sm:mb-14 text-center">
          O QUE MEUS PACIENTES DIZEM
        </h2>
      </div>


      <div className="relative w-full max-w-md sm:max-w-4xl h-[240px] sm:h-[200px] flex flex-col sm:flex-row items-center">

        <div className="relative w-full h-full overflow-hidden">
          {patients.map((patients, index) => (
            <div
              key={index}
              className={`absolute w-full h-full p-4 sm:p-6 bg-colorTextGreen text-white rounded-md shadow-md flex flex-col sm:flex-row items-center sm:justify-between transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >

              <div className="flex items-center space-x-4">
                <Image
                  src={patients.image}
                  alt={patients.name}
                  className="rounded-full object-cover border-2 p-1 border-white"
                  width={75}
                  height={75}
                />
                <div className="px-4 mb-2 sm:mb-0">
                  <h3 className="text-base sm:text-lg font-bold">{patients.name}</h3>
                  <p className="text-sm">{patients.age} years</p>
                </div>
              </div>

              <p className="mt-3 sm:mt-0 ml-0 sm:ml-4 text-sm sm:flex-1 pr-3 sm:pr-5 text-center sm:text-left">
                {patients.message}
              </p>
            </div>
          ))}
        </div>


        <div className="flex flex-row sm:flex-col gap-2 sm:ml-10 mt-4 sm:mt-0 items-center justify-center">
          <button
            onClick={handlePrevious}
            className="bg-transparent text-white"
          >
            <Image src={'/arrowtop.svg'} alt="Anterior" width={25} height={5} />
          </button>
          <div className="bg-colorTextGray w-14 sm:w-[2px] h-[2px] sm:h-14 opacity-40"></div>
          <button
            onClick={handleNext}
            className="bg-transparent text-white"
          >
            <Image src={'/arrowbottom.svg'} alt="Próximo" width={25} height={5} />
          </button>
        </div>
      </div>
      <Button isMargin={true} variant='filled' />
    </section>
  );
}
