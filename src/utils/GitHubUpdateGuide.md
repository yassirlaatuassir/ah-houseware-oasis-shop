# GitHub Update Guide for AH Houseware Oasis Shop

This guide explains how to update your GitHub repository with changes made to products and articles, ensuring they appear in both local and deployed versions of your website.

## Understanding the Data Flow

The AH Houseware Oasis Shop uses the following data flow:

1. **Default Data**: Stored in source files (`src/data/products.ts` and `src/data/articles.ts`)
2. **Local Storage**: When you make changes in the admin interface, they're saved to your browser's localStorage
3. **GitHub Repository**: To make your changes permanent and visible to all users, you need to update the source files and push to GitHub

## Step-by-Step Guide to Update GitHub

### 1. Export Your Data

1. Log in to the admin area (username: `admin`, password: `ahhouseware2025`)
2. Make your changes to products or articles using the admin interface
3. Click on the "Export Data" button in the navigation or go to `/admin/export`
4. Use the Export Products/Articles buttons to generate the code
5. Copy the generated code to your clipboard

### 2. Update Source Files

1. Open the corresponding source file:
   - For products: `src/data/products.ts`
   - For articles: `src/data/articles.ts`
2. Replace the entire content of the file with the code you copied
3. Save the file

### 3. Commit and Push to GitHub

Open a terminal and run the following commands:

```bash
# Navigate to your project directory (if not already there)
cd c:\ah-houseware-oasis-shop

# Add the changed files
git add src/data/products.ts src/data/articles.ts

# Commit the changes with a descriptive message
git commit -m "Update products and articles data"

# Push to GitHub
git push origin main
```

## Verifying Your Changes

After pushing to GitHub, your changes will be:

1. Available in the source code for anyone who clones the repository
2. Included in any new deployment of the website
3. Used as the default data when a user visits the site for the first time

## Troubleshooting

If you encounter any issues:

1. Make sure you're logged in as an admin
2. Check that your changes are saved in localStorage before exporting
3. Verify that you have the correct GitHub permissions to push changes
4. If you get merge conflicts, pull the latest changes first with `git pull origin main`

Remember that any changes made directly to the source files without going through the admin interface and export process will be overwritten if someone uses the admin interface to make changes and then exports them.
