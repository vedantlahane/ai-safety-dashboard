import { FilterControls } from "./components/FilterControls";
import { SortControls } from "./components/SortControls";
import { IncidentList } from "./components/IncidentList";
import { IncidentForm } from "./components/IncidentForm";
import { useIncidents } from "./hooks/useIncidents";
import { ThemeToggle } from "./components/ThemeToggle";

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-200 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500 relative overflow-hidden">

      {/* Soft blurry background shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-purple-300 opacity-30 blur-3xl rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-blue-300 opacity-30 blur-2xl rounded-full animate-pulse-slower"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto p-4 md:p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex justify-between items-center bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-6 rounded-xl shadow-xl w-full">
            <div className="flex flex-col max-w-2xl">
              <h1 className="text-3xl font-bold mb-2">
                AI Safety Incident Dashboard
              </h1>
              <p className="text-blue-100 text-lg">
                Monitor and report AI safety incidents to help build a safer,
                more trustworthy digital world.
              </p>
            </div>

            <div className="flex flex-col items-end gap-3">
              <ThemeToggle />
              <div className="text-right">
                <p className="text-sm mb-1 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent font-bold">
                  Designed by Vedant Lahane
                </p>
                <a
                  href="https://vedantlahane.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white hover:text-blue-200 font-medium text-sm transition-colors"
                >
                  <span>View my portfolio</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Incident Form */}
        <div className="mb-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">
          <IncidentForm onSubmit={addIncident} />
        </div>

        {/* Controls */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between gap-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <FilterControls currentFilter={filter} onFilterChange={setFilter} />
          <SortControls currentSort={sortOrder} onSortChange={setSortOrder} />
        </div>

        <IncidentList
          incidents={incidents}
          expandedId={expandedId}
          onToggleExpand={toggleExpanded}
        />
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-12 py-6 text-center border-t border-gray-300 dark:border-gray-700 bg-gradient-to-t from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-left">
              This dashboard was designed and developed by
              <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent font-semibold mx-1">
                Vedant Lahane
              </span>
              as part of a project to improve AI safety monitoring.
              Interested in more of my work on web development?
            </p>
            <a 
              href="https://vedantlahane.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
            >
              <span>View My Portfolio</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
