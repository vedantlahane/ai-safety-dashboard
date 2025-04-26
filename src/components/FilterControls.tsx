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
      <span className="text-sm font-medium">Filter by Severity:</span>
      <div className="flex gap-1">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-3 py-1 text-sm rounded-md ${
              currentFilter === filter 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
