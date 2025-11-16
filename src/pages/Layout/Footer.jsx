import { BookOpen } from "lucide-react"
import { Link } from "react-router";
export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg text-primary mb-4">
              <BookOpen className="h-6 w-6" />
              LibraryHub
            </div>
            <p className="text-sm text-muted-foreground">Your digital gateway to endless knowledge and stories.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#browse" className="hover:text-primary transition">
                  Browse Books
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  My Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  My Wishlist
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 LibraryHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
