import { useState, useContext } from "react"
import { useParams, Link } from "react-router"
import { Heart, BookOpen, Star, ChevronLeft, Share2 } from "lucide-react"
import { BooksContext } from "../../../context-provider/Books_Content"

export default function BookDetailPage() {
    const { id } = useParams()                      // Get book id from route
    const { books } = useContext(BooksContext)     // Get all books from context
    const bookDetails = books.find(b => b.id === Number(id))   // Find book by id

    const [isFavorited, setIsFavorited] = useState(false)

    // Fake reviews for now
    const reviews = [
        {
            author: "Sarah M.",
            rating: 5,
            date: "2024-03-15",
            text: "An absolutely beautiful and thought-provoking read."
        },
        {
            author: "James K.",
            rating: 4,
            date: "2024-03-10",
            text: "Great story with wonderful messaging about life choices."
        },
        {
            author: "Emma L.",
            rating: 5,
            date: "2024-03-05",
            text: "This book changed my perspective on life. Highly recommended!"
        },
    ]

    if (!bookDetails) return <p className="text-center py-20">Book not found.</p>

    return (
        <main className="min-h-screen bg-background">

            {/* Back Button */}
            <div className="border-b border-border bg-card">
                <div className="mx-auto max-w-6xl px-6 py-4">
                    <Link to="/browse" className="text-primary flex gap-2 items-center text-sm hover:underline">
                        <ChevronLeft className="h-4 w-4" /> Back to Browse
                    </Link>
                </div>
            </div>

            {/* Header Section */}
            <div className="border-b border-border bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="mx-auto max-w-6xl px-6 py-12">
                    <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">

                        {/* Cover Image */}
                        <div className="md:col-span-1">
                            <div className="rounded-lg overflow-hidden shadow-lg border border-border">
                                <img
                                    src={bookDetails.cover || "/placeholder.svg"}
                                    alt={bookDetails.title}
                                    className="w-full h-auto aspect-[3/4] object-cover"
                                />
                            </div>
                            <div className="mt-4 flex gap-2">
                                <button
                                    className={`flex-1 flex items-center gap-2 border p-2 rounded-md ${isFavorited ? "bg-primary text-white" : "border-border"}`}
                                    onClick={() => setIsFavorited(!isFavorited)}
                                >
                                    <Heart className={`h-4 w-4 ${isFavorited && "fill-current text-red-500"}`} />
                                    {isFavorited ? "Liked" : "Like"}
                                </button>

                                <button className="flex-1 flex items-center gap-2 border p-2 rounded-md">
                                    <Share2 className="h-4 w-4" /> Share
                                </button>
                            </div>
                        </div>

                        {/* Book Details */}
                        <div className="md:col-span-2">
                            <p className="text-accent font-semibold text-sm mb-2">{bookDetails.category}</p>
                            <h1 className="text-4xl font-bold text-foreground mb-2">{bookDetails.title}</h1>
                            <p className="text-lg text-muted-foreground mb-4">by {bookDetails.author}</p>

                            {/* Rating */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-5 w-5 ${i < Math.floor(bookDetails.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="font-semibold text-foreground">{bookDetails.rating}</span>
                                </div>
                                <span className="text-muted-foreground text-sm">(Fake {reviews.length} reviews)</span>
                            </div>

                            {/* Availability */}
                            <div className="mb-6 p-4 rounded-lg border border-border bg-primary/5">
                                <div className="flex items-start gap-3">
                                    <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">Available Now</p>
                                        <p className="text-sm text-muted-foreground">
                                            {bookDetails.stock} copies available
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Borrow Button (UI Only) */}
                            <button className="w-full border bg-primary text-white py-3 rounded-md mb-4">
                                Borrow This Book
                            </button>

                            {/* Quick Info */}
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                {bookDetails.year && (
                                    <div>
                                        <p className="text-muted-foreground mb-1">Published</p>
                                        <p className="font-semibold text-foreground">{bookDetails.year}</p>
                                    </div>
                                )}
                                {bookDetails.pages && (
                                    <div>
                                        <p className="text-muted-foreground mb-1">Pages</p>
                                        <p className="font-semibold text-foreground">{bookDetails.pages}</p>
                                    </div>
                                )}
                                {bookDetails.language && (
                                    <div>
                                        <p className="text-muted-foreground mb-1">Language</p>
                                        <p className="font-semibold text-foreground">{bookDetails.language}</p>
                                    </div>
                                )}
                                {bookDetails.isbn && (
                                    <div>
                                        <p className="text-muted-foreground mb-1">ISBN</p>
                                        <p className="font-semibold text-foreground font-mono text-xs">{bookDetails.isbn}</p>
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
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Description</h2>
                            <p className="text-muted-foreground leading-relaxed">{bookDetails.description}</p>
                        </section>

                        {/* Synopsis */}
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Synopsis</h2>
                            <p className="text-muted-foreground leading-relaxed">{bookDetails.synopsis}</p>
                        </section>

                        {/* Tags */}
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Topics</h2>
                            <div className="flex flex-wrap gap-2">
                                {(bookDetails.tags || []).map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1.5 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-full transition cursor-pointer"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Reviews */}
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-foreground">Reviews</h2>
                                <button className="border px-3 py-1 rounded-md text-sm">Write a Review</button>
                            </div>
                            <div className="space-y-4">
                                {reviews.map((review, idx) => (
                                    <div key={idx} className="p-4 border rounded-lg bg-card">
                                        <p className="font-semibold">{review.author}</p>
                                        <p className="text-sm text-muted-foreground">{review.date}</p>
                                        <p className="mt-1">{review.text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Availability Locations (fake for now) */}
                        <section className="bg-card border border-border rounded-lg p-6">
                            <h3 className="font-bold text-foreground mb-4">Physical Copies</h3>
                            <div className="space-y-3">
                                <div className="p-3 bg-muted rounded-lg">
                                    <p className="text-sm font-semibold text-foreground">Main Shelf</p>
                                    <p className="text-xs text-muted-foreground">Shelf: {bookDetails.id}-001</p>
                                    <p className="text-xs font-semibold text-primary mt-1">{bookDetails.stock} available</p>
                                </div>
                            </div>
                        </section>

                        {/* Additional Info */}
                        <section className="bg-card border border-border rounded-lg p-6">
                            <h3 className="font-bold text-foreground mb-4">Details</h3>
                            <div className="space-y-3 text-sm">
                                <div>
                                    <p className="text-muted-foreground">Publisher</p>
                                    <p className="font-semibold text-foreground">{bookDetails.publisher || "Unknown"}</p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">Edition</p>
                                    <p className="font-semibold text-foreground">1st Edition</p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">Binding</p>
                                    <p className="font-semibold text-foreground">Hardcover</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}
