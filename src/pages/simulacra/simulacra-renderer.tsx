/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface ImageData {
  main: string;
  backdrop: string;
  element_image: string;
  type_image: string;
  value_image: string;
}

interface CharacterData {
  name: string;
  type: string;
  value: string;
  element: string;
  images: ImageData;
}

const CharacterContainer: React.FC<CharacterData> = ({ name, type, value, element, images }) => {
    const elementColors: { [key: string]: string } = {
        'Volt/Frost': 'bg-indigo-200',
        'Frost/Volt': 'bg-cyan-200',
        'Physical/Frost': 'bg-sky-200',
        'Physical/Volt': 'bg-purple-200',
        'Frost/Physical': 'bg-sky-200',
        'Flame/Physical': 'bg-red-200',
        'Physical/Flame': 'bg-orange-300',
        'Physical': 'bg-amber-300',
        'Flame': 'bg-red-400',
        'Altered': 'bg-emerald-400',
        'Frost': 'bg-sky-300',
        'Volt': 'bg-purple-300',
      };

    


const backgroundColor = elementColors[element] || 'bg-purple-300';
  return (
    <div className={`flex-shrink-0 m-2 ${backgroundColor} bg-opacity-50 brightness-90 dark:brightness-100 dark:bg-opacity-10 rounded-xl transition-all transform-gpu hover:scale-105 dark:hover:brightness-110 hover:brightness-110 w-[135px] place-content-center `}>
      <div className="relative w-[135px] h-[160px]">
        <div className="flex flex-col items-center justify-center h-full">
          <img 
            loading="lazy"
  
            srcSet={images.main}
            className="aspect-[1.12] w-full object-contain object-center overflow-hidden z-[1] mt-2"
          />
          <div className="relative text-slate-900 dark:text-slate-200 text-center text-base font-bold whitespace-nowrap mt-1">
            {name}
          </div>
          <div className="flex items-center">
            <img
              loading="lazy"
              src={images?.value_image ?? ''}
              className="aspect-[6.54] object-contain w-[30px] h-[14px] overflow-hidden max-w-full mt-1 mb-2 mr-10"
            />
            <div className="flex items-center">
              <img
                loading="lazy"
                src={images.element_image}
                className="aspect-[6.54] object-contain w-[22px] h-[22px] overflow-hidden max-w-full mt-1 mb-2"
              />
              <img
                loading="lazy"
                src={images.type_image}
                className="aspect-[6.54] object-contain w-[22px] h-[22px] overflow-hidden max-w-full mt-1 mb-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterContainer;
