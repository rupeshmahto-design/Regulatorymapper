import { useState, useRef, useCallback, useMemo } from "react";
import { Globe, Building2, Scale, FileUp, Cpu, ClipboardList, Download, ChevronRight, ChevronLeft, Upload, Check, AlertCircle, X, Search, Shield, ArrowUpDown, Plus } from "lucide-react";
import * as XLSX from "xlsx";

const COMPANY_REGISTRY = {
  Australia: {
    "Financial Services": [
      { name: "Commonwealth Bank of Australia (CBA)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Major Bank" },
      { name: "Westpac Banking Corporation", licence: "ADI (Authorised Deposit-taking Institution)", type: "Major Bank" },
      { name: "National Australia Bank (NAB)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Major Bank" },
      { name: "ANZ Group Holdings", licence: "ADI (Authorised Deposit-taking Institution)", type: "Major Bank" },
      { name: "Macquarie Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Domestic Bank" },
      { name: "Bendigo and Adelaide Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Domestic Bank" },
      { name: "Bank of Queensland (BOQ)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Domestic Bank" },
      { name: "Suncorp Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Domestic Bank" },
      { name: "AMP Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Domestic Bank" },
      { name: "ME Bank (Members Equity)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Domestic Bank" },
      { name: "MyState Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Domestic Bank" },
      { name: "Heartland Bank (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Domestic Bank" },
      { name: "Judo Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Neobank" },
      { name: "Tyro Payments", licence: "ADI (Authorised Deposit-taking Institution)", type: "Neobank" },
      { name: "Up Bank (Bendigo)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Neobank" },
      { name: "86 400 (NAB)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Neobank" },
      { name: "Volt Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Neobank" },
      { name: "Xinja Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Neobank" },
      { name: "Alex Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Neobank" },
      { name: "Avenue Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Neobank" },
      { name: "Hay Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Neobank" },
      { name: "HSBC Bank Australia", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "ING Bank (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Citigroup Pty Ltd", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Rabobank Australia", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Bank of China (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "ICBC Sydney Branch", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "China Construction Bank (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Agricultural Bank of China (Sydney)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Bank of Montreal (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Bank of Singapore (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "KBC Bank (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "MUFG Bank (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Mizuho Bank (Sydney)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Sumitomo Mitsui Banking Corp (SMBC)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "BNP Paribas (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Deutsche Bank (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "JP Morgan Chase (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Bank of America (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "UBS AG (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Barclays Bank (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Standard Chartered Bank (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Société Générale (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Crédit Agricole (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "State Street Bank (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Bank of India (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "United Overseas Bank (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Arab Bank Australia", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Investec Bank (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Mega International Commercial Bank (Syd)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Taiwan Cooperative Bank (Sydney)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "First Commercial Bank (Sydney)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Cathay United Bank (Sydney)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Korea Exchange Bank (Sydney)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Indian Overseas Bank (Australia)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Foreign Bank Branch" },
      { name: "Great Southern Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "Heritage and People's Choice", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "People First Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "Teachers Mutual Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "Beyond Bank Australia", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "Bank Australia", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "Defence Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "Greater Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "P&N Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "Newcastle Permanent", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "IMB Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "Auswide Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "Police Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "Qudos Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "Australian Military Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "Gateway Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "G&C Mutual Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "Regional Australia Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "Service One Alliance Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "Hume Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "BankVic", licence: "ADI (Authorised Deposit-taking Institution)", type: "Mutual Bank" },
      { name: "Community First Credit Union", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "Summerland Credit Union", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "WAW Credit Union", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "Southern Cross Credit Union", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "MOVE Bank (Railways CU)", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "The Mutual Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "Bank of Us", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "First Option Credit Union", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "Illawarra Credit Union", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "Credit Union SA", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "Horizon Credit Union", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "Australian Unity Bank", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "Woolworths Employees' CU", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "Laboratories Credit Union", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "Northern Inland CU", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "Central Murray Credit Union", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "Circle Alliance Credit Union", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "Easy Street Financial Services", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "Police & Nurses Credit Society", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "Catalyst Money", licence: "ADI (Authorised Deposit-taking Institution)", type: "Credit Union" },
      { name: "Maitland Mutual Building Society", licence: "ADI (Authorised Deposit-taking Institution)", type: "Building Society" },
      { name: "Pioneer Permanent Building Society", licence: "ADI (Authorised Deposit-taking Institution)", type: "Building Society" },
      { name: "Australian Retirement Trust (ART)", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "AustralianSuper", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Aware Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "UniSuper", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Rest Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Hostplus", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "HESTA", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Cbus Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Colonial First State", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Insignia Financial (IOOF)", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Mercer Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "TelstraSuper", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Vision Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Care Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Spirit Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Mine Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Active Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Brighter Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "LUCRF Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "TWU Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Maritime Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "BUSSQ (Building Super)", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Energy Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Equip Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "legalsuper", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "NGS Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Statewide Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Catholic Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "CSC (Commonwealth Superannuation)", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "First Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Media Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Prime Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "BT Super (Westpac)", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "MLC Super (Insignia)", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "OnePath Custodians (ANZ)", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Challenger Retirement Fund", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "NESS Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Qantas Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "REI Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "ESSSuper (Emergency Services)", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "AvSuper", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "ANZ Staff Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Perpetual Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Russell Investments Master Trust", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Zurich Australia Super", licence: "RSE Licensee (Superannuation)", type: "Superannuation" },
      { name: "Insurance Australia Group (IAG)", licence: "General Insurer", type: "General Insurer" },
      { name: "Suncorp Group (Insurance)", licence: "General Insurer", type: "General Insurer" },
      { name: "QBE Insurance", licence: "General Insurer", type: "General Insurer" },
      { name: "Allianz Australia Insurance", licence: "General Insurer", type: "General Insurer" },
      { name: "Zurich Australian Insurance", licence: "General Insurer", type: "General Insurer" },
      { name: "Chubb Insurance Australia", licence: "General Insurer", type: "General Insurer" },
      { name: "AIG Australia", licence: "General Insurer", type: "General Insurer" },
      { name: "Hollard Insurance", licence: "General Insurer", type: "General Insurer" },
      { name: "Auto & General Insurance", licence: "General Insurer", type: "General Insurer" },
      { name: "Youi Insurance", licence: "General Insurer", type: "General Insurer" },
      { name: "Budget Direct (Auto & General)", licence: "General Insurer", type: "General Insurer" },
      { name: "RACQ Insurance", licence: "General Insurer", type: "General Insurer" },
      { name: "RAA Insurance (SA)", licence: "General Insurer", type: "General Insurer" },
      { name: "RAC Insurance (WA)", licence: "General Insurer", type: "General Insurer" },
      { name: "NRMA Insurance (IAG)", licence: "General Insurer", type: "General Insurer" },
      { name: "CGU Insurance (IAG)", licence: "General Insurer", type: "General Insurer" },
      { name: "GIO General (IAG)", licence: "General Insurer", type: "General Insurer" },
      { name: "AAMI Insurance (Suncorp)", licence: "General Insurer", type: "General Insurer" },
      { name: "Vero Insurance (Suncorp)", licence: "General Insurer", type: "General Insurer" },
      { name: "Berkshire Hathaway (BHSI AU)", licence: "General Insurer", type: "General Insurer" },
      { name: "Tokio Marine Australia", licence: "General Insurer", type: "General Insurer" },
      { name: "Mitsui Sumitomo Insurance (AU)", licence: "General Insurer", type: "General Insurer" },
      { name: "XL Catlin (AXA XL Australia)", licence: "General Insurer", type: "General Insurer" },
      { name: "Liberty Mutual Insurance (AU)", licence: "General Insurer", type: "General Insurer" },
      { name: "Swiss Re (Australia)", licence: "General Insurer", type: "General Insurer" },
      { name: "Munich Re (Australia)", licence: "General Insurer", type: "General Insurer" },
      { name: "Guild Insurance", licence: "General Insurer", type: "General Insurer" },
      { name: "Ansvar Insurance", licence: "General Insurer", type: "General Insurer" },
      { name: "Medibank Private", licence: "General Insurer", type: "Health Insurer" },
      { name: "Bupa Australia", licence: "General Insurer", type: "Health Insurer" },
      { name: "HCF Health Insurance", licence: "General Insurer", type: "Health Insurer" },
      { name: "NIB Health Funds", licence: "General Insurer", type: "Health Insurer" },
      { name: "HBF Health Insurance", licence: "General Insurer", type: "Health Insurer" },
      { name: "Teachers Health Fund", licence: "General Insurer", type: "Health Insurer" },
      { name: "Australian Unity Health", licence: "General Insurer", type: "Health Insurer" },
      { name: "GMHBA Health Insurance", licence: "General Insurer", type: "Health Insurer" },
      { name: "Defence Health", licence: "General Insurer", type: "Health Insurer" },
      { name: "Doctors' Health Fund", licence: "General Insurer", type: "Health Insurer" },
      { name: "Latrobe Health Services", licence: "General Insurer", type: "Health Insurer" },
      { name: "Frank Health Insurance", licence: "General Insurer", type: "Health Insurer" },
      { name: "Westfund Health Insurance", licence: "General Insurer", type: "Health Insurer" },
      { name: "Police Health", licence: "General Insurer", type: "Health Insurer" },
      { name: "Navy Health", licence: "General Insurer", type: "Health Insurer" },
      { name: "Peoplecare Health Insurance", licence: "General Insurer", type: "Health Insurer" },
      { name: "Queensland Country Health Fund", licence: "General Insurer", type: "Health Insurer" },
      { name: "St.LukesHealth", licence: "General Insurer", type: "Health Insurer" },
      { name: "Nurses & Midwives Health", licence: "General Insurer", type: "Health Insurer" },
      { name: "Emergency Services Health", licence: "General Insurer", type: "Health Insurer" },
      { name: "Mildura Health Fund", licence: "General Insurer", type: "Health Insurer" },
      { name: "Phoenix Health Fund", licence: "General Insurer", type: "Health Insurer" },
      { name: "rt Health Fund", licence: "General Insurer", type: "Health Insurer" },
      { name: "TUH Health Fund", licence: "General Insurer", type: "Health Insurer" },
      { name: "Transport Health", licence: "General Insurer", type: "Health Insurer" },
      { name: "AIA Australia", licence: "Life Insurer", type: "Life Insurer" },
      { name: "TAL Life Insurance", licence: "Life Insurer", type: "Life Insurer" },
      { name: "MLC Life Insurance", licence: "Life Insurer", type: "Life Insurer" },
      { name: "AMP Life Insurance", licence: "Life Insurer", type: "Life Insurer" },
      { name: "Zurich Australia (Life)", licence: "Life Insurer", type: "Life Insurer" },
      { name: "MetLife Insurance Australia", licence: "Life Insurer", type: "Life Insurer" },
      { name: "Challenger Life", licence: "Life Insurer", type: "Life Insurer" },
      { name: "Resolution Life Australasia", licence: "Life Insurer", type: "Life Insurer" },
      { name: "Clearview Life Assurance", licence: "Life Insurer", type: "Life Insurer" },
      { name: "NobleOak Life", licence: "Life Insurer", type: "Life Insurer" },
      { name: "Integrity Life", licence: "Life Insurer", type: "Life Insurer" },
      { name: "Westpac Life Insurance", licence: "Life Insurer", type: "Life Insurer" },
      { name: "Swiss Re Life & Health (AU)", licence: "Life Insurer", type: "Life Insurer" },
      { name: "Hannover Life Re (Australasia)", licence: "Life Insurer", type: "Life Insurer" },
      { name: "General Reinsurance Life AU", licence: "Life Insurer", type: "Life Insurer" },
      { name: "Afterpay (Block Inc)", licence: "AFSL Holder", type: "Fintech / Payments" },
      { name: "Zip Co", licence: "AFSL Holder", type: "Fintech / Payments" },
      { name: "Openpay Group", licence: "AFSL Holder", type: "Fintech / Payments" },
      { name: "Sezzle", licence: "AFSL Holder", type: "Fintech / Payments" },
      { name: "Splitit", licence: "AFSL Holder", type: "Fintech / Payments" },
      { name: "Latitude Financial Services", licence: "ACL Holder (Credit)", type: "Fintech / Payments" },
      { name: "Airwallex", licence: "AFSL Holder", type: "Fintech / Payments" },
      { name: "Wise Australia", licence: "AFSL Holder", type: "Fintech / Payments" },
      { name: "Stripe Australia", licence: "AFSL Holder", type: "Fintech / Payments" },
      { name: "PayPal Australia", licence: "AFSL Holder", type: "Fintech / Payments" },
      { name: "Square (Block) Australia", licence: "AFSL Holder", type: "Fintech / Payments" },
      { name: "Adyen Australia", licence: "AFSL Holder", type: "Fintech / Payments" },
      { name: "eftpos Payments Australia", licence: "AFSL Holder", type: "Fintech / Payments" },
      { name: "BPAY Group", licence: "AFSL Holder", type: "Fintech / Payments" },
      { name: "Humm Group (FlexiGroup)", licence: "ACL Holder (Credit)", type: "Fintech / Payments" },
      { name: "Brighte", licence: "ACL Holder (Credit)", type: "Fintech / Payments" },
      { name: "Prospa", licence: "ACL Holder (Credit)", type: "Fintech / Payments" },
      { name: "Monoova (Moneytech)", licence: "AFSL Holder", type: "Fintech / Payments" },
      { name: "Zepto (Split Payments)", licence: "AFSL Holder", type: "Fintech / Payments" },
      { name: "Azupay", licence: "AFSL Holder", type: "Fintech / Payments" },
      { name: "Till Payments", licence: "AFSL Holder", type: "Fintech / Payments" },
      { name: "Novatti Group", licence: "AFSL Holder", type: "Fintech / Payments" },
      { name: "EML Payments", licence: "AFSL Holder", type: "Fintech / Payments" },
      { name: "Cuscal Limited", licence: "ADI (Authorised Deposit-taking Institution)", type: "Fintech / Payments" },
      { name: "Indue Limited", licence: "ADI (Authorised Deposit-taking Institution)", type: "Fintech / Payments" },
      { name: "Macquarie Asset Management", licence: "AFSL Holder", type: "Wealth Management" },
      { name: "Magellan Financial Group", licence: "AFSL Holder", type: "Wealth Management" },
      { name: "Perpetual Limited", licence: "AFSL Holder", type: "Wealth Management" },
      { name: "Pinnacle Investment Management", licence: "AFSL Holder", type: "Wealth Management" },
      { name: "Platinum Asset Management", licence: "AFSL Holder", type: "Wealth Management" },
      { name: "Vanguard Investments Australia", licence: "AFSL Holder", type: "Wealth Management" },
      { name: "BlackRock Investment (AU)", licence: "AFSL Holder", type: "Wealth Management" },
      { name: "Fidelity International (AU)", licence: "AFSL Holder", type: "Wealth Management" },
      { name: "Schroders Australia", licence: "AFSL Holder", type: "Wealth Management" },
      { name: "PIMCO Australia", licence: "AFSL Holder", type: "Wealth Management" },
      { name: "IFM Investors", licence: "AFSL Holder", type: "Wealth Management" },
      { name: "BetaShares Capital", licence: "AFSL Holder", type: "Wealth Management" },
      { name: "Stockspot", licence: "AFSL Holder", type: "Wealth Management" },
      { name: "Spaceship", licence: "AFSL Holder", type: "Wealth Management" },
      { name: "Raiz Invest", licence: "AFSL Holder", type: "Wealth Management" },
      { name: "SelfWealth", licence: "AFSL Holder", type: "Wealth Management" },
      { name: "Stake (Hellostake)", licence: "AFSL Holder", type: "Wealth Management" },
      { name: "CommSec (CBA)", licence: "AFSL Holder", type: "Wealth Management" },
      { name: "nabtrade (NAB)", licence: "AFSL Holder", type: "Wealth Management" },
      { name: "ASX Limited", licence: "Market Operator", type: "Market Infrastructure" },
      { name: "Cboe Australia", licence: "Market Operator", type: "Market Infrastructure" },
      { name: "NSX (National Stock Exchange)", licence: "Market Operator", type: "Market Infrastructure" },
      { name: "ASX Clear", licence: "Market Operator", type: "Market Infrastructure" },
      { name: "ASX Settlement", licence: "Market Operator", type: "Market Infrastructure" },
      { name: "Austraclear", licence: "Market Operator", type: "Market Infrastructure" },
      { name: "Pepper Money", licence: "ACL Holder (Credit)", type: "Non-Bank Lender" },
      { name: "Liberty Financial", licence: "ACL Holder (Credit)", type: "Non-Bank Lender" },
      { name: "Firstmac", licence: "ACL Holder (Credit)", type: "Non-Bank Lender" },
      { name: "Resimac Group", licence: "ACL Holder (Credit)", type: "Non-Bank Lender" },
      { name: "Bluestone Mortgages", licence: "ACL Holder (Credit)", type: "Non-Bank Lender" },
      { name: "La Trobe Financial", licence: "ACL Holder (Credit)", type: "Non-Bank Lender" },
      { name: "Australian Finance Group (AFG)", licence: "ACL Holder (Credit)", type: "Non-Bank Lender" },
      { name: "Mortgage Choice", licence: "ACL Holder (Credit)", type: "Non-Bank Lender" },
      { name: "Aussie Home Loans (CBA)", licence: "ACL Holder (Credit)", type: "Non-Bank Lender" },
      { name: "RAMS Home Loans (Westpac)", licence: "ACL Holder (Credit)", type: "Non-Bank Lender" },
      { name: "Athena Home Loans", licence: "ACL Holder (Credit)", type: "Non-Bank Lender" },
      { name: "Lendi Group", licence: "ACL Holder (Credit)", type: "Non-Bank Lender" },
      { name: "Tic:Toc Home Loans", licence: "ACL Holder (Credit)", type: "Non-Bank Lender" },
      { name: "Plenti (RateSetter AU)", licence: "ACL Holder (Credit)", type: "Non-Bank Lender" },
      { name: "Wisr", licence: "ACL Holder (Credit)", type: "Non-Bank Lender" },
      { name: "SocietyOne", licence: "ACL Holder (Credit)", type: "Non-Bank Lender" }
    ],
    Telecommunications: [
      { name: "Telstra Corporation", licence: "Carrier Licence", type: "Major Carrier" },
      { name: "Optus (SingTel)", licence: "Carrier Licence", type: "Major Carrier" },
      { name: "TPG Telecom (Vodafone AU)", licence: "Carrier Licence", type: "Major Carrier" },
      { name: "NBN Co", licence: "Carrier Licence", type: "Network Operator" },
      { name: "Vocus Group", licence: "Carrier Licence", type: "Network Operator" },
      { name: "Superloop", licence: "Carrier Licence", type: "Network Operator" },
      { name: "Macquarie Telecom", licence: "Carrier Licence", type: "Network Operator" },
      { name: "Symbio Networks", licence: "Carrier Licence", type: "Network Operator" },
      { name: "OptiComm (Uniti)", licence: "Carrier Licence", type: "Network Operator" },
      { name: "Megaport", licence: "Carrier Licence", type: "Network Operator" },
      { name: "Aussie Broadband", licence: "Carriage Service Provider (CSP)", type: "ISP" },
      { name: "iiNet (TPG)", licence: "Carriage Service Provider (CSP)", type: "ISP" },
      { name: "Dodo (Vocus)", licence: "Carriage Service Provider (CSP)", type: "ISP" },
      { name: "Internode (TPG)", licence: "Carriage Service Provider (CSP)", type: "ISP" },
      { name: "Exetel", licence: "Carriage Service Provider (CSP)", type: "ISP" },
      { name: "Mate Communicate", licence: "Carriage Service Provider (CSP)", type: "ISP" },
      { name: "Tangerine Telecom", licence: "Carriage Service Provider (CSP)", type: "ISP" },
      { name: "Leaptel", licence: "Carriage Service Provider (CSP)", type: "ISP" },
      { name: "Launtel", licence: "Carriage Service Provider (CSP)", type: "ISP" },
      { name: "MyRepublic Australia", licence: "Carriage Service Provider (CSP)", type: "ISP" },
      { name: "Southern Phone", licence: "Carriage Service Provider (CSP)", type: "ISP" },
      { name: "Westnet (iiNet/TPG)", licence: "Carriage Service Provider (CSP)", type: "ISP" },
      { name: "iPrimus (Vocus)", licence: "Carriage Service Provider (CSP)", type: "ISP" },
      { name: "Commander (Vocus)", licence: "Carriage Service Provider (CSP)", type: "ISP" },
      { name: "Amaysim (Optus)", licence: "Carriage Service Provider (CSP)", type: "MVNO" },
      { name: "Boost Mobile (Telstra)", licence: "Carriage Service Provider (CSP)", type: "MVNO" },
      { name: "Kogan Mobile", licence: "Carriage Service Provider (CSP)", type: "MVNO" },
      { name: "Circles.Life Australia", licence: "Carriage Service Provider (CSP)", type: "MVNO" },
      { name: "Felix Mobile (TPG)", licence: "Carriage Service Provider (CSP)", type: "MVNO" },
      { name: "Woolworths Mobile", licence: "Carriage Service Provider (CSP)", type: "MVNO" },
      { name: "Coles Mobile", licence: "Carriage Service Provider (CSP)", type: "MVNO" },
      { name: "Aldi Mobile", licence: "Carriage Service Provider (CSP)", type: "MVNO" },
      { name: "Belong (Telstra)", licence: "Carriage Service Provider (CSP)", type: "MVNO" },
      { name: "Lebara Mobile (AU)", licence: "Carriage Service Provider (CSP)", type: "MVNO" },
      { name: "Lycamobile Australia", licence: "Carriage Service Provider (CSP)", type: "MVNO" },
      { name: "Moose Mobile", licence: "Carriage Service Provider (CSP)", type: "MVNO" },
      { name: "Catch Connect", licence: "Carriage Service Provider (CSP)", type: "MVNO" },
      { name: "Spintel", licence: "Carriage Service Provider (CSP)", type: "MVNO" },
      { name: "Telstra Enterprise", licence: "Carrier Licence", type: "Enterprise Telecom" },
      { name: "NTT Australia", licence: "Carriage Service Provider (CSP)", type: "Enterprise Telecom" },
      { name: "Equinix Australia", licence: "Carriage Service Provider (CSP)", type: "Enterprise Telecom" },
      { name: "NEXTDC", licence: "Carriage Service Provider (CSP)", type: "Enterprise Telecom" }
    ]
  },
  "United Kingdom": {
    "Financial Services": [
      { name: "HSBC UK", licence: "Banking Licence (PRA)", type: "Major Bank" },
      { name: "Barclays", licence: "Banking Licence (PRA)", type: "Major Bank" },
      { name: "Lloyds Banking Group", licence: "Banking Licence (PRA)", type: "Major Bank" },
      { name: "NatWest Group", licence: "Banking Licence (PRA)", type: "Major Bank" },
      { name: "Standard Chartered", licence: "Banking Licence (PRA)", type: "Major Bank" },
      { name: "Santander UK", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Virgin Money UK", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Metro Bank", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "TSB Bank", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Co-operative Bank", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "OneSavings Bank", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Lloyds Bank", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Halifax (Lloyds)", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Bank of Scotland", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Royal Bank of Scotland", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Ulster Bank", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Adam & Company", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Tesco Bank", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Sainsbury's Bank", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Handelsbanken UK", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Close Brothers", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Investec Bank UK", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Shawbrook Bank", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Aldermore Bank", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Paragon Banking Group", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Secure Trust Bank", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "C. Hoare & Co", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Coutts & Company (NatWest)", licence: "Banking Licence (PRA)", type: "Bank" },
      { name: "Nationwide Building Society", licence: "Banking Licence (PRA)", type: "Building Society" },
      { name: "Yorkshire Building Society", licence: "Banking Licence (PRA)", type: "Building Society" },
      { name: "Coventry Building Society", licence: "Banking Licence (PRA)", type: "Building Society" },
      { name: "Skipton Building Society", licence: "Banking Licence (PRA)", type: "Building Society" },
      { name: "Leeds Building Society", licence: "Banking Licence (PRA)", type: "Building Society" },
      { name: "Principality Building Society", licence: "Banking Licence (PRA)", type: "Building Society" },
      { name: "West Bromwich BS", licence: "Banking Licence (PRA)", type: "Building Society" },
      { name: "Nottingham Building Society", licence: "Banking Licence (PRA)", type: "Building Society" },
      { name: "Newcastle Building Society", licence: "Banking Licence (PRA)", type: "Building Society" },
      { name: "Cumberland Building Society", licence: "Banking Licence (PRA)", type: "Building Society" },
      { name: "Monzo Bank", licence: "Banking Licence (PRA)", type: "Digital Bank" },
      { name: "Starling Bank", licence: "Banking Licence (PRA)", type: "Digital Bank" },
      { name: "Revolut", licence: "Banking Licence (PRA)", type: "Digital Bank" },
      { name: "Atom Bank", licence: "Banking Licence (PRA)", type: "Digital Bank" },
      { name: "Chase UK (JP Morgan)", licence: "Banking Licence (PRA)", type: "Digital Bank" },
      { name: "OakNorth Bank", licence: "Banking Licence (PRA)", type: "Digital Bank" },
      { name: "Zopa Bank", licence: "Banking Licence (PRA)", type: "Digital Bank" },
      { name: "ClearBank", licence: "Banking Licence (PRA)", type: "Digital Bank" },
      { name: "Tandem Bank", licence: "Banking Licence (PRA)", type: "Digital Bank" },
      { name: "Tide Platform", licence: "E-Money Institution (EMI)", type: "Digital Bank" },
      { name: "Monese", licence: "E-Money Institution (EMI)", type: "Digital Bank" },
      { name: "Cashplus Bank", licence: "Banking Licence (PRA)", type: "Digital Bank" },
      { name: "Aviva plc", licence: "Insurance Company", type: "Insurance" },
      { name: "Legal & General", licence: "Insurance Company", type: "Insurance" },
      { name: "Prudential plc", licence: "Insurance Company", type: "Insurance" },
      { name: "Admiral Group", licence: "Insurance Company", type: "Insurance" },
      { name: "Direct Line Group", licence: "Insurance Company", type: "Insurance" },
      { name: "RSA Insurance (Intact)", licence: "Insurance Company", type: "Insurance" },
      { name: "Phoenix Group", licence: "Insurance Company", type: "Insurance" },
      { name: "M&G plc", licence: "Insurance Company", type: "Insurance" },
      { name: "Royal London", licence: "Insurance Company", type: "Insurance" },
      { name: "LV= (Liverpool Victoria)", licence: "Insurance Company", type: "Insurance" },
      { name: "Aegon UK", licence: "Insurance Company", type: "Insurance" },
      { name: "Zurich Insurance UK", licence: "Insurance Company", type: "Insurance" },
      { name: "Hiscox", licence: "Insurance Company", type: "Insurance" },
      { name: "Beazley", licence: "Insurance Company", type: "Insurance" },
      { name: "Lloyd's of London", licence: "Insurance Company", type: "Insurance" },
      { name: "Hastings Group", licence: "Insurance Company", type: "Insurance" },
      { name: "esure Group", licence: "Insurance Company", type: "Insurance" },
      { name: "Wise (TransferWise)", licence: "E-Money Institution (EMI)", type: "Fintech / Payments" },
      { name: "Checkout.com", licence: "E-Money Institution (EMI)", type: "Fintech / Payments" },
      { name: "Stripe UK", licence: "E-Money Institution (EMI)", type: "Fintech / Payments" },
      { name: "Adyen UK", licence: "E-Money Institution (EMI)", type: "Fintech / Payments" },
      { name: "Klarna UK", licence: "E-Money Institution (EMI)", type: "Fintech / Payments" },
      { name: "PayPal UK", licence: "E-Money Institution (EMI)", type: "Fintech / Payments" },
      { name: "GoCardless", licence: "Payment Institution (PI)", type: "Fintech / Payments" },
      { name: "Modulr Finance", licence: "E-Money Institution (EMI)", type: "Fintech / Payments" },
      { name: "Worldpay (FIS)", licence: "E-Money Institution (EMI)", type: "Fintech / Payments" },
      { name: "Funding Circle", licence: "Payment Institution (PI)", type: "Fintech / Payments" },
      { name: "PayPoint", licence: "Payment Institution (PI)", type: "Fintech / Payments" },
      { name: "Ebury Partners", licence: "E-Money Institution (EMI)", type: "Fintech / Payments" },
      { name: "Hargreaves Lansdown", licence: "Investment Firm", type: "Investment" },
      { name: "AJ Bell", licence: "Investment Firm", type: "Investment" },
      { name: "St. James's Place", licence: "Investment Firm", type: "Investment" },
      { name: "Schroders", licence: "Investment Firm", type: "Investment" },
      { name: "Baillie Gifford", licence: "Investment Firm", type: "Investment" },
      { name: "Interactive Investor", licence: "Investment Firm", type: "Investment" },
      { name: "Nutmeg (JP Morgan)", licence: "Investment Firm", type: "Investment" },
      { name: "Freetrade", licence: "Investment Firm", type: "Investment" },
      { name: "eToro UK", licence: "Investment Firm", type: "Investment" },
      { name: "Trading 212 UK", licence: "Investment Firm", type: "Investment" }
    ],
    Telecommunications: [
      { name: "BT Group", licence: "General Authorisation (Ofcom)", type: "Major Carrier" },
      { name: "Vodafone UK", licence: "General Authorisation (Ofcom)", type: "Major Carrier" },
      { name: "Three UK", licence: "General Authorisation (Ofcom)", type: "Major Carrier" },
      { name: "EE (BT Group)", licence: "General Authorisation (Ofcom)", type: "Major Carrier" },
      { name: "Virgin Media O2", licence: "General Authorisation (Ofcom)", type: "Major Carrier" },
      { name: "Sky Broadband", licence: "General Authorisation (Ofcom)", type: "ISP" },
      { name: "TalkTalk", licence: "General Authorisation (Ofcom)", type: "ISP" },
      { name: "Plusnet (BT)", licence: "General Authorisation (Ofcom)", type: "ISP" },
      { name: "Hyperoptic", licence: "General Authorisation (Ofcom)", type: "ISP" },
      { name: "Zen Internet", licence: "General Authorisation (Ofcom)", type: "ISP" },
      { name: "Gigaclear", licence: "General Authorisation (Ofcom)", type: "ISP" },
      { name: "Community Fibre", licence: "General Authorisation (Ofcom)", type: "ISP" },
      { name: "CityFibre", licence: "General Authorisation (Ofcom)", type: "Network Operator" },
      { name: "Openreach (BT)", licence: "General Authorisation (Ofcom)", type: "Network Operator" },
      { name: "giffgaff (O2)", licence: "General Authorisation (Ofcom)", type: "MVNO" },
      { name: "Tesco Mobile", licence: "General Authorisation (Ofcom)", type: "MVNO" },
      { name: "iD Mobile (Three)", licence: "General Authorisation (Ofcom)", type: "MVNO" },
      { name: "VOXI (Vodafone)", licence: "General Authorisation (Ofcom)", type: "MVNO" },
      { name: "Lebara UK", licence: "General Authorisation (Ofcom)", type: "MVNO" },
      { name: "Lycamobile UK", licence: "General Authorisation (Ofcom)", type: "MVNO" },
      { name: "Smarty (Three)", licence: "General Authorisation (Ofcom)", type: "MVNO" },
      { name: "Sky Mobile", licence: "General Authorisation (Ofcom)", type: "MVNO" }
    ]
  },
  "New Zealand": {
    "Financial Services": [
      { name: "ANZ New Zealand", licence: "Registered Bank", type: "Major Bank" },
      { name: "ASB Bank", licence: "Registered Bank", type: "Major Bank" },
      { name: "BNZ (Bank of New Zealand)", licence: "Registered Bank", type: "Major Bank" },
      { name: "Westpac New Zealand", licence: "Registered Bank", type: "Major Bank" },
      { name: "Kiwibank", licence: "Registered Bank", type: "Bank" },
      { name: "TSB Bank (NZ)", licence: "Registered Bank", type: "Bank" },
      { name: "Heartland Bank", licence: "Registered Bank", type: "Bank" },
      { name: "Rabobank New Zealand", licence: "Registered Bank", type: "Bank" },
      { name: "The Co-operative Bank NZ", licence: "Registered Bank", type: "Bank" },
      { name: "SBS Bank", licence: "Registered Bank", type: "Bank" },
      { name: "Kookmin Bank (NZ)", licence: "Registered Bank", type: "Bank" },
      { name: "JPMorgan Chase Bank (NZ)", licence: "Registered Bank", type: "Bank" },
      { name: "ICBC New Zealand", licence: "Registered Bank", type: "Bank" },
      { name: "Bank of China NZ", licence: "Registered Bank", type: "Bank" },
      { name: "HSBC New Zealand", licence: "Registered Bank", type: "Bank" },
      { name: "Citibank NZ", licence: "Registered Bank", type: "Bank" },
      { name: "MUFG Bank NZ", licence: "Registered Bank", type: "Bank" },
      { name: "China Construction Bank NZ", licence: "Registered Bank", type: "Bank" },
      { name: "Commonwealth Bank NZ", licence: "Registered Bank", type: "Bank" },
      { name: "NZ Super Fund", licence: "MIS Manager", type: "Investment" },
      { name: "Fisher Funds", licence: "MIS Manager", type: "Investment" },
      { name: "Milford Asset Management", licence: "MIS Manager", type: "Investment" },
      { name: "Booster Financial Services", licence: "MIS Manager", type: "Investment" },
      { name: "Generate KiwiSaver", licence: "MIS Manager", type: "Investment" },
      { name: "Simplicity NZ", licence: "MIS Manager", type: "Investment" },
      { name: "Kernel Wealth", licence: "MIS Manager", type: "Investment" },
      { name: "Sharesies", licence: "MIS Manager", type: "Investment" },
      { name: "Hatch Invest (NZ)", licence: "MIS Manager", type: "Investment" },
      { name: "Craigs Investment Partners", licence: "MIS Manager", type: "Investment" },
      { name: "Forsyth Barr", licence: "MIS Manager", type: "Investment" },
      { name: "Jarden (First NZ Capital)", licence: "MIS Manager", type: "Investment" },
      { name: "Harbour Asset Management", licence: "MIS Manager", type: "Investment" },
      { name: "IAG New Zealand", licence: "Licensed Insurer", type: "Insurance" },
      { name: "Suncorp NZ (Vero)", licence: "Licensed Insurer", type: "Insurance" },
      { name: "Tower Insurance", licence: "Licensed Insurer", type: "Insurance" },
      { name: "Fidelity Life", licence: "Licensed Insurer", type: "Insurance" },
      { name: "Partners Life", licence: "Licensed Insurer", type: "Insurance" },
      { name: "Southern Cross Health", licence: "Licensed Insurer", type: "Insurance" },
      { name: "AIA NZ", licence: "Licensed Insurer", type: "Insurance" },
      { name: "nib NZ", licence: "Licensed Insurer", type: "Insurance" },
      { name: "AMP Life NZ", licence: "Licensed Insurer", type: "Insurance" },
      { name: "AA Insurance (IAG/Suncorp)", licence: "Licensed Insurer", type: "Insurance" },
      { name: "FMG (Farmers Mutual Group)", licence: "Licensed Insurer", type: "Insurance" },
      { name: "MAS (Medical Assurance)", licence: "Licensed Insurer", type: "Insurance" },
      { name: "Worldline NZ (Paymark)", licence: "Financial Service Provider", type: "Fintech / Payments" },
      { name: "Windcave (Payment Express)", licence: "Financial Service Provider", type: "Fintech / Payments" },
      { name: "Wise NZ", licence: "Financial Service Provider", type: "Fintech / Payments" },
      { name: "NZX Limited", licence: "Market Operator", type: "Market Infrastructure" }
    ]
  },
  Singapore: {
    "Financial Services": [
      { name: "DBS Bank", licence: "Full Bank Licence", type: "Major Bank" },
      { name: "OCBC Bank", licence: "Full Bank Licence", type: "Major Bank" },
      { name: "UOB (United Overseas Bank)", licence: "Full Bank Licence", type: "Major Bank" },
      { name: "Standard Chartered Singapore", licence: "Full Bank Licence", type: "Bank" },
      { name: "HSBC Singapore", licence: "Full Bank Licence", type: "Bank" },
      { name: "Citibank Singapore", licence: "Full Bank Licence", type: "Bank" },
      { name: "Maybank Singapore", licence: "Full Bank Licence", type: "Bank" },
      { name: "Bank of China Singapore", licence: "Full Bank Licence", type: "Bank" },
      { name: "ICBC Singapore", licence: "Full Bank Licence", type: "Bank" },
      { name: "CIMB Bank Singapore", licence: "Full Bank Licence", type: "Bank" },
      { name: "RHB Bank Singapore", licence: "Full Bank Licence", type: "Bank" },
      { name: "BNP Paribas Singapore", licence: "Full Bank Licence", type: "Bank" },
      { name: "Deutsche Bank Singapore", licence: "Full Bank Licence", type: "Bank" },
      { name: "JP Morgan Singapore", licence: "Full Bank Licence", type: "Bank" },
      { name: "UBS Singapore", licence: "Full Bank Licence", type: "Bank" },
      { name: "Goldman Sachs Singapore", licence: "Full Bank Licence", type: "Bank" },
      { name: "Morgan Stanley Singapore", licence: "Full Bank Licence", type: "Bank" },
      { name: "SMBC Singapore", licence: "Full Bank Licence", type: "Bank" },
      { name: "MUFG Bank Singapore", licence: "Full Bank Licence", type: "Bank" },
      { name: "ANZ Singapore", licence: "Full Bank Licence", type: "Bank" },
      { name: "Bangkok Bank Singapore", licence: "Full Bank Licence", type: "Bank" },
      { name: "GXS Bank (Grab-Singtel)", licence: "Digital Bank", type: "Digital Bank" },
      { name: "Trust Bank (StanChart-FairPrice)", licence: "Digital Bank", type: "Digital Bank" },
      { name: "MariBank (Sea Group)", licence: "Digital Bank", type: "Digital Bank" },
      { name: "ANEXT Bank (Ant Group)", licence: "Digital Bank", type: "Digital Bank" },
      { name: "Green Link Digital Bank", licence: "Digital Bank", type: "Digital Bank" },
      { name: "Great Eastern Life", licence: "Insurance Company", type: "Insurance" },
      { name: "AIA Singapore", licence: "Insurance Company", type: "Insurance" },
      { name: "Prudential Singapore", licence: "Insurance Company", type: "Insurance" },
      { name: "Manulife Singapore", licence: "Insurance Company", type: "Insurance" },
      { name: "Income Insurance (NTUC)", licence: "Insurance Company", type: "Insurance" },
      { name: "AXA Insurance Singapore", licence: "Insurance Company", type: "Insurance" },
      { name: "Tokio Marine Singapore", licence: "Insurance Company", type: "Insurance" },
      { name: "MSIG Insurance Singapore", licence: "Insurance Company", type: "Insurance" },
      { name: "FWD Insurance Singapore", licence: "Insurance Company", type: "Insurance" },
      { name: "Chubb Insurance Singapore", licence: "Insurance Company", type: "Insurance" },
      { name: "Allianz Insurance Singapore", licence: "Insurance Company", type: "Insurance" },
      { name: "Singlife", licence: "Insurance Company", type: "Insurance" },
      { name: "Stripe Singapore", licence: "Major Payment Institution", type: "Fintech / Payments" },
      { name: "Grab Financial Group", licence: "Major Payment Institution", type: "Fintech / Payments" },
      { name: "Wise Singapore", licence: "Major Payment Institution", type: "Fintech / Payments" },
      { name: "Nium", licence: "Major Payment Institution", type: "Fintech / Payments" },
      { name: "Aspire", licence: "Major Payment Institution", type: "Fintech / Payments" },
      { name: "Thunes", licence: "Major Payment Institution", type: "Fintech / Payments" },
      { name: "Fazz (Xfers)", licence: "Major Payment Institution", type: "Fintech / Payments" },
      { name: "Atome Financial", licence: "Major Payment Institution", type: "Fintech / Payments" },
      { name: "Matchmove", licence: "Major Payment Institution", type: "Fintech / Payments" },
      { name: "GIC Private Limited", licence: "Capital Markets Services Licence", type: "Investment" },
      { name: "Temasek Holdings", licence: "Capital Markets Services Licence", type: "Investment" },
      { name: "SGX (Singapore Exchange)", licence: "Capital Markets Services Licence", type: "Market Infrastructure" },
      { name: "Fullerton Fund Management", licence: "Capital Markets Services Licence", type: "Investment" },
      { name: "Lion Global Investors", licence: "Capital Markets Services Licence", type: "Investment" },
      { name: "StashAway", licence: "Capital Markets Services Licence", type: "Investment" },
      { name: "Syfe", licence: "Capital Markets Services Licence", type: "Investment" },
      { name: "Endowus", licence: "Capital Markets Services Licence", type: "Investment" },
      { name: "Tiger Brokers Singapore", licence: "Capital Markets Services Licence", type: "Investment" },
      { name: "moomoo Singapore (Futu)", licence: "Capital Markets Services Licence", type: "Investment" },
      { name: "Phillip Securities Singapore", licence: "Capital Markets Services Licence", type: "Investment" },
      { name: "DBS Vickers Securities", licence: "Capital Markets Services Licence", type: "Investment" },
      { name: "OCBC Securities", licence: "Capital Markets Services Licence", type: "Investment" },
      { name: "UOB Kay Hian", licence: "Capital Markets Services Licence", type: "Investment" }
    ]
  },
  "Hong Kong": {
    "Financial Services": [
      { name: "HSBC Hong Kong", licence: "Licensed Bank", type: "Major Bank" },
      { name: "Hang Seng Bank", licence: "Licensed Bank", type: "Major Bank" },
      { name: "Bank of China (Hong Kong)", licence: "Licensed Bank", type: "Major Bank" },
      { name: "Standard Chartered Hong Kong", licence: "Licensed Bank", type: "Major Bank" },
      { name: "Bank of East Asia", licence: "Licensed Bank", type: "Bank" },
      { name: "Dah Sing Bank", licence: "Licensed Bank", type: "Bank" },
      { name: "Citibank Hong Kong", licence: "Licensed Bank", type: "Bank" },
      { name: "DBS Bank (Hong Kong)", licence: "Licensed Bank", type: "Bank" },
      { name: "OCBC Wing Hang Bank", licence: "Licensed Bank", type: "Bank" },
      { name: "Public Bank Hong Kong", licence: "Licensed Bank", type: "Bank" },
      { name: "China Construction Bank (Asia)", licence: "Licensed Bank", type: "Bank" },
      { name: "ICBC (Asia)", licence: "Licensed Bank", type: "Bank" },
      { name: "ZA Bank", licence: "Licensed Bank", type: "Virtual Bank" },
      { name: "WeLab Bank", licence: "Licensed Bank", type: "Virtual Bank" },
      { name: "Livi Bank", licence: "Licensed Bank", type: "Virtual Bank" },
      { name: "Mox Bank", licence: "Licensed Bank", type: "Virtual Bank" },
      { name: "Ant Bank (Hong Kong)", licence: "Licensed Bank", type: "Virtual Bank" },
      { name: "Fusion Bank", licence: "Licensed Bank", type: "Virtual Bank" },
      { name: "Ping An OneConnect Bank", licence: "Licensed Bank", type: "Virtual Bank" },
      { name: "Airstar Bank", licence: "Licensed Bank", type: "Virtual Bank" },
      { name: "AIA Hong Kong", licence: "Authorized Insurer", type: "Insurance" },
      { name: "Prudential Hong Kong", licence: "Authorized Insurer", type: "Insurance" },
      { name: "Manulife Hong Kong", licence: "Authorized Insurer", type: "Insurance" },
      { name: "FWD Insurance", licence: "Authorized Insurer", type: "Insurance" },
      { name: "Sun Life Hong Kong", licence: "Authorized Insurer", type: "Insurance" },
      { name: "Alipay Hong Kong (AlipayHK)", licence: "Stored Value Facility (SVF)", type: "Fintech / Payments" },
      { name: "PayMe (HSBC)", licence: "Stored Value Facility (SVF)", type: "Fintech / Payments" },
      { name: "WeChat Pay HK", licence: "Stored Value Facility (SVF)", type: "Fintech / Payments" },
      { name: "Octopus", licence: "Stored Value Facility (SVF)", type: "Fintech / Payments" },
      { name: "Tap & Go (HKT)", licence: "Stored Value Facility (SVF)", type: "Fintech / Payments" },
      { name: "HKEX (Hong Kong Exchanges)", licence: "Licensed Exchange", type: "Market Infrastructure" },
      { name: "Hong Kong Securities Clearing", licence: "Licensed Clearing House", type: "Market Infrastructure" }
    ]
  },
  Canada: {
    "Financial Services": [
      { name: "Royal Bank of Canada (RBC)", licence: "Schedule I Bank", type: "Major Bank" },
      { name: "Toronto-Dominion Bank (TD)", licence: "Schedule I Bank", type: "Major Bank" },
      { name: "Bank of Nova Scotia (Scotiabank)", licence: "Schedule I Bank", type: "Major Bank" },
      { name: "Bank of Montreal (BMO)", licence: "Schedule I Bank", type: "Major Bank" },
      { name: "Canadian Imperial Bank of Commerce (CIBC)", licence: "Schedule I Bank", type: "Major Bank" },
      { name: "National Bank of Canada", licence: "Schedule I Bank", type: "Major Bank" },
      { name: "Desjardins Group", licence: "Credit Union Central", type: "Credit Union" },
      { name: "ATB Financial", licence: "Provincial Crown Corporation", type: "Bank" },
      { name: "Laurentian Bank of Canada", licence: "Schedule I Bank", type: "Bank" },
      { name: "Canadian Western Bank", licence: "Schedule I Bank", type: "Bank" },
      { name: "Tangerine Bank (Scotiabank)", licence: "Schedule I Bank", type: "Digital Bank" },
      { name: "Simplii Financial (CIBC)", licence: "Schedule I Bank", type: "Digital Bank" },
      { name: "EQ Bank", licence: "Schedule I Bank", type: "Digital Bank" },
      { name: "Manulife Bank of Canada", licence: "Schedule I Bank", type: "Bank" },
      { name: "HSBC Bank Canada", licence: "Schedule II Bank", type: "Bank" },
      { name: "Citibank Canada", licence: "Schedule II Bank", type: "Bank" },
      { name: "ICICI Bank Canada", licence: "Schedule II Bank", type: "Bank" },
      { name: "JP Morgan Chase Bank (Canada)", licence: "Schedule III Bank", type: "Foreign Bank" },
      { name: "State Street Bank (Canada)", licence: "Schedule III Bank", type: "Foreign Bank" },
      { name: "Manulife Financial", licence: "Life Insurance Company", type: "Insurance" },
      { name: "Sun Life Financial", licence: "Life Insurance Company", type: "Insurance" },
      { name: "Great-West Lifeco", licence: "Life Insurance Company", type: "Insurance" },
      { name: "Industrial Alliance", licence: "Life Insurance Company", type: "Insurance" },
      { name: "Intact Financial", licence: "P&C Insurance Company", type: "Insurance" },
      { name: "Co-operators Group", licence: "P&C Insurance Company", type: "Insurance" },
      { name: "Aviva Canada", licence: "P&C Insurance Company", type: "Insurance" },
      { name: "Wealthsimple", licence: "Investment Dealer", type: "Investment" },
      { name: "Questrade", licence: "Investment Dealer", type: "Investment" },
      { name: "Qtrade Investor", licence: "Investment Dealer", type: "Investment" },
      { name: "RBC Direct Investing", licence: "Investment Dealer", type: "Investment" },
      { name: "TD Direct Investing", licence: "Investment Dealer", type: "Investment" },
      { name: "TMX Group", licence: "Stock Exchange", type: "Market Infrastructure" },
      { name: "Toronto Stock Exchange (TSX)", licence: "Stock Exchange", type: "Market Infrastructure" },
      { name: "Interac Corp", licence: "Payment Service Provider", type: "Fintech / Payments" },
      { name: "Nuvei Corporation", licence: "Payment Service Provider", type: "Fintech / Payments" },
      { name: "Moneris Solutions", licence: "Payment Service Provider", type: "Fintech / Payments" }
    ]
  },
  "United States": {
    "Financial Services": [
      { name: "JPMorgan Chase", licence: "National Bank Charter", type: "Major Bank" },
      { name: "Bank of America", licence: "National Bank Charter", type: "Major Bank" },
      { name: "Citigroup", licence: "National Bank Charter", type: "Major Bank" },
      { name: "Wells Fargo", licence: "National Bank Charter", type: "Major Bank" },
      { name: "Goldman Sachs Bank USA", licence: "State Bank Charter", type: "Major Bank" },
      { name: "Morgan Stanley Bank", licence: "State Bank Charter", type: "Major Bank" },
      { name: "U.S. Bancorp", licence: "National Bank Charter", type: "Bank" },
      { name: "PNC Financial Services", licence: "National Bank Charter", type: "Bank" },
      { name: "Truist Financial", licence: "State Bank Charter", type: "Bank" },
      { name: "Capital One", licence: "National Bank Charter", type: "Bank" },
      { name: "TD Bank US", licence: "National Bank Charter", type: "Bank" },
      { name: "Charles Schwab Bank", licence: "State Bank Charter", type: "Bank" },
      { name: "HSBC Bank USA", licence: "National Bank Charter", type: "Bank" },
      { name: "BMO Harris Bank", licence: "National Bank Charter", type: "Bank" },
      { name: "MUFG Union Bank", licence: "National Bank Charter", type: "Bank" },
      { name: "BNY Mellon", licence: "State Bank Charter", type: "Bank" },
      { name: "State Street Corporation", licence: "State Bank Charter", type: "Bank" },
      { name: "Northern Trust", licence: "State Bank Charter", type: "Bank" },
      { name: "Ally Bank", licence: "State Bank Charter", type: "Digital Bank" },
      { name: "Chime Financial", licence: "Fintech (Partner Bank)", type: "Digital Bank" },
      { name: "SoFi Bank", licence: "National Bank Charter", type: "Digital Bank" },
      { name: "Varo Bank", licence: "National Bank Charter", type: "Digital Bank" },
      { name: "Revolut US", licence: "State Money Transmitter", type: "Digital Bank" },
      { name: "Current", licence: "Fintech (Partner Bank)", type: "Digital Bank" },
      { name: "PayPal", licence: "State Money Transmitter", type: "Fintech / Payments" },
      { name: "Stripe Inc", licence: "State Money Transmitter", type: "Fintech / Payments" },
      { name: "Square (Block)", licence: "State Money Transmitter", type: "Fintech / Payments" },
      { name: "Venmo (PayPal)", licence: "State Money Transmitter", type: "Fintech / Payments" },
      { name: "Zelle (Early Warning)", licence: "Payment Network", type: "Fintech / Payments" },
      { name: "Affirm", licence: "Lending License", type: "Fintech / Payments" },
      { name: "Klarna US", licence: "State Installment Lender", type: "Fintech / Payments" },
      { name: "Coinbase", licence: "State Money Transmitter", type: "Fintech / Payments" },
      { name: "Robinhood", licence: "Broker Dealer", type: "Investment" },
      { name: "E*TRADE (Morgan Stanley)", licence: "Broker Dealer", type: "Investment" },
      { name: "TD Ameritrade (Schwab)", licence: "Broker Dealer", type: "Investment" },
      { name: "Fidelity Investments", licence: "Broker Dealer", type: "Investment" },
      { name: "Vanguard Group", licence: "Investment Adviser", type: "Investment" },
      { name: "BlackRock", licence: "Investment Adviser", type: "Investment" },
      { name: "State Farm Insurance", licence: "Insurance Company", type: "Insurance" },
      { name: "Berkshire Hathaway Insurance", licence: "Insurance Company", type: "Insurance" },
      { name: "Progressive Insurance", licence: "Insurance Company", type: "Insurance" },
      { name: "Allstate Insurance", licence: "Insurance Company", type: "Insurance" },
      { name: "MetLife", licence: "Insurance Company", type: "Insurance" },
      { name: "Prudential Financial", licence: "Insurance Company", type: "Insurance" },
      { name: "New York Life Insurance", licence: "Insurance Company", type: "Insurance" },
      { name: "MassMutual", licence: "Insurance Company", type: "Insurance" },
      { name: "NASDAQ", licence: "National Securities Exchange", type: "Market Infrastructure" },
      { name: "New York Stock Exchange (NYSE)", licence: "National Securities Exchange", type: "Market Infrastructure" },
      { name: "Chicago Mercantile Exchange (CME)", licence: "Designated Contract Market", type: "Market Infrastructure" },
      { name: "Intercontinental Exchange (ICE)", licence: "National Securities Exchange", type: "Market Infrastructure" }
    ]
  }
};


const BUSINESS_LINES = {
  "Major Bank": ["Retail Banking", "Mortgage Lending", "Commercial Banking", "Corporate & Investment Banking", "Wealth Management", "Treasury & Markets", "Transaction Banking", "Agricultural Banking"],
  "Domestic Bank": ["Retail Banking", "Mortgage Lending", "Small Business Banking", "Commercial Banking", "Wealth Management", "Agricultural Banking"],
  "Bank": ["Retail Banking", "Mortgage Lending", "Commercial Banking", "Small Business Banking", "Treasury Services", "Agricultural Banking"],
  "Digital Bank": ["Retail Banking", "Mortgage Lending", "Digital Payments", "Personal Finance", "Small Business Banking"],
  "Neobank": ["Retail Banking", "Digital Payments", "Personal Finance"],
  "Foreign Bank Branch": ["Corporate Banking", "Investment Banking", "Treasury & Markets", "Trade Finance"],
  "Mutual Bank": ["Retail Banking", "Mortgage Lending", "Community Banking", "Small Business Banking"],
  "Credit Union": ["Retail Banking", "Member Services", "Small Business Banking"],
  "Building Society": ["Retail Banking", "Mortgage Lending", "Savings Products"],
  "Superannuation": ["Retirement Savings", "Investment Management", "Insurance", "Member Services"],
  "General Insurer": ["Property & Casualty Insurance", "Commercial Insurance", "Underwriting", "Claims Management"],
  "Health Insurer": ["Health Insurance", "Claims Processing", "Provider Networks", "Member Services"],
  "Life Insurer": ["Life Insurance", "Income Protection", "Investment Products", "Underwriting"],
  "Fintech / Payments": ["Payment Processing", "Digital Wallets", "Money Transfer", "Merchant Services"],
  "Wealth Management": ["Investment Management", "Financial Advice", "Portfolio Management", "Superannuation"],
  "Market Infrastructure": ["Trading Platform", "Clearing & Settlement", "Market Data", "Regulatory Reporting"],
  "Non-Bank Lender": ["Mortgage Lending", "Personal Loans", "Business Loans", "Asset Finance"],
  "Investment": ["Portfolio Management", "Trading Services", "Research & Analysis", "Custody Services"],
  "Insurance": ["Underwriting", "Claims Management", "Risk Assessment", "Product Distribution"]
};

const PRODUCTS = {
  "Retail Banking": ["Transaction Accounts", "Savings Accounts", "Term Deposits", "Home Loans", "Personal Loans", "Credit Cards", "Overdrafts", "Foreign Exchange"],
  "Commercial Banking": ["Business Accounts", "Business Loans", "Trade Finance", "Asset Finance", "Invoice Financing", "Equipment Leasing", "Commercial Property Loans", "Agricultural Business Loans"],
  "Corporate & Investment Banking": ["Corporate Lending", "Syndicated Loans", "Structured Finance", "Debt Capital Markets", "Equity Capital Markets", "M&A Advisory", "Project Finance"],
  "Small Business Banking": ["Business Accounts", "Merchant Services", "Business Credit Cards", "Equipment Finance", "Working Capital Loans", "Business Overdrafts"],
  "Wealth Management": ["Managed Funds", "Portfolio Administration", "Financial Planning", "Stockbroking", "Insurance Products", "Estate Planning", "Self-Managed Super"],
  "Treasury & Markets": ["FX Trading", "Interest Rate Derivatives", "Commodity Trading", "Bond Trading", "Money Market Operations", "Hedging Solutions"],
  "Digital Payments": ["Peer-to-Peer Payments", "Digital Wallets", "Buy Now Pay Later", "QR Code Payments", "Contactless Payments", "Cross-border Remittances"],
  "Investment Banking": ["IPO Services", "Debt Underwriting", "M&A Advisory", "Restructuring", "Private Placements", "Equity Research"],
  "Transaction Banking": ["Cash Management", "Trade Finance", "Supply Chain Finance", "Correspondent Banking", "Liquidity Management"],
  "Mortgage Lending": ["Residential Mortgages", "Investment Property Loans", "Construction Loans", "Refinancing", "Reverse Mortgages"],
  "Personal Finance": ["Personal Loans", "Debt Consolidation", "Car Loans", "Budget Tools", "Savings Goals"],
  "Payment Processing": ["Merchant Acquiring", "Payment Gateway", "Point of Sale", "Online Payments", "Mobile Payments", "Recurring Billing"],
  "Money Transfer": ["International Remittances", "Currency Exchange", "Cross-border Payments", "Multi-currency Accounts"],
  "Retirement Savings": ["Superannuation Accounts", "Pension Products", "Transition to Retirement", "Account-based Pensions"],
  "Investment Management": ["Managed Funds", "Index Funds", "ETFs", "Alternative Investments", "Direct Shares", "Diversified Portfolios"],
  "Property & Casualty Insurance": ["Home Insurance", "Motor Insurance", "Contents Insurance", "Landlord Insurance", "Travel Insurance", "Business Insurance"],
  "Health Insurance": ["Hospital Cover", "Extras Cover", "Ambulance Cover", "International Health Cover"],
  "Life Insurance": ["Term Life Insurance", "Whole of Life", "Income Protection", "Total & Permanent Disability", "Trauma Insurance"],
  "Trading Platform": ["Equity Trading", "Derivatives Trading", "Fixed Income Trading", "Market Making", "Electronic Trading"],
  "Clearing & Settlement": ["Trade Clearing", "Central Counterparty", "Securities Settlement", "Collateral Management"],
  "Underwriting": ["Risk Assessment", "Policy Issuance", "Premium Calculation", "Reinsurance"],
  "Claims Management": ["Claims Processing", "Claims Assessment", "Settlement Services", "Fraud Detection"],
  "Community Banking": ["Local Branch Services", "Community Lending", "Member Services", "Financial Literacy Programs"],
  "Member Services": ["Account Management", "Member Support", "Financial Counseling", "Online Services"],
  "Trade Finance": ["Letters of Credit", "Bank Guarantees", "Documentary Collections", "Export Finance", "Import Finance"],
  "Asset Finance": ["Equipment Finance", "Vehicle Finance", "Technology Finance", "Plant & Machinery Finance", "Livestock Finance", "Farm Equipment Finance"],
  "Agricultural Banking": ["Farm Loans", "Livestock Finance", "Rural Property Loans", "Seasonal Finance", "Agribusiness Loans", "Horticulture Finance", "Dairy Finance", "Grain Finance", "Farm Working Capital"],
  "Financial Advice": ["Investment Advice", "Retirement Planning", "Tax Planning", "Insurance Advice", "Estate Planning"],
  "Portfolio Management": ["Asset Allocation", "Portfolio Construction", "Performance Monitoring", "Rebalancing"],
  "Merchant Services": ["EFTPOS Terminals", "Payment Gateway", "Online Payments", "Invoicing", "Settlement Services"],
  "Custody Services": ["Securities Custody", "Asset Servicing", "Corporate Actions", "Proxy Voting"],
  "Market Data": ["Real-time Pricing", "Historical Data", "Market Analytics", "Reference Data"],
  "Regulatory Reporting": ["Transaction Reporting", "Surveillance", "Compliance Monitoring", "Regulatory Filings"],
  "Risk Assessment": ["Credit Scoring", "Risk Modeling", "Probability Assessment", "Exposure Calculation"],
  "Product Distribution": ["Direct Sales", "Broker Network", "Digital Distribution", "Affinity Partnerships"]
};

const REGULATORY_DATA = {
  Australia: {
    "Financial Services": {
      regulators: {
        APRA: { fullName: "Australian Prudential Regulation Authority", applicableLicences: ["ADI (Authorised Deposit-taking Institution)", "General Insurer", "Life Insurer", "RSE Licensee (Superannuation)"], regulations: ["CPS 230 – Operational Risk Management", "CPS 234 – Information Security", "CPS 220 – Risk Management", "CPS 226 – Margining & Risk Mitigation", "SPS 515 – Strategic Planning & Member Outcomes", "CPS 231 – Outsourcing", "CPS 232 – Business Continuity Management"] },
        ASIC: { fullName: "Australian Securities & Investments Commission", applicableLicences: ["ADI (Authorised Deposit-taking Institution)", "AFSL Holder", "ACL Holder (Credit)", "General Insurer", "Life Insurer", "RSE Licensee (Superannuation)", "Market Operator"], regulations: ["RG 271 – Internal Dispute Resolution", "RG 209 – Credit Licensing", "RG 104 – AFS Licensing", "RG 274 – Product Design & Distribution", "RG 175 – Licensing: Financial Product Advisers"] },
        AUSTRAC: { fullName: "Australian Transaction Reports and Analysis Centre", applicableLicences: ["ADI (Authorised Deposit-taking Institution)", "AFSL Holder", "ACL Holder (Credit)", "General Insurer", "Life Insurer"], regulations: ["AML/CTF Act 2006", "AML/CTF Rules Instrument 2007", "Financial Crime Guide"] },
        OAIC: { fullName: "Office of the Australian Information Commissioner", applicableLicences: ["ADI (Authorised Deposit-taking Institution)", "AFSL Holder", "ACL Holder (Credit)", "General Insurer", "Life Insurer", "RSE Licensee (Superannuation)", "Market Operator"], regulations: ["Privacy Act 1988", "Australian Privacy Principles (APPs)", "Notifiable Data Breaches Scheme", "Consumer Data Right Rules"] },
        RBA: { fullName: "Reserve Bank of Australia", applicableLicences: ["ADI (Authorised Deposit-taking Institution)"], regulations: ["Payment Systems (Regulation) Act 1998", "ePayments Code"] }
      }
    },
    Telecommunications: {
      regulators: {
        ACMA: { fullName: "Australian Communications and Media Authority", applicableLicences: ["Carrier Licence", "Carriage Service Provider (CSP)"], regulations: ["Telecommunications Act 1997", "TCP Code", "Spam Act 2003", "Do Not Call Register Act 2006", "Radiocommunications Act 1992"] },
        OAIC: { fullName: "Office of the Australian Information Commissioner", applicableLicences: ["Carrier Licence", "Carriage Service Provider (CSP)"], regulations: ["Privacy Act 1988 (Telecom)", "Telecommunications (Interception) Act 1979"] }
      }
    }
  },
  "United Kingdom": {
    "Financial Services": {
      regulators: {
        FCA: { fullName: "Financial Conduct Authority", applicableLicences: ["Banking Licence (PRA)", "E-Money Institution (EMI)", "Payment Institution (PI)", "Insurance Company", "Investment Firm"], regulations: ["Consumer Duty (PS22/9)", "SYSC – Senior Management Arrangements", "PRIN – Principles for Businesses", "SM&CR – Senior Managers & Certification Regime", "DISP – Dispute Resolution", "SUP – Supervision Manual"] },
        PRA: { fullName: "Prudential Regulation Authority", applicableLicences: ["Banking Licence (PRA)", "Insurance Company"], regulations: ["SS1/21 – Operational Resilience", "SS2/21 – Outsourcing & Third Party Risk", "PS11/24 – Capital Requirements", "SS3/21 – DORA Alignment"] },
        ICO: { fullName: "Information Commissioner's Office", applicableLicences: ["Banking Licence (PRA)", "E-Money Institution (EMI)", "Payment Institution (PI)", "Insurance Company", "Investment Firm"], regulations: ["UK GDPR", "Data Protection Act 2018", "NIS Regulations 2018"] }
      }
    },
    Telecommunications: {
      regulators: {
        Ofcom: { fullName: "Office of Communications", applicableLicences: ["General Authorisation (Ofcom)"], regulations: ["Communications Act 2003", "General Conditions of Entitlement", "NIS Regs", "Online Safety Act 2023"] },
        ICO: { fullName: "Information Commissioner's Office", applicableLicences: ["General Authorisation (Ofcom)"], regulations: ["UK GDPR", "PECR"] }
      }
    }
  },
  "New Zealand": {
    "Financial Services": {
      regulators: {
        RBNZ: { fullName: "Reserve Bank of New Zealand", applicableLicences: ["Registered Bank", "Licensed Insurer"], regulations: ["BS11 – Outsourcing Policy", "BS10 – Capital Adequacy", "BS13 – Liquidity Policy", "Banking Supervision Handbook"] },
        FMA: { fullName: "Financial Markets Authority", applicableLicences: ["Registered Bank", "Licensed Insurer", "MIS Manager", "Financial Service Provider"], regulations: ["Financial Markets Conduct Act 2013", "Financial Advisers Act 2008", "AML/CFT Act 2009", "Credit Contracts Act 2003"] },
        OPC: { fullName: "Office of the Privacy Commissioner", applicableLicences: ["Registered Bank", "Licensed Insurer", "MIS Manager", "Financial Service Provider", "Market Operator"], regulations: ["Privacy Act 2020", "Information Privacy Principles"] }
      }
    }
  },
  Singapore: {
    "Financial Services": {
      regulators: {
        MAS: { fullName: "Monetary Authority of Singapore", applicableLicences: ["Full Bank Licence", "Digital Bank", "Capital Markets Services Licence", "Major Payment Institution", "Insurance Company"], regulations: ["MAS TRM Guidelines", "MAS Notice 644 – Technology Risk", "MAS Notice 655 – Cyber Hygiene", "Payment Services Act 2019", "MAS Outsourcing Guidelines"] },
        PDPC: { fullName: "Personal Data Protection Commission", applicableLicences: ["Full Bank Licence", "Digital Bank", "Capital Markets Services Licence", "Major Payment Institution", "Insurance Company"], regulations: ["PDPA 2012", "Data Protection Provisions"] }
      }
    }
  },
  "Hong Kong": {
    "Financial Services": {
      regulators: {
        HKMA: { fullName: "Hong Kong Monetary Authority", applicableLicences: ["Licensed Bank", "Virtual Bank", "Stored Value Facility (SVF)"], regulations: ["SPM – Supervisory Policy Manual", "CR-G-14 – Operational Risk Management", "TM-G-1 – Technology Risk Management", "IC-2 – Outsourcing", "CR-S-5.4 – Cybersecurity"] },
        SFC: { fullName: "Securities and Futures Commission", applicableLicences: ["Licensed Exchange", "Licensed Clearing House"], regulations: ["Securities and Futures Ordinance", "Code of Conduct for Licensed Corporations", "Fund Manager Code of Conduct"] },
        IA: { fullName: "Insurance Authority", applicableLicences: ["Authorized Insurer"], regulations: ["Insurance Ordinance", "GWS – Guideline on Enterprise Risk Management", "GL14 – Cybersecurity"] },
        PCPD: { fullName: "Office of the Privacy Commissioner", applicableLicences: ["Licensed Bank", "Virtual Bank", "Authorized Insurer", "Stored Value Facility (SVF)", "Licensed Exchange"], regulations: ["Personal Data (Privacy) Ordinance", "Data Protection Principles"] }
      }
    }
  },
  Canada: {
    "Financial Services": {
      regulators: {
        OSFI: { fullName: "Office of the Superintendent of Financial Institutions", applicableLicences: ["Schedule I Bank", "Schedule II Bank", "Schedule III Bank", "Life Insurance Company", "P&C Insurance Company"], regulations: ["Guideline B-13 – Technology and Cyber Risk Management", "Guideline B-10 – Outsourcing", "Guideline E-21 – Operational Risk Management", "Capital Adequacy Requirements"] },
        "Bank of Canada": { fullName: "Bank of Canada", applicableLicences: ["Schedule I Bank", "Payment Service Provider"], regulations: ["Retail Payment Activities Act", "Payment Clearing and Settlement Act"] },
        FINTRAC: { fullName: "Financial Transactions and Reports Analysis Centre", applicableLicences: ["Schedule I Bank", "Schedule II Bank", "Schedule III Bank", "Payment Service Provider", "Investment Dealer"], regulations: ["PCMLTFA – Proceeds of Crime (Money Laundering) and Terrorist Financing Act", "AML/ATF Compliance Program"] },
        OPC: { fullName: "Office of the Privacy Commissioner", applicableLicences: ["Schedule I Bank", "Schedule II Bank", "Schedule III Bank", "Life Insurance Company", "P&C Insurance Company", "Investment Dealer", "Payment Service Provider"], regulations: ["PIPEDA – Personal Information Protection and Electronic Documents Act", "Privacy Act"] },
        CSA: { fullName: "Canadian Securities Administrators", applicableLicences: ["Investment Dealer", "Stock Exchange"], regulations: ["National Instrument 31-103", "National Instrument 81-102", "NI 21-101 – Marketplace Operation"] }
      }
    }
  },
  "United States": {
    "Financial Services": {
      regulators: {
        OCC: { fullName: "Office of the Comptroller of the Currency", applicableLicences: ["National Bank Charter"], regulations: ["OCC Bulletin 2013-29 – Third-Party Relationships", "OCC Heightened Standards", "Community Reinvestment Act (CRA)"] },
        FRB: { fullName: "Federal Reserve Board", applicableLicences: ["State Bank Charter", "National Bank Charter"], regulations: ["SR 13-19 – Guidance on Managing Outsourcing Risk", "Regulation YY – Enhanced Prudential Standards", "SR 12-17 – Consolidated Supervision Framework"] },
        FDIC: { fullName: "Federal Deposit Insurance Corporation", applicableLicences: ["National Bank Charter", "State Bank Charter"], regulations: ["FIL-44-2008 – Guidance for Managing Third-Party Risk", "Part 364 – Standards for Safety and Soundness"] },
        CFPB: { fullName: "Consumer Financial Protection Bureau", applicableLicences: ["National Bank Charter", "State Bank Charter", "State Money Transmitter", "Lending License"], regulations: ["CFPB Bulletin 2016-02 – Service Provider Oversight", "Regulation E – Electronic Fund Transfers", "TILA – Truth in Lending Act"] },
        SEC: { fullName: "Securities and Exchange Commission", applicableLicences: ["Broker Dealer", "Investment Adviser", "National Securities Exchange"], regulations: ["Regulation S-P – Privacy of Consumer Financial Information", "Regulation SCI – Systems Compliance and Integrity", "Investment Advisers Act 1940"] },
        FinCEN: { fullName: "Financial Crimes Enforcement Network", applicableLicences: ["National Bank Charter", "State Bank Charter", "State Money Transmitter", "Broker Dealer"], regulations: ["Bank Secrecy Act (BSA)", "31 CFR Chapter X – AML Program Requirements", "FinCEN CDD Rule"] },
        NAIC: { fullName: "National Association of Insurance Commissioners", applicableLicences: ["Insurance Company"], regulations: ["Model Audit Rule", "Insurance Data Security Model Law", "Own Risk and Solvency Assessment (ORSA)"] },
        CFTC: { fullName: "Commodity Futures Trading Commission", applicableLicences: ["Designated Contract Market"], regulations: ["Regulation AT – Algorithmic Trading", "Part 1 – General Regulations", "Core Principles for Designated Contract Markets"] }
      }
    }
  }
};

const STEPS = [
  { key: "jurisdiction", title: "Jurisdiction", icon: Globe, desc: "Country & sector" },
  { key: "entity", title: "Entity", icon: Building2, desc: "Select company" },
  { key: "history", title: "Reg. History", icon: AlertCircle, desc: "Enforcement & enquiries" },
  { key: "business", title: "Business Lines", icon: Shield, desc: "Products & services" },
  { key: "scope", title: "Regulation", icon: Scale, desc: "Regulator & rule" },
  { key: "upload", title: "Upload", icon: FileUp, desc: "Regulatory PDF" },
  { key: "analysis", title: "Analysis", icon: Cpu, desc: "AI extraction" },
  { key: "results", title: "Register", icon: ClipboardList, desc: "Review & export" }
];

const PRIORITY_COLORS = { Critical: { bg: "#fef2f2", text: "#991b1b", border: "#fecaca" }, High: { bg: "#fff7ed", text: "#9a3412", border: "#fed7aa" }, Medium: { bg: "#fefce8", text: "#854d0e", border: "#fef08a" }, Low: { bg: "#f0fdf4", text: "#166534", border: "#bbf7d0" } };
const TYPE_COLORS = { Mandatory: { bg: "#eff6ff", text: "#1e40af" }, Recommended: { bg: "#f0fdf4", text: "#166534" }, Disclosure: { bg: "#faf5ff", text: "#6b21a8" }, Reporting: { bg: "#fefce8", text: "#854d0e" }, Governance: { bg: "#f0f9ff", text: "#0c4a6e" } };

export default function RegulatoryObligationMapper() {
  // API endpoint configuration - works in both development and production
  const getApiUrl = () => {
    // In production (Railway), use relative URL. In development, use localhost:3001
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return 'http://localhost:3001';
    }
    return ''; // Empty string means relative URL (same origin)
  };
  
  const [step, setStep] = useState(0);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('anthropic_api_key') || "");
  const [showApiSettings, setShowApiSettings] = useState(false);
  const [formData, setFormData] = useState({ country: "", industry: "", companyName: "", licenceType: "", companyType: "", businessLines: [], products: [], regulator: "", regulation: "", regulatoryHistory: [], customContext: "" });
  const [companySearch, setCompanySearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfText, setPdfText] = useState(null);
  const [pdfExtracting, setPdfExtracting] = useState(false);
  const [obligations, setObligations] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [searchingHistory, setSearchingHistory] = useState(false);
  const [historyResults, setHistoryResults] = useState([]);
  const [processingPhase, setProcessingPhase] = useState("");
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [filterPriority, setFilterPriority] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");
  const [sortField, setSortField] = useState(null);
  const [sortDir, setSortDir] = useState("asc");
  const fileInputRef = useRef(null);

  const industries = formData.country ? Object.keys(COMPANY_REGISTRY[formData.country] || {}) : [];
  const companies = formData.country && formData.industry ? COMPANY_REGISTRY[formData.country]?.[formData.industry] || [] : [];
  const companyTypes = useMemo(() => [...new Set(companies.map(c => c.type))].sort(), [companies]);
  const filteredCompanies = useMemo(() => {
    let result = companies;
    if (typeFilter !== "All") result = result.filter(c => c.type === typeFilter);
    if (companySearch.trim()) {
      const q = companySearch.toLowerCase();
      result = result.filter(c => c.name.toLowerCase().includes(q) || c.type.toLowerCase().includes(q) || c.licence.toLowerCase().includes(q));
    }
    return result;
  }, [companies, companySearch, typeFilter]);

  const industryRegData = formData.country && formData.industry ? REGULATORY_DATA[formData.country]?.[formData.industry] : null;
  const allRegulators = industryRegData?.regulators || {};
  const applicableRegulators = useMemo(() => {
    if (!formData.licenceType) return {};
    const result = {};
    Object.entries(allRegulators).forEach(([key, reg]) => {
      if (reg.applicableLicences?.includes(formData.licenceType)) result[key] = reg;
    });
    return result;
  }, [allRegulators, formData.licenceType]);
  const regulatorData = formData.regulator ? applicableRegulators[formData.regulator] : null;
  const regulations = regulatorData?.regulations || [];

  const selectCompany = (company) => setFormData(prev => ({ ...prev, companyName: company.name, licenceType: company.licence, companyType: company.type, businessLines: [], products: [], regulatoryHistory: [], customContext: "", regulator: "", regulation: "" }));
  const updateForm = (key, value) => {
    const resets = { country: { industry: "", companyName: "", licenceType: "", companyType: "", businessLines: [], products: [], regulator: "", regulation: "" }, industry: { companyName: "", licenceType: "", companyType: "", businessLines: [], products: [], regulator: "", regulation: "" }, regulator: { regulation: "" } };
    setFormData(prev => ({ ...prev, [key]: value, ...(resets[key] || {}) }));
    if (key === "country" || key === "industry") { setCompanySearch(""); setTypeFilter("All"); }
  };

  const handleFileUpload = useCallback(async (file) => {
    if (!file) return;
    if (file.type !== "application/pdf") { setError("Please upload a PDF file"); return; }
    if (file.size > 15 * 1024 * 1024) { setError("File must be under 15MB"); return; }
    setError(null); setPdfFile(file); setPdfText(null); setPdfExtracting(true);
    try {
      // Load pdf.js from CDN if not already loaded
      if (!window.pdfjsLib) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
          script.onload = resolve;
          script.onerror = () => reject(new Error("Failed to load PDF parser"));
          document.head.appendChild(script);
        });
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
      }
      // Read file as ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let fullText = "";
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const pageText = content.items.map(item => item.str).join(" ");
        fullText += `\n--- Page ${i} ---\n${pageText}`;
      }
      if (!fullText.trim()) throw new Error("No text could be extracted from this PDF. It may be a scanned image.");
      console.log("PDF text extracted:", fullText.length, "chars from", pdf.numPages, "pages");
      setPdfText(fullText.trim());
    } catch (err) {
      setError("PDF extraction failed: " + (err.message || String(err)));
      setPdfFile(null);
    } finally {
      setPdfExtracting(false);
    }
  }, []);

  const searchRegulatoryHistory = async () => {
    if (!apiKey) {
      setError("API key required. Click the button in the bottom-right corner to configure your AI API key.");
      return;
    }
    
    setSearchingHistory(true);
    setHistoryResults([]);
    setError(null);
    
    try {
      const searchQuery = `${formData.companyName} ${formData.country} regulatory enforcement actions breaches undertakings ${Object.keys(applicableRegulators).join(" ")}`;
      
      const sp = `You are a regulatory research analyst. Search for and summarize ANY regulatory enforcement actions, breaches, undertakings, or ongoing investigations involving "${formData.companyName}" in ${formData.country}.

Search for:
- Enforcement actions by ${Object.keys(applicableRegulators).join(", ")} or other relevant regulators
- Regulatory breaches or non-compliance findings
- Enforceable undertakings or court orders
- Ongoing investigations or inquiries
- Penalty notices or fines
- Licence conditions or restrictions

For EACH finding, provide:
- year: year of the action (number)
- regulator: which regulator took action
- issue: brief description of the breach/issue (max 100 chars)
- outcome: what happened - fine, undertaking, investigation, etc. (max 100 chars)
- relevance: which regulatory area this relates to (max 50 chars)

CRITICAL: Return ONLY a JSON array. If no enforcement history found, return empty array [].
Do not include introduction, explanation, or markdown formatting.`;

      const response = await fetch(`${getApiUrl()}/api/claude`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          apiKey: apiKey,
          model: "claude-sonnet-4-20250514",
          max_tokens: 4096,
          system: sp,
          messages: [{
            role: "user",
            content: `Search for regulatory enforcement history for: ${searchQuery}\n\nReturn ONLY a JSON array of findings, or [] if none found.`
          }]
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (response.status === 401) {
          throw new Error("Invalid API key. Please check your AI API key and try again.");
        }
        throw new Error(`API request failed (${response.status}): ${errorData.error?.message || response.statusText}`);
      }

      const data = await response.json();
      
      if (data.error) {
        const errorMsg = data.error.message || JSON.stringify(data.error);
        if (errorMsg.includes("authentication") || errorMsg.includes("api_key") || errorMsg.includes("unauthorized")) {
          throw new Error("Invalid API key. Please check your AI API key and try again.");
        }
        throw new Error("Search failed: " + errorMsg);
      }

      let text = "";
      if (data.content && Array.isArray(data.content)) {
        for (const block of data.content) {
          if (block.type === "text" && block.text) text += block.text;
        }
      }
      
      text = text.trim().replace(/```json\s*/gi, "").replace(/```\s*/gi, "").trim();
      
      // Check if AI returned explanatory text instead of data
      if (text.toLowerCase().includes("no access") || text.toLowerCase().includes("cannot search") || text.toLowerCase().includes("don't have") || text.toLowerCase().includes("unable to")) {
        throw new Error("AI doesn't have access to real-time enforcement data. Please enter history manually or skip this step.");
      }
      
      const arrayStart = text.indexOf("[");
      if (arrayStart !== -1) text = text.substring(arrayStart);
      
      const parsed = JSON.parse(text);
      setHistoryResults(Array.isArray(parsed) ? parsed : []);
      
    } catch (err) {
      console.error("Regulatory history search error:", err);
      
      // Check if it's a CORS/network error
      if (err.message === "Failed to fetch" || err.name === "TypeError") {
        setError("Connection failed: Proxy server not running. Please run 'npm run server' in a separate terminal to start the API proxy on port 3001.");
      } else {
        setError("Could not search regulatory history: " + (err.message || String(err)));
      }
    } finally {
      setSearchingHistory(false);
    }
  };

  const canProceed = () => {
    switch (step) { case 0: return formData.country && formData.industry; case 1: return formData.companyName; case 2: return true; case 3: return formData.businessLines.length > 0; case 4: return formData.regulator && formData.regulation; case 5: return pdfFile && pdfText; case 6: return obligations.length > 0; default: return true; }
  };

  const processDocument = async () => {
    if (!apiKey) {
      setError("API key required. Click the button in the bottom-right corner to configure your AI API key.");
      return;
    }
    
    setProcessing(true); setError(null); setObligations([]);
    const phases = ["Uploading document to AI engine...", "Parsing regulatory text structure...", "Identifying obligation clauses...", "Extracting controls & requirements...", "Mapping to process taxonomy...", "Assigning risk categories & priorities...", "Finalising obligation register..."];
    let phaseIdx = 0; setProcessingPhase(phases[0]);
    const phaseInterval = setInterval(() => { phaseIdx = Math.min(phaseIdx + 1, phases.length - 1); setProcessingPhase(phases[phaseIdx]); }, 3000);
    try {
      const businessContext = formData.businessLines.length > 0 ? `\n\nBUSINESS CONTEXT:\n- Business Lines: ${formData.businessLines.join(", ")}\n- Products/Services: ${formData.products.join(", ")}\n\nFocus on obligations specifically relevant to these business lines and products. Consider operational risks, product governance, customer protection, and conduct requirements specific to these activities.` : "";
      
      const regulatoryHistoryContext = formData.regulatoryHistory.length > 0 || formData.customContext ? `\n\nREGULATORY HISTORY & CONTEXT:\n${formData.regulatoryHistory.length > 0 ? `Previous Enforcement/Breaches:\n${formData.regulatoryHistory.map(h => `- ${h.year}: ${h.issue} (${h.regulator}) - ${h.outcome}`).join("\n")}\n\nGiven this enforcement history, pay special attention to obligations related to: ${formData.regulatoryHistory.map(h => h.relevance).join(", ")}.` : ""}${formData.customContext ? `\n\nAdditional Context:\n${formData.customContext}` : ""}\n\nUse this context to prioritize obligations that address known compliance gaps or areas of regulatory focus.` : "";
      
      const sp = `You are an expert regulatory compliance analyst for ${formData.country} ${formData.industry}. Extract EVERY obligation from this document for "${formData.companyName}" (${formData.companyType}, ${formData.licenceType}) under ${formData.regulation} (${formData.regulator} - ${regulatorData?.fullName || ""}).${businessContext}${regulatoryHistoryContext}

For each obligation extract these fields:
- clause_ref: the clause/paragraph reference
- obligation_text: what must be done (max 200 chars)
- obligation_type: one of "Mandatory", "Recommended", "Disclosure", "Reporting", "Governance"
- key_requirement: short summary (max 80 chars)
- risk_category: one of "Governance", "Risk Management", "Compliance", "Technology", "Operational", "People & Culture", "Financial", "Data & Privacy"
- product_applicability: specify if applies to "All Products" or list specific products/business lines (max 100 chars). Consider the business context provided.
- suggested_control: a brief control title (max 80 chars)
- control_action: describe the specific action/activity to be performed (max 150 chars). E.g., "Reconcile daily cash reports", "Review vendor security assessments"
- control_frequency: how often the control is performed - one of "Daily", "Weekly", "Monthly", "Quarterly", "Annually", "Upon Event", "Continuous", "As Required"
- control_responsibility: the role/position who performs the control (max 60 chars). E.g., "Finance Manager", "System Admin", "Chief Risk Officer"
- control_evidence: what proof/record is generated (max 100 chars). E.g., "Signed reconciliation logs", "System audit trail", "Board meeting minutes"
- process_area: business process area
- sub_process: specific sub-process
- compliance_frequency: one of "Ongoing", "Annual", "Quarterly", "Monthly", "Event-Driven"
- priority: one of "Critical", "High", "Medium", "Low"
- context_source: if this obligation is particularly relevant to the enforcement history or additional context provided, indicate which specific issue/relevance area it addresses (max 60 chars). If not specifically related to provided context, leave empty string ""

CRITICAL INSTRUCTIONS:
- Your response must be ONLY a JSON array. No introduction, no explanation, no markdown.
- Start your response with [ and end with ]
- Do not wrap in code fences or backticks
- Be thorough — extract every single obligation from the document
- Provide detailed, actionable control descriptions that specify WHO does WHAT, WHEN, and WHAT EVIDENCE is created`;

      let response;
      try {
        response = await fetch(`${getApiUrl()}/api/claude`, {
          method: "POST",
          headers: { 
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            apiKey: apiKey,
            model: "claude-sonnet-4-20250514",
            max_tokens: 8096,
            system: sp,
            messages: [{
              role: "user",
              content: `Here is the full text of the regulatory document:\n\n${pdfText}\n\nExtract all regulatory obligations from this document into the specified JSON format. Return ONLY the JSON array.`
            }]
          })
        });
      } catch (fetchErr) {
        throw new Error("Network error calling AI: " + (fetchErr.message || String(fetchErr)));
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (response.status === 401) {
          throw new Error("Invalid API key. Please check your AI API key in Step 1 and try again.");
        }
        throw new Error(`API request failed (${response.status}): ${errorData.error?.message || response.statusText}`);
      }

      let data;
      try {
        data = await response.json();
      } catch (jsonErr) {
        throw new Error("Could not parse API response as JSON (status " + response.status + "): " + (jsonErr.message || String(jsonErr)));
      }

      console.log("API status:", response.status, "Data keys:", Object.keys(data), "stop_reason:", data.stop_reason);

      if (data.error) {
        const errorMsg = data.error.message || JSON.stringify(data.error);
        if (errorMsg.includes("authentication") || errorMsg.includes("api_key") || errorMsg.includes("unauthorized")) {
          throw new Error("Invalid API key. Please check your AI API key in Step 1 and try again.");
        }
        throw new Error("API error: " + errorMsg);
      }

      if (!data.content || !Array.isArray(data.content) || !data.content.length) {
        throw new Error("API returned no content. Keys: " + Object.keys(data).join(", ") + ". Full: " + JSON.stringify(data).substring(0, 300));
      }

      let text = "";
      for (const block of data.content) {
        if (block.type === "text" && block.text) text += block.text;
      }
      text = text.trim();
      console.log("Extracted text length:", text.length, "Preview:", text.substring(0, 200));

      if (!text) {
        throw new Error("No text in response. Block types: " + data.content.map(b => b.type).join(", ") + ". Content: " + JSON.stringify(data.content).substring(0, 300));
      }

      // Strip markdown code fences
      text = text.replace(/```json\s*/gi, "").replace(/```\s*/gi, "").trim();

      // Robust JSON array extraction
      const arrayStart = text.indexOf("[");
      if (arrayStart === -1) {
        throw new Error("No JSON array found. Response preview: " + text.substring(0, 300));
      }
      text = text.substring(arrayStart);

      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch (e) {
        console.log("Direct parse failed, attempting recovery. Text length:", text.length);
        const lastBrace = text.lastIndexOf("}");
        if (lastBrace > 0) {
          let recovered = text.substring(0, lastBrace + 1).replace(/,\s*$/, "") + "]";
          try {
            parsed = JSON.parse(recovered);
            console.log("Recovery successful, got", parsed.length, "obligations");
          } catch (e2) {
            throw new Error("JSON parse failed even after recovery. Parse error: " + e2.message + ". First 200 chars: " + text.substring(0, 200));
          }
        } else {
          throw new Error("No complete JSON objects found. First 200 chars: " + text.substring(0, 200));
        }
      }

      if (!Array.isArray(parsed) || !parsed.length) {
        throw new Error("Parsed result is empty or not an array.");
      }

      console.log("Success:", parsed.length, "obligations extracted");
      setObligations(parsed);
      setStep(7);
    } catch (err) {
      console.error("ProcessDocument error:", err);
      
      // Check if it's a CORS/network error
      if (err.message.includes("Failed to fetch") || err.message.includes("Network error")) {
        setError("⚠️ Connection Error: Proxy server not running.\n\nThe AI analysis requires a backend proxy server.\n\nTo fix:\n1. Open a new terminal\n2. Run: npm install\n3. Run: npm run server\n4. Wait for 'Proxy server running' message\n5. Click Retry\n\nThe proxy server must run alongside the Vite dev server.");
      } else {
        setError(err.message || "Unknown error: " + String(err));
      }
    } finally {
      clearInterval(phaseInterval);
      setProcessing(false);
      setProcessingPhase("");
    }
  };

  const filteredObligations = useMemo(() => {
    let r = obligations;
    if (filterText) r = r.filter(o => Object.values(o).some(v => String(v).toLowerCase().includes(filterText.toLowerCase())));
    if (filterPriority !== "All") r = r.filter(o => o.priority === filterPriority);
    if (filterCategory !== "All") r = r.filter(o => o.risk_category === filterCategory);
    if (sortField) r = [...r].sort((a, b) => { const va = String(a[sortField]||""), vb = String(b[sortField]||""); return sortDir === "asc" ? va.localeCompare(vb) : vb.localeCompare(va); });
    return r;
  }, [obligations, filterText, filterPriority, filterCategory, sortField, sortDir]);

  const stats = useMemo(() => {
    if (!obligations.length) return null;
    const bp = {}, bc = {};
    obligations.forEach(o => { bp[o.priority] = (bp[o.priority]||0)+1; bc[o.risk_category] = (bc[o.risk_category]||0)+1; });
    return { byPriority: bp, byCategory: bc, total: obligations.length };
  }, [obligations]);

  const generateExcel = () => {
    const wb = XLSX.utils.book_new();
    const coverData = [
      ["REGULATORY OBLIGATION REGISTER"],
      [""],
      ["Company",formData.companyName],
      ["Entity Type",formData.companyType],
      ["Country",formData.country],
      ["Industry",formData.industry],
      ["Licence Type",formData.licenceType],
      ["Business Lines",formData.businessLines.join(", ") || "Not specified"],
      ["Products/Services",formData.products.join(", ") || "Not specified"],
      ["Regulator",`${formData.regulator} – ${regulatorData?.fullName||""}`],
      ["Regulation",formData.regulation],
      ["Generated",new Date().toLocaleDateString("en-AU",{day:"2-digit",month:"long",year:"numeric"})],
      ["Total Obligations",obligations.length]
    ];
    
    // Add regulatory history section if present
    if (formData.regulatoryHistory.length > 0 || formData.customContext) {
      coverData.push([""], ["REGULATORY HISTORY & CONTEXT"]);
      if (formData.regulatoryHistory.length > 0) {
        coverData.push(["Enforcement Findings/Undertakings", ""]);
        formData.regulatoryHistory.forEach(h => {
          coverData.push([`${h.year} - ${h.regulator}`, `${h.issue}: ${h.outcome}`]);
        });
      }
      if (formData.customContext) {
        coverData.push([""], ["Additional Context", formData.customContext]);
      }
    }
    
    coverData.push([""], ["SUMMARY BY PRIORITY"], ...Object.entries(stats?.byPriority||{}).map(([k,v])=>[k,v]), [""], ["SUMMARY BY RISK CATEGORY"], ...Object.entries(stats?.byCategory||{}).map(([k,v])=>[k,v]));
    
    const cs = XLSX.utils.aoa_to_sheet(coverData); cs["!cols"]=[{wch:25},{wch:70}]; XLSX.utils.book_append_sheet(wb,cs,"Cover");
    const h=["#","Clause Ref","Obligation","Type","Key Requirement","Risk Category","Product Applicability","Control Title","Control Action","Control Frequency","Control Responsibility","Control Evidence","Process Area","Sub-Process","Compliance Frequency","Priority","Context Source"];
    const rows=obligations.map((o,i)=>[i+1,o.clause_ref,o.obligation_text,o.obligation_type,o.key_requirement,o.risk_category,o.product_applicability||"",o.suggested_control,o.control_action||"",o.control_frequency||"",o.control_responsibility||"",o.control_evidence||"",o.process_area,o.sub_process,o.compliance_frequency,o.priority,o.context_source||""]);
    const os=XLSX.utils.aoa_to_sheet([h,...rows]); os["!cols"]=[{wch:5},{wch:14},{wch:55},{wch:14},{wch:35},{wch:18},{wch:30},{wch:25},{wch:45},{wch:18},{wch:25},{wch:35},{wch:22},{wch:22},{wch:18},{wch:10},{wch:25}]; os["!autofilter"]={ref:`A1:Q${rows.length+1}`}; XLSX.utils.book_append_sheet(wb,os,"Obligations");
    const pm={}; obligations.forEach(o=>{const k=`${o.process_area}|||${o.sub_process}`;if(!pm[k])pm[k]={area:o.process_area,sub:o.sub_process,total:0,Critical:0,High:0,Medium:0,Low:0};pm[k].total++;pm[k][o.priority]=(pm[k][o.priority]||0)+1;});
    const pr=Object.values(pm).map(p=>[p.area,p.sub,p.total,p.Critical,p.High,p.Medium,p.Low]);
    const ps=XLSX.utils.aoa_to_sheet([["Process Area","Sub-Process","Count","Critical","High","Medium","Low"],...pr]); ps["!cols"]=[{wch:25},{wch:25},{wch:10},{wch:10},{wch:10},{wch:10},{wch:10}]; XLSX.utils.book_append_sheet(wb,ps,"Process Map");
    XLSX.writeFile(wb,`${formData.companyName.replace(/\s+/g,"_")}_Obligation_Register.xlsx`);
  };

  const handleSort = (f) => { if(sortField===f) setSortDir(d=>d==="asc"?"desc":"asc"); else { setSortField(f); setSortDir("asc"); } };
  const Badge = ({label,colors}) => <span style={{background:colors.bg,color:colors.text,border:colors.border?`1px solid ${colors.border}`:"none",padding:"2px 10px",borderRadius:"999px",fontSize:"11px",fontWeight:600,whiteSpace:"nowrap"}}>{label}</span>;
  const Select = ({label,value,onChange,options,placeholder}) => (
    <div style={{marginBottom:"16px"}}>
      <label style={{display:"block",fontSize:"12px",fontWeight:700,color:"#475569",marginBottom:"6px",letterSpacing:"0.5px",textTransform:"uppercase"}}>{label}</label>
      <select value={value} onChange={e=>onChange(e.target.value)} style={{width:"100%",padding:"12px 14px",borderRadius:"10px",border:"2px solid #e2e8f0",background:"#fff",fontSize:"15px",color:value?"#0f172a":"#94a3b8",outline:"none",cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center"}}>
        <option value="">{placeholder||`Select ${label}`}</option>
        {options.map(o=><option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );

  const renderStep = () => {
    switch(step) {
      case 0: return (
        <div>
          <h2 style={{fontSize:"24px",fontWeight:700,color:"#0f172a",marginBottom:"4px"}}>Jurisdiction & Industry</h2>
          <p style={{color:"#64748b",marginBottom:"28px",fontSize:"15px"}}>Select the country and industry to load all regulated entities.</p>
          
          {!apiKey && (
            <div style={{marginBottom:"20px",padding:"14px 20px",background:"#fef2f2",borderRadius:"10px",border:"1px solid #fecaca"}}>
              <div style={{display:"flex",alignItems:"center",gap:"8px",color:"#991b1b",fontSize:"13px",fontWeight:600,marginBottom:"4px"}}><AlertCircle size={16}/>API Key Required</div>
              <div style={{fontSize:"12px",color:"#991b1b"}}>Click the button in the bottom-right corner to configure your AI API key.</div>
            </div>
          )}
          
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"}}>
            <Select label="Country" value={formData.country} onChange={v=>updateForm("country",v)} options={Object.keys(COMPANY_REGISTRY)} placeholder="Select jurisdiction" />
            <Select label="Industry Sector" value={formData.industry} onChange={v=>updateForm("industry",v)} options={industries} placeholder="Select industry" />
          </div>
          {formData.country && formData.industry && (
            <div style={{marginTop:"16px",padding:"16px 20px",background:"linear-gradient(135deg,#f0f9ff,#eff6ff)",borderRadius:"12px",border:"1px solid #bae6fd"}}>
              <div style={{display:"flex",alignItems:"center",gap:"8px",color:"#0c4a6e",fontSize:"14px",fontWeight:600,marginBottom:"8px"}}><Building2 size={16}/> {companies.length} regulated entities loaded</div>
              <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
                {companyTypes.map(t=><span key={t} style={{background:"#dbeafe",color:"#1e40af",padding:"3px 10px",borderRadius:"6px",fontSize:"11px",fontWeight:600}}>{t}: {companies.filter(c=>c.type===t).length}</span>)}
              </div>
            </div>
          )}
        </div>
      );
      case 1: return (
        <div>
          <h2 style={{fontSize:"24px",fontWeight:700,color:"#0f172a",marginBottom:"4px"}}>Select Regulated Entity</h2>
          <p style={{color:"#64748b",marginBottom:"16px",fontSize:"15px"}}>{companies.length} entities in {formData.country} {formData.industry}. Licence auto-detected on selection.</p>
          <div style={{display:"flex",gap:"10px",marginBottom:"12px"}}>
            <div style={{flex:1,position:"relative"}}>
              <Search size={16} style={{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8"}}/>
              <input type="text" placeholder="Search company, type, or licence..." value={companySearch} onChange={e=>setCompanySearch(e.target.value)} style={{width:"100%",padding:"10px 14px 10px 40px",borderRadius:"10px",border:"2px solid #e2e8f0",fontSize:"14px",outline:"none",boxSizing:"border-box"}}/>
            </div>
            <select value={typeFilter} onChange={e=>setTypeFilter(e.target.value)} style={{padding:"10px 14px",borderRadius:"10px",border:"2px solid #e2e8f0",fontSize:"13px",cursor:"pointer",background:"#fff",minWidth:"160px"}}>
              <option value="All">All Types ({companies.length})</option>
              {companyTypes.map(t=><option key={t} value={t}>{t} ({companies.filter(c=>c.type===t).length})</option>)}
            </select>
          </div>
          {formData.companyName && (
            <div style={{padding:"14px 20px",background:"#f0fdf4",borderRadius:"12px",border:"2px solid #86efac",marginBottom:"12px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div>
                <div style={{fontWeight:700,color:"#166534",fontSize:"15px"}}>{formData.companyName}</div>
                <div style={{fontSize:"12px",color:"#15803d",marginTop:"2px"}}><b>{formData.companyType}</b> · {formData.licenceType}</div>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                <div style={{background:"#dcfce7",borderRadius:"50%",width:"26px",height:"26px",display:"flex",alignItems:"center",justifyContent:"center"}}><Check size={14} color="#16a34a"/></div>
                <button onClick={()=>setFormData(prev=>({...prev,companyName:"",licenceType:"",companyType:"",businessLines:[],products:[],regulatoryHistory:[],customContext:"",regulator:"",regulation:""}))} style={{background:"none",border:"none",cursor:"pointer",color:"#6b7280",fontSize:"12px",textDecoration:"underline"}}>Change</button>
              </div>
            </div>
          )}
          <div style={{maxHeight:"360px",overflowY:"auto",borderRadius:"12px",border:"1px solid #e2e8f0"}}>
            {(typeFilter === "All" ? companyTypes : [typeFilter]).map(type => {
              const tc = filteredCompanies.filter(c=>c.type===type);
              if(!tc.length) return null;
              return (
                <div key={type}>
                  <div style={{padding:"7px 16px",background:"#f8fafc",fontSize:"11px",fontWeight:700,color:"#64748b",textTransform:"uppercase",letterSpacing:"0.8px",borderBottom:"1px solid #f1f5f9",position:"sticky",top:0,zIndex:1}}>{type} ({tc.length})</div>
                  {tc.map(company => {
                    const sel = formData.companyName === company.name;
                    return (
                      <div key={company.name} onClick={()=>selectCompany(company)} style={{padding:"10px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",borderBottom:"1px solid #f8fafc",background:sel?"#f0fdf4":"transparent",transition:"background 0.15s"}} onMouseEnter={e=>{if(!sel)e.currentTarget.style.background="#fafbfd"}} onMouseLeave={e=>{if(!sel)e.currentTarget.style.background="transparent"}}>
                        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                          <div style={{width:"32px",height:"32px",borderRadius:"8px",background:sel?"#dcfce7":"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px",fontWeight:700,color:sel?"#16a34a":"#64748b",flexShrink:0}}>{company.name.charAt(0)}</div>
                          <div>
                            <div style={{fontWeight:600,color:"#0f172a",fontSize:"13px"}}>{company.name}</div>
                            <div style={{fontSize:"11px",color:"#94a3b8"}}>{company.licence}</div>
                          </div>
                        </div>
                        {sel && <Check size={16} color="#16a34a"/>}
                      </div>
                    );
                  })}
                </div>
              );
            })}
            {filteredCompanies.length===0 && <div style={{padding:"32px",textAlign:"center",color:"#94a3b8"}}>No entities match your search.</div>}
          </div>
          {formData.companyName && (
            <div style={{marginTop:"14px",padding:"12px 18px",background:"#eff6ff",borderRadius:"10px",border:"1px solid #bfdbfe"}}>
              <div style={{fontSize:"11px",fontWeight:700,color:"#1e40af",textTransform:"uppercase",marginBottom:"6px"}}>Auto-Resolved Regulatory Profile</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px",fontSize:"13px"}}>
                <div><span style={{color:"#64748b"}}>Licence:</span> <b style={{color:"#0f172a"}}>{formData.licenceType}</b></div>
                <div><span style={{color:"#64748b"}}>Type:</span> <b style={{color:"#0f172a"}}>{formData.companyType}</b></div>
                <div><span style={{color:"#64748b"}}>Regulators:</span> <b style={{color:"#0f172a"}}>{Object.keys(applicableRegulators).join(", ")||"—"}</b></div>
                <div><span style={{color:"#64748b"}}>Jurisdiction:</span> <b style={{color:"#0f172a"}}>{formData.country}</b></div>
              </div>
            </div>
          )}
        </div>
      );
      case 2: return (
        <div>
          <h2 style={{fontSize:"24px",fontWeight:700,color:"#0f172a",marginBottom:"4px"}}>Regulatory History Check</h2>
          <p style={{color:"#64748b",marginBottom:"20px",fontSize:"15px"}}>Search for enforcement actions, breaches, or undertakings for <b>{formData.companyName}</b>. This helps focus the obligation analysis on known risk areas.</p>
          
          <div style={{background:"#f0f9ff",border:"1px solid #bae6fd",borderRadius:"10px",padding:"14px 18px",marginBottom:"20px",display:"flex",alignItems:"start",gap:"10px"}}>
            <AlertCircle size={18} color="#0891b2" style={{marginTop:"2px",flexShrink:0}}/>
            <div style={{fontSize:"13px",color:"#0c4a6e"}}>
              <div style={{fontWeight:600,marginBottom:"4px"}}>🤖 AI-Powered Regulatory Research</div>
              Searches public regulatory databases and announcements for enforcement history. Requires proxy server running on port 3001.
            </div>
          </div>

          <button 
            onClick={searchRegulatoryHistory} 
            disabled={searchingHistory}
            style={{
              padding:"14px 24px",
              borderRadius:"10px",
              border:"none",
              background:searchingHistory?"#94a3b8":"linear-gradient(135deg,#0891b2,#06b6d4)",
              color:"#fff",
              fontSize:"15px",
              fontWeight:700,
              cursor:searchingHistory?"wait":"pointer",
              display:"flex",
              alignItems:"center",
              gap:"10px",
              marginBottom:"20px",
              boxShadow:searchingHistory?"none":"0 4px 12px rgba(8,145,178,0.3)"
            }}
          >
            {searchingHistory ? (
              <><Cpu size={18} style={{animation:"spin 1s linear infinite"}}/> Searching...</>
            ) : (
              <><Search size={18}/> Search Regulatory History</>
            )}
          </button>

          {error && (
            <div style={{padding:"16px 20px",background:"#fef2f2",borderRadius:"10px",border:"1px solid #fecaca",marginBottom:"20px"}}>
              <div style={{display:"flex",alignItems:"center",gap:"8px",color:"#991b1b",fontWeight:600,marginBottom:"4px"}}>
                <AlertCircle size={16}/> Search Error
              </div>
              <p style={{color:"#991b1b",fontSize:"13px"}}>{error}</p>
            </div>
          )}

          {historyResults.length > 0 && (
            <div style={{marginBottom:"20px"}}>
              <div style={{fontSize:"13px",fontWeight:700,color:"#475569",marginBottom:"12px",textTransform:"uppercase",letterSpacing:"0.5px"}}>
                Found {historyResults.length} Regulatory Finding{historyResults.length !== 1 ? 's' : ''}
              </div>
              <div style={{display:"grid",gap:"12px"}}>
                {historyResults.map((item, idx) => {
                  const selected = formData.regulatoryHistory.some(h => h.year === item.year && h.issue === item.issue);
                  return (
                    <div 
                      key={idx} 
                      onClick={() => {
                        setFormData(prev => ({
                          ...prev,
                          regulatoryHistory: selected
                            ? prev.regulatoryHistory.filter(h => !(h.year === item.year && h.issue === item.issue))
                            : [...prev.regulatoryHistory, item]
                        }));
                      }}
                      style={{
                        padding:"16px 20px",
                        borderRadius:"10px",
                        border:`2px solid ${selected?"#f59e0b":"#e2e8f0"}`,
                        background:selected?"#fffbeb":"#fff",
                        cursor:"pointer",
                        transition:"all 0.15s"
                      }}
                      onMouseEnter={e=>{if(!selected)e.currentTarget.style.borderColor="#94a3b8"}}
                      onMouseLeave={e=>{if(!selected)e.currentTarget.style.borderColor="#e2e8f0"}}
                    >
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"8px"}}>
                        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                          <span style={{
                            background:selected?"#fed7aa":"#f1f5f9",
                            color:selected?"#92400e":"#64748b",
                            padding:"4px 10px",
                            borderRadius:"6px",
                            fontSize:"12px",
                            fontWeight:700
                          }}>{item.year}</span>
                          <span style={{
                            background:selected?"#fef3c7":"#f8fafc",
                            color:selected?"#78350f":"#475569",
                            padding:"4px 10px",
                            borderRadius:"6px",
                            fontSize:"11px",
                            fontWeight:600
                          }}>{item.regulator}</span>
                        </div>
                        {selected && <Check size={18} color="#f59e0b"/>}
                      </div>
                      <div style={{fontSize:"14px",fontWeight:600,color:"#0f172a",marginBottom:"6px"}}>{item.issue}</div>
                      <div style={{fontSize:"13px",color:"#64748b",marginBottom:"6px"}}>{item.outcome}</div>
                      <div style={{fontSize:"11px",color:"#94a3b8",fontStyle:"italic"}}>Relevant to: {item.relevance}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          {formData.regulatoryHistory.length > 0 && (
            <div style={{marginTop:"16px",padding:"12px 16px",background:"#fef3c7",borderRadius:"10px",border:"1px solid #fde68a"}}>
              <div style={{fontSize:"11px",fontWeight:700,color:"#78350f",textTransform:"uppercase",marginBottom:"4px"}}>
                {formData.regulatoryHistory.length} Finding{formData.regulatoryHistory.length !== 1 ? 's' : ''} Selected
              </div>
              <div style={{fontSize:"12px",color:"#92400e",marginBottom:"8px"}}>
                These will inform the obligation analysis to focus on relevant risk areas
              </div>
              <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
                {formData.regulatoryHistory.map((h, i) => (
                  <div key={i} style={{background:"#fed7aa",color:"#92400e",padding:"4px 10px",borderRadius:"6px",fontSize:"11px",fontWeight:600,display:"flex",alignItems:"center",gap:"6px"}}>
                    {h.year} - {h.regulator}
                    <button onClick={() => setFormData(prev => ({...prev, regulatoryHistory: prev.regulatoryHistory.filter((_, idx) => idx !== i)}))} style={{background:"none",border:"none",cursor:"pointer",padding:"0",display:"flex",alignItems:"center",color:"#92400e"}}><X size={12}/></button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!searchingHistory && historyResults.length === 0 && formData.companyName && (
            <div>
              {error && (
                <div style={{padding:"14px 20px",background:"#fef2f2",borderRadius:"10px",border:"1px solid #fecaca",marginBottom:"16px",fontSize:"13px",color:"#991b1b"}}>
                  {error}
                </div>
              )}
              
              <div style={{padding:"20px",background:"#fff",borderRadius:"10px",border:"2px solid #e2e8f0"}}>
                <div style={{fontSize:"14px",fontWeight:700,color:"#0f172a",marginBottom:"12px"}}>📋 Add Enforcement History Manually</div>
                <div style={{fontSize:"12px",color:"#64748b",marginBottom:"16px"}}>Enter any known regulatory enforcement actions, breaches, or undertakings:</div>
                
                <div style={{display:"flex",gap:"8px",marginBottom:"8px"}}>
                  <input type="number" placeholder="Year" style={{width:"90px",padding:"8px 12px",borderRadius:"6px",border:"1px solid #e2e8f0",fontSize:"13px"}} id="manual-year"/>
                  <input type="text" placeholder="Regulator (e.g., ASIC, APRA)" style={{flex:1,padding:"8px 12px",borderRadius:"6px",border:"1px solid #e2e8f0",fontSize:"13px"}} id="manual-regulator"/>
                </div>
                <input type="text" placeholder="Issue/Breach Description" style={{width:"100%",padding:"8px 12px",borderRadius:"6px",border:"1px solid #e2e8f0",fontSize:"13px",marginBottom:"8px",boxSizing:"border-box"}} id="manual-issue"/>
                <input type="text" placeholder="Outcome (e.g., $5M fine, enforceable undertaking)" style={{width:"100%",padding:"8px 12px",borderRadius:"6px",border:"1px solid #e2e8f0",fontSize:"13px",marginBottom:"8px",boxSizing:"border-box"}} id="manual-outcome"/>
                <input type="text" placeholder="Relevance (e.g., AML/CTF, Consumer Protection, Product Disclosure)" style={{width:"100%",padding:"8px 12px",borderRadius:"6px",border:"1px solid #e2e8f0",fontSize:"13px",marginBottom:"12px",boxSizing:"border-box"}} id="manual-relevance"/>
                <button
                  onClick={() => {
                    const year = parseInt(document.getElementById("manual-year").value);
                    const regulator = document.getElementById("manual-regulator").value.trim();
                    const issue = document.getElementById("manual-issue").value.trim();
                    const outcome = document.getElementById("manual-outcome").value.trim();
                    const relevance = document.getElementById("manual-relevance").value.trim();
                    if (year && regulator && issue && outcome && relevance) {
                      setFormData(prev => ({...prev, regulatoryHistory: [...prev.regulatoryHistory, {year, regulator, issue, outcome, relevance}]}));
                      document.getElementById("manual-year").value = "";
                      document.getElementById("manual-regulator").value = "";
                      document.getElementById("manual-issue").value = "";
                      document.getElementById("manual-outcome").value = "";
                      document.getElementById("manual-relevance").value = "";
                    }
                  }}
                  style={{padding:"10px 20px",background:"linear-gradient(135deg,#3b82f6,#2563eb)",color:"#fff",border:"none",borderRadius:"8px",fontSize:"13px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",margin:"0 auto"}}
                >
                  <Plus size={16}/> Add Enforcement Finding
                </button>
              </div>
            </div>
          )}

          <div style={{marginTop:"24px",padding:"16px 20px",background:"#f0f9ff",borderRadius:"10px",border:"1px solid #bae6fd"}}>
            <label style={{display:"block",fontSize:"12px",fontWeight:700,color:"#0c4a6e",marginBottom:"8px",textTransform:"uppercase"}}>
              Additional Context (Optional)
            </label>
            <textarea
              value={formData.customContext}
              onChange={e => setFormData(prev => ({...prev, customContext: e.target.value}))}
              placeholder="Add any additional context about this organization's regulatory environment, specific concerns, or focus areas..."
              style={{
                width:"100%",
                minHeight:"80px",
                padding:"12px",
                borderRadius:"8px",
                border:"1px solid #bae6fd",
                fontSize:"13px",
                fontFamily:"inherit",
                resize:"vertical",
                outline:"none",
                boxSizing:"border-box"
              }}
            />
            <div style={{fontSize:"11px",color:"#64748b",marginTop:"6px"}}>
              This context will be included in the AI analysis to tailor obligations
            </div>
          </div>

          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      );
      case 3: return (
        <div>
          <h2 style={{fontSize:"24px",fontWeight:700,color:"#0f172a",marginBottom:"4px"}}>Business Lines & Products</h2>
          <p style={{color:"#64748b",marginBottom:"20px",fontSize:"15px"}}>Select the business lines and products/services offered by <b>{formData.companyName}</b>. This ensures regulatory obligations are tailored to your actual operations.</p>
          
          <div style={{marginBottom:"24px"}}>
            <label style={{display:"block",fontSize:"13px",fontWeight:700,color:"#475569",marginBottom:"12px",letterSpacing:"0.5px"}}>BUSINESS LINES</label>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:"10px"}}>
              {(BUSINESS_LINES[formData.companyType] || []).map(bl => {
                const selected = formData.businessLines.includes(bl);
                return (
                  <div key={bl} onClick={() => {
                    setFormData(prev => {
                      const newBL = selected 
                        ? prev.businessLines.filter(b => b !== bl)
                        : [...prev.businessLines, bl];
                      const newProducts = selected 
                        ? prev.products.filter(p => !(PRODUCTS[bl] || []).includes(p))
                        : prev.products;
                      return { ...prev, businessLines: newBL, products: newProducts };
                    });
                  }} style={{
                    padding:"14px 16px",
                    borderRadius:"10px",
                    border:`2px solid ${selected?"#0891b2":"#e2e8f0"}`,
                    background:selected?"#ecfeff":"#fff",
                    cursor:"pointer",
                    transition:"all 0.15s",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between"
                  }} onMouseEnter={e=>{if(!selected)e.currentTarget.style.borderColor="#94a3b8"}} onMouseLeave={e=>{if(!selected)e.currentTarget.style.borderColor="#e2e8f0"}}>
                    <span style={{fontWeight:600,color:selected?"#0891b2":"#0f172a",fontSize:"13px"}}>{bl}</span>
                    {selected && <Check size={16} color="#0891b2"/>}
                  </div>
                );
              })}
            </div>
            {formData.businessLines.length === 0 && (
              <div style={{marginTop:"12px",padding:"12px 16px",background:"#fef2f2",borderRadius:"8px",border:"1px solid #fecaca",fontSize:"13px",color:"#991b1b"}}>
                <AlertCircle size={14} style={{display:"inline",marginRight:"6px"}}/>
                Please select at least one business line to proceed
              </div>
            )}
          </div>

          {formData.businessLines.length > 0 && (
            <div>
              <label style={{display:"block",fontSize:"13px",fontWeight:700,color:"#475569",marginBottom:"12px",letterSpacing:"0.5px"}}>PRODUCTS & SERVICES</label>
              <p style={{fontSize:"12px",color:"#64748b",marginBottom:"12px"}}>Select products/services relevant to your business lines. This refines obligation analysis to your specific offerings.</p>
              
              {formData.businessLines.map(bl => {
                const products = PRODUCTS[bl] || [];
                if (products.length === 0) return null;
                return (
                  <div key={bl} style={{marginBottom:"20px"}}>
                    <div style={{fontSize:"12px",fontWeight:700,color:"#0891b2",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"0.5px"}}>{bl}</div>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"8px"}}>
                      {products.map(product => {
                        const selected = formData.products.includes(product);
                        return (
                          <div key={product} onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              products: selected 
                                ? prev.products.filter(p => p !== product)
                                : [...prev.products, product]
                            }));
                          }} style={{
                            padding:"10px 12px",
                            borderRadius:"8px",
                            border:`1px solid ${selected?"#67e8f9":"#e2e8f0"}`,
                            background:selected?"#cffafe":"#fff",
                            cursor:"pointer",
                            fontSize:"12px",
                            fontWeight:selected?600:500,
                            color:selected?"#0e7490":"#334155",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"space-between",
                            transition:"all 0.15s"
                          }} onMouseEnter={e=>{if(!selected)e.currentTarget.style.background="#f8fafc"}} onMouseLeave={e=>{if(!selected)e.currentTarget.style.background="#fff"}}>
                            <span>{product}</span>
                            {selected && <Check size={12} color="#0891b2"/>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
              
              {formData.products.length > 0 && (
                <div style={{marginTop:"16px",padding:"12px 16px",background:"#f0f9ff",borderRadius:"10px",border:"1px solid #bae6fd"}}>
                  <div style={{fontSize:"11px",fontWeight:700,color:"#0c4a6e",textTransform:"uppercase",marginBottom:"6px"}}>SELECTED BUSINESS CONTEXT</div>
                  <div style={{fontSize:"13px",color:"#0e7490"}}>
                    <b>{formData.businessLines.length}</b> business line{formData.businessLines.length !== 1 ? 's' : ''} · <b>{formData.products.length}</b> product{formData.products.length !== 1 ? 's' : ''}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      );
      case 4: return (
        <div>
          <h2 style={{fontSize:"24px",fontWeight:700,color:"#0f172a",marginBottom:"4px"}}>Regulatory Scope</h2>
          <p style={{color:"#64748b",marginBottom:"8px",fontSize:"15px"}}>Regulators applicable to <b>{formData.companyName}</b> ({formData.licenceType}).</p>
          {Object.keys(applicableRegulators).length===0 ? <div style={{padding:"20px",background:"#fefce8",borderRadius:"10px",border:"1px solid #fde68a",color:"#854d0e"}}>No regulator mappings found for this licence type.</div> : (
            <>
              <div style={{display:"grid",gap:"10px",marginBottom:"20px",marginTop:"16px"}}>
                {Object.entries(applicableRegulators).map(([key,reg])=>{
                  const sel=formData.regulator===key;
                  return (<div key={key} onClick={()=>updateForm("regulator",key)} style={{padding:"16px 20px",borderRadius:"12px",border:`2px solid ${sel?"#0891b2":"#e2e8f0"}`,background:sel?"#f0f9ff":"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between"}} onMouseEnter={e=>{if(!sel)e.currentTarget.style.borderColor="#94a3b8"}} onMouseLeave={e=>{if(!sel)e.currentTarget.style.borderColor=sel?"#0891b2":"#e2e8f0"}}>
                    <div>
                      <div style={{fontWeight:700,color:sel?"#0891b2":"#0f172a",fontSize:"16px"}}>{key}</div>
                      <div style={{fontSize:"13px",color:"#64748b",marginTop:"2px"}}>{reg.fullName}</div>
                      <div style={{fontSize:"12px",color:"#94a3b8",marginTop:"4px"}}>{reg.regulations.length} regulations</div>
                    </div>
                    {sel && <Check size={20} color="#0891b2"/>}
                  </div>);
                })}
              </div>
              {formData.regulator && <Select label="Regulation" value={formData.regulation} onChange={v=>updateForm("regulation",v)} options={regulations} placeholder="Select regulation"/>}
            </>
          )}
        </div>
      );
      case 5: return (
        <div>
          <h2 style={{fontSize:"24px",fontWeight:700,color:"#0f172a",marginBottom:"4px"}}>Upload Regulatory Document</h2>
          <p style={{color:"#64748b",marginBottom:"12px",fontSize:"15px"}}>Upload the PDF of <b>{formData.regulation}</b>.</p>
          <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:"10px",padding:"12px 16px",marginBottom:"24px",fontSize:"13px",color:"#92400e",display:"flex",gap:"8px"}}><AlertCircle size={16} style={{marginTop:"2px",flexShrink:0}}/><span>Upload the official regulatory PDF from {formData.regulator}. Max 15MB.</span></div>
          <div onDragOver={e=>e.preventDefault()} onDrop={e=>{e.preventDefault();handleFileUpload(e.dataTransfer.files[0])}} onClick={()=>fileInputRef.current?.click()} style={{border:`2px dashed ${pdfFile?"#059669":"#cbd5e1"}`,borderRadius:"16px",padding:"48px 24px",textAlign:"center",cursor:"pointer",background:pdfFile?"#f0fdf4":"#fafafa"}}>
            <input ref={fileInputRef} type="file" accept=".pdf" onChange={e=>handleFileUpload(e.target.files[0])} style={{display:"none"}}/>
            {pdfFile ? (
              <div>
                <div style={{width:"56px",height:"56px",borderRadius:"50%",background:pdfText?"#d1fae5":pdfExtracting?"#dbeafe":"#fef3c7",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"}}>{pdfText?<Check size={28} color="#059669"/>:pdfExtracting?<Cpu size={28} color="#3b82f6"/>:<AlertCircle size={28} color="#f59e0b"/>}</div>
                <p style={{fontWeight:700,color:pdfText?"#059669":pdfExtracting?"#3b82f6":"#f59e0b",fontSize:"16px"}}>{pdfFile.name}</p>
                <p style={{color:"#64748b",fontSize:"13px",marginTop:"4px"}}>{(pdfFile.size/1024/1024).toFixed(2)} MB{pdfText?` · ${pdfText.length.toLocaleString()} chars extracted`:pdfExtracting?" · Extracting text...":""}</p>
                {pdfText && <p style={{color:"#059669",fontSize:"12px",marginTop:"4px",fontWeight:600}}>Text successfully extracted — ready for AI analysis</p>}
                <button onClick={e=>{e.stopPropagation();setPdfFile(null);setPdfText(null)}} style={{marginTop:"12px",padding:"6px 16px",borderRadius:"8px",border:"1px solid #e2e8f0",background:"#fff",cursor:"pointer",fontSize:"13px",color:"#64748b"}}>Replace</button>
              </div>
            ) : (
              <div>
                <div style={{width:"56px",height:"56px",borderRadius:"50%",background:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"}}><Upload size={28} color="#94a3b8"/></div>
                <p style={{fontWeight:600,color:"#334155",fontSize:"16px"}}>Drop regulatory PDF here</p>
                <p style={{color:"#94a3b8",fontSize:"14px",marginTop:"6px"}}>or click to browse · PDF only · Max 15MB</p>
              </div>
            )}
          </div>
        </div>
      );
      case 6: return (
        <div style={{textAlign:"center",padding:"40px 0"}}>
          <h2 style={{fontSize:"24px",fontWeight:700,color:"#0f172a",marginBottom:"8px"}}>AI-Powered Obligation Extraction</h2>
          <p style={{color:"#64748b",marginBottom:"40px"}}>{formData.regulation} · {formData.companyName}</p>
          {processing ? (
            <div>
              <div style={{position:"relative",width:"80px",height:"80px",margin:"0 auto 28px"}}>
                <div style={{position:"absolute",inset:0,border:"4px solid #e2e8f0",borderRadius:"50%"}}/>
                <div style={{position:"absolute",inset:0,border:"4px solid transparent",borderTopColor:"#0891b2",borderRadius:"50%",animation:"spin 1s linear infinite"}}/>
                <div style={{position:"absolute",inset:"8px",border:"4px solid transparent",borderTopColor:"#06b6d4",borderRadius:"50%",animation:"spin 1.5s linear infinite reverse"}}/>
                <Cpu size={24} color="#0891b2" style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}/>
              </div>
              <p style={{color:"#0891b2",fontWeight:600,fontSize:"16px"}}>{processingPhase}</p>
              <p style={{color:"#94a3b8",fontSize:"13px",marginTop:"8px"}}>30–60 seconds depending on document size</p>
            </div>
          ) : error ? (
            <div style={{padding:"20px",background:"#fef2f2",borderRadius:"12px",border:"1px solid #fecaca",textAlign:"left"}}>
              <div style={{display:"flex",alignItems:"center",gap:"8px",color:"#991b1b",fontWeight:600,marginBottom:"8px"}}><AlertCircle size={18}/> Error</div>
              <p style={{color:"#991b1b",fontSize:"14px"}}>{error}</p>
              <button onClick={()=>{setError(null);processDocument()}} style={{marginTop:"16px",padding:"10px 24px",background:"#0891b2",color:"#fff",border:"none",borderRadius:"10px",fontWeight:600,cursor:"pointer"}}>Retry</button>
            </div>
          ) : (
            <button onClick={processDocument} style={{padding:"14px 40px",background:"linear-gradient(135deg,#0891b2,#0e7490)",color:"#fff",border:"none",borderRadius:"12px",fontWeight:700,cursor:"pointer",fontSize:"16px",boxShadow:"0 4px 14px rgba(8,145,178,0.3)"}}>
              <span style={{display:"flex",alignItems:"center",gap:"8px"}}><Cpu size={20}/> Begin Extraction</span>
            </button>
          )}
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      );
      case 7: return (
        <div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"24px",flexWrap:"wrap",gap:"16px"}}>
            <div>
              <h2 style={{fontSize:"24px",fontWeight:700,color:"#0f172a",marginBottom:"4px"}}>Obligation Register</h2>
              <p style={{color:"#64748b",fontSize:"14px"}}>{formData.regulation} · {formData.companyName} · {obligations.length} obligations</p>
            </div>
            <button onClick={generateExcel} style={{padding:"12px 28px",background:"linear-gradient(135deg,#059669,#047857)",color:"#fff",border:"none",borderRadius:"10px",fontWeight:700,cursor:"pointer",fontSize:"14px",display:"flex",alignItems:"center",gap:"8px",boxShadow:"0 4px 12px rgba(5,150,105,0.25)"}}><Download size={18}/> Export Excel</button>
          </div>
          {stats && (
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"12px",marginBottom:"20px"}}>
              {[{l:"Total",v:stats.total,c:"#0891b2",b:"#f0f9ff"},{l:"Critical",v:stats.byPriority.Critical||0,c:"#dc2626",b:"#fef2f2"},{l:"High",v:stats.byPriority.High||0,c:"#ea580c",b:"#fff7ed"},{l:"Categories",v:Object.keys(stats.byCategory).length,c:"#7c3aed",b:"#faf5ff"}].map((s,i)=>(
                <div key={i} style={{padding:"16px",borderRadius:"12px",background:s.b,border:`1px solid ${s.c}22`}}>
                  <div style={{fontSize:"28px",fontWeight:800,color:s.c}}>{s.v}</div>
                  <div style={{fontSize:"12px",color:"#64748b",fontWeight:600,textTransform:"uppercase"}}>{s.l}</div>
                </div>
              ))}
            </div>
          )}
          {formData.businessLines.length > 0 && (
            <div style={{padding:"16px 20px",background:"#f0f9ff",borderRadius:"12px",border:"1px solid #bae6fd",marginBottom:"20px"}}>
              <div style={{fontSize:"11px",fontWeight:700,color:"#0c4a6e",textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:"8px"}}>Business Context Applied</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"12px",fontSize:"13px"}}>
                <div>
                  <span style={{color:"#64748b"}}>Business Lines:</span>
                  <div style={{marginTop:"4px",display:"flex",flexWrap:"wrap",gap:"4px"}}>
                    {formData.businessLines.map(bl => (
                      <span key={bl} style={{background:"#dbeafe",color:"#1e40af",padding:"2px 8px",borderRadius:"6px",fontSize:"11px",fontWeight:600}}>{bl}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span style={{color:"#64748b"}}>Products & Services:</span>
                  <div style={{marginTop:"4px",display:"flex",flexWrap:"wrap",gap:"4px"}}>
                    {formData.products.length > 0 ? formData.products.map(p => (
                      <span key={p} style={{background:"#e0f2fe",color:"#075985",padding:"2px 8px",borderRadius:"6px",fontSize:"11px",fontWeight:500}}>{p}</span>
                    )) : <span style={{color:"#94a3b8",fontSize:"12px",fontStyle:"italic"}}>All products (not filtered)</span>}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div style={{display:"flex",gap:"10px",marginBottom:"16px",flexWrap:"wrap",alignItems:"center"}}>
            <div style={{flex:1,minWidth:"200px",position:"relative"}}>
              <Search size={16} style={{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8"}}/>
              <input placeholder="Search..." value={filterText} onChange={e=>setFilterText(e.target.value)} style={{width:"100%",padding:"10px 10px 10px 36px",borderRadius:"8px",border:"1px solid #e2e8f0",fontSize:"14px",outline:"none",boxSizing:"border-box"}}/>
            </div>
            <select value={filterPriority} onChange={e=>setFilterPriority(e.target.value)} style={{padding:"10px 14px",borderRadius:"8px",border:"1px solid #e2e8f0",fontSize:"13px",cursor:"pointer",background:"#fff"}}>
              <option value="All">All Priorities</option>
              {["Critical","High","Medium","Low"].map(p=><option key={p} value={p}>{p}</option>)}
            </select>
            <select value={filterCategory} onChange={e=>setFilterCategory(e.target.value)} style={{padding:"10px 14px",borderRadius:"8px",border:"1px solid #e2e8f0",fontSize:"13px",cursor:"pointer",background:"#fff"}}>
              <option value="All">All Categories</option>
              {[...new Set(obligations.map(o=>o.risk_category))].sort().map(c=><option key={c} value={c}>{c}</option>)}
            </select>
            <span style={{fontSize:"13px",color:"#94a3b8"}}>{filteredObligations.length}/{obligations.length}</span>
          </div>
          <div style={{overflowX:"auto",borderRadius:"12px",border:"1px solid #e2e8f0"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:"13px"}}>
              <thead><tr style={{background:"#f8fafc"}}>
                {[{k:"clause_ref",l:"Clause",w:"80px"},{k:"obligation_text",l:"Obligation",w:"280px"},{k:"obligation_type",l:"Type",w:"100px"},{k:"risk_category",l:"Category",w:"130px"},{k:"product_applicability",l:"Products",w:"120px"},{k:"control_action",l:"Control Action",w:"220px"},{k:"control_responsibility",l:"Owner",w:"120px"},{k:"control_frequency",l:"Freq",w:"90px"},{k:"priority",l:"Priority",w:"90px"},{k:"context_source",l:"Context",w:"140px"}].map(col=>(
                  <th key={col.k} onClick={()=>handleSort(col.k)} style={{padding:"12px 10px",textAlign:"left",fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:"0.5px",fontSize:"11px",cursor:"pointer",minWidth:col.w,borderBottom:"2px solid #e2e8f0",userSelect:"none",whiteSpace:"nowrap"}}>
                    <span style={{display:"flex",alignItems:"center",gap:"4px"}}>{col.l}<ArrowUpDown size={12} color={sortField===col.k?"#0891b2":"#cbd5e1"}/></span>
                  </th>
                ))}
              </tr></thead>
              <tbody>
                {filteredObligations.map((o,i)=>(
                  <tr key={i} style={{borderBottom:"1px solid #f1f5f9"}} onMouseEnter={e=>e.currentTarget.style.background="#fafbfd"} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                    <td style={{padding:"12px 10px",fontFamily:"monospace",fontWeight:600,color:"#0891b2",fontSize:"12px"}}>{o.clause_ref}</td>
                    <td style={{padding:"12px 10px",color:"#334155",lineHeight:1.5}}>
                      <div style={{fontWeight:500}}>{o.obligation_text}</div>
                      <div style={{color:"#94a3b8",fontSize:"12px",marginTop:"3px"}}>{o.key_requirement}</div>
                    </td>
                    <td style={{padding:"12px 10px"}}><Badge label={o.obligation_type} colors={TYPE_COLORS[o.obligation_type]||{bg:"#f1f5f9",text:"#475569"}}/></td>
                    <td style={{padding:"12px 10px",color:"#475569",fontSize:"12px"}}>{o.risk_category}</td>
                    <td style={{padding:"12px 10px",fontSize:"12px"}}>
                      <div style={{color:"#1e40af",fontWeight:600,fontSize:"11px",background:"#eff6ff",padding:"4px 8px",borderRadius:"6px",display:"inline-block"}}>{o.product_applicability||"All Products"}</div>
                    </td>
                    <td style={{padding:"12px 10px",color:"#334155",fontSize:"12px",lineHeight:1.5}}>
                      <div style={{fontWeight:500,marginBottom:"4px"}}>{o.suggested_control}</div>
                      {o.control_action && <div style={{color:"#64748b",fontSize:"11px"}}>{o.control_action}</div>}
                      {o.control_evidence && <div style={{color:"#94a3b8",fontSize:"11px",marginTop:"2px"}}>📋 {o.control_evidence}</div>}
                    </td>
                    <td style={{padding:"12px 10px",fontSize:"12px"}}>
                      <div style={{color:"#334155",fontWeight:500}}>{o.control_responsibility||"—"}</div>
                    </td>
                    <td style={{padding:"12px 10px",color:"#475569",fontSize:"12px"}}>{o.control_frequency||"—"}</td>
                    <td style={{padding:"12px 10px"}}><Badge label={o.priority} colors={PRIORITY_COLORS[o.priority]||{bg:"#f1f5f9",text:"#475569",border:"#e2e8f0"}}/></td>
                    <td style={{padding:"12px 10px",fontSize:"12px"}}>
                      {o.context_source ? (
                        <div style={{background:"#fef3c7",color:"#92400e",padding:"4px 8px",borderRadius:"6px",fontSize:"11px",fontWeight:600}}>{o.context_source}</div>
                      ) : (
                        <span style={{color:"#cbd5e1"}}>—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredObligations.length===0&&<div style={{textAlign:"center",padding:"40px",color:"#94a3b8"}}>No obligations match filters.</div>}
        </div>
      );
      default: return null;
    }
  };

  return (
    <div style={{fontFamily:"'Plus Jakarta Sans','DM Sans',sans-serif",minHeight:"100vh",background:"#f1f5f9"}}>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet"/>
      <div style={{background:"linear-gradient(135deg,#0f172a 0%,#1e293b 50%,#0f172a 100%)",padding:"20px 32px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <div style={{width:"38px",height:"38px",borderRadius:"10px",background:"linear-gradient(135deg,#0891b2,#06b6d4)",display:"flex",alignItems:"center",justifyContent:"center"}}><Shield size={20} color="#fff"/></div>
          <div><div style={{color:"#fff",fontWeight:800,fontSize:"17px"}}>RegObligation<span style={{color:"#22d3ee"}}>AI</span></div><div style={{color:"#64748b",fontSize:"11px",letterSpacing:"1px",textTransform:"uppercase"}}>Regulatory Obligation Mapper v2.3</div></div>
        </div>
        {formData.companyName&&step>1&&<div style={{color:"#94a3b8",fontSize:"13px",textAlign:"right"}}><span style={{color:"#e2e8f0",fontWeight:600}}>{formData.companyName}</span> · {formData.licenceType}</div>}
      </div>
      {step<7&&(
        <div style={{background:"#fff",borderBottom:"1px solid #e2e8f0",padding:"16px 32px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"4px",maxWidth:"900px",margin:"0 auto"}}>
            {STEPS.map((s,i)=>{
              const Icon=s.icon,isActive=i===step,isDone=i<step;
              return (<div key={s.key} style={{display:"flex",alignItems:"center",flex:1}}>
                <div onClick={()=>isDone?setStep(i):null} style={{display:"flex",alignItems:"center",gap:"8px",cursor:isDone?"pointer":"default",opacity:i>step?0.4:1}}>
                  <div style={{width:"32px",height:"32px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:isDone?"#059669":isActive?"#0891b2":"#e2e8f0"}}>{isDone?<Check size={16} color="#fff"/>:<Icon size={14} color={isActive?"#fff":"#94a3b8"}/>}</div>
                  <span style={{fontSize:"12px",fontWeight:isActive?700:500,color:isActive?"#0891b2":isDone?"#059669":"#94a3b8",whiteSpace:"nowrap"}}>{s.title}</span>
                </div>
                {i<STEPS.length-1&&<div style={{flex:1,height:"2px",background:isDone?"#059669":"#e2e8f0",marginLeft:"8px"}}/>}
              </div>);
            })}
          </div>
        </div>
      )}
      <div style={{maxWidth:step===7?"1400px":"780px",margin:"0 auto",padding:"28px 24px"}}>
        <div style={{background:"#fff",borderRadius:"16px",padding:step===7?"24px":"36px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 4px 12px rgba(0,0,0,0.03)",border:"1px solid #f1f5f9"}}>
          {error&&step!==6&&(<div style={{padding:"12px 16px",background:"#fef2f2",borderRadius:"10px",marginBottom:"20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}><div style={{display:"flex",alignItems:"center",gap:"8px",color:"#991b1b",fontSize:"14px"}}><AlertCircle size={16}/>{error}</div><X size={16} color="#991b1b" style={{cursor:"pointer"}} onClick={()=>setError(null)}/></div>)}
          {renderStep()}
        </div>
        {(step>=0 && step<=5)&&(
          <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
            <button onClick={()=>setStep(s=>Math.max(0,s-1))} disabled={step===0} style={{padding:"12px 24px",borderRadius:"10px",border:"1px solid #e2e8f0",background:"#fff",fontSize:"14px",fontWeight:600,cursor:step===0?"not-allowed":"pointer",color:step===0?"#cbd5e1":"#475569",display:"flex",alignItems:"center",gap:"6px"}}><ChevronLeft size={16}/> Back</button>
            <button onClick={()=>setStep(s=>s+1)} disabled={!canProceed()} style={{padding:"12px 28px",borderRadius:"10px",border:"none",background:canProceed()?"linear-gradient(135deg,#0891b2,#0e7490)":"#e2e8f0",color:canProceed()?"#fff":"#94a3b8",fontSize:"14px",fontWeight:700,cursor:canProceed()?"pointer":"not-allowed",display:"flex",alignItems:"center",gap:"6px",boxShadow:canProceed()?"0 4px 12px rgba(8,145,178,0.25)":"none"}}>Continue <ChevronRight size={16}/></button>
          </div>
        )}
        {step===7&&(
          <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
            <button onClick={()=>{setStep(0);setObligations([]);setPdfFile(null);setPdfText(null);setHistoryResults([]);setFormData({country:"",industry:"",companyName:"",licenceType:"",companyType:"",businessLines:[],products:[],regulatoryHistory:[],customContext:"",regulator:"",regulation:""})}} style={{padding:"12px 24px",borderRadius:"10px",border:"1px solid #e2e8f0",background:"#fff",fontSize:"14px",fontWeight:600,cursor:"pointer",color:"#475569"}}>New Analysis</button>
            <button onClick={generateExcel} style={{padding:"12px 28px",borderRadius:"10px",border:"none",background:"linear-gradient(135deg,#059669,#047857)",color:"#fff",fontSize:"14px",fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",boxShadow:"0 4px 12px rgba(5,150,105,0.25)"}}><Download size={16}/> Download (.xlsx)</button>
          </div>
        )}
      </div>
      
      {/* API Key Settings Sidebar */}
      {showApiSettings && (
        <div style={{position:"fixed",top:0,right:0,bottom:0,width:"400px",background:"#fff",boxShadow:"-4px 0 12px rgba(0,0,0,0.1)",zIndex:1000,padding:"24px",overflowY:"auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px"}}>
            <h3 style={{fontSize:"18px",fontWeight:700,color:"#0f172a"}}>API Settings</h3>
            <button onClick={()=>setShowApiSettings(false)} style={{background:"none",border:"none",cursor:"pointer",padding:"4px"}}><X size={20} color="#64748b"/></button>
          </div>
          <div style={{marginBottom:"24px"}}>
            <label style={{display:"block",fontSize:"13px",fontWeight:700,color:"#0f172a",marginBottom:"8px"}}>AI API Key</label>
            <input
              type="password"
              value={apiKey}
              onChange={e => {
                setApiKey(e.target.value);
                localStorage.setItem('anthropic_api_key', e.target.value);
              }}
              placeholder="sk-ant-api03-..."
              style={{width:"100%",padding:"12px",borderRadius:"8px",border:"2px solid #e2e8f0",fontSize:"13px",fontFamily:"monospace",boxSizing:"border-box"}}
            />
            <div style={{fontSize:"11px",color:"#64748b",marginTop:"6px"}}>Saved in browser session. Get your Claude API key from <a href="https://console.anthropic.com/" target="_blank" style={{color:"#3b82f6"}}>console.anthropic.com</a></div>
          </div>
          {apiKey && (
            <div style={{padding:"12px 16px",background:"#f0fdf4",borderRadius:"8px",border:"1px solid #86efac"}}>
              <div style={{display:"flex",alignItems:"center",gap:"8px",color:"#166534",fontSize:"13px",fontWeight:600}}><Check size={14}/>API Key Configured</div>
              <div style={{fontSize:"11px",color:"#15803d",marginTop:"4px"}}>Key ending in ...{apiKey.slice(-8)}</div>
            </div>
          )}
          <button 
            onClick={()=>{
              setApiKey("");
              localStorage.removeItem('anthropic_api_key');
            }}
            style={{marginTop:"16px",padding:"10px 16px",borderRadius:"8px",border:"1px solid #e2e8f0",background:"#fff",color:"#64748b",fontSize:"13px",fontWeight:600,cursor:"pointer",width:"100%"}}
          >
            Clear API Key
          </button>
        </div>
      )}
      
      {/* API Key Floating Button */}
      <button
        onClick={()=>setShowApiSettings(true)}
        style={{position:"fixed",bottom:"24px",right:"24px",width:"56px",height:"56px",borderRadius:"50%",background:apiKey?"linear-gradient(135deg,#059669,#047857)":"linear-gradient(135deg,#ef4444,#dc2626)",color:"#fff",border:"none",cursor:"pointer",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999}}
        title={apiKey?"API Key Configured":"API Key Required"}
      >
        {apiKey ? <Check size={24}/> : <AlertCircle size={24}/>}
      </button>
    </div>
  );
}
