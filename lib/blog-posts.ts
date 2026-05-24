export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  readTime: string;
  date: string;
  cover: string;
  featured?: boolean;
  body: { type: "p" | "h2" | "h3" | "ul" | "quote"; text: string; items?: string[] }[];
}

export const posts: BlogPost[] = [
  {
    slug: "predictive-cash-flow",
    category: "Product",
    title: "Introducing predictive cash flow: see next month before it arrives",
    excerpt: "Our new forecasting engine uses 60 days of history to project your balance, bills, and surprise expenses for the month ahead.",
    author: "Lena Rodriguez",
    authorRole: "Co-founder & CTO",
    authorAvatar: "https://i.pravatar.cc/120?img=44",
    readTime: "6 min",
    date: "May 12, 2026",
    cover: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?w=1600&q=80",
    featured: true,
    body: [
      { type: "p", text: "For most people, the scariest part of personal finance isn't the math — it's the unknown. You know roughly what's coming in, you know roughly what's going out, but the surprise utility bill, the annual subscription renewal, the tax estimate you forgot — those are what wreck the month." },
      { type: "p", text: "Predictive cash flow is the feature we've been quietly building for the last eighteen months. Today it's live for every Pro and Business customer." },
      { type: "h2", text: "What it actually does" },
      { type: "p", text: "After 60 days of transaction history, Finley builds a per-account model of your recurring inflows and outflows. It accounts for seasonality, paydays that fall on weekends, and the long-tail of subscriptions that don't fit a clean monthly cadence." },
      { type: "ul", text: "", items: ["Forecasts daily balance up to 90 days out", "Flags upcoming bills before the auto-debit hits", "Highlights weeks where projected outflow exceeds inflow", "Suggests buffer transfers between accounts"] },
      { type: "h2", text: "Why we built it" },
      { type: "p", text: "We surveyed 2,400 active users in February. The single most common request — across solopreneurs, families, and small business owners — was \"tell me what's coming.\" Existing tools all rear-view. We wanted to look forward." },
      { type: "quote", text: "The first time it warned me about a hosting renewal three weeks out, I moved $200 around and never thought about it again. That's the whole point." },
      { type: "h2", text: "How accurate is it?" },
      { type: "p", text: "In our beta cohort of 1,200 accounts, the 30-day balance forecast was within 8% of actual for 92% of users after 60 days of history. After 90 days, that climbs to 96%. The model improves with more data and better tagging." },
      { type: "p", text: "Open the Forecast tab on your dashboard to see your numbers. We'd love to hear how it lands — replies to feedback@finley.app go straight to the product team." }
    ]
  },
  {
    slug: "sync-12000-banks",
    category: "Engineering",
    title: "How we sync 12,000 banks in under 100ms",
    excerpt: "A look under the hood at our event-driven ingestion pipeline, lock-free queues, and the boring tricks that made it fast.",
    author: "Kojo Mensah",
    authorRole: "Co-founder & Head of AI",
    authorAvatar: "https://i.pravatar.cc/120?img=60",
    readTime: "9 min",
    date: "May 8, 2026",
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80",
    body: [
      { type: "p", text: "When a customer connects a new account to Finley, they expect transactions to appear within seconds — not minutes. Hitting that bar across 12,000 banks, each with its own API quirks, rate limits, and downtime windows, took us two years and a lot of unglamorous engineering." },
      { type: "h2", text: "The three pillars" },
      { type: "p", text: "Our ingestion stack stands on three boring choices: an event-driven core, lock-free queues, and aggressive caching of intermediate state. None of these are novel. The win was in disciplined application." },
      { type: "ul", text: "", items: ["Kafka topics per bank cluster, partitioned by customer hash", "Goroutine pool with bounded concurrency per institution", "Redis-backed dedup window with 5-minute TTL", "Postgres logical replication for downstream consumers"] },
      { type: "h2", text: "What we threw away" },
      { type: "p", text: "We rewrote the original cron-based fetcher three times. Each rewrite was an exercise in deleting code: the v3 ingestion service is 40% the line count of v1 and handles 25x the traffic." }
    ]
  },
  {
    slug: "bank-grade-encryption",
    category: "Security",
    title: "Bank-grade encryption is a floor, not a ceiling",
    excerpt: "Why we went beyond compliance and built layered defenses most fintech companies skip entirely.",
    author: "Mateo Rossi",
    authorRole: "VP of Security",
    authorAvatar: "https://i.pravatar.cc/120?img=33",
    readTime: "7 min",
    date: "Apr 28, 2026",
    cover: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80",
    body: [
      { type: "p", text: "\"Bank-grade encryption\" is one of those marketing phrases that sounds reassuring but means almost nothing on its own. Every regulated fintech ticks that box. The question worth asking is: what's the next layer down?" },
      { type: "h2", text: "Encryption in transit and at rest" },
      { type: "p", text: "Table stakes. We use TLS 1.3 for all API traffic and AES-256-GCM for all persisted data. Our HSM-backed key rotation runs every 90 days with zero downtime." },
      { type: "h2", text: "Layered defenses" },
      { type: "ul", text: "", items: ["Per-tenant encryption keys (one customer's compromise doesn't leak another's)", "Audit logs encrypted with separate keys from primary data", "Quarterly third-party penetration testing", "Automated secret rotation across all internal services"] }
    ]
  },
  {
    slug: "subscription-leaks",
    category: "Money Tips",
    title: "Five subscription leaks costing the average household $400/yr",
    excerpt: "We analyzed 50,000 anonymized accounts. The boring leaks add up faster than the dramatic ones.",
    author: "Aria Nasser",
    authorRole: "VP of Customer",
    authorAvatar: "https://i.pravatar.cc/120?img=49",
    readTime: "5 min",
    date: "Apr 22, 2026",
    cover: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80",
    body: [
      { type: "p", text: "We pulled anonymized recurring-charge data from 50,000 opted-in customers across the US, UK, and EU. The big surprise wasn't the expensive subscriptions — those people notice. It was the small ones that quietly pile up." },
      { type: "h2", text: "The five biggest offenders" },
      { type: "ul", text: "", items: ["Cloud storage tiers (avg $48/yr unused)", "Free trial that auto-converted ($83/yr median)", "Duplicate streaming with overlapping households ($112/yr)", "Phone insurance bundled with old carrier ($96/yr)", "Donation pledges no one remembered setting up ($64/yr)"] }
    ]
  },
  {
    slug: "design-for-clarity",
    category: "Design",
    title: "Designing for financial clarity, not financial drama",
    excerpt: "Why we removed red numbers, alarming icons, and most of the dashboards you'd expect.",
    author: "Hana Suzuki",
    authorRole: "VP of Design",
    authorAvatar: "https://i.pravatar.cc/120?img=20",
    readTime: "4 min",
    date: "Apr 15, 2026",
    cover: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1600&q=80",
    body: [
      { type: "p", text: "Most finance apps lean on red to signal a problem. We tested it and found the opposite: red numbers made customers anxious, then avoidant. They opened the app less, missed bills more." }
    ]
  },
  {
    slug: "series-b-announcement",
    category: "Company",
    title: "Series B: $42M to make money tools that actually help",
    excerpt: "Why we raised, who joined the cap table, and what we're building next.",
    author: "Arjun Mehta",
    authorRole: "Co-founder & CEO",
    authorAvatar: "https://i.pravatar.cc/120?img=15",
    readTime: "3 min",
    date: "Apr 2, 2026",
    cover: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1600&q=80",
    body: [
      { type: "p", text: "Today we're announcing a $42M Series B led by Atlas Ventures, with participation from existing investors First Round and Initialized." },
      { type: "h2", text: "Where the money goes" },
      { type: "ul", text: "", items: ["Hiring 18 engineers across ingestion, ML, and security", "Expanding bank coverage in APAC and LATAM", "Launching the business plan tier for teams up to 50"] }
    ]
  },
  {
    slug: "60-20-20-budget-rule",
    category: "Money Tips",
    title: "The 60/20/20 rule beats the 50/30/20 for most people",
    excerpt: "A small change in budget split that compounds over a career. Math inside.",
    author: "Aria Nasser",
    authorRole: "VP of Customer",
    authorAvatar: "https://i.pravatar.cc/120?img=49",
    readTime: "6 min",
    date: "Mar 25, 2026",
    cover: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1600&q=80",
    body: [
      { type: "p", text: "The classic 50/30/20 rule (needs/wants/savings) made sense in the 1980s when housing was a smaller share of take-home pay. For most working professionals today, 50% on needs isn't a budget — it's a fantasy." },
      { type: "h2", text: "Why 60/20/20 fits better" },
      { type: "p", text: "Acknowledging that fixed costs eat 60% lets you build a realistic discretionary envelope and protect savings without lying to yourself." }
    ]
  }
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
