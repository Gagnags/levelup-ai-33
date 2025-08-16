import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import EventExplorer from "./pages/EventExplorer";
import PlayerProfile from "./pages/PlayerProfile";
import Cohorts from "./pages/Cohorts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="explore" element={<EventExplorer />} />
            <Route path="players" element={<PlayerProfile />} />
            <Route path="cohorts" element={<Cohorts />} />
            <Route path="journeys" element={<div className="p-6"><h1 className="text-2xl font-bold">Journeys</h1><p className="text-muted-foreground">Coming soon...</p></div>} />
            <Route path="copilot" element={<div className="p-6"><h1 className="text-2xl font-bold">Copilot</h1><p className="text-muted-foreground">Use the floating chat button!</p></div>} />
            <Route path="playbooks" element={<div className="p-6"><h1 className="text-2xl font-bold">Playbooks</h1><p className="text-muted-foreground">Coming soon...</p></div>} />
            <Route path="catalog" element={<div className="p-6"><h1 className="text-2xl font-bold">Catalog</h1><p className="text-muted-foreground">Coming soon...</p></div>} />
            <Route path="settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings</h1><p className="text-muted-foreground">Coming soon...</p></div>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
