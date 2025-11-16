
export default function Footer() {
  return (
    <footer className="bg-base-100 border-t border-base-300 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Left Section - Logo */}
        <div className="flex items-center gap-2 font-bold text-xl text-primary">
          <span>LibraryHub</span>
        </div>

        {/* Middle Section - Links */}
        <div className="flex flex-col md:flex-row gap-4 text-lg">
          {/* <Link to="/browse" className="hover:text-primary transition">Browse</Link>
          <Link to="/recommendations" className="hover:text-primary transition">Recommendations</Link>
          <Link to="/dashboard" className="hover:text-primary transition">Dashboard</Link>
          <Link to="/admin" className="hover:text-primary transition">Admin Dashboard</Link> */}
        </div>

        {/* Right Section - Social / Contact */}
        <div className="flex flex-col gap-2 text-sm text-gray-500">
          <span>© 2025 LibraryHub. All rights reserved.</span>
          <span>Email: support@libraryhub.com</span>
        </div>
      </div>
    </footer>
  );
}
