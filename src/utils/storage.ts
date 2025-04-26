import { Incident } from "../types/incident";

const STORAGE_KEY = "ai-safety-incidents";

export const saveIncidents = (incidents: Incident[]): void => {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(incidents));
};

export const loadIncidents = (): Incident[] => {
  const data = sessionStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};
