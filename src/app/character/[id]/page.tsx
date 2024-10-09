import { BASE_URL } from "@/app/utils/api";
import { Character } from "../../types/types";
async function getCharacter(id: string): Promise<Character> {
  const res = await fetch(`${BASE_URL}/${id}`);
  const data = await res.json();
  return data;
}
export default async function CharacterPage({
  params,
}: {
  params: { id: string };
}) {
  const character = await getCharacter(params.id);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <img src={character.image} alt={character.name} className="mb-4" />
        <h2 className="text-2xl font-bold">{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Gender: {character.gender}</p>
      </div>
    </div>
  );
}
