// src/components/FilterControls.tsx
import { FilterValue } from '../types/incident';

interface FilterControlsProps {
  currentFilter: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

export function FilterControls({ currentFilter, onFilterChange }: FilterControlsProps) {
  const filters: FilterValue[] = ["All", "Low", "Medium", "High"];
  
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Severity:</span>
      <div className="flex flex-wrap gap-1.5">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-3.5 py-1.5 text-sm rounded-lg transition-all duration-200 ${
              currentFilter === filter 
                ? 'bg-blue-600 dark:bg-blue-700 text-white shadow-sm' 
                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
            }`}
          >
            {filter === "Low" }
            {filter === "Medium" }
            {filter === "High"}
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
