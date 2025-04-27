
// src/components/SortControls.tsx
import { SortOrder } from '../types/incident';

interface SortControlsProps {
  currentSort: SortOrder;
  onSortChange: (sort: SortOrder) => void;
}

export function SortControls({ currentSort, onSortChange }: SortControlsProps) {
  return (
    <div className="flex gap-2 items-center">
      <span className="text-sm font-medium text-gray-700">Sort by Date:</span>
      <select
        value={currentSort}
        onChange={(e) => onSortChange(e.target.value as SortOrder)}
        className="px-3 py-1.5 border rounded-md text-sm bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
}
