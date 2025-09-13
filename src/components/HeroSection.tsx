import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/wellness-hero.jpg";

export default function HeroSection() {
  const scrollToMoodCheck = () => {
    document.getElementById('mood-checkin')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-calm opacity-60" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-light rounded-full blur-xl opacity-30 animate-float" />
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-accent-light rounded-full blur-lg opacity-40 animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-wellness-peaceful rounded-full blur-md opacity-25" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Your Mental
                </span>
                <br />
                <span className="text-foreground">
                  Wellness Journey
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Track your daily moods, discover patterns, and get personalized recommendations 
                to support your mental health and emotional wellbeing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity font-semibold text-lg px-8 py-4 shadow-wellness"
                onClick={scrollToMoodCheck}
              >
                Start Your Check-in
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 font-semibold text-lg px-8 py-4"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Daily Check-ins</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Feel Better</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image/Card */}
          <div className="relative">
            <Card className="bg-card/80 backdrop-blur-sm shadow-wellness border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={heroImage}
                    alt="Peaceful wellness illustration representing mental health and mindfulness"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-wellness-happy rounded-full animate-pulse-glow" />
                      <span className="text-sm font-medium">Daily Wellness Tracker</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Today</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="text-sm">Mood Check-in</span>
                      <span className="text-2xl">😊</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="text-sm">Mindfulness</span>
                      <div className="w-16 h-2 bg-primary-light rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-primary rounded-full" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="text-sm">Daily Goals</span>
                      <span className="text-xs text-primary font-medium">2/3 Complete</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}