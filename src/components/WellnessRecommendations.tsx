import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const recommendations = [
  {
    id: 1,
    title: "5-Minute Breathing Exercise",
    description: "Practice deep breathing to reduce stress and increase mindfulness.",
    duration: "5 min",
    category: "Mindfulness",
    icon: "🫁",
    difficulty: "Easy",
    benefits: ["Reduces stress", "Improves focus", "Calms mind"],
  },
  {
    id: 2,
    title: "Nature Walk",
    description: "Take a peaceful walk outside to boost mood and get fresh air.",
    duration: "15-30 min",
    category: "Physical",
    icon: "🌳",
    difficulty: "Easy",
    benefits: ["Boosts mood", "Vitamin D", "Light exercise"],
  },
  {
    id: 3,
    title: "Gratitude Journaling",
    description: "Write down 3 things you're grateful for today to shift perspective.",
    duration: "10 min",
    category: "Mental",
    icon: "📝",
    difficulty: "Easy",
    benefits: ["Positive thinking", "Self-reflection", "Perspective"],
  },
  {
    id: 4,
    title: "Progressive Muscle Relaxation",
    description: "Systematically tense and relax muscle groups for physical relief.",
    duration: "20 min",
    category: "Relaxation",
    icon: "💆",
    difficulty: "Medium",
    benefits: ["Muscle tension relief", "Better sleep", "Stress reduction"],
  },
];

const moodBasedTips = [
  {
    mood: "Low Energy",
    tips: ["Try gentle stretching", "Listen to uplifting music", "Get some sunlight"],
    color: "wellness-calm",
  },
  {
    mood: "Stressed",
    tips: ["Practice deep breathing", "Take a warm bath", "Do a body scan meditation"],
    color: "wellness-peaceful",
  },
  {
    mood: "Anxious",
    tips: ["Ground yourself with 5-4-3-2-1 technique", "Call a friend", "Write your thoughts"],
    color: "accent",
  },
];

export default function WellnessRecommendations() {
  return (
    <div className="space-y-6">
      {/* Personalized Recommendations */}
      <Card className="bg-gradient-wellness shadow-wellness border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <span>✨</span>
            Personalized for You
          </CardTitle>
          <CardDescription>
            Based on your recent mood patterns, here are some activities that might help.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {recommendations.map((rec) => (
              <Card key={rec.id} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-soft transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{rec.icon}</span>
                      <div>
                        <h3 className="font-semibold text-sm">{rec.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {rec.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{rec.duration}</span>
                        </div>
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${rec.difficulty === 'Easy' ? 'border-wellness-peaceful' : 'border-accent'}`}
                    >
                      {rec.difficulty}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {rec.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {rec.benefits.map((benefit, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-primary/30 text-primary">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button size="sm" variant="outline" className="w-full border-primary/50 hover:bg-primary/10">
                      Start Activity
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mood-Based Quick Tips */}
      <Card className="bg-card/60 backdrop-blur-sm shadow-soft border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>💡</span>
            Quick Tips by Mood
          </CardTitle>
          <CardDescription>
            Immediate strategies you can try based on how you're feeling.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {moodBasedTips.map((moodTip, index) => (
              <Card key={index} className="bg-gradient-calm border-0 shadow-soft">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-primary mb-3">{moodTip.mood}</h3>
                  <ul className="space-y-2">
                    {moodTip.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-sm text-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}