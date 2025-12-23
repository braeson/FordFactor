/**
 * DATA FILE
 * ------------------------------------------------------------------
 * This file contains all the "cards" for the calculator.
 * * TYPES:
 * 1. mandatoryCards = Costs that apply to EVERYONE (Infrastructure, waste, cancellations)
 * 2. cards = Optional costs based on lifestyle (Renter, Student, etc.)
 * * FIELDS:
 * - value: The dollar amount (estimated per household)
 * - isPerChild: If true, the math multiplies this by the # of children entered.
 * - url: The link to the source/news article.
 */

// --- MANDATORY WASTE (Applied to Everyone) ---
const mandatoryCards = [
    {
        title: "Ontario Line Overrun",
        description: "Costs for the new subway line have tripled from $10.9B to $27.2B. Household share of the $16B overrun.",
        value: 2600, 
        url: "https://globalnews.ca/news/10585617/ontario-line-original-price-metrolinx/"
    },
    {
        title: "407 Penalty Forgiveness",
        description: "Ford Gov declined to collect a $1B penalty from 407 ETR for low traffic during the pandemic.",
        value: 200, 
        url: "https://www.ontariondp.ca/news/auditor-general-will-investigate-ford-s-1-billion-write-hwy-407-company-ndp"
    },
    {
        title: "Therme Spa Parking",
        description: "Taxpayer subsidy to build a private parking garage for the Austrian spa at Ontario Place.",
        value: 108,
        url: "https://ontarioplaceforall.com/financial/"
    },
    {
        title: "Crosstown LRT Delays",
        description: "Eglinton Crosstown construction costs ballooned by over $4B due to delays and legal settlements.",
        value: 650,
        url: "https://www.cbc.ca/news/canada/toronto/eglinton-crosstown-lrt-delays-cost-1.7345972"
    },
    {
        title: "Science Centre Move",
        description: "Relocation to Ontario Place estimated to cost $400M+ more than simply renovating the existing site.",
        value: 75,
        url: "https://globalnews.ca/news/10899041/ontario-science-centre-relocation-cost/"
    },
    {
        title: "Beer Store Break",
        description: "Penalty paid to The Beer Store for breaking the Master Framework Agreement early ($225M cost).",
        value: 40,
        url: "https://globalnews.ca/news/11535990/ontario-beer-store-full-payment-225-million/"
    },
    {
        title: "Green Energy Cancellations",
        description: "Cost of cancelling 750+ renewable energy contracts shortly after taking office ($231M cost).",
        value: 45,
        url: "https://financialpost.com/commodities/energy/doug-fords-cancellation-of-green-energy-deals-costs-ontario-taxpayers-231m"
    },
    {
        title: "Partisan Ads",
        description: "Record-breaking $43M gov't ad spend; Auditor General deemed $16M partisan/promotional.",
        value: 12,
        url: "https://www.thetrillium.ca/news/politics/ontario-sets-highest-ever-government-advertising-spending-record-11566846"
    },
    {
        title: "Greenbelt Legal Scandal",
        description: "Share of legal fees, consultation, and reversal costs borne by taxpayers for the Greenbelt swap.",
        value: 30,
        url: "https://www.cbc.ca/news/canada/toronto/greenbelt-reversal-ford-government-1.6973802"
    }
];

// --- OPTIONAL CARDS (User Selects These) ---
const cards = [
    {
        id: "rent_control",
        title: "Renter (Post-2018 Unit)",
        description: "No rent control on new units. Est. extra cost vs rent-controlled unit.",
        value: 2400,
        isPerChild: false,
        url: "https://www.cbc.ca/news/canada/toronto/rent-control-ontario-ford-government-1.6666736"
    },
    {
        id: "university",
        title: "University Student",
        description: "OSAP grant cuts & grace period elimination.",
        value: 2800,
        isPerChild: true,
        url: "https://www.cbc.ca/news/canada/toronto/osap-changes-ontario-student-assistance-program-1.4981604"
    },
    {
        id: "autism",
        title: "Child with Autism",
        description: "Funding cap ($5k/yr) vs previous needs-based therapy costs.",
        value: 45000,
        isPerChild: true,
        url: "https://www.cbc.ca/news/canada/toronto/autism-program-changes-waitlist-1.7107198"
    },
    {
        id: "private_clinic",
        title: "Used Private Clinic",
        description: "Out-of-pocket upsell costs (cataracts, etc) at private clinics.",
        value: 500,
        isPerChild: false,
        url: "https://www.cbc.ca/news/health/cataract-surgery-upselling-private-clinics-1.7106093"
    },
    {
        id: "legal_aid",
        title: "Need Legal Aid",
        description: "30% cut to Legal Aid Ontario budget reducing access to justice.",
        value: 1500,
        isPerChild: false,
        url: "https://www.cbc.ca/news/canada/toronto/legal-aid-ontario-cuts-1.5173735"
    },
    {
        id: "ev_charger",
        title: "Removed EV Charger",
        description: "Cancellation of EV station rebate program.",
        value: 1000,
        isPerChild: false,
        url: "https://www.cbc.ca/news/canada/toronto/electric-vehicle-incentive-scrapped-1.4744416"
    }
];