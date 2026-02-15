# RegObligationAI - Regulatory Obligation Mapper

An AI-powered regulatory compliance analysis tool that extracts obligations from regulatory documents and maps them to business processes.

## 🚀 Features

- **500+ Financial Institutions** across 7 jurisdictions
- **AI-Powered Obligation Extraction** using Claude Sonnet 4
- **Product & Business Line Mapping** - obligations mapped to specific products
- **Detailed Control Descriptions** - WHO does WHAT, WHEN, with WHAT EVIDENCE
- **Regulatory History Tracking** - enforcement actions, breaches, undertakings
- **Excel Export** - comprehensive obligation register with 17+ columns
- **Multi-Industry Support** - Financial Services & Telecommunications

## 🌐 Deploy to Railway

**Quick Deploy (5 minutes):**

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new)

See [RAILWAY.md](./RAILWAY.md) for step-by-step instructions.

## 💻 Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Run both frontend (Vite) and backend (Express proxy)
npm run dev:all
```

**Or run separately in two terminals:**

Terminal 1:
```bash
npm run dev
```

Terminal 2:
```bash
npm run server
```

Access the app at: http://localhost:5173

### API Key Setup

1. Get an Anthropic API key from [console.anthropic.com](https://console.anthropic.com)
2. Click the ⚙️ button in the bottom-right corner of the app
3. Enter your API key (stored in browser localStorage)

## 📦 Build for Production

```bash
# Build the frontend
npm run build

# Start production server
npm start
```

The production server serves the built React app and provides the API proxy on the same port.

## 🏗️ Tech Stack

- **Frontend**: React 19, Vite 7, Lucide Icons
- **Backend**: Express 4, Node Fetch 3
- **AI**: Anthropic Claude Sonnet 4
- **PDF Processing**: PDF.js
- **Export**: XLSX (SheetJS)

## 📊 Application Flow

1. **Jurisdiction** - Select country and industry
2. **Entity** - Choose financial institution
3. **Regulatory History** - AI-powered search for enforcement actions
4. **Business Lines** - Select products and services (including Mortgage Lending)
5. **Regulation** - Choose regulator and specific regulation
6. **Upload** - PDF regulatory document
7. **Analysis** - AI extracts obligations with detailed controls
8. **Register** - Review and export obligation register

## 📄 Key Files

- `src/regulatory-obligation-mapper.jsx` - Main application component (1,966 lines)
- `server.js` - Express proxy server for Anthropic API
- `nixpacks.toml` - Railway deployment configuration
- `package.json` - Dependencies and scripts

## 🔒 Security

- API keys stored client-side only (localStorage)
- Proxy server prevents CORS issues
- API keys never exposed in frontend code
- HTTPS enforced in production (Railway)

## 📚 Documentation

- [RAILWAY.md](./RAILWAY.md) - Quick Railway deployment guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed deployment guide with architecture
- [README-SETUP.md](./README-SETUP.md) - Local setup and troubleshooting

## 🛠️ Deployment Options

- **Railway** (Recommended) - See [RAILWAY.md](./RAILWAY.md)
- **Vercel** - Configure for Express server
- **Render** - Single service with static site
- **Heroku** - Standard Node.js deployment

## 📈 Cost Estimates

### Railway Hosting
- $5/month free credit
- Typical usage: $2-5/month

### Anthropic API
- Claude Sonnet 4: ~$0.003/obligation extraction
- Typical document (50 obligations): ~$0.15
- Monthly estimate (100 documents): ~$15

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev:all`
5. Submit a pull request

## 📝 License

MIT License - see LICENSE file for details

## 🆘 Support

- GitHub Issues: Report bugs and feature requests
- Railway Support: https://railway.app/help

---

**Built with ❤️ for regulatory compliance professionals**
