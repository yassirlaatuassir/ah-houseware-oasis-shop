import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

export default function DataExporter() {
  const [productsCode, setProductsCode] = useState<string>('');
  const [articlesCode, setArticlesCode] = useState<string>('');
  const { toast } = useToast();

  // Function to export products from localStorage
  const exportProducts = () => {
    try {
      // Get products from localStorage
      const productsJson = localStorage.getItem('ah_products');
      if (!productsJson) {
        toast({
          title: "Error",
          description: "No products found in localStorage",
          variant: "destructive"
        });
        return;
      }
      
      const products = JSON.parse(productsJson);
      
      // Format products as code
      const code = `// This file is auto-generated from localStorage data
// Last updated: ${new Date().toISOString()}

export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  description: string;
  rating: number;
  sold: number;
}

// Default products that will be used when no localStorage data exists
const defaultProducts = ${JSON.stringify(products, null, 2)};

export default defaultProducts;`;
      
      setProductsCode(code);
      
      toast({
        title: "Success",
        description: "Products exported successfully. Copy the code and update src/data/products.ts",
      });
    } catch (error) {
      console.error('Error exporting products:', error);
      toast({
        title: "Error",
        description: "Failed to export products: " + (error as Error).message,
        variant: "destructive"
      });
    }
  };

  // Function to export articles from localStorage
  const exportArticles = () => {
    try {
      // Get articles from localStorage
      const articlesJson = localStorage.getItem('ah_articles');
      if (!articlesJson) {
        toast({
          title: "Error",
          description: "No articles found in localStorage",
          variant: "destructive"
        });
        return;
      }
      
      const articles = JSON.parse(articlesJson);
      
      // Format articles as code
      const code = `// This file is auto-generated from localStorage data
// Last updated: ${new Date().toISOString()}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  content?: string;
  slug?: string;
}

export const articles = ${JSON.stringify(articles, null, 2)};`;
      
      setArticlesCode(code);
      
      toast({
        title: "Success",
        description: "Articles exported successfully. Copy the code and update src/data/articles.ts",
      });
    } catch (error) {
      console.error('Error exporting articles:', error);
      toast({
        title: "Error",
        description: "Failed to export articles: " + (error as Error).message,
        variant: "destructive"
      });
    }
  };

  // Function to copy code to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied!",
        description: "Code copied to clipboard",
      });
    }).catch(err => {
      console.error('Failed to copy: ', err);
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive"
      });
    });
  };

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Data Exporter</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Use this tool to export your current products and articles data from localStorage to code that can be added to the source files.
            After exporting, copy the code and update the corresponding files in the project, then commit to GitHub.
          </p>
          
          <div className="flex gap-4 mb-6">
            <Button onClick={exportProducts}>Export Products</Button>
            <Button onClick={exportArticles}>Export Articles</Button>
          </div>
          
          <Tabs defaultValue="products">
            <TabsList>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="articles">Articles</TabsTrigger>
            </TabsList>
            
            <TabsContent value="products">
              {productsCode && (
                <>
                  <div className="flex justify-end mb-2">
                    <Button variant="outline" size="sm" onClick={() => copyToClipboard(productsCode)}>
                      Copy to Clipboard
                    </Button>
                  </div>
                  <Textarea 
                    value={productsCode} 
                    readOnly 
                    className="font-mono text-sm h-[500px]" 
                  />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Copy this code and save it to <code>src/data/products.ts</code>
                  </p>
                </>
              )}
            </TabsContent>
            
            <TabsContent value="articles">
              {articlesCode && (
                <>
                  <div className="flex justify-end mb-2">
                    <Button variant="outline" size="sm" onClick={() => copyToClipboard(articlesCode)}>
                      Copy to Clipboard
                    </Button>
                  </div>
                  <Textarea 
                    value={articlesCode} 
                    readOnly 
                    className="font-mono text-sm h-[500px]" 
                  />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Copy this code and save it to <code>src/data/articles.ts</code>
                  </p>
                </>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
