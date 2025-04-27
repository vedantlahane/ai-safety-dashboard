
// src/components/SortControls.tsx
import { SortOrder } from '../types/incident';

interface SortControlsProps {
  currentSort: SortOrder;
  onSortChange: (sort: SortOrder) => void;
}

export function SortControls({ currentSort, onSortChange }: SortControlsProps) {
  return (
    <div className="flex gap-2 items-center">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort by Date:</span>
      <select
        value={currentSort}
        onChange={(e) => onSortChange(e.target.value as SortOrder)}
        className="px-3.5 py-1.5 border rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
}
