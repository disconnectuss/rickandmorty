"use client";
import { FilterProps } from "../types/types";
const Filter: React.FC<FilterProps> = ({
  statusFilter,
  genderFilter,
  setStatusFilter,
  setGenderFilter,
}) => {
  return (
    <div className="flex justify-center space-x-4 mb-4">
      <select
        className="p-2 border"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="">All Statuses</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        className="p-2 border"
        value={genderFilter}
        onChange={(e) => setGenderFilter(e.target.value)}
      >
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};
export default Filter;
