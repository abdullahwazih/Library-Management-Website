import { useState, useContext } from "react"
import { useParams, Link } from "react-router"
import { Heart, BookOpen, Star, ChevronLeft, Share2, ShoppingCart } from "lucide-react"
import { BooksContext } from "../../../context-provider/Books_Content"

export default function BookDetailPage() {
    const { id } = useParams()
    const { books } = useContext(BooksContext)
    const bookDetails = books.find(b => b.id === Number(id))

    const [isFavorited, setIsFavorited] = useState(false)

    const reviews = [
        { author: "Sarah M.", rating: 5, date: "2024-03-15", text: "An absolutely beautiful and thought-provoking read." },
        { author: "James K.", rating: 4, date: "2024-03-10", text: "Great story with wonderful messaging about life choices." },
        { author: "Emma L.", rating: 5, date: "2024-03-05", text: "This book changed my perspective on life. Highly recommended!" },
    ]

    if (!bookDetails) return <p className="text-center py-20">Book not found.</p>

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Back Button */}
            <div className="bg-white shadow-sm">
                <div className="mx-auto max-w-6xl px-6 py-4">
                    <Link to="/browse" className="text-blue-600 flex gap-2 items-center text-sm hover:underline">
                        <ChevronLeft className="h-4 w-4" /> Back to Browse
                    </Link>
                </div>
            </div>

            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-50 via-green-50 to-yellow-50">
                <div className="mx-auto max-w-6xl px-6 py-12">
                    <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">

                        {/* Cover Image */}
                        <div className="md:col-span-1">
                            <div className="rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={bookDetails.cover || "/placeholder.svg"}
                                    alt={bookDetails.title}
                                    className="w-full h-auto aspect-[3/4] object-cover"
                                />
                            </div>

                            {/* Like & Share Buttons */}
                            <div className="mt-4 flex gap-2">
                                <button
                                    className={`flex-1 flex items-center gap-2 p-2 rounded-md shadow-sm transition hover:shadow-md ${isFavorited ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
                                    onClick={() => setIsFavorited(!isFavorited)}
                                >
                                    <Heart className={`h-4 w-4 ${isFavorited ? "fill-current text-red-500" : ""}`} />
                                    {isFavorited ? "Liked" : "Like"}
                                </button>

                                <button className="flex-1 flex items-center gap-2 p-2 rounded-md bg-white shadow-sm hover:shadow-md text-gray-700">
                                    <Share2 className="h-4 w-4" /> Share
                                </button>
                            </div>

                            {/* Borrow & Buy */}
                            <div className="mt-4 flex gap-2">
                                <button className="flex-1 flex items-center justify-center gap-2 p-2 rounded-md bg-blue-600 text-white shadow-sm hover:shadow-md">
                                    <BookOpen className="h-4 w-4" /> Borrow
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 p-2 rounded-md bg-green-500 text-white shadow-sm hover:shadow-md">
                                    <ShoppingCart className="h-4 w-4" /> Buy ${bookDetails.price || "N/A"}
                                </button>
                            </div>
                        </div>

                        {/* Book Details */}
                        <div className="md:col-span-2">
                            <p className="text-green-600 font-semibold text-sm mb-2">{bookDetails.category}</p>
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">{bookDetails.title}</h1>
                            <p className="text-lg text-gray-600 mb-2">by {bookDetails.author}</p>

                            {/* Price */}
                            <p className="text-2xl font-bold text-blue-600 mb-4">${bookDetails.price || "N/A"}</p>

                            {/* Divider */}
                            <hr className="border-gray-300 mb-4" />

                            {/* Rating */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-5 w-5 ${i < Math.floor(bookDetails.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="font-semibold text-gray-900">{bookDetails.rating}</span>
                                </div>
                                <span className="text-gray-500 text-sm">(Fake {reviews.length} reviews)</span>
                            </div>

                            {/* Availability */}
                            <div className="mb-6 p-4 rounded-lg bg-blue-50 shadow-sm border-l-4 border-blue-400">
                                <div className="flex items-start gap-3">
                                    <BookOpen className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm">Available Now</p>
                                        <p className="text-sm text-gray-500">{bookDetails.stock} copies available</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Info */}
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                {bookDetails.year && (
                                    <div className="border-b border-gray-200 pb-2">
                                        <p className="text-gray-500 mb-1">Published</p>
                                        <p className="font-semibold text-gray-900">{bookDetails.year}</p>
                                    </div>
                                )}
                                {bookDetails.pages && (
                                    <div className="border-b border-gray-200 pb-2">
                                        <p className="text-gray-500 mb-1">Pages</p>
                                        <p className="font-semibold text-gray-900">{bookDetails.pages}</p>
                                    </div>
                                )}
                                {bookDetails.language && (
                                    <div className="border-b border-gray-200 pb-2">
                                        <p className="text-gray-500 mb-1">Language</p>
                                        <p className="font-semibold text-gray-900">{bookDetails.language}</p>
                                    </div>
                                )}
                                {bookDetails.isbn && (
                                    <div className="border-b border-gray-200 pb-2">
                                        <p className="text-gray-500 mb-1">ISBN</p>
                                        <p className="font-semibold text-gray-900 font-mono text-xs">{bookDetails.isbn}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Description */}
                        <section className="border-b border-gray-200 pb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                            <p className="text-gray-700 leading-relaxed">{bookDetails.description}</p>
                        </section>

                        {/* Synopsis */}
                        <section className="border-b border-gray-200 pb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Synopsis</h2>
                            <p className="text-gray-700 leading-relaxed">{bookDetails.synopsis}</p>
                        </section>

                        {/* Topics */}
                        <section className="border-b border-gray-200 pb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Topics</h2>
                            <div className="flex flex-wrap gap-2">
                                {(bookDetails.tags || []).map(tag => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm rounded-full transition cursor-pointer"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Reviews */}
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>
                                <button className="px-3 py-1 rounded-md text-sm bg-white shadow-sm hover:shadow-md">
                                    Write a Review
                                </button>
                            </div>
                            <div className="space-y-4">
                                {reviews.map((review, idx) => (
                                    <div key={idx} className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                                        <p className="font-semibold text-gray-900">{review.author}</p>
                                        <p className="text-sm text-gray-500">{review.date}</p>
                                        <p className="mt-1 text-gray-700">{review.text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <section className="rounded-lg p-6 bg-white shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4">Physical Copies</h3>
                            <div className="space-y-3">
                                <div className="p-3 rounded-lg bg-gray-50">
                                    <p className="text-sm font-semibold text-gray-900">Main Shelf</p>
                                    <p className="text-xs text-gray-500">Shelf: {bookDetails.id}-001</p>
                                    <p className="text-xs font-semibold text-blue-600 mt-1">{bookDetails.stock} available</p>
                                </div>
                            </div>
                        </section>

                        <section className="rounded-lg p-6 bg-white shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4">Details</h3>
                            <div className="space-y-3 text-sm">
                                <div>
                                    <p className="text-gray-500">Publisher</p>
                                    <p className="font-semibold text-gray-900">{bookDetails.publisher || "Unknown"}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Edition</p>
                                    <p className="font-semibold text-gray-900">1st Edition</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Binding</p>
                                    <p className="font-semibold text-gray-900">Hardcover</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}
