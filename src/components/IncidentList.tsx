
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
      <div className="p-8 text-center bg-gray-50 rounded-lg">
        <p className="text-gray-500">No incidents found matching your criteria.</p>
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
        />
      ))}
    </div>
  );
}

