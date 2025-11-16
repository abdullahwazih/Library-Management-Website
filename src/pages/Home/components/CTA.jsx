import { ArrowRight } from "lucide-react"
import { Link } from "react-router"

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        
        <h2 className="text-3xl md:text-4xl font-bold text-base-content">
          Ready to Start Your Reading Journey?
        </h2>

        <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
          Join thousands of readers exploring new worlds, discovering amazing stories, 
          and tracking their reading progress.
        </p>

        <div className="flex gap-4 justify-center pt-4">
          
          {/* Primary CTA Button */}
          <Link to="/register">
            <button className="btn btn-primary btn-lg flex items-center gap-2">
              Create Account
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>

          {/* Secondary CTA Button */}
          <Link to="/about">
            <button className="btn btn-outline btn-lg">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
