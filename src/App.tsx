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
import LTVPrediction from "./pages/LTVPrediction";
import Journeys from "./pages/Journeys";
import CopilotHome from "./pages/CopilotHome";
import Playbooks from "./pages/Playbooks";
import Catalog from "./pages/Catalog";
import Settings from "./pages/Settings";
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
            <Route path="ltv" element={<LTVPrediction />} />
            <Route path="journeys" element={<Journeys />} />
            <Route path="copilot" element={<CopilotHome />} />
            <Route path="playbooks" element={<Playbooks />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
