# RegObligationAI - Regulatory Obligation Mapper

AI-powered regulatory compliance tool that extracts obligations from regulatory documents and maps them to business operations.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Anthropic API key ([Get one here](https://console.anthropic.com/))

### Installation

```bash
# Install dependencies
npm install
```

### Running the Application

**Important:** You need to run TWO terminals simultaneously:

#### Terminal 1: Frontend (Vite Dev Server)
```bash
npm run dev
```
This starts the React app on `http://localhost:5173`

#### Terminal 2: Backend (Proxy Server)
```bash
npm run server
```
This starts the API proxy on `http://localhost:3001`

**Or run both together:**
```bash
npm run dev:all
```

### First Time Setup

1. Open `http://localhost:5173` in your browser
2. Click the floating API button (bottom-right corner - green = configured, red = missing)
3. Enter your Anthropic API key
4. The key is saved in your browser's localStorage

## 📋 Features

- **8-Step Workflow**:
  1. **Jurisdiction** - Select country & industry
  2. **Entity** - Choose from 500+ financial institutions  
  3. **Reg. History** - Add enforcement actions/undertakings
  4. **Business Lines** - Select products & services
  5. **Regulation** - Choose regulator & specific regulation
  6. **Upload** - Upload regulatory PDF (max 15MB)
  7. **Analysis** - AI extracts obligations
  8. **Register** - Review & export to Excel

- **AI-Powered Analysis**: Claude Sonnet 4 extracts obligations with context
- **Regulatory History**: Track enforcement actions influencing compliance priorities
- **Business Context**: Maps obligations to specific products/services
- **Context Source Tracking**: Shows which obligations address known compliance gaps
- **Excel Export**: Download comprehensive obligation register with 12 columns

## 🏗️ Architecture

```
Frontend (React + Vite) on :5173
   ↓ HTTP requests
Proxy Server (Express) on :3001
   ↓ HTTPS + API Key
Anthropic Claude API
```

**Why the proxy?** Anthropic API blocks direct browser calls (CORS). The proxy server forwards requests securely while keeping your API key safe.

## 🔧 Configuration

### API Key Management
- Click floating button (bottom-right corner)
- Enter API key in sidebar panel
- Key stored in browser localStorage
- Persists across page refreshes
- Never exposed in client-side code

### Proxy Server
- **File**: `server.js`
- **Port**: 3001
- **Endpoint**: `POST /api/claude`
- **CORS**: Enabled for localhost:5173

## 📦 Project Structure

```
regulatory-mapper/
├── src/
│   ├── App.jsx                            # Entry point
│   ├── regulatory-obligation-mapper.jsx   # Main component (1950+ lines)
│   ├── main.jsx
│   └── assets/
├── server.js                               # API proxy server
├── package.json
├── vite.config.js
└── README-SETUP.md                         # This file
```

## 🐛 Troubleshooting

### "Connection Error: Proxy server not running"
**Problem**: The backend proxy isn't running  
**Solution**: 
```bash
# Open new terminal
npm run server
# Wait for: "✅ Proxy server running on http://localhost:3001"
# Click Retry in the app
```

### "Invalid API key"
**Problem**: Missing or incorrect Anthropic API key  
**Solution**: 
1. Click floating API button (bottom-right)
2. Get key from https://console.anthropic.com/
3. Paste key (starts with `sk-ant-api03-...`)
4. Key is automatically saved

### Port 3001 already in use
**Problem**: Another service using port 3001  
**Solution**: 
```powershell
# Find process using port 3001
netstat -ano | findstr :3001
# Kill it
taskkill /PID <PID> /F
# Or change PORT in server.js
```

### Regulatory history search fails
**Problem**: CORS limitation or proxy not running  
**Solution**: Use manual entry form instead - works offline without API calls

## 🛠️ Development Stack

**Frontend:**
- React 19.2.0 with hooks
- Vite 7.3.1 (HMR enabled)
- lucide-react for icons
- pdf.js 3.11.174 for PDF parsing
- XLSX for Excel generation

**Backend:**
- Express 4.x
- node-fetch 3.x
- CORS middleware

**AI:**
- Anthropic Claude Sonnet 4 (claude-sonnet-4-20250514)
- Max tokens: 8096 for analysis, 4096 for history search

## 📊 Data Coverage

- **Countries**: 7 (Australia, UK, New Zealand, Singapore, Hong Kong, Canada, USA)
- **Entities**: 500+ financial institutions
- **Entity Types**: 19 (Banks, Insurers, Fintechs, etc.)
- **Business Lines**: 15+ (Retail Banking, Wealth Management, etc.)
- **Products**: 40+ categories (Personal Loans, Superannuation, etc.)
- **Regulators**: 20+ (ASIC, APRA, FCA, SEC, etc.)

## 🚀 Production Deployment

For production, deploy with proper backend:
1. **Vercel/Netlify**: Use serverless functions
2. **AWS**: Lambda + API Gateway
3. **Docker**: Container with both frontend & backend
4. **Heroku**: Single dyno with Express + static files

Never expose API keys in client-side code.

## 📄 License

Private Use - Regulatory Compliance Tool

---

**Need Help?** Check the error messages in the UI - they provide specific solutions for common issues.
