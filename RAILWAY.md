# 🚀 Quick Railway Deployment

## Step-by-Step (5 minutes)

### 1. **Prepare Your Repository**

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Ready for Railway deployment"

# Create GitHub repo and push
git remote add origin https://github.com/YOUR_USERNAME/regulatory-mapper.git
git push -u origin main
```

### 2. **Deploy on Railway**

1. Go to **[railway.app](https://railway.app)** and sign in with GitHub
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose your `regulatory-mapper` repository
5. Railway auto-detects Node.js and deploys!

### 3. **Done! ✅**

Railway gives you a public URL like:
```
https://regulatory-mapper-production.up.railway.app
```

Click it to access your app!

---

## What Happens During Deployment

Railway automatically:
- ✅ Installs dependencies (`npm ci`)
- ✅ Builds React app (`npm run build`)
- ✅ Starts Express server (`npm start`)
- ✅ Provides HTTPS domain
- ✅ Sets `PORT` and `NODE_ENV=production`

---

## No Environment Variables Needed!

Users enter their Anthropic API keys **in the app UI** (stored in browser localStorage).

---

## Auto-Redeploy on Git Push

Every time you push to GitHub, Railway automatically redeploys:

```bash
git add .
git commit -m "Update feature"
git push
```

🎉 **That's it!**

---

## Cost

- **$5/month free credit**
- Typical cost: ~$2-5/month after free credit

---

## Need Help?

See detailed guide: [DEPLOYMENT.md](./DEPLOYMENT.md)
