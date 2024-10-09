"use client";
import { useState, useEffect } from "react";
import CharacterCard from "./components/CharacterCard";
import { Character } from "./types/types";
import Filter from "./components/Filter";
import { BASE_URL } from "./utils/api";
export default function HomePage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  useEffect(() => {
    async function fetchCharacters() {
      try {
        const res = await fetch(`${BASE_URL}/character`);
        if (!res.ok) {
          throw new Error("Failed to fetch characters");
        }
        const data = await res.json();
        setCharacters(data.results || []);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    }
    fetchCharacters();
  }, []);
  const filteredCharacters = characters.filter((char) => {
    return (
      (!statusFilter || char.status === statusFilter) &&
      (!genderFilter || char.gender === genderFilter)
    );
  });
  return (
    <div className="container mx-auto">
      <Filter
        statusFilter={statusFilter}
        genderFilter={genderFilter}
        setStatusFilter={setStatusFilter}
        setGenderFilter={setGenderFilter}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCharacters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
}
