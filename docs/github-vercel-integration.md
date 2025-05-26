# GitHub-Vercel Integration Guide

This guide explains how to set up automatic deployments from GitHub to Vercel for the AH Houseware Oasis Shop project.

## Overview

When you make changes to your products or articles in the admin panel, you need to:

1. Export the data from the admin panel
2. Update the source code files with the exported data
3. Commit and push the changes to GitHub
4. Vercel will automatically deploy the updated site

## Setting Up GitHub-Vercel Integration

### Step 1: Connect Your GitHub Repository to Vercel

1. Log in to your [Vercel account](https://vercel.com/login)
2. Click "Add New..." and select "Project"
3. Import your GitHub repository (ah-houseware-oasis-shop)
4. Configure your project settings:
   - Framework Preset: Vite
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: dist
5. Click "Deploy"

### Step 2: Configure Automatic Deployments

Vercel automatically sets up a GitHub webhook that triggers a new deployment whenever you push changes to your repository. This is enabled by default.

To verify this is working:
1. Go to your Vercel project dashboard
2. Navigate to "Settings" > "Git"
3. Ensure "Deploy on Push" is enabled

### Step 3: Workflow for Updating Products/Articles

1. Log in to the admin panel of your site
2. Make changes to products or articles
3. Go to the "Export Data" section in the admin panel
4. Export the updated data
5. Copy the exported code
6. Update the corresponding files in your local repository:
   - For products: `src/data/products.ts`
   - For articles: `src/data/articles.ts`
7. Commit and push your changes to GitHub:
   ```bash
   git add src/data/products.ts src/data/articles.ts
   git commit -m "Update products and articles"
   git push
   ```
8. Vercel will automatically detect the push and deploy the updated site

### Step 4: Verifying Deployment

1. After pushing your changes, go to your Vercel dashboard
2. You should see a new deployment in progress
3. Once completed, your site will be updated with the latest changes

## Troubleshooting

If your changes don't appear on the deployed site:

1. Check your Vercel dashboard for any failed deployments
2. Verify that you've pushed the changes to the correct branch (usually `main`)
3. Make sure the export process correctly updated the source files
4. Check that the data format in the exported files is correct

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Integration with Vercel](https://vercel.com/docs/concepts/git/vercel-for-github)
