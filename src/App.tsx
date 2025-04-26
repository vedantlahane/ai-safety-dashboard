import { FilterControls } from './components/FilterControls';
import { SortControls } from './components/SortControls';
import { IncidentList } from './components/IncidentList';
import { IncidentForm } from './components/IncidentForm';
import { useIncidents } from './hooks/useIncidents';

function App() {
  const {
    incidents,
    filter,
    setFilter,
    sortOrder,
    setSortOrder,
    expandedId,
    toggleExpanded,
    addIncident
  } = useIncidents();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 md:p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Safety Incident Dashboard</h1>
          <p className="text-gray-600">
            Monitor and report AI safety incidents to help build a safer, more trustworthy digital world.
          </p>
        </header>
        
        <IncidentForm onSubmit={addIncident} />
        
        <div className="mb-6 flex flex-col sm:flex-row justify-between gap-4">
          <FilterControls currentFilter={filter} onFilterChange={setFilter} />
          <SortControls currentSort={sortOrder} onSortChange={setSortOrder} />
        </div>
        
        <IncidentList
          incidents={incidents}
          expandedId={expandedId}
          onToggleExpand={toggleExpanded}
        />
      </div>
    </div>
  );
}

export default App;
