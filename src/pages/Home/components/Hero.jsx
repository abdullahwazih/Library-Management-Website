import { ArrowRight, BookOpen } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-base-200 to-accent/20 py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content leading-tight">
              Your Digital <span className="text-primary">Library</span> Awaits
            </h1>
            <p className="text-lg text-base-content/80 leading-relaxed max-w-xl">
              Discover thousands of books, manage your collection, and connect with a community of readers. All in one
              place.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="btn btn-primary btn-lg flex items-center gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="btn btn-outline btn-lg">
                Browse Library
              </button>
            </div>

            <div className="flex gap-8 pt-8 text-sm">
              <div>
                <p className="font-semibold text-2xl text-primary">50K+</p>
                <p className="text-base-content/80">Books Available</p>
              </div>
              <div>
                <p className="font-semibold text-2xl text-accent">25K+</p>
                <p className="text-base-content/80">Active Readers</p>
              </div>
              <div>
                <p className="font-semibold text-2xl text-primary">100+</p>
                <p className="text-base-content/80">Categories</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="relative w-64 h-80">
              {/* Book Stack Illustration */}
              <div className="absolute top-0 left-0 w-48 h-64 bg-primary/40 rounded-lg border-2 border-primary/50 transform -rotate-12 shadow-lg" />
              <div className="absolute top-4 left-8 w-48 h-64 bg-accent/40 rounded-lg border-2 border-accent/50 transform -rotate-6 shadow-lg" />
              <div className="absolute top-8 left-16 w-48 h-64 bg-primary/50 rounded-lg border-2 border-primary/60 transform rotate-0 shadow-lg flex items-center justify-center">
                <BookOpen className="h-24 w-24 text-primary/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
