
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArticleDetail from "./pages/ArticleDetail";
import Login from "./pages/admin/Login";
import Articles from "./pages/admin/Articles";
import ArticleForm from "./pages/admin/ArticleForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/artikel/:articleId" element={<ArticleDetail />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/articles" element={<Articles />} />
            <Route path="/admin/articles/new" element={<ArticleForm />} />
            <Route path="/admin/articles/edit/:id" element={<ArticleForm />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
