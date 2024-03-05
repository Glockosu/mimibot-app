/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @next/next/no-title-in-document-head */
// pages/simulacra/[characterName].tsx
import React from 'react';
import fs from 'fs/promises';
import path from 'path';
import Head from 'next/head';


interface character {
  name: string;
  tag: string;
  type: string;
  value: string;
  element: string;
  images: {
    main: string;
    backdrop: string;
    element_image: string;
    type_image: string;
    value_image: string;
  };
}

interface CharacterPageProps {
  character: character; 
}

interface ShatterChargeInfo {
  tier: string;
  value: string;
}

interface WeaponEffect {
  title: string;
  description: string;
}

interface Ability {
  name: string;
  type: string;
  imgSrc: string;
  input?: string[];
  description: string;
  breakdown?: string[];
}

interface RecommendedMatrix {
  name: string;
  pieces: number;
}

interface CharacterData {
  name: string;
  imgSrc: string;
  element: string;
  type: string;
  isMeta: boolean;
  shatter: ShatterChargeInfo;
  charge: ShatterChargeInfo;
  baseStats: string[];
  materials: string[];
  weaponEffects: WeaponEffect[];
  advancements: string[];
  abilities: Ability[];
  abilitiesVideoSrc: string;
  rating: number[];
  recommendedPairings: string[];
  recommendedMatrices: RecommendedMatrix[];
}

interface CharacterPageData {
  characterData: CharacterData; 
}


const CharacterPage: React.FC<CharacterPageProps & CharacterPageData> = ({ character, characterData }) => {
  const {tag, images } = character;
  const { name, element, type, shatter, charge, baseStats, weaponEffects, advancements } = characterData;

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background image container */}
      <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-right bg-fixed" 
           style={{ backgroundImage: `url(/images/backdrop/${tag}.webp)`, backgroundPosition: 'right calc(30% + 20px)' }} 
           aria-hidden="true">
        {/* Overlay for translucency */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
  
      {/* Content container with independent scroll */}
      <div className="z-10 p-8 rounded-lg shadow-lg max-w-4xl w-full mx-4 mt-10 mb-10 bg-slate-300 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 overflow-auto">
        {/* Use Tailwind CSS for text styling instead of h1, h2, etc., for a cleaner look */}
        <div className="text-4xl font-bold mb-4 dark:text-white">{name}</div>
        <div className="text-xl mb-2 dark:text-gray-300">Type: {type.toUpperCase()}</div>
        <div className="text-xl mb-2 dark:text-gray-300">Element: {element.toUpperCase()}</div>
        <div className="text-xl mb-2 dark:text-gray-300">Shatter: {shatter.tier} - {shatter.value}</div>
        <div className="text-xl mb-2 dark:text-gray-300">Charge: {charge.tier} - {charge.value}</div>
  
        {/* Weapon Effects */}
        <div className="mt-4">
          <div className="text-2xl font-semibold mb-2 dark:text-white">Weapon Effects:</div>
          {weaponEffects.map((effect, index) => (
            <div key={index} className="mb-2">
              <div className="text-xl font-semibold dark:text-gray-200">{effect.title}</div>
              <div className="dark:text-gray-400">{effect.description}</div>
            </div>
          ))}
        </div>
  
        {/* Advancements */}
        <div className="mt-4">
          <div className="text-2xl font-semibold mb-2 dark:text-white">Advancements:</div>
          {advancements.map((advancement, index) => (
            <div key={index} className="dark:text-gray-400">{advancement}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  
  const charactersDir = path.join(process.cwd(), 'public/data/characterBasic');
  const characterFiles = await fs.readFile(path.join(charactersDir, 'fullChar.json'), 'utf-8');
  const characters = JSON.parse(characterFiles);

  const paths = characters.map(({ tag }) => ({
    params: { characterName: tag },
  }));

  console.log("Paths:", paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { characterName } = params;
  console.log("Params:", params);
  const charactersDir = path.join(process.cwd(), 'public/data/characterBasic');
  const characterFiles = await fs.readFile(path.join(charactersDir, 'fullChar.json'), 'utf-8');
  const characters = JSON.parse(characterFiles);

  const character = characters.find(({ tag }) => tag === characterName);
  console.log("Character data:", character);
  if (!character) {
    return {
      notFound: true,
    };
  }

  const jsonPath = path.join(process.cwd(), `public/data/characterInfo/${characterName}.json`);
  const jsonData = await fs.readFile(jsonPath, 'utf-8');
  const characterData = JSON.parse(jsonData);

  return {
    props: {
      characterData, character
    },
  };
}

export default CharacterPage;
