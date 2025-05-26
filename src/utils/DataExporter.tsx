import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Github, ExternalLink } from "lucide-react";

export default function DataExporter() {
  const [productsCode, setProductsCode] = useState<string>('');
  const [articlesCode, setArticlesCode] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('products');
  const [showDeployGuide, setShowDeployGuide] = useState<boolean>(false);
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
            <Button 
              variant="outline" 
              onClick={() => setShowDeployGuide(!showDeployGuide)}
              className="ml-auto"
            >
              {showDeployGuide ? 'Hide Deploy Guide' : 'Show Deploy Guide'}
            </Button>
          </div>

          {showDeployGuide && (
            <Alert className="mb-6 bg-blue-50 border-blue-200">
              <AlertCircle className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-800">GitHub-Vercel Integration</AlertTitle>
              <AlertDescription className="text-blue-700">
                <p className="mb-2">After exporting and updating your code files, follow these steps to deploy your changes:</p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="step1">
                    <AccordionTrigger className="text-blue-700 font-medium">1. Update source files</AccordionTrigger>
                    <AccordionContent className="text-blue-600">
                      <p>Copy the exported code and update these files in your project:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><code>src/data/products.ts</code> - for product data</li>
                        <li><code>src/data/articles.ts</code> - for article data</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="step2">
                    <AccordionTrigger className="text-blue-700 font-medium">2. Commit and push to GitHub</AccordionTrigger>
                    <AccordionContent className="text-blue-600">
                      <p>Open a terminal in your project directory and run:</p>
                      <pre className="bg-blue-100 p-2 rounded mt-2 overflow-x-auto">
                        <code>git add src/data/products.ts src/data/articles.ts</code>
                      </pre>
                      <pre className="bg-blue-100 p-2 rounded mt-2 overflow-x-auto">
                        <code>git commit -m "Update products and articles"</code>
                      </pre>
                      <pre className="bg-blue-100 p-2 rounded mt-2 overflow-x-auto">
                        <code>git push</code>
                      </pre>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="step3">
                    <AccordionTrigger className="text-blue-700 font-medium">3. Vercel automatic deployment</AccordionTrigger>
                    <AccordionContent className="text-blue-600">
                      <p>Vercel will automatically detect your push and deploy the changes.</p>
                      <p className="mt-2">Check your Vercel dashboard to monitor the deployment status.</p>
                      <div className="mt-3">
                        <a 
                          href="/docs/github-vercel-integration.md" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-800 hover:text-blue-900 font-medium"
                        >
                          View detailed integration guide <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AlertDescription>
            </Alert>
          )}
          
          <Tabs defaultValue="products" onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="articles">Articles</TabsTrigger>
            </TabsList>
            
            <TabsContent value="products">
              {productsCode && (
                <>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-muted-foreground pt-2">
                      This code should be saved to <code>src/data/products.ts</code>
                    </p>
                    <Button variant="outline" size="sm" onClick={() => copyToClipboard(productsCode)}>
                      Copy to Clipboard
                    </Button>
                  </div>
                  <Textarea 
                    value={productsCode} 
                    readOnly 
                    className="font-mono text-sm h-[400px]" 
                  />
                  {activeTab === 'products' && productsCode && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
                      <h3 className="font-semibold text-green-800 flex items-center">
                        <Github className="mr-2 h-4 w-4" /> Next Steps
                      </h3>
                      <p className="text-green-700 mt-1">
                        1. Copy this code to <code>src/data/products.ts</code><br />
                        2. Commit and push to GitHub<br />
                        3. Vercel will automatically deploy your changes
                      </p>
                    </div>
                  )}
                </>
              )}
            </TabsContent>
            
            <TabsContent value="articles">
              {articlesCode && (
                <>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-muted-foreground pt-2">
                      This code should be saved to <code>src/data/articles.ts</code>
                    </p>
                    <Button variant="outline" size="sm" onClick={() => copyToClipboard(articlesCode)}>
                      Copy to Clipboard
                    </Button>
                  </div>
                  <Textarea 
                    value={articlesCode} 
                    readOnly 
                    className="font-mono text-sm h-[400px]" 
                  />
                  {activeTab === 'articles' && articlesCode && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
                      <h3 className="font-semibold text-green-800 flex items-center">
                        <Github className="mr-2 h-4 w-4" /> Next Steps
                      </h3>
                      <p className="text-green-700 mt-1">
                        1. Copy this code to <code>src/data/articles.ts</code><br />
                        2. Commit and push to GitHub<br />
                        3. Vercel will automatically deploy your changes
                      </p>
                    </div>
                  )}
                </>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
