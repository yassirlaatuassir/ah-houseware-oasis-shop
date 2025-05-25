import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNav from '@/components/admin/AdminNav';
import DataExporter from '@/utils/DataExporter';

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
        <h1 className="text-3xl font-bold mb-6">Export Data</h1>
        <p className="mb-6 text-gray-600">
          Use this tool to export your current products and articles data from localStorage to code files.
          After exporting, you can copy the generated code and update the source files in the project, 
          then commit the changes to GitHub to make them appear in both local and deployed versions.
        </p>
        <DataExporter />
      </div>
    </div>
  );
}
