#!/bin/bash

# Portfolio Deployment Preparation Script
# This script prepares your frontend code for GitHub and Vercel deployment

echo "🚀 Preparing your portfolio for deployment..."
echo ""

# Navigate to frontend directory
cd /app/frontend

echo "✅ Step 1: Cleaning up..."
# Remove node_modules to reduce size (Vercel will reinstall)
rm -rf node_modules

echo "✅ Step 2: Creating deployment package..."
# Create a clean directory for deployment
mkdir -p /tmp/portfolio-deploy
cp -r /app/frontend/* /tmp/portfolio-deploy/
cp /app/frontend/.gitignore /tmp/portfolio-deploy/ 2>/dev/null || true

echo "✅ Step 3: Creating archive..."
cd /tmp
tar -czf portfolio-deployment.tar.gz portfolio-deploy/

echo ""
echo "✅ Your portfolio is ready for deployment!"
echo ""
echo "📦 Deployment package created at: /tmp/portfolio-deployment.tar.gz"
echo ""
echo "📋 Next steps:"
echo "1. Download the archive from /tmp/portfolio-deployment.tar.gz"
echo "2. Extract it on your local machine"
echo "3. Follow the DEPLOYMENT_GUIDE.md instructions"
echo ""
echo "🌐 Your portfolio will be live at: adnanbootwala.com"
echo ""
