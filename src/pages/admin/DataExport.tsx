import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AdminNav from '@/components/admin/AdminNav';
import DataExporter from '@/utils/DataExporter';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Github, ExternalLink } from "lucide-react";

export default function DataExport() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in as admin
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin/login');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Export Data</h1>
          <Link 
            to="/docs/github-vercel-integration.md" 
            target="_blank" 
            className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <Github className="mr-2 h-4 w-4" /> GitHub-Vercel Guide
          </Link>
        </div>
        
        <Card className="mb-6 border-blue-200 bg-blue-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-blue-800 flex items-center">
              <AlertCircle className="mr-2 h-5 w-5" /> Automatic Deployment with GitHub and Vercel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-700">
              After exporting your data, follow these steps to automatically deploy your changes:
            </p>
            <ol className="list-decimal pl-5 mt-2 space-y-1 text-blue-700">
              <li>Copy the exported code to the corresponding source files</li>
              <li>Commit and push your changes to GitHub</li>
              <li>Vercel will automatically detect the changes and deploy your updated site</li>
            </ol>
            <p className="mt-2 text-blue-700">
              For detailed instructions, click the "GitHub-Vercel Guide" button above.
            </p>
          </CardContent>
        </Card>
        
        <DataExporter />
      </div>
    </div>
  );
}
