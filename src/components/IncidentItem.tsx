// src/components/IncidentItem.tsx
import { Incident } from '../types/incident';
import { formatDate } from '../utils/dateUtils';

interface IncidentItemProps {
  incident: Incident;
  isExpanded: boolean;
  onToggleExpand: () => void;
  useGradient?: boolean;
}

export function IncidentItem({ incident, isExpanded, onToggleExpand, useGradient = false }: IncidentItemProps) {
  const severityColors = {
    Low: "bg-green-100 text-green-800 border border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800",
    Medium: "bg-yellow-100 text-yellow-800 border border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800",
    High: "bg-red-100 text-red-800 border border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800"
  };
  
  const severityIcons = {
    Low: "🟢",
    Medium: "🟠",
    High: "🔴"
  };
  
  // Define gradient backgrounds based on severity
  const gradientBg = {
    Low: "bg-gradient-to-r from-white to-green-50 dark:from-gray-800 dark:to-gray-700/90",
    Medium: "bg-gradient-to-r from-white to-yellow-50 dark:from-gray-800 dark:to-gray-700/90",
    High: "bg-gradient-to-r from-white to-red-50 dark:from-gray-800 dark:to-gray-700/90"
  };
  
  return (
    <div className={`border rounded-lg overflow-hidden mb-4 ${useGradient ? gradientBg[incident.severity] : 'bg-white dark:bg-gray-800'} shadow-sm hover:shadow-md transition-shadow border-gray-200 dark:border-gray-700`}>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{incident.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
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
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors"
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
          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-md border border-gray-100 dark:border-gray-600">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description:</h4>
            <p className="text-gray-700 dark:text-gray-300">{incident.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
