import { Heart, Star } from "lucide-react"
import { Link } from "react-router"

export default function BookCard({ book }) {
  return (
    <div className="card bg-base-100 border border-base-300 hover:border-primary/50 hover:shadow-xl overflow-hidden transition cursor-pointer">
      
      {/* Image + Favorite Button */}
      <div className="relative h-48">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover transition group-hover:scale-105"
        />

        <button className="absolute top-2 right-2 p-2 bg-white shadow rounded-full hover:bg-primary hover:text-white transition">
          <Heart className="h-5 w-5 text-red-500" />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs font-semibold text-primary mb-1">
          {book.category}
        </p>

        <h3 className="text-base font-semibold line-clamp-2 hover:text-primary transition">
          {book.title}
        </h3>

        <p className="text-xs text-base-content/60 mb-3">by {book.author}</p>

        {/* Rating + Availability */}
        <div className="flex items-center justify-between mb-4 text-xs">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="font-semibold">{book.rating}</span>
          </div>
          <span className="text-base-content/60">
            {book.available} available
          </span>
        </div>

        {/* CTA */}
        <Link to={`/book/${book.id}`} className="btn btn-sm btn-primary w-full">
          Details
        </Link>
      </div>
    </div>
  )
}
