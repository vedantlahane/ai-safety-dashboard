import { useState, useEffect } from 'react';
import { Incident, FilterValue, SortOrder, Severity } from '../types/incident';
import { saveIncidents, loadIncidents } from '../utils/storage';

// Initial mock data
const initialIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics...",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information...",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata...",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  }
];

export function useIncidents() {
  // Try to load from sessionStorage first, fallback to initial data
  const [incidents, setIncidents] = useState<Incident[]>(() => {
    const savedIncidents = loadIncidents();
    return savedIncidents.length > 0 ? savedIncidents : initialIncidents;
  });
  
  const [filter, setFilter] = useState<FilterValue>("All");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  // Save to sessionStorage whenever incidents change
  useEffect(() => {
    saveIncidents(incidents);
  }, [incidents]);
  
  // Filter incidents based on severity
  const filteredIncidents = incidents.filter(incident => 
    filter === "All" || incident.severity === filter
  );
  
  // Sort incidents based on date
  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });
  
  // Toggle expanded state for an incident
  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  // Add a new incident
  const addIncident = (incident: Omit<Incident, "id" | "reported_at">) => {
    const newIncident: Incident = {
      ...incident,
      id: Math.max(0, ...incidents.map(i => i.id)) + 1,
      reported_at: new Date().toISOString()
    };
    setIncidents([...incidents, newIncident]);
  };
  
  return {
    incidents: sortedIncidents,
    filter,
    setFilter,
    sortOrder,
    setSortOrder,
    expandedId,
    toggleExpanded,
    addIncident
  };
}
