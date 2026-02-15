# Railway Deployment Guide

## Prerequisites
- GitHub account
- Railway account (sign up at https://railway.app)
- Your code in a GitHub repository

## Deployment Steps

### 1. Push Your Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Deploy to Railway

1. Go to https://railway.app and sign in
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose your repository
5. Railway will automatically detect the Node.js project

### 3. Configure Environment Variables

Railway will automatically set `PORT` and `NODE_ENV=production`.

**No additional environment variables are required** - users will enter their Anthropic API keys directly in the app interface.

### 4. Wait for Deployment

Railway will:
1. Install dependencies (`npm ci`)
2. Build the Vite frontend (`npm run build`)
3. Start the server (`npm start`)
4. Provide you with a public URL

### 5. Access Your App

Once deployed, Railway provides a URL like: `https://regulatory-mapper-production.up.railway.app`

Click the generated URL to access your deployed application!

## Application Architecture

```
┌─────────────────────────────────────────────┐
│  Railway Cloud (Single Service)             │
│                                              │
│  ┌────────────────────────────────────────┐ │
│  │  Express Server (Port from Railway)    │ │
│  │                                         │ │
│  │  ┌──────────────────────────────────┐  │ │
│  │  │  Static Assets (Built Vite App)  │  │ │
│  │  │  /dist/*                         │  │ │
│  │  └──────────────────────────────────┘  │ │
│  │                                         │ │
│  │  ┌──────────────────────────────────┐  │ │
│  │  │  API Proxy                       │  │ │
│  │  │  /api/claude → Anthropic API     │  │ │
│  │  └──────────────────────────────────┘  │ │
│  └────────────────────────────────────────┘ │
│                                              │
│  ┌────────────────────────────────────────┐ │
│  │  Browser Storage (localStorage)        │ │
│  │  - Anthropic API Key (client-side)     │ │
│  └────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

## Local Development

For local development, you still need two terminals:

**Terminal 1 - Vite Dev Server:**
```bash
npm run dev
```

**Terminal 2 - Express Proxy Server:**
```bash
npm run server
```

Or run both together:
```bash
npm run dev:all
```

## Production vs Development Behavior

| Feature | Development | Production (Railway) |
|---------|-------------|---------------------|
| Frontend | Vite dev server (port 5173) | Served from Express |
| API Proxy | Separate process (port 3001) | Same Express server |
| API URL | `http://localhost:3001/api/claude` | `/api/claude` (relative) |
| Hot Reload | Yes (Vite HMR) | No |
| Build | Not required | Built during deployment |

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify `npm run build` works locally
- Check Railway build logs for specific errors

### App Won't Load
- Check Railway logs for server errors
- Verify `npm start` works locally after building
- Ensure PORT environment variable is being used

### API Calls Fail
- Check Railway logs for proxy errors
- Verify users have entered valid Anthropic API keys
- Test API endpoint: `https://your-app.railway.app/api/claude`

### CSS/Assets Missing
- Ensure `vite build` completed successfully
- Check that `dist/` folder is being served
- Verify static file middleware is configured in server.js

## Updating Your Deployment

After pushing changes to GitHub:

```bash
git add .
git commit -m "Your update message"
git push
```

Railway will automatically detect changes and redeploy!

## Custom Domain (Optional)

1. Go to your Railway project settings
2. Click on **"Domains"**
3. Click **"Add Domain"**
4. Follow instructions to configure your DNS

## Monitoring & Logs

View live logs in Railway:
1. Go to your project
2. Click on the service
3. Select **"Logs"** tab

## Cost

Railway offers:
- **$5/month free credit** for personal projects
- Pay-as-you-go pricing after free credit
- Typical costs for this app: ~$2-5/month depending on usage

## Security Notes

- API keys are stored in user's browser localStorage (never sent to Railway)
- All API calls go through your proxy (protects against CORS)
- API keys are passed in request body to proxy, then added to headers server-side
- Railway provides HTTPS by default (secure connection)

## Support

- Railway Support: https://railway.app/help
- Project Issues: Create an issue in your GitHub repository
