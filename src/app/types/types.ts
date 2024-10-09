import { Dispatch, SetStateAction } from "react";
export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  }
  export interface FilterProps {
    statusFilter: string;
    genderFilter: string;
    setStatusFilter: Dispatch<SetStateAction<string>>;
    setGenderFilter: Dispatch<SetStateAction<string>>;
  }