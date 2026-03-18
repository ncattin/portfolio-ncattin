import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Missions from "./pages/Missions";
import Competences from "./pages/Competences";
import Parcours from "./pages/Parcours";
import CompetenceDetail from "./pages/CompetenceDetail";
import Contact from "./pages/Contact";
import MissionDetail from "./pages/MissionDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/missions/:slug" element={<MissionDetail />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
