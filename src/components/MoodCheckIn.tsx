import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const moods = [
  { emoji: "😊", label: "Great", value: 5, color: "wellness-happy" },
  { emoji: "🙂", label: "Good", value: 4, color: "wellness-calm" },
  { emoji: "😐", label: "Okay", value: 3, color: "wellness-peaceful" },
  { emoji: "😔", label: "Low", value: 2, color: "wellness-sad" },
  { emoji: "😢", label: "Difficult", value: 1, color: "destructive" },
];

export default function MoodCheckIn() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [note, setNote] = useState("");
  const { toast } = useToast();

  const handleMoodSubmit = () => {
    if (selectedMood === null) {
      toast({
        title: "Please select your mood",
        description: "Choose how you're feeling today to continue.",
        variant: "destructive",
      });
      return;
    }

    // Mock saving the mood data
    const moodData = {
      mood: selectedMood,
      note,
      date: new Date().toISOString(),
    };
    
    // In a real app, this would save to a database
    console.log("Saving mood data:", moodData);
    
    toast({
      title: "Mood logged successfully!",
      description: "Your daily check-in has been recorded.",
    });

    // Reset form
    setSelectedMood(null);
    setNote("");
  };

  return (
    <Card className="bg-gradient-wellness shadow-wellness border-0">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Daily Mood Check-in
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          How are you feeling today? Select your mood and add a note if you'd like.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-5 gap-3">
          {moods.map((mood) => (
            <Button
              key={mood.value}
              variant="outline"
              className={`h-20 flex-col gap-2 transition-all duration-300 hover:scale-105 ${
                selectedMood === mood.value
                  ? "ring-2 ring-primary ring-offset-2 bg-primary/10 border-primary"
                  : "border-border/50 hover:border-primary/50"
              }`}
              onClick={() => setSelectedMood(mood.value)}
            >
              <span className="text-2xl">{mood.emoji}</span>
              <span className="text-xs font-medium">{mood.label}</span>
            </Button>
          ))}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            How was your day? (Optional)
          </label>
          <Textarea
            placeholder="Share what made your day special, challenging, or anything else on your mind..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="min-h-[100px] resize-none border-border/50 focus:border-primary"
          />
        </div>

        <Button
          onClick={handleMoodSubmit}
          className="w-full bg-gradient-primary hover:opacity-90 transition-opacity duration-300 font-semibold"
          size="lg"
        >
          Log Today's Mood
        </Button>
      </CardContent>
    </Card>
  );
}