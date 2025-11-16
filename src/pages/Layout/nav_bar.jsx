import { useState } from "react";
import { Link } from "react-router";
import { BookOpen, Search, User, Menu, X, Heart } from "lucide-react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-base-100 border-b border-base-300">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Left Section - Logo */}
                <div className="navbar-start">
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition">
                        <BookOpen className="h-7 w-7" />
                        <span>LibraryHub</span>
                    </Link>
                </div>

                {/* Middle Section - Desktop Menu */}
                <div className="navbar-center hidden md:flex items-center gap-8 text-lg">
                    <Link to="/browse" className="hover:text-primary font-medium">Browse</Link>
                    <Link to="/recommendations" className="hover:text-primary font-medium">Recommendations</Link>
                    <Link to="/dashboard" className="hover:text-primary font-medium">Dashboard</Link>
                    <Link to="/admin" className="hover:text-primary font-medium">Admin Dashboard</Link>
                </div>

                {/* Right Section - Icons + Signup + Mobile Menu Toggle */}
                <div className="navbar-end flex items-center gap-4">
                    {/* Search Icon */}
                    <button className="btn btn-ghost btn-circle hidden md:flex">
                        <Search className="h-5 w-5" />
                    </button>

                    {/* Wishlist / Heart Icon */}
                    <Link to="/wishlist" className="btn btn-ghost btn-circle hidden md:flex">
                        <Heart className="h-5 w-5" />
                    </Link>

                    {/* Sign In / Sign Up */}
                    <Link to="/signup" className="btn btn-outline btn-sm hidden md:inline-flex">
                        <User className="h-4 w-4 mr-2" /> Sign Up
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="btn btn-ghost btn-circle md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden w-full mt-4 border-t border-base-300 pt-4 pb-4">
                    <ul className="menu bg-base-200 p-3 rounded-box space-y-2">
                        <li><Link to="/browse">Browse</Link></li>
                        <li><Link to="/recommendations">Recommendations</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/wishlist">My Wishlist</Link></li>
                        <li><Link to="/admin">Admin Dashboard</Link></li>
                        <li>
                            <Link to="/signup" className="btn btn-primary w-full mt-2">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
