import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MetricCard } from "@/components/MetricCard";
import { 
  User, 
  Search,
  MapPin,
  Smartphone,
  Clock,
  DollarSign,
  Trophy,
  Activity,
  ShoppingCart,
  Gamepad2,
  TrendingUp,
  Lightbulb
} from "lucide-react";

const samplePlayer = {
  id: "player_98342",
  name: "Anonymous Player",
  lastSeen: "2 hours ago",
  xpLevel: 24,
  country: "United States",
  platform: "iOS",
  sessionCount: 127,
  avgSessionLength: "23m 14s",
  totalRevenue: 89.97,
  joinDate: "2024-01-15"
};

const nextBestActions = [
  {
    title: "Offer Soft Currency Bundle",
    description: "Player has failed Level 12 twice. Similar players respond well to currency offers.",
    confidence: "Medium",
    impact: "+12% conversion",
    reasoning: "Based on 2,341 similar player patterns"
  },
  {
    title: "Send Social Feature Nudge",
    description: "Player hasn't used multiplayer features. They're in a social-active cohort.",
    confidence: "High",
    impact: "+18% retention",
    reasoning: "91% of similar players engage when prompted"
  }
];

const recentEvents = [
  { type: "level_fail", details: "Failed Level 12 (3rd attempt)", time: "2 hours ago", severity: "warning" },
  { type: "session_end", details: "Session lasted 28 minutes", time: "2 hours ago", severity: "normal" },
  { type: "item_purchase", details: "Bought Health Potion x3", time: "3 hours ago", severity: "positive" },
  { type: "level_complete", details: "Completed Level 11", time: "5 hours ago", severity: "positive" },
  { type: "session_start", details: "Started new session", time: "5 hours ago", severity: "normal" },
];

export default function PlayerProfile() {
  const [searchTerm, setSearchTerm] = useState("player_98342");

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <User className="w-8 h-8 text-primary" />
            Player 360
          </h1>
          <p className="text-muted-foreground mt-1">
            Comprehensive player profiles with AI-powered insights
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by Player ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Player Header */}
      <div className="bg-card border border-card-border rounded-lg p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
              {samplePlayer.xpLevel}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{samplePlayer.id}</h2>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Last seen {samplePlayer.lastSeen}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {samplePlayer.country}
                </div>
                <div className="flex items-center gap-1">
                  <Smartphone className="w-4 h-4" />
                  {samplePlayer.platform}
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Player since</div>
            <div className="font-medium">{samplePlayer.joinDate}</div>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <MetricCard
          title="Total Sessions"
          value={samplePlayer.sessionCount.toString()}
          icon={<Activity className="w-5 h-5" />}
        />
        <MetricCard
          title="Avg Session Length"
          value={samplePlayer.avgSessionLength}
          icon={<Clock className="w-5 h-5" />}
        />
        <MetricCard
          title="Total Revenue"
          value={`$${samplePlayer.totalRevenue}`}
          icon={<DollarSign className="w-5 h-5" />}
        />
        <MetricCard
          title="Current Level"
          value={samplePlayer.xpLevel.toString()}
          icon={<Trophy className="w-5 h-5" />}
        />
        <MetricCard
          title="Predicted LTV (90d)"
          value="$12.45"
          change={{ value: "+8.2%", type: "increase", period: "vs baseline" }}
          icon={<TrendingUp className="w-5 h-5" />}
        />
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="purchases">Purchases</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
          <TabsTrigger value="progression">Progression</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* AI Summary */}
            <div className="bg-card border border-card-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                AI Summary
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-muted-foreground leading-relaxed">
                  This player shows <span className="text-foreground font-medium">high engagement</span> with 
                  above-average session lengths and consistent daily activity. They're currently experiencing 
                  friction at Level 12 with multiple recent failures.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Spending pattern indicates <span className="text-foreground font-medium">moderate monetization</span> 
                  with small, frequent purchases. Strong candidate for progression assistance and social feature adoption.
                </p>
              </div>
            </div>

            {/* Next Best Actions */}
            <div className="bg-card border border-card-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-accent-cyan" />
                Next Best Actions
              </h3>
              <div className="space-y-4">
                {nextBestActions.map((action, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-foreground">{action.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        action.confidence === "High" 
                          ? "bg-success/10 text-success" 
                          : "bg-accent-cyan/10 text-accent-cyan"
                      }`}>
                        {action.confidence}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{action.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-success">{action.impact}</span>
                      <span className="text-muted-foreground">{action.reasoning}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-4">
          <div className="bg-card border border-card-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Events</h3>
            <div className="space-y-3">
              {recentEvents.map((event, index) => (
                <div key={index} className="flex items-center gap-3 py-3 border-b border-border/20 last:border-0">
                  <div className={`w-2 h-2 rounded-full ${
                    event.severity === "positive" ? "bg-success" :
                    event.severity === "warning" ? "bg-warning" :
                    "bg-muted-foreground"
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{event.details}</span>
                      <span className="text-xs text-muted-foreground">{event.time}</span>
                    </div>
                    <div className="text-xs text-muted-foreground capitalize">{event.type.replace('_', ' ')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="purchases">
          <div className="bg-card border border-card-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Purchase History</h3>
            <p className="text-muted-foreground">Purchase history and monetization insights coming soon...</p>
          </div>
        </TabsContent>

        <TabsContent value="sessions">
          <div className="bg-card border border-card-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Session Analysis</h3>
            <p className="text-muted-foreground">Detailed session analytics coming soon...</p>
          </div>
        </TabsContent>

        <TabsContent value="progression">
          <div className="bg-card border border-card-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Progression Timeline</h3>
            <p className="text-muted-foreground">Level progression and difficulty analysis coming soon...</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}