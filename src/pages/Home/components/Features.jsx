import { BookOpen, Users, Sparkles, Clock, Heart, BarChart3 } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Vast Collection",
    description: "Access to over 50,000 books across all genres and categories.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with fellow readers and join book clubs.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description: "Smart suggestions based on your reading preferences.",
  },
  {
    icon: Clock,
    title: "Track Reading",
    description: "Manage due dates, reading progress, and history.",
  },
  {
    icon: Heart,
    title: "Wishlists",
    description: "Save books for later and share with friends.",
  },
  {
    icon: BarChart3,
    title: "Statistics",
    description: "See your reading insights and yearly goals.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            Everything You Need to Read Better
          </h2>
          <p className="text-lg text-base-content/60 max-w-2xl mx-auto mt-3">
            LibraryHub provides all the tools to make your reading experience seamless and enjoyable.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div 
                key={index} 
                className="card bg-base-200 border border-base-300 p-6 transition hover:shadow-xl hover:border-primary cursor-pointer"
              >
                <div className="mb-4 inline-flex p-3 bg-primary/20 rounded-lg w-fit">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="font-semibold text-lg text-base-content">
                  {feature.title}
                </h3>

                <p className="text-sm text-base-content/60 mt-2">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
