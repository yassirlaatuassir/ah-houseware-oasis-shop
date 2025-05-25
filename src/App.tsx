
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { AdminProvider } from './contexts/AdminContext';

import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArticleDetail from "./pages/ArticleDetail";
import Login from "./pages/admin/Login";
import Articles from "./pages/admin/Articles";
import ArticleEditor from "./pages/admin/ArticleEditor";
import Products from "./pages/admin/Products";
import ProductEditor from "./pages/admin/ProductEditor";
import DataExport from "./pages/admin/DataExport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AdminProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/artikel/:articleId" element={<ArticleDetail />} />
              <Route path="/admin" element={<Navigate to="/admin/products" replace />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin/*" element={
                <ProtectedRoute>
                  <Routes>
                    <Route path="articles" element={<Articles />} />
                    <Route path="articles/new" element={<ArticleEditor />} />
                    <Route path="articles/edit/:id" element={<ArticleEditor />} />
                    <Route path="products" element={<Products />} />
                    <Route path="products/new" element={<ProductEditor />} />
                    <Route path="products/edit/:id" element={<ProductEditor />} />
                    <Route path="export" element={<DataExport />} />
                  </Routes>
                </ProtectedRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AdminProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
