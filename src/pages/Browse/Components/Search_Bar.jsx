import { Search, Filter, Grid, List } from "lucide-react"

export default function BrowseSearchBar({
    searchQuery,
    setSearchQuery,
    viewMode,
    setViewMode,
    toggleFilters,
}) {
    return (
        <div className="sticky top-16 z-40 bg-base-100 border-b border-base-300">
            <div className="mx-auto max-w-6xl px-6 py-4">
                <div className="flex gap-4 items-center flex-col md:flex-row">

                    {/* Search Field */}
                    <div className="relative flex-1 min-w-0 w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-base-content/60" />
                        <input
                            type="text"
                            placeholder="Search by title or author..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-base-300 bg-base-100
                         text-base-content placeholder:text-base-content/60 focus:outline-none 
                         focus:ring-2 focus:ring-primary"
                        />
                    </div>  

                    {/* Mobile Filter Button */}
                    <button
                        onClick={toggleFilters}
                        className="md:hidden flex items-center gap-2 px-4 py-2 border border-base-300 
                      rounded-lg text-sm hover:bg-base-200 transition"
                    >
                        <Filter className="h-4 w-4" />
                        Filters
                    </button>

                    {/* View Switch (Desktop) */}
                    <div className="hidden md:flex gap-1 bg-base-200 rounded-lg p-1">
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`px-3 py-2 rounded-lg transition ${viewMode === "grid"
                                    ? "bg-primary text-white"
                                    : "hover:bg-base-300"
                                }`}
                        >
                            <Grid className="h-4 w-4" />
                        </button>

                        <button
                            onClick={() => setViewMode("list")}
                            className={`px-3 py-2 rounded-lg transition ${viewMode === "list"
                                    ? "bg-primary text-white"
                                    : "hover:bg-base-300"
                                }`}
                        >
                            <List className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
