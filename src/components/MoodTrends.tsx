import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

// Mock data for demonstration
const mockMoodData = [
  { date: "Mon", mood: 4, label: "Good" },
  { date: "Tue", mood: 3, label: "Okay" },
  { date: "Wed", mood: 5, label: "Great" },
  { date: "Thu", mood: 3, label: "Okay" },
  { date: "Fri", mood: 4, label: "Good" },
  { date: "Sat", mood: 5, label: "Great" },
  { date: "Sun", mood: 4, label: "Good" },
];

const weeklyStats = [
  { metric: "Average Mood", value: "4.0", icon: "📊" },
  { metric: "Best Day", value: "Wed, Sat", icon: "🌟" },
  { metric: "Streak", value: "7 days", icon: "🔥" },
  { metric: "Improvement", value: "+15%", icon: "📈" },
];

export default function MoodTrends() {
  return (
    <div className="space-y-6">
      {/* Weekly Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {weeklyStats.map((stat) => (
          <Card key={stat.metric} className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.metric}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mood Trend Chart */}
      <Card className="bg-gradient-calm shadow-soft border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>📈</span>
            Mood Trends - This Week
          </CardTitle>
          <CardDescription>
            Track your emotional wellbeing over time to identify patterns and progress.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockMoodData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="date" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  domain={[1, 5]}
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                  formatter={(value: number) => [
                    mockMoodData.find(d => d.mood === value)?.label || value,
                    "Mood"
                  ]}
                />
                <Line
                  type="monotone"
                  dataKey="mood"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: "hsl(var(--primary-glow))", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Daily Mood Distribution */}
      <Card className="bg-card/80 backdrop-blur-sm shadow-soft border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>📊</span>
            Daily Mood Distribution
          </CardTitle>
          <CardDescription>
            See how often you experience different moods throughout the week.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockMoodData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="date" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  domain={[1, 5]}
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Bar
                  dataKey="mood"
                  fill="hsl(var(--primary-light))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}