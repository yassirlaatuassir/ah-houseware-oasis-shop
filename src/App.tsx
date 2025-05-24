
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { AdminProvider } from "@/contexts/AdminContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArticleDetail from "./pages/ArticleDetail";
<<<<<<< HEAD
import Login from "./pages/admin/Login";
import Articles from "./pages/admin/Articles";
import ArticleForm from "./pages/admin/ArticleForm";
=======
import ArticleEditor from "./pages/ArticleEditor";
import AdminLogin from "./components/admin/AdminLogin";
import AdminRoute from "./components/admin/AdminRoute";
>>>>>>> b46c3ded9c946945a1d3d9d77d379a78404bcf7d

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
<<<<<<< HEAD
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
=======
      <AdminProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/artikel/:articleId" element={<ArticleDetail />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/artikel/edit/:articleId" element={
                <AdminRoute>
                  <ArticleEditor />
                </AdminRoute>
              } />
              <Route path="/artikel/new" element={
                <AdminRoute>
                  <ArticleEditor />
                </AdminRoute>
              } />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AdminProvider>
>>>>>>> b46c3ded9c946945a1d3d9d77d379a78404bcf7d
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
