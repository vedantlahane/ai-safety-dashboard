// src/components/FilterControls.tsx
import { FilterValue } from '../types/incident';

interface FilterControlsProps {
  currentFilter: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

export function FilterControls({ currentFilter, onFilterChange }: FilterControlsProps) {
  const filters: FilterValue[] = ["All", "Low", "Medium", "High"];
  
  return (
    <div className="flex gap-2 items-center">
      <span className="text-sm font-medium text-gray-700">Filter by Severity:</span>
      <div className="flex gap-1">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              currentFilter === filter 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {filter === "Low" && "🟢 "}
            {filter === "Medium" && "🟠 "}
            {filter === "High" && "🔴 "}
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

