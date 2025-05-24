
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { AdminProvider } from './contexts/AdminContext';

import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArticleDetail from "./pages/ArticleDetail";
import Login from "./pages/admin/Login";
import Articles from "./pages/admin/Articles";
import ArticleEditor from "./pages/admin/ArticleEditor";
import Products from "./pages/admin/Products";
import ProductEditor from "./pages/admin/ProductEditor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AdminProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/artikel/:articleId" element={<ArticleDetail />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin/articles" element={
                <ProtectedRoute>
                  <Articles />
                </ProtectedRoute>
              } />
              <Route path="/admin/articles/new" element={
                <ProtectedRoute>
                  <ArticleEditor />
                </ProtectedRoute>
              } />
              <Route path="/admin/articles/edit/:id" element={
                <ProtectedRoute>
                  <ArticleEditor />
                </ProtectedRoute>
              } />
              <Route path="/admin/products" element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              } />
              <Route path="/admin/products/new" element={
                <ProtectedRoute>
                  <ProductEditor />
                </ProtectedRoute>
              } />
              <Route path="/admin/products/edit/:id" element={
                <ProtectedRoute>
                  <ProductEditor />
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
