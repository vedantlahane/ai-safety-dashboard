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
    Low: "bg-green-100 text-green-800 border border-green-200",
    Medium: "bg-yellow-100 text-yellow-800 border border-yellow-200",
    High: "bg-red-100 text-red-800 border border-red-200"
  };
  
  const severityIcons = {
    Low: "🟢",
    Medium: "🟠",
    High: "🔴"
  };
  
  return (
    <div className="border rounded-lg overflow-hidden mb-4 bg-white shadow-sm hover:shadow-md transition-all">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">{incident.title}</h3>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(incident.reported_at)}
            </p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${severityColors[incident.severity]}`}>
            {severityIcons[incident.severity]} {incident.severity}
          </span>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={onToggleExpand}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 transition-colors"
          >
            {isExpanded ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                Hide Details
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                View Details
              </>
            )}
          </button>
        </div>
        
        {isExpanded && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-100">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Description:</h4>
            <p className="text-gray-700">{incident.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
