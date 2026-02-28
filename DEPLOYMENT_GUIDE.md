# Adnan Bootawala - Portfolio Deployment Guide

## 🚀 Deploy Your Portfolio to Vercel with Custom Domain

Your beautiful Apple-style portfolio is ready to go live on **adnanbootwala.com**!

---

## 📋 Prerequisites

✅ GitHub account (you have this)
✅ Custom domain: adnanbootwala.com (you have this)
✅ Vercel account (free - we'll create this)

---

## 🎯 Step-by-Step Deployment Guide

### STEP 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** icon (top right) → **"New repository"**
3. Fill in:
   - **Repository name**: `portfolio` (or any name you prefer)
   - **Description**: "My professional portfolio website"
   - **Visibility**: Public (recommended) or Private
   - ❌ **DO NOT** check "Add README" or any other initialization options
4. Click **"Create repository"**

### STEP 2: Push Your Code to GitHub

Open your terminal/command prompt and run these commands ONE BY ONE:

```bash
# Navigate to your frontend folder
cd /app/frontend

# Initialize git (if not already)
git init

# Add all files
git add .

# Commit your code
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote
# REPLACE 'YOUR-GITHUB-USERNAME' with your actual username
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Important:** Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username in the command above.

---

### STEP 3: Deploy to Vercel

1. **Sign up for Vercel** (if you don't have an account)
   - Go to [vercel.com](https://vercel.com)
   - Click **"Sign Up"**
   - Choose **"Continue with GitHub"** (easiest option)
   - Authorize Vercel to access your GitHub

2. **Import Your Repository**
   - Click **"Add New..."** → **"Project"**
   - Select **"Import Git Repository"**
   - Find and select your `portfolio` repository
   - Click **"Import"**

3. **Configure Project**
   - **Framework Preset**: Vercel will auto-detect "Create React App" ✅
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `yarn build` (auto-detected)
   - **Output Directory**: `build` (auto-detected)
   - Click **"Deploy"**

4. **Wait for Deployment** ⏳
   - Vercel will build and deploy your site (takes 1-2 minutes)
   - You'll see a success screen with your live URL!
   - Your portfolio will be live at: `https://portfolio-xxxxx.vercel.app`

---

### STEP 4: Connect Your Custom Domain (adnanbootwala.com)

1. **In Vercel Dashboard**
   - Go to your project
   - Click **"Settings"** → **"Domains"**
   - Type `adnanbootwala.com` in the domain field
   - Click **"Add"**

2. **Configure DNS Settings**
   
   Vercel will show you DNS records to add. Go to your domain registrar (where you bought adnanbootwala.com) and add:

   **Option A: Using A Record (Recommended)**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **Option B: Using CNAME**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Add www subdomain (optional but recommended)**
   - Add `www.adnanbootwala.com` as well
   - Vercel will auto-redirect www to non-www or vice versa

4. **Wait for DNS Propagation** ⏳
   - DNS changes take 5 minutes to 48 hours (usually 10-15 minutes)
   - Vercel will automatically provision SSL certificate
   - Your site will be live with HTTPS! 🎉

---

## 🎊 DONE! Your Portfolio is Live!

Your portfolio will be accessible at:
- ✅ `https://adnanbootwala.com` (your custom domain)
- ✅ `https://www.adnanbootwala.com`
- ✅ Automatic HTTPS/SSL
- ✅ Lightning-fast global CDN

---

## 🔄 Making Future Updates

Whenever you want to update your portfolio:

1. Edit your code locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Updated projects/content"
   git push
   ```
3. Vercel automatically deploys the changes! ✨

---

## 💡 Useful Links

- **Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Custom Domains Guide**: [vercel.com/docs/custom-domains](https://vercel.com/docs/custom-domains)

---

## 🆘 Troubleshooting

**Issue: Git push fails**
- Make sure you replaced `YOUR-GITHUB-USERNAME` with your actual username
- Ensure you're logged into GitHub in your terminal

**Issue: Build fails on Vercel**
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in package.json

**Issue: Domain not working**
- Wait 15-30 minutes for DNS propagation
- Verify DNS records in your domain registrar
- Check Vercel's domain status

---

## 📞 Need Help?

If you encounter any issues, check:
1. Vercel build logs
2. DNS settings in your domain registrar
3. GitHub repository is accessible

---

**Congratulations! Your beautiful Apple-style portfolio is going live! 🚀**
