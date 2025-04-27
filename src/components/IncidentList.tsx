// src/components/IncidentList.tsx
import { Incident } from '../types/incident';
import { IncidentItem } from './IncidentItem';

interface IncidentListProps {
  incidents: Incident[];
  expandedId: number | null;
  onToggleExpand: (id: number) => void;
}

export function IncidentList({ incidents, expandedId, onToggleExpand }: IncidentListProps) {
  if (incidents.length === 0) {
    return (
      <div className="p-8 text-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-sm">
        <p className="text-gray-500 dark:text-gray-400">No incidents found matching your criteria.</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {incidents.map(incident => (
        <IncidentItem
          key={incident.id}
          incident={incident}
          isExpanded={expandedId === incident.id}
          onToggleExpand={() => onToggleExpand(incident.id)}
          useGradient={true} // Pass this prop to enable gradient backgrounds
        />
      ))}
    </div>
  );
}
