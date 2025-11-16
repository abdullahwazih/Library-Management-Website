import { createContext, useState, useEffect } from "react"

export const BooksContext = createContext()

export default function BooksProvider({ children }) {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("/book-data/book.json")
            .then((res) => res.json())
            .then((data) => {
                setBooks(data)
                console.log("Fetched books:", data)   // <-- 👈 Check here

            }
            )
            .catch((err) => console.error("Error loading books:", err))
    }, [])

    return (
        <BooksContext.Provider value={{ books }}>
            {children}
        </BooksContext.Provider>
    )
}
