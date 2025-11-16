import { useContext } from "react"
import { Link } from "react-router"
import { BooksContext } from "../../../context-provider/Books_Content"
import BookCard from "./Book_Card"

export default function BrowsePreview() {
  const { books } = useContext(BooksContext)

  return (
    <section className="py-20 md:py-32 bg-base-200 border-y border-base-300">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-base-content">
              Featured Books
            </h2>
            <p className="text-base-content/60 max-w-2xl mt-2">
              Discover our curated selection of the most popular and highly-rated books.
            </p>
          </div>

          <Link to="/browse">
            <button className="btn btn-primary">View All Books</button>
          </Link>
        </div>

        {/* Book Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {books.length === 0 ? (
            <p className="text-center col-span-full">Loading books...</p>
          ) : (
            books.map(book => <BookCard key={book.id} book={book} />)
          )}
        </div>
      </div>
    </section>
  )
}
