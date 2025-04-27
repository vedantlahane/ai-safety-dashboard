import { FilterControls } from "./components/FilterControls";
import { SortControls } from "./components/SortControls";
import { IncidentList } from "./components/IncidentList";
import { IncidentForm } from "./components/IncidentForm";
import { useIncidents } from "./hooks/useIncidents";

function App() {
  const {
    incidents,
    filter,
    setFilter,
    sortOrder,
    setSortOrder,
    expandedId,
    toggleExpanded,
    addIncident,
  } = useIncidents();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto p-4 md:p-6">
        
        {/* Header Section */}
        <div className="flex flex-col min-h-48 md:flex-row justify-between items-center mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-lg">
          <div className="mb-4 md:mb-0">
            <h1 className="text-4xl font-bold mb-2">
              AI Safety Incident Dashboard
            </h1>
            <p className="text-blue-100">
              Monitor and report AI safety incidents to help build a safer, more trustworthy digital world.
            </p>
          </div>

          {/* Incident Form Button */}
          <div className="min-w-[220px]">
            <IncidentForm onSubmit={addIncident} />
          </div>
        </div>

        {/* Filter and Sort Controls */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-6 rounded-2xl shadow-md">
          <FilterControls currentFilter={filter} onFilterChange={setFilter} />
          <SortControls currentSort={sortOrder} onSortChange={setSortOrder} />
        </div>

        {/* Incident List */}
        <IncidentList
          incidents={incidents}
          expandedId={expandedId}
          onToggleExpand={toggleExpanded}
        />
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 text-xs">
        <p>© 2025 AI Safety Initiative. All incidents are tracked for research and improvement purposes.</p>
      </footer>
    </div>
  );
}

export default App;
