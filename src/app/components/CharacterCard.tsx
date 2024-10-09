"use client";
import { Character } from "../types/types";
interface CharacterCardProps {
  character: Character;
}
const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="border p-4 rounded shadow-lg bg-[#6096e7]">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-auto mb-4 rounded"
      />
      <h2 className="text-xl font-bold">{character.name}</h2>
      <p className="text-gray-100">Status: {character.status}</p>
      <p className="text-gray-100">Species: {character.species}</p>
      <p className="text-gray-100">Gender: {character.gender}</p>
      <p className="text-gray-100">Origin: {character.origin.name}</p>
      <p className="text-gray-100">
        Last Known Location: {character.location.name}
      </p>
    </div>
  );
};
export default CharacterCard;
