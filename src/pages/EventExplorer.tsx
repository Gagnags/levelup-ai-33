import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InsightCard } from "@/components/InsightCard";
import { 
  Search, 
  BarChart3, 
  LineChart as LineChartIcon, 
  PieChart, 
  Save,
  Share,
  History,
  Sparkles
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const sampleData = [
  { date: "Jan 10", value: 21400, region: "NA" },
  { date: "Jan 11", value: 22100, region: "NA" },
  { date: "Jan 12", value: 23800, region: "NA" },
  { date: "Jan 13", value: 24200, region: "NA" },
  { date: "Jan 14", value: 25100, region: "NA" },
  { date: "Jan 15", value: 26800, region: "NA" },
  { date: "Jan 16", value: 24600, region: "NA" },
];

const queryHistory = [
  "DAU last 14 days by region",
  "Level completion rates for new players",
  "Revenue by platform last 30 days",
  "Session length trends by cohort"
];

export default function EventExplorer() {
  const [query, setQuery] = useState("");
  const [chartType, setChartType] = useState<"line" | "bar" | "pie">("line");

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Search className="w-8 h-8 text-primary" />
            Event Explorer
          </h1>
          <p className="text-muted-foreground mt-1">
            Ask questions in natural language and get instant visualizations
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <History className="w-4 h-4 mr-2" />
            History
          </Button>
          <Button variant="outline" size="sm">
            <Save className="w-4 h-4 mr-2" />
            Save Chart
          </Button>
          <Button size="sm">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      {/* Query Interface */}
      <div className="bg-card border border-card-border rounded-lg p-6">
        <div className="space-y-4">
          <div className="relative">
            <Sparkles className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary" />
            <Input
              placeholder="Try: 'Show DAU last 14 days by region' or 'Level completion rates for new players'"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 h-12 text-base bg-surface-elevated border-input-border"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              Analyze
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Quick examples:</span>
            <Button variant="ghost" size="sm" onClick={() => setQuery("DAU last 14 days by region")}>
              DAU trends
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setQuery("Top journeys for new players")}>
              Player journeys
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setQuery("Revenue by platform last 30 days")}>
              Revenue analysis
            </Button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Main Chart */}
        <div className="xl:col-span-3 bg-card border border-card-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Daily Active Users - Last 7 Days</h2>
              <p className="text-sm text-muted-foreground">North America region</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={chartType === "line" ? "default" : "ghost"}
                size="sm"
                onClick={() => setChartType("line")}
              >
                <LineChartIcon className="w-4 h-4" />
              </Button>
              <Button
                variant={chartType === "bar" ? "default" : "ghost"}
                size="sm"
                onClick={() => setChartType("bar")}
              >
                <BarChart3 className="w-4 h-4" />
              </Button>
              <Button
                variant={chartType === "pie" ? "default" : "ghost"}
                size="sm"
                onClick={() => setChartType("pie")}
              >
                <PieChart className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === "line" ? (
                <LineChart data={sampleData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--popover))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              ) : (
                <BarChart data={sampleData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--popover))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Query Details */}
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <span className="font-medium">Query executed:</span>
                <span className="ml-2 font-mono text-primary">events.session_start | filter: region="NA", last_7d | group_by: date</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Confidence: <span className="text-success font-medium">High (0.94)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Insights & History */}
        <div className="space-y-6">
          {/* AI Insights */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">AI Insights</h3>
            <div className="space-y-3">
              <InsightCard
                type="trend"
                title="Weekend Peak"
                description="DAU peaks on weekends, showing 15% higher engagement."
                confidence="high"
              />
              <InsightCard
                type="driver"
                title="Growth Driver"
                description="Recent content update correlated with 8% DAU increase."
                confidence="medium"
              />
            </div>
          </div>

          {/* Query History */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Recent Queries</h3>
            <div className="space-y-2">
              {queryHistory.map((q, index) => (
                <button
                  key={index}
                  className="w-full text-left p-3 text-sm bg-surface-elevated hover:bg-muted rounded-lg transition-smooth"
                  onClick={() => setQuery(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}