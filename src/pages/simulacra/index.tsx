/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import '../../styles/globals.css';
import CharacterContainer from './simulacra-renderer';
import Link from 'next/link';

interface Character {
  name: string;
  type: string;
  value: string;
  element: string;
  images: any; // Use appropriate type
}

const ELEMENT_ICONS = {
  Physical: '/images/icons/Element_Physical.png',
  Volt: '/images/icons/Element_Volt.png',
  Frost: '/images/icons/Element_Frost.png',
  Flame: '/images/icons/Element_Flame.png',
  Altered: '/images/icons/Element_Altered.png',
}

const TYPE_ICONS = {
  DPS: '/images/icons/DPS.png',
  Fortitude: '/images/icons/Fort.png',
  Support: '/images/icons/Bene.png',
}

function Simulacra() {
  const [charactersData, setCharactersData] = useState<Character[]>([]);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../data/characterBasic/fullChar.json');

        const data = await response.json();
        setCharactersData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleElementClick = (element: string) => {
    setSelectedElement(selectedElement === element ? null : element);
  };

  const handleTypeClick = (type: string) => {
    setSelectedType(selectedType === type ? null : type);
  };

  const filteredCharacters = charactersData.filter((character) => {
    return (!selectedElement || character.element === selectedElement) &&
           (!selectedType || character.type === selectedType);
  });

  return (
  
    <div className="rounded-lg px-6 py-8 bg-opacity-50 flex flex-col items-center">
      {/* Element Images Container */}
      <div className = "flex items-center mb-10 mt-5 text-4xl">
        Simulacra
      </div>
      <div className="flex items-center">
        <h3 className="text-lg mr-2">Elements:</h3>
        <div className="flex space-x-1 bg-indigo-300 dark:bg-slate-600 bg-opacity-20 p-2 rounded-lg h-12">
          {Object.entries(ELEMENT_ICONS).map(([element, iconPath]) => (
            <img
              key={element}
              src={iconPath}
              alt={element}
              className={`cursor-pointer hover:scale-105 hover:brightness-125 transition-transform duration-300 ${selectedElement === element ? 'selected-filter-class' : ''}`}
              onClick={() => handleElementClick(element)}
            />
          ))}
        </div>
      </div>
  
      {/* Type Images Container */}
      <div className="flex items-center">
        <h3 className="text-lg mr-2 mb-5">Type:</h3>
        <div className="flex space-x-1 bg-indigo-300 dark:bg-slate-600 bg-opacity-20 p-2 rounded-lg h-12 mb-5">
          {Object.entries(TYPE_ICONS).map(([type, iconPath]) => (
            <img
              key={type}
              src={iconPath}
              alt={type}
              className={`cursor-pointer hover:scale-105 hover:brightness-125 transition-transform duration-300 ${selectedType === type ? 'selected-filter-class' : ''}`}
              onClick={() => handleTypeClick(type)}
            />
          ))}
        </div>
      </div>

      {/* Characters Display */}
      <div className="flex flex-wrap justify-center h-full w-full">
        <div className="flex flex-wrap justify-center h-full w-full max-w-6xl"> {/* Adjust inner content width and centering */}
          {filteredCharacters.map((character, index) => (
            <Link legacyBehavior key={index} href={`/simulacra/${character.tag}`}>
              <a>
                <CharacterContainer {...character} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Simulacra;