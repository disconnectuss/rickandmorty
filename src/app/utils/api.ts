export const BASE_URL = "https://rickandmortyapi.com/api";
export async function getCharacters(status?: string, gender?: string) {
  const query = new URLSearchParams();
  if (status) query.append("status", status);
  if (gender) query.append("gender", gender);
  const res = await fetch(`${BASE_URL}/character?${query.toString()}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch characters");
  }
  const data = await res.json();
  return data.results;
}
export async function getCharacterById(id: string) {
  const res = await fetch(`${BASE_URL}/character/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch character");
  }
  const character = await res.json();
  return character;
}
