
// src/components/SortControls.tsx
import { SortOrder } from '../types/incident';

interface SortControlsProps {
  currentSort: SortOrder;
  onSortChange: (sort: SortOrder) => void;
}

export function SortControls({ currentSort, onSortChange }: SortControlsProps) {
  return (
    <div className="flex gap-2 items-center">
      <span className="text-sm font-medium">Sort by Date:</span>
      <select
        value={currentSort}
        onChange={(e) => onSortChange(e.target.value as SortOrder)}
        className="px-3 py-1 border rounded-md text-sm bg-white"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
}
