✅ Railway Deployment Checklist

## Pre-Deployment (Local)

- [ ] All changes saved and tested locally
- [ ] Build works: `npm run build`
- [ ] Production server works: `npm start` (after build)
- [ ] Test at http://localhost:3001 (not :5173)
- [ ] API proxy working (test with actual API key)
- [ ] Excel export working
- [ ] All features tested

## Git & GitHub

- [ ] Git initialized: `git init`
- [ ] All files added: `git add .`
- [ ] Committed: `git commit -m "Ready for deployment"`
- [ ] GitHub repo created
- [ ] Pushed to GitHub: `git push -u origin main`

## Railway Setup

- [ ] Railway account created (https://railway.app)
- [ ] Connected GitHub account to Railway
- [ ] "New Project" → "Deploy from GitHub repo"
- [ ] Selected correct repository
- [ ] Deployment started automatically

## Post-Deployment

- [ ] Deployment completed (green checkmark)
- [ ] Railway provided public URL
- [ ] URL opens and shows app
- [ ] Can navigate through wizard
- [ ] Can enter API key in settings (⚙️ button)
- [ ] Can upload PDF
- [ ] AI extraction works
- [ ] Excel export downloads

## Optional Enhancements

- [ ] Custom domain configured
- [ ] Monitoring/alerts set up
- [ ] Added to project README
- [ ] Shared URL with team

## Troubleshooting

If deployment fails:
1. Check Railway build logs
2. Verify `npm run build` works locally
3. Check for missing dependencies in package.json
4. Review server.js for errors
5. Check nixpacks.toml configuration

If app loads but doesn't work:
1. Open browser DevTools → Console
2. Check for API errors
3. Verify API key entered correctly
4. Check Railway logs for backend errors
5. Test API endpoint: https://your-app.railway.app/api/claude (should return error about missing API key)

## Files Created for Deployment

✅ nixpacks.toml - Railway build configuration
✅ server.js - Updated with production serving & PORT handling
✅ package.json - Added "start" script with NODE_ENV
✅ src/regulatory-obligation-mapper.jsx - API URL auto-detection
✅ README.md - Updated with deployment info
✅ RAILWAY.md - Quick start guide
✅ DEPLOYMENT.md - Detailed guide
✅ CHECKLIST.md - This file

## Environment Variables (Railway)

Railway automatically sets:
- PORT (dynamic, assigned by Railway)
- NODE_ENV=production

No manual environment variables needed! ✨

## Cost Tracking

Railway Dashboard → Project → Usage
- Monitor included free credit ($5/month)
- Set up billing alerts at $3 threshold
- Typical monthly cost: $2-5

## Success Criteria

✅ App accessible via Railway URL
✅ Can complete full workflow
✅ PDF upload & AI extraction working
✅ Excel export downloads
✅ API key persists in localStorage
✅ No console errors
✅ Mobile responsive

---

🎉 **Ready to Deploy!**

Next step: Follow [RAILWAY.md](./RAILWAY.md) step-by-step guide
