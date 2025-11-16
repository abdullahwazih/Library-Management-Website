import { useState } from "react"
import BrowseHeader from './Components/Header'
import BrowseSearchBar from './Components/Search_Bar'
import FilterPanel from "./Components/Filter"
import AllBooks from "./Components/All_Books"

const Browse_Layout = () => {
    // View state
    const [viewMode, setViewMode] = useState("grid")
    const [searchQuery, setSearchQuery] = useState("")
    const [filtersOpen, setFiltersOpen] = useState(false)

    // Filter states
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [minRating, setMinRating] = useState(0)
    const [selectedSemester, setSelectedSemester] = useState(null)
    const [selectedYear, setSelectedYear] = useState(null)
    const [selectedDepartment, setSelectedDepartment] = useState(null)
    const [selectedSort, setSelectedSort] = useState(null)

    const toggleFilters = () => setFiltersOpen(!filtersOpen)

    return (
        <div className="flex flex-col min-h-screen">

            {/* HEADER */}
            <BrowseHeader />

            {/* MAIN AREA */}
            <div className="flex flex-1">

                {/* DESKTOP FILTER PANEL */}
                <div className="hidden md:block w-64 border-r border-border">
                    <FilterPanel
                        categories={["Fiction", "Drama", "Fantasy", "Romance"]}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        minRating={minRating}
                        setMinRating={setMinRating}
                        semesters={[1, 2]}
                        selectedSemester={selectedSemester}
                        setSelectedSemester={setSelectedSemester}
                        years={[1, 2, 3, 4]}
                        selectedYear={selectedYear}
                        setSelectedYear={setSelectedYear}
                        departments={["CSE", "EEE", "BBA", "ENG"]}
                        selectedDepartment={selectedDepartment}
                        setSelectedDepartment={setSelectedDepartment}
                        sortOptions={[
                            { label: "Price: Low → High", value: "low" },
                            { label: "Price: High → Low", value: "high" }
                        ]}
                        selectedSort={selectedSort}
                        setSelectedSort={setSelectedSort}
                        show={true} // always visible on desktop
                        onClose={() => { }}
                    />
                </div>

                {/* MOBILE FILTER PANEL (drawer) */}
                {filtersOpen && (
                    <div className="md:hidden">
                        <FilterPanel
                            categories={["Fiction", "Drama", "Fantasy", "Romance"]}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            minRating={minRating}
                            setMinRating={setMinRating}
                            semesters={[1, 2]}
                            selectedSemester={selectedSemester}
                            setSelectedSemester={setSelectedSemester}
                            years={[1, 2, 3, 4]}
                            selectedYear={selectedYear}
                            setSelectedYear={setSelectedYear}
                            departments={["CSE", "EEE", "BBA", "ENG"]}
                            selectedDepartment={selectedDepartment}
                            setSelectedDepartment={setSelectedDepartment}
                            sortOptions={[
                                { label: "Price: Low → High", value: "low" },
                                { label: "Price: High → Low", value: "high" }
                            ]}
                            selectedSort={selectedSort}
                            setSelectedSort={setSelectedSort}
                            show={true}
                            onClose={toggleFilters}
                        />
                    </div>
                )}

                {/* MAIN CONTENT */}
                <div className="flex-1 p-4 overflow-y-auto">
                    {/* Search bar */}
                    <BrowseSearchBar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        viewMode={viewMode}
                        setViewMode={setViewMode}
                        toggleFilters={toggleFilters}
                    />

                    {/* Content area */}
                    <AllBooks></AllBooks>
                </div>
            </div>
        </div>
    )
}

export default Browse_Layout
