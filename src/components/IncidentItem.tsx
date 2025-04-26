// src/components/IncidentItem.tsx
import { Incident } from '../types/incident';
import { formatDate } from '../utils/dateUtils';

interface IncidentItemProps {
  incident: Incident;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export function IncidentItem({ incident, isExpanded, onToggleExpand }: IncidentItemProps) {
  const severityColors = {
    Low: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    High: "bg-red-100 text-red-800"
  };
  
  return (
    <div className="border rounded-lg overflow-hidden mb-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{incident.title}</h3>
            <p className="text-gray-500 text-sm">
              {formatDate(incident.reported_at)}
            </p>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${severityColors[incident.severity]}`}>
            {incident.severity}
          </span>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <button
            onClick={onToggleExpand}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            {isExpanded ? 'Hide Details' : 'View Details'}
          </button>
        </div>
        
        {isExpanded && (
          <div className="mt-3 p-3 bg-gray-50 rounded-md">
            <p className="text-gray-700">{incident.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
