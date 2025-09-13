import HeroSection from "@/components/HeroSection";
import MoodCheckIn from "@/components/MoodCheckIn";
import MoodTrends from "@/components/MoodTrends";
import WellnessRecommendations from "@/components/WellnessRecommendations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 space-y-16">
        {/* Mood Check-in Section */}
        <section id="mood-checkin" className="scroll-mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">How Are You Feeling?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a moment to reflect on your current emotional state. Your daily check-ins help us understand your patterns and provide better support.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <MoodCheckIn />
          </div>
        </section>

        {/* Mood Trends Section */}
        <section id="trends">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Your Wellness Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visualize your progress over time and discover patterns in your emotional wellbeing to make informed decisions about your mental health.
            </p>
          </div>
          <MoodTrends />
        </section>

        {/* Wellness Recommendations Section */}
        <section id="recommendations">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Personalized Wellness</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Based on your mood patterns and preferences, we've curated activities and strategies to support your mental wellness goals.
            </p>
          </div>
          <WellnessRecommendations />
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 bg-gradient-wellness rounded-3xl">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of users who have improved their mental health through daily mindfulness and tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('mood-checkin')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-primary hover:opacity-90 transition-opacity font-semibold text-lg px-8 py-3 rounded-lg text-white shadow-wellness"
              >
                Check In Now
              </button>
              <button className="border border-primary/30 hover:bg-primary/10 transition-colors font-semibold text-lg px-8 py-3 rounded-lg text-primary">
                View Progress
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Mental Wellness Platform
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Supporting your mental health journey with personalized insights, mood tracking, and evidence-based wellness recommendations.
            </p>
            <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
              <span>Privacy-First</span>
              <span>•</span>
              <span>Evidence-Based</span>
              <span>•</span>
              <span>Always Supportive</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;