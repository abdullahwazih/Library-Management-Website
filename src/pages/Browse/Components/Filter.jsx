import { X } from "lucide-react"

export default function FilterPanel({
  categories,
  selectedCategory,
  setSelectedCategory,
  minRating,
  setMinRating,
  semesters,
  selectedSemester,
  setSelectedSemester,
  years,
  selectedYear,
  setSelectedYear,
  departments,
  selectedDepartment,
  setSelectedDepartment,
  sortOptions,
  selectedSort,
  setSelectedSort,
  show,
  onClose,
}) {
  return (
    <>
      {/* Mobile Overlay */}
      {show && <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={onClose} />}

      {/* Filter Panel */}
      <div
        className={`
        fixed md:relative md:w-64 w-64 h-screen md:h-auto
        bg-card border-r border-border
        z-50 md:z-auto
        transform transition-transform md:translate-x-0
        ${show ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        <div className="p-6 space-y-6 h-screen md:h-auto overflow-y-auto">

          <div className="flex items-center justify-between md:hidden">
            <h2 className="font-semibold text-foreground">Filters</h2>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Category</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  checked={selectedCategory === null}
                  onChange={() => setSelectedCategory(null)}
                  className="accent-primary"
                />
                <span className="text-muted-foreground group-hover:text-foreground transition">All Categories</span>
              </label>
              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(cat)}
                    className="accent-primary"
                  />
                  <span className="text-muted-foreground group-hover:text-foreground transition">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Minimum Rating</h3>
            <div className="space-y-2">
              {[0, 3, 3.5, 4, 4.5].map((rating) => (
                <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    checked={minRating === rating}
                    onChange={() => setMinRating(rating)}
                    className="accent-primary"
                  />
                  <span className="text-muted-foreground group-hover:text-foreground transition">
                    {rating === 0 ? "All Ratings" : `${rating}+ Stars`}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Semester Filter */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Semester</h3>
            <div className="space-y-2">
              {semesters.map((sem) => (
                <label key={sem} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    checked={selectedSemester === sem}
                    onChange={() => setSelectedSemester(sem)}
                    className="accent-primary"
                  />
                  <span className="text-muted-foreground group-hover:text-foreground transition">{`Semester ${sem}`}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Year Filter */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Year</h3>
            <div className="space-y-2">
              {years.map((yr) => (
                <label key={yr} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    checked={selectedYear === yr}
                    onChange={() => setSelectedYear(yr)}
                    className="accent-primary"
                  />
                  <span className="text-muted-foreground group-hover:text-foreground transition">{`Year ${yr}`}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Department Filter */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Department</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  checked={selectedDepartment === null}
                  onChange={() => setSelectedDepartment(null)}
                  className="accent-primary"
                />
                <span className="text-muted-foreground group-hover:text-foreground transition">All Departments</span>
              </label>
              {departments.map((dept) => (
                <label key={dept} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    checked={selectedDepartment === dept}
                    onChange={() => setSelectedDepartment(dept)}
                    className="accent-primary"
                  />
                  <span className="text-muted-foreground group-hover:text-foreground transition">{dept}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sort Filter */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Sort by Price</h3>
            <div className="space-y-2">
              {sortOptions.map((option) => (
                <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    checked={selectedSort === option.value}
                    onChange={() => setSelectedSort(option.value)}
                    className="accent-primary"
                  />
                  <span className="text-muted-foreground group-hover:text-foreground transition">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
