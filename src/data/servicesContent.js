/* src/data/servicesContent.js */
import { Zap, Activity, Shield, Target, CheckCircle2, Cpu, Globe, Database } from 'lucide-react';

export const servicesContent = {
    // AI & Data
    "generative-ai": {
        category: "AI & Data Solutions",
        title: "Generative AI Engineering",
        subtitle: "Architecting the future with Large Language Models and custom generative pipelines.",
        heroImage: "/images/services/unsplash-1620712943543-bcc4688e7485.jpg", /* Abstract Neural Network */

        overview: {
            text: "Our Generative AI solutions go beyond chat interfaces. We build enterprise-grade reasoning engines that integrate securely with your proprietary data. From RAG (Retrieval-Augmented Generation) architectures to fine-tuned foundation models, we enable automated content creation, code generation, and complex decision support.",
            image: "/images/services/unsplash-1555949963-ff9fe0c870eb.jpg", /* Code/Dashboard */
            benefits: [
                "Secure On-Premise / Private Cloud Deployment",
                "Custom RAG Architectures for High Accuracy",
                "Fine-tuned Models for Domain Specificity",
                "Enterprise-Grade Guardrails & Safety",
                "Seamless Integration with Thinking APIs"
            ]
        },

        features: [
            {
                title: "Custom LLM Training",
                description: "Fine-tune open weights (Llama 3, Mistral) on your specific domain data for maximum relevance.",
                icon: "Zap"
            },
            {
                title: "RAG Pipelines",
                description: "Connect LLMs to your vector databases for grounded, hallucination-free responses.",
                icon: "Database"
            },
            {
                title: "Agentic Workflows",
                description: "Deploy autonomous agents that can plan, reason, and execute complex multi-step tasks.",
                icon: "Target"
            },
            {
                title: "Multimodal Processing",
                description: "Process and generate text, images, and code in a single unified workflow.",
                icon: "Cpu"
            },
            {
                title: "Enterprise Security",
                description: "PII masking, role-based access control, and audit logging for all AI interactions.",
                icon: "Shield"
            },
            {
                title: "Performance Ops",
                description: "Continuous monitoring of token latency, cost, and quality assurance.",
                icon: "Activity"
            },
            {
                title: "Model Distillation",
                description: "Shrink large models into faster, cheaper, specialized versions for edge deployment.",
                icon: "Zap"
            },
            {
                title: "Knowledge Graphs",
                description: "Structure unstructured data into semantic networks for better reasoning.",
                icon: "Globe"
            },
            {
                title: "Ethical AI Guardrails",
                description: "Implement bias detection and safety layers to ensure responsible AI usage.",
                icon: "Shield"
            }
        ],

        techStack: [
            { name: "PyTorch", icon: "/images/services/PyTorch_logo_icon.svg" },
            { name: "TensorFlow", icon: "/images/services/Tensorflow_logo.svg" },
            { name: "Hugging Face", icon: "/images/services/huggingface.png" },
            { name: "LangChain", icon: "/images/services/asset-2.jpg" },
            { name: "OpenAI", icon: "/images/services/1024px-ChatGPT_logo.svg.png" }, /* White logo workaround via ChatGPT logo which is white-compatible or inverted by filter */
            { name: "Pinecone", icon: "/images/services/pinecone-io.png" },
            { name: "NVIDIA", icon: "/images/services/nvidia.png" },
            { name: "Databricks", icon: "/images/services/Databricks_Logo.png" }
        ],

        roi: {
            title: "Proven Business Impact",
            description: "Implementing GenAI isn't just about innovation—it's about tangible returns. See how our clients scale efficiency.",
            stats: [
                { label: "Operational Efficiency", value: 40, prefix: "+", suffix: "%", color: "#3B82F6" }, /* Blue */
                { label: "Cost Reduction", value: 25, prefix: "-", suffix: "%", color: "#10B981" }, /* Emerald */
                { label: "Revenue Uplift", value: 15, prefix: "+", suffix: "%", color: "#F59E0B" } /* Amber */
            ]
        },

        useCases: [
            {
                title: "Automated Customer Support",
                description: "Deploy Tier-1 support agents that handle 80% of queries instantly, escalating only complex issues to humans.",
                tags: ["NLP", "Automation", "Cost Saving"]
            },
            {
                title: "Legal Contract Analysis",
                description: "Instantly review, summarize, and flag risks in thousands of legal documents using semantic search.",
                tags: ["Legal Tech", "Compliance", "Efficiency"]
            },
            {
                title: "Code Modernization",
                description: "Translate legacy COBOL/Java codebases into modern Python/Go microservices with 95% accuracy.",
                tags: ["DevOps", "Migration", "Tech Debt"]
            },
            {
                title: "Personalized Marketing",
                description: "Generate hyper-personalized email copy and ad visuals at scale for millions of users.",
                tags: ["Marketing", "Generative", "Growth"]
            }
        ],

        industries: [
            { name: "Healthcare", icon: "Activity", desc: "Patient triage & drug discovery" },
            { name: "Finance", icon: "TrendingUp", desc: "Fraud detection & risk analysis" },
            { name: "Retail", icon: "ShoppingBag", desc: "Virtual try-ons & inventory AI" },
            { name: "Manufacturing", icon: "Factory", desc: "Predictive maintenance" },
            { name: "Legal", icon: "Scale", desc: "Case law research automation" },
            { name: "Media", icon: "Clapperboard", desc: "Script to storyboard generation" }
        ],

        stats: [
            { value: "40%", label: "Productivity Gain" },
            { value: "<200ms", label: "Query Latency" },
            { value: "99.9%", label: "Accuracy Rate" },
            { value: "24/7", label: "Automated Ops" }
        ],

        process: [
            {
                step: 1,
                title: "Discovery & Strategy",
                description: "We analyze your data readiness, identify high-impact use cases, and model ROI to ensure strategic alignment.",
                image: "/images/services/unsplash-1531403009284-440f080d1e12.jpg"
            },
            {
                step: 2,
                title: "Data Prep & Vectorization",
                description: "Cleaning unstructured data, creating knowledge graphs, and setting up vector indexes for efficient retrieval.",
                image: "/images/services/unsplash-1551288049-bebda4e38f71.jpg"
            },
            {
                step: 3,
                title: "Model Development",
                description: "Fine-tuning base models, engineering prompt chains, and orchestrating agent workflows.",
                image: "/images/services/unsplash-1555949963-aa79dcee981c.jpg"
            },
            {
                step: 4,
                title: "Deployment & Monitoring",
                description: "Rolling out to production with comprehensive observability for latency, cost, and hallucination rates.",
                image: "/images/services/unsplash-1551434678-e076c223a692.jpg"
            }
        ],

        marketTrends: {
            title: "Market Adoption Trajectory",
            description: "Enterprise adoption of Generative AI is accelerating. Don't get left behind.",
            series: [
                { year: "2023", value: 15, label: "Early Adopters", color: "#F87171" }, // Red
                { year: "2024", value: 35, label: "Mainstream Pilot", color: "#FBBF24" }, // Amber
                { year: "2025", value: 65, label: "Scale Production", color: "#34D399" }, // Emerald
                { year: "2026", value: 85, label: "Ubiquitous", color: "#4ADE80" } // Green
            ]
        },

        comparison: {
            title: "Why Fortune 500s Choose Us",
            headers: ["Feature", "Our Solution", "Traditional Agencies", "SaaS Wrappers"],
            rows: [
                { feature: "Data Privacy", us: "Private VPC / On-Prem", others: "Shared Cloud", saas: "Public API" },
                { feature: "Model IP", us: "100% Client Owned", others: "Vendor Locked", saas: "Platform Owned" },
                { feature: "Customization", us: "Full Fine-Tuning", others: "Prompt Eng Only", saas: "Generic" },
                { feature: "Latency", us: "<200ms Optimized", others: "Standard API", saas: "High Variable" }
            ]
        },

        testimonials: [
            {
                quote: "We reduced our contract review time by 90% while improving accuracy. The ROI was evident within weeks.",
                author: "Sarah J.",
                role: "CLO, FinTech Unicorn",
                image: "/images/services/unsplash-1494790108377-be9c29b29330.jpg"
            },
            {
                quote: "Their RAG pipeline architecture allowed us to query 10TB of legacy documents instantly with zero hallucinations.",
                author: "Michael C.",
                role: "CTO, Manufacturing Giant",
                image: "/images/services/unsplash-1472099645785-5658abf4ff4e.jpg"
            },
            {
                quote: "The ability to deploy open-weight models on our own hardware was a game changer for our compliance requirements.",
                author: "Dr. Emily R.",
                role: "VP AI, HealthSystems",
                image: "/images/services/unsplash-1573496359142-b8d87734a5a2.jpg"
            }
        ],

        faq: [
            { question: "How do you handle data privacy?", answer: "We deploy private instances of models within your VPC, ensuring data never leaves your infrastructure." },
            { question: "Can we use open source models?", answer: "Yes, we specialize in fine-tuning Llama 3, Mistral, and other open weights for enterprise tasks." },
            { question: "What is the typical timeline?", answer: "A pilot MVP is usually delivered in 4-6 weeks, with full production rollout in 3 months." }
        ]
    },

    // Placeholders for other services (Phase 1-5 will fill these)
    "agentic-ai": {
        category: "AI & Data Solutions",
        title: "Agentic AI Systems",
        subtitle: "Autonomous agents that plan, reason, and execute complex workflows without human intervention.",
        heroImage: "/images/services/unsplash-1620712943543-bcc4688e7485.jpg", /* Neural Network / Connectivity */

        overview: {
            text: "Agentic AI moves beyond simple chatbots to autonomous systems capable of pursuing goals. Our agents utilize advanced reasoning, tool use, and memory to handle end-to-end business processes—from supply chain optimization to autonomous software regulation—reducing human overhead by up to 60%.",
            image: "/images/services/unsplash-1485827404703-89b55fcc595e.jpg", /* Robot/Cybernetics */
            benefits: [
                "Self-Correcting Reasoning Loops",
                "Multi-Agent Orchestration Swarms",
                "Persistent Memory & Context",
                "Secure Tool Execution (API/SQL)",
                "Human-in-the-Loop Guardrails"
            ]
        },

        features: [
            {
                title: "Autonomous Planning",
                description: "Agents break down high-level goals into executable steps, replanning dynamically if errors occur.",
                icon: "Target"
            },
            {
                title: "Tool Use Capabilities",
                description: "Securely connect agents to your APIs, databases, and SaaS tools to perform real actions.",
                icon: "Zap"
            },
            {
                title: "Multi-Agent Swarms",
                description: "Orchestrate teams of specialized agents (Coder, Reviewer, Manager) to solve complex problems.",
                icon: "Cpu"
            },
            {
                title: "Long-term Memory",
                description: "Vector database integration allows agents to recall past interactions and learn over time.",
                icon: "Database"
            },
            {
                title: "Self-Reflection",
                description: "Agents critique their own outputs and iterate to improve quality before final submission.",
                icon: "Activity"
            },
            {
                title: "RBAC Security",
                description: "Granular permission controls ensure agents only access data and tools they are authorized for.",
                icon: "Shield"
            },
            {
                title: "Human Handoff",
                description: "Seamless escalation protocols when agents encounter high-stakes ambiguity.",
                icon: "CheckCircle2"
            },
            {
                title: "Process Mining",
                description: "AI observes human workflows to automatically generate optimized agent templates.",
                icon: "TrendingUp"
            },
            {
                title: "Global Compliance",
                description: "Built-in adherence to GDPR, HIPAA, and SOC2 standards for automated actions.",
                icon: "Globe"
            }
        ],

        techStack: [
            { name: "AutoGPT", icon: "/images/services/Significant-Gravitas.png" }, /* Official AutoGPT Avatar (Natural) */
            { name: "LangGraph", icon: "/images/services/asset-2.jpg" },
            { name: "CrewAI", icon: "/images/services/joaomdmoura.png" },
            { name: "OpenAI", icon: "/images/services/1024px-OpenAI_Logo.svg.png" }, /* Green/Black standard logo */
            { name: "Anthropic", icon: "/images/services/Anthropic_logo.svg" },
            { name: "Pinecone", icon: "/images/services/pinecone-io.png" },
            { name: "Celery", icon: "/images/services/Celery_logo.png" },
            { name: "Docker", icon: "/images/services/vertical-logo-monochromatic.png" }
        ],

        roi: {
            title: "Efficiency at Scale",
            description: "Replace repetitive cognitive labor with tireless, accurate digital workers.",
            stats: [
                { label: "Workflow Automation", value: 65, prefix: "", suffix: "%", color: "#3B82F6" },
                { label: "Error Reduction", value: 90, prefix: "-", suffix: "%", color: "#10B981" },
                { label: "Response Time", value: 80, prefix: "-", suffix: "%", color: "#F59E0B" }
            ]
        },

        useCases: [
            {
                title: "Autonomous Supply Chain",
                description: "Agents monitor inventory, predict shortages, and negotiate reorders with suppliers automatically.",
                tags: ["Logistics", "Negotiation", "Automation"]
            },
            {
                title: "IT Ops Remediation",
                description: "Detect system outages, diagnose root causes, and deploy patches without human pages.",
                tags: ["DevOps", "SRE", "Self-Healing"]
            },
            {
                title: "Financial Research",
                description: "Scour thousands of news sources and filings to synthesize investment memos in minutes.",
                tags: ["Finance", "Analysis", "Speed"]
            },
            {
                title: "Personalized Outreach",
                description: "SDR agents researching prospects and drafting hyper-relevant email sequences.",
                tags: ["Sales", "Growth", "Outreach"]
            }
        ],

        industries: [
            { name: "Logistics", icon: "Factory", desc: "Autonomous routing & inventory" },
            { name: "Finance", icon: "TrendingUp", desc: "Algorithmic trading & compliance" },
            { name: "Healthcare", icon: "Activity", desc: "Patient scheduling & follow-ups" },
            { name: "Retail", icon: "ShoppingBag", desc: "Dynamic pricing agents" },
            { name: "Legal", icon: "Scale", desc: "Due diligence automation" },
            { name: "Software", icon: "Cpu", desc: "QA & Testing bots" }
        ],

        stats: [
            { value: "24/7", label: "Active Operations" },
            { value: "10x", label: "Faster Execution" },
            { value: "Zero", label: "Fatigue Rate" },
            { value: "100%", label: "Traceability" }
        ],

        process: [
            {
                step: 1,
                title: "Workflow Mapping",
                description: "Deconstructing human processes into discrete atomic actions suitable for agents.",
                image: "/images/services/unsplash-1512314889357-e157c22f938d.jpg"
            },
            {
                step: 2,
                title: "Tool Definition",
                description: "Creating secure API wrappers and data connectors for agent interaction.",
                image: "/images/services/unsplash-1555066931-4365d14bab8c.jpg"
            },
            {
                step: 3,
                title: "Agent Training",
                description: "Teaching agents via few-shot prompting and simulating edge cases in a sandbox.",
                image: "/images/services/unsplash-1531482615713-2afd69097998.jpg"
            },
            {
                step: 4,
                title: "Orchestration",
                description: "Deploying the multi-agent supervisors to manage sub-agents and ensure goal completion.",
                image: "/images/services/unsplash-1519389950473-47ba0277781c.jpg"
            }
        ],

        marketTrends: {
            title: "The Shift to Autonomy",
            description: "Enterprises are moving from 'Chat' to 'Action'. Agentic workflows are the next frontier.",
            series: [
                { year: "2023", value: 10, label: "Chatbots", color: "#F87171" },
                { year: "2024", value: 25, label: "Copilots", color: "#FBBF24" },
                { year: "2025", value: 55, label: "Single Agents", color: "#34D399" },
                { year: "2026", value: 80, label: "Swarms", color: "#4ADE80" }
            ]
        },

        comparison: {
            title: "Agents vs. Automation",
            headers: ["Capability", "Our Agents", "Traditional RPA", "Human Staff"],
            rows: [
                { feature: "Flexibility", us: "High (Adaptive)", others: "Low (Brittle)", saas: "High" },
                { feature: "Decision Making", us: "Reasoning Engine", others: "Rules Based", saas: "Intuitive" },
                { feature: "Learning", us: "In-Context", others: "Static", saas: "Slow" },
                { feature: "Cost", us: "Low Marginal", others: "Medium", saas: "High" }
            ]
        },

        testimonials: [
            {
                quote: "Our support resolution time dropped by 60% after deploying their Tier-1 triage agents.",
                author: "James T.",
                role: "VP Support, SaaS Corp",
                image: "/images/services/unsplash-1507003211169-0a1dd7228f2d.jpg"
            },
            {
                quote: "Ideally suited for our supply chain. The agents autonomously negotiated minor re-orders, saving us hours.",
                author: "Maria G.",
                role: "Director of Ops, RetailBrand",
                image: "/images/services/unsplash-1438761681033-6461ffad8d80.jpg"
            },
            {
                quote: "The ability to have a 'coder' agent and a 'reviewer' agent work together on tickets is mind-blowing.",
                author: "David K.",
                role: "Engineering Lead, TechFlow",
                image: "/images/services/unsplash-1500648767791-00dcc994a43e.jpg"
            }
        ],

        faq: [
            { question: "Can agents break my system?", answer: "No. We implement strict 'Sandboxed Execution' and 'Human-in-the-Loop' authorization for sensitive actions." },
            { question: "How do they remember context?", answer: "We use vector databases (Pinecone/Weaviate) to give agents long-term episodic memory." },
            { question: "What models do you use?", answer: "We orchestrate the best model for the job—GPT-4 for reasoning, Haiku for speed, etc." }
        ]
    },
    "rpa-automation": {
        category: "AI & Data Solutions",
        title: "Intelligent RPA",
        subtitle: "Automate high-volume, repetitive tasks with 100% accuracy using our next-gen robotic process automation.",
        heroImage: "/images/services/unsplash-1518186285589-2f7649de83e0.jpg", /* Circuit/Robot Hand */

        overview: {
            text: "We don't just build bots; we build digital workforces. Our Intelligent RPA solutions bridge legacy systems with modern AI, allowing you to automate complex cross-application workflows like invoice processing, employee onboarding, and claims management without ripping and replacing your core infrastructure.",
            image: "/images/services/unsplash-1516110833967-0b5716ca1387.jpg", /* AI/Hand interaction */
            benefits: [
                "Non-Invasive Integration (Works with any UI)",
                "24/7 Digital Workforce Availability",
                "100% Accuracy in Data Entry",
                "Scalable from 1 to 10,000 Bots",
                "Built-in Analytics & Audit Trails"
            ]
        },

        features: [
            {
                title: "Unattended Bots",
                description: "Background processes that run 24/7 on virtual machines to handle high-volume batch work.",
                icon: "Cpu"
            },
            {
                title: "Attended Automation",
                description: "Digital assistants that sit on employee desktops to help them complete tasks faster.",
                icon: "Target"
            },
            {
                title: "Document Understanding",
                description: "IDP (Intelligent Document Processing) to extract data from PDFs, images, and emails.",
                icon: "Database"
            },
            {
                title: "Process Discovery",
                description: "AI tools that record user actions to automatically identify and map automatable workflows.",
                icon: "Search"
            },
            {
                title: "Legacy Integration",
                description: "Connect green-screen mainframes to modern web APIs without expensive connectors.",
                icon: "Activity"
            },
            {
                title: "Bot Orchestration",
                description: "Centralized dashboard to manage, schedule, and monitor your entire digital workforce.",
                icon: "Zap"
            },
            {
                title: "Exception Handling",
                description: "Smart workflows that route ambiguous cases to humans while learning from the resolution.",
                icon: "Shield"
            },
            {
                title: "ERP Automation",
                description: "Seamlessly enter data into SAP, Oracle, and Salesforce with absolute precision.",
                icon: "Globe"
            },
            {
                title: "Audit & Compliance",
                description: "Every bot action is logged, ensuring complete traceability for regulatory audits.",
                icon: "CheckCircle2"
            }
        ],

        techStack: [
            { name: "UiPath", icon: "/images/services/UiPath.png" },
            { name: "Blue Prism", icon: "/images/services/blueprism.png" }, /* Official GitHub Org */
            { name: "Automation Anywhere", icon: "/images/services/AutomationAnywhere.png" },
            { name: "Python", icon: "/images/services/Python-logo-notext.svg" },
            { name: "Selenium", icon: "/images/services/Selenium_Logo.png" },
            { name: "Docker", icon: "/images/services/vertical-logo-monochromatic.png" },
            { name: "Celery", icon: "/images/services/Celery_logo.png" }
        ],

        roi: {
            title: "Cost & Speed Impact",
            description: "RPA delivers the fastest ROI of any digital transformation initiative.",
            stats: [
                { label: "Cost Savings", value: 70, prefix: "", suffix: "%", color: "#3B82F6" },
                { label: "Processing Speed", value: 5, prefix: "", suffix: "x", color: "#10B981" },
                { label: "Error Rate", value: 0, prefix: "", suffix: "%", color: "#F59E0B" } /* Zero errors */
            ]
        },

        useCases: [
            {
                title: "Invoice Processing",
                description: "Extract data from thousands of PDF invoices and enter it into SAP/Oracle automatically.",
                tags: ["Finance", "Accounting", "ERP"]
            },
            {
                title: "Employee Onboarding",
                description: "Provision accounts across Active Directory, Slack, and Jira in seconds for new hires.",
                tags: ["HR", "IT Ops", "Provisioning"]
            },
            {
                title: "Insurance Claims",
                description: "Validate policy numbers and process standard claims payouts without human review.",
                tags: ["Insurance", "Claims", "Speed"]
            },
            {
                title: "Data Migration",
                description: "Move millions of records from legacy mainframes to cloud databases with zero data loss.",
                tags: ["IT", "Migration", "Data"]
            }
        ],

        industries: [
            { name: "Banking", icon: "Scale", desc: "KYC & Loan processing" },
            { name: "Healthcare", icon: "Activity", desc: "Patient record synchronization" },
            { name: "Retail", icon: "ShoppingBag", desc: "Inventory updates across systems" },
            { name: "Logistics", icon: "Factory", desc: "Bill of Lading automation" },
            { name: "Telecom", icon: "Globe", desc: "Service activation bots" },
            { name: "Govt", icon: "Shield", desc: "Form processing & validation" }
        ],

        stats: [
            { value: "5M+", label: "Transactions/Yr" },
            { value: "100%", label: "Accuracy" },
            { value: "4 Wks", label: "To Go-Live" },
            { value: "300%", label: "Typical ROI" }
        ],

        process: [
            {
                step: 1,
                title: "Process Mining",
                description: "We install non-intrusive trackers to identify the most repetitive, high-value workflows to automate.",
                image: "/images/services/unsplash-1551288049-bebda4e38f71.jpg"
            },
            {
                step: 2,
                title: "Bot Design",
                description: "Architecting the bot's logic flow, exception handling, and security credentials.",
                image: "/images/services/unsplash-1581091226825-a6a2a5aee158.jpg"
            },
            {
                step: 3,
                title: "Development & Testing",
                description: "Building the scripts and stress-testing them against edge cases and system lag.",
                image: "/images/services/unsplash-1515378791036-0648a3ef77b2.jpg"
            },
            {
                step: 4,
                title: "Hypercare Support",
                description: "We monitor the bots closely for the first 2 weeks to ensure 100% stability in production.",
                image: "/images/services/unsplash-1531403009284-440f080d1e12.jpg"
            }
        ],

        marketTrends: {
            title: "Evolution of Automation",
            description: "Moving from simple macros to AI-powered cognitive automation.",
            series: [
                { year: "2023", value: 20, label: "Scripting", color: "#F87171" },
                { year: "2024", value: 45, label: "Standard RPA", color: "#FBBF24" },
                { year: "2025", value: 75, label: "Cognitive RPA", color: "#34D399" },
                { year: "2026", value: 95, label: "Hyperauto...", color: "#4ADE80" } /* Hyperautomation */
            ]
        },

        comparison: {
            title: "Why Intelligent RPA?",
            headers: ["Feature", "Our RPA", "Traditional BPO", "Custom Code"],
            rows: [
                { feature: "Speed", us: "Instant Scale", others: "Slow Hiring", saas: "Long Dev Cycles" },
                { feature: "Cost", us: "Fixed License", others: "Hourly Rates", saas: "High Maintenance" },
                { feature: "Accuracy", us: "100% Consistent", others: "Human Error", saas: "Bug Prone" },
                { feature: "Compliance", us: "Perfect Audit", others: "Hard to Track", saas: "Complex Logs" }
            ]
        },

        testimonials: [
            {
                quote: "We automated our entire accounts payable process. What took 5 people a week now takes 2 hours.",
                author: "Robert L.",
                role: "CFO, Manufacturing",
                image: "/images/services/unsplash-1560250097-0b93528c311a.jpg"
            },
            {
                quote: "The bots are incredibly reliable. They handle our peak season order volume without breaking a sweat.",
                author: "Sarah W.",
                role: "Ops Manager, Ecommerce",
                image: "/images/services/unsplash-1573496359142-b8d87734a5a2.jpg"
            },
            {
                quote: "Seamless legacy integration. We kept our 20-year-old mainframe but gave it a modern API interface.",
                author: "Amit P.",
                role: "CIO, Banking",
                image: "/images/services/unsplash-1519085360753-af0119f7cbe7.jpg"
            }
        ],

        faq: [
            { question: "Will bots replace my team?", answer: "No, they remove the boring, repetitive work so your team can focus on high-value strategy." },
            { question: "What if the UI changes?", answer: "Our 'Computer Vision' based selectors are resilient to minor UI changes, and we offer maintenance packages." },
            { question: "Is it secure?", answer: "Yes, credentials are encrypted in a secure vault and never exposed in the scripts." }
        ]
    },
    "vibe-coding": {
        category: "AI & Data Solutions",
        title: "Vibe Coding",
        subtitle: "Accelerate software delivery with AI-paired programming and vibe-driven development workflows.",
        heroImage: "/images/services/unsplash-1555066931-4365d14bab8c.jpg", /* Coding/IDE */

        overview: {
            text: "Vibe Coding isn't just about speed; it's about flow. We integrate advanced AI coding assistants like GitHub Copilot, Cursor, and custom LLMs into your development environment. This 'Human-in-the-Loop' approach reduces boilerplate, catches bugs early, and allows your senior engineers to focus on architecture and 'vibe'—the intuitive art of great software design.",
            image: "/images/services/unsplash-1517694712202-14dd9538aa97.jpg", /* Laptop/Code */
            benefits: [
                "50% Reduction in Boilerplate Code",
                "Automated Unit Test Generation",
                "Real-time Security Vulnerability Scanning",
                "Context-Aware Code Completion",
                "Seamless Documentation Updates"
            ]
        },

        features: [
            {
                title: "AI Pair Programming",
                description: "Real-time code suggestions and refactoring tips from state-of-the-art LLMs.",
                icon: "Cpu"
            },
            {
                title: "Legacy Refactoring",
                description: "Automatically convert outdated code (jQuery, Java 8) to modern standards (React, Kotlin).",
                icon: "Activity"
            },
            {
                title: "Automated Testing",
                description: "Generate comprehensive unit and integration tests with a single click.",
                icon: "CheckCircle2"
            },
            {
                title: "Smart Documentation",
                description: "Keep your READMEs and API docs in sync with your code automatically.",
                icon: "Globe"
            },
            {
                title: "Secure Coding",
                description: "Identify and patch OWASP vulnerabilities before they reach production.",
                icon: "Shield"
            },
            {
                title: "Rapid Prototyping",
                description: "Go from prompt to functioning MVP in hours, not weeks.",
                icon: "Zap"
            }
        ],

        techStack: [
            { name: "Antigravity", icon: "/images/services/asset-26.jpg" }, /* Custom Agentic Brand */
            { name: "GitHub Copilot", icon: "/images/services/github.png" },
            { name: "TypeScript", icon: "/images/services/Typescript_logo_2020.svg" },
            { name: "React", icon: "/images/services/React-icon.svg" },
            { name: "OpenAI", icon: "/images/services/OpenAI_Logo.svg" }, /* Black SVG -> Will be Inverted to White */
            { name: "Anthropic", icon: "/images/services/Anthropic_logo.svg" }, /* Black SVG -> Will be Inverted to White */
            { name: "Vercel", icon: "/images/services/Vercel_logo_black.svg" }, /* Black SVG -> Will be Inverted to White */
            { name: "Supabase", icon: "/images/services/supabase.png" }
        ],

        roi: {
            title: "Development Velocity",
            description: "Ship features faster without burning out your engineering team.",
            stats: [
                { label: "Dev Speed", value: 55, prefix: "+", suffix: "%", color: "#3B82F6" },
                { label: "Bug Reduction", value: 40, prefix: "-", suffix: "%", color: "#10B981" },
                { label: "Onboarding Time", value: 30, prefix: "-", suffix: "%", color: "#F59E0B" }
            ]
        },

        useCases: [
            {
                title: "MVP Acceleration",
                description: "Startups can build their initial product in weeks instead of months using AI-augmented coding.",
                tags: ["Startup", "MVP", "Speed"]
            },
            {
                title: "Enterprise Modernization",
                description: "Large corps can rapidly update legacy internal tools with modern UI/UX.",
                tags: ["Enterprise", "Legacy", "Update"]
            },
            {
                title: "Frontend Polish",
                description: "Perfect pixel-perfect designs by having AI generate CSS and animations instantly.",
                tags: ["UI/UX", "Frontend", "Design"]
            }
        ],

        industries: [
            { name: "SaaS", icon: "Cpu", desc: "Rapid feature iteration" },
            { name: "FinTech", icon: "TrendingUp", desc: "Secure algo implementation" },
            { name: "E-commerce", icon: "ShoppingBag", desc: "Dynamic storefronts" },
            { name: "HealthTech", icon: "Activity", desc: "Compliant data handling" }
        ],

        stats: [
            { value: "2x", label: "Ship Rate" },
            { value: "40%", label: "Less Bugs" },
            { value: "100%", label: "Test Coverage" },
            { value: "Zero", label: "Vendor Lock" }
        ],

        process: [
            {
                step: 1,
                title: "Env Setup",
                description: "Configuring IDEs with the right AI extensions and context-aware context.",
                image: "/images/services/unsplash-1587620962725-abab7fe55159.jpg"
            },
            {
                step: 2,
                title: "Prompt Engineering",
                description: "Training your team on how to prompt for optimal code generation.",
                image: "/images/services/unsplash-1531482615713-2afd69097998.jpg"
            },
            {
                step: 3,
                title: "Vibe Check / Review",
                description: "Humans review the AI output for architecture, security, and 'vibe'.",
                image: "/images/services/unsplash-1522071820081-009f0129c71c.jpg"
            },
            {
                step: 4,
                title: "Deploy",
                description: "Automated CI/CD pipelines push the verified code to production.",
                image: "/images/services/unsplash-1551434678-e076c223a692.jpg"
            }
        ],

        marketTrends: {
            title: "AI in Software Dev",
            description: "AI-assisted coding is becoming the standard for high-performing teams.",
            series: [
                { year: "2023", value: 20, label: "Adoption", color: "#F87171" },
                { year: "2024", value: 45, label: "Integration", color: "#FBBF24" },
                { year: "2025", value: 70, label: "Standard", color: "#34D399" },
                { year: "2026", value: 90, label: "Native", color: "#4ADE80" }
            ]
        },

        comparison: {
            title: "Vibe Coding vs. Traditional",
            headers: ["Metric", "Vibe Coding", "Traditional Dev", "Outsourcing"],
            rows: [
                { feature: "Speed", us: "Very High", others: "Medium", saas: "Slow" },
                { feature: "Quality", us: "Consistent", others: "Variable", saas: "Mixed" },
                { feature: "Cost", us: "Efficient", others: "High", saas: "Medium" },
                { feature: "Innovation", us: "Focus Area", others: "Afterthought", saas: "Low" }
            ]
        },

        testimonials: [
            {
                quote: "We rebuilt our entire frontend in 3 weeks. Vibe coding is the real deal.",
                author: "Jessica M.",
                role: "Product Lead",
                image: "/images/services/unsplash-1438761681033-6461ffad8d80.jpg"
            },
            {
                quote: "Our junior devs are performing like mid-levels thanks to the AI guardrails.",
                author: "Tom H.",
                role: "Engineering Manager",
                image: "/images/services/unsplash-1500648767791-00dcc994a43e.jpg"
            }
        ],

        faq: [
            { question: "Is the code secure?", answer: "Yes, we use enterprise-grade tools that keep your IP private and scan for vulnerabilities." },
            { question: "Do I still need developers?", answer: "Absolutely. AI handles the typing; your developers handle the thinking and architecture." },
            { question: "What stack do you support?", answer: "We support mostly modern stacks: React, Node, Python, Go, and Rust." }
        ]
    },

    "data-analytics": {
        category: "AI & Data Solutions",
        title: "Advanced Data Analytics",
        subtitle: "Turn raw data into actionable intelligence with modern data stacks and predictive dashboards.",
        heroImage: "/images/services/unsplash-1551288049-bebda4e38f71.jpg", /* Data/Charts */

        overview: {
            text: "Data is your most valuable asset, but only if you can understand it. We help enterprises build modern data platforms—from Data Lakes to Warehouses—enabling real-time reporting, predictive modeling, and self-service BI. We move beyond static spreadsheets to dynamic, interactive insights that drive decision-making.",
            image: "/images/services/unsplash-1460925895917-afdab827c52f.jpg", /* Dashboard */
            benefits: [
                "Single Source of Truth",
                "Real-time Data Streaming",
                "Predictive Forecasting Models",
                "Self-Service BI for Business Users",
                "Automated Data Governance"
            ]
        },

        features: [
            {
                title: "Modern Data Stack",
                description: "Implement scalable cloud data warehouses (Snowflake, BigQuery).",
                icon: "Database"
            },
            {
                title: "Business Intelligence",
                description: "Interactive dashboards in PowerBI/Tableau that tell a story.",
                icon: "Activity"
            },
            {
                title: "Data Engineering",
                description: "Robust ETL/ELT pipelines using Airflow, dbt, and Python.",
                icon: "Cpu"
            },
            {
                title: "Predictive Analytics",
                description: "Machine learning models to forecast sales, churn, and demand.",
                icon: "TrendingUp"
            },
            {
                title: "Data Governance",
                description: "Ensure data quality, lineage, and compliance (GDPR/CCPA).",
                icon: "Shield"
            },
            {
                title: "Real-time Streaming",
                description: "Process IoT and clickstream data instantly with Kafka/Kinesis.",
                icon: "Zap"
            }
        ],

        techStack: [
            { name: "Snowflake", icon: "/images/services/Snowflake_Logo.svg" },
            { name: "Databricks", icon: "/images/services/Databricks_Logo.png" },
            { name: "PowerBI", icon: "/images/services/New_Power_BI_Logo.svg" },
            { name: "Tableau", icon: "/images/services/Tableau_Logo.png" },
            { name: "Python", icon: "/images/services/Python-logo-notext.svg" },
            { name: "dbt", icon: "/images/services/dbt-labs.png" }, /* Official dbt Avatar */
            { name: "Apache Spark", icon: "/images/services/Apache_Spark_logo.svg" },
            { name: "Kafka", icon: "/images/services/apache.png" } /* Apache Avatar (Kafka) */
        ],

        roi: {
            title: "Data-Driven Value",
            description: "Unlock hidden revenue and optimize operations with better visibility.",
            stats: [
                { label: "Decision Speed", value: 3, prefix: "", suffix: "x", color: "#3B82F6" },
                { label: "Revenue Found", value: 12, prefix: "+", suffix: "%", color: "#10B981" },
                { label: "Report Manual Effort", value: 90, prefix: "-", suffix: "%", color: "#F59E0B" }
            ]
        },

        useCases: [
            {
                title: "Churn Prediction",
                description: "Identify at-risk customers before they leave and trigger retention campaigns.",
                tags: ["Retention", "ML", "Sales"]
            },
            {
                title: "Supply Chain Opt.",
                description: "Optimize inventory levels based on predictive demand forecasting.",
                tags: ["Logistics", "Ops", "Efficiency"]
            },
            {
                title: "Executive Dashboards",
                description: "Real-time P&L and KPI monitoring for C-Suite on any device.",
                tags: ["Management", "BI", "Strategy"]
            }
        ],

        industries: [
            { name: "Retail", icon: "ShoppingBag", desc: "Customer segmentation" },
            { name: "Finance", icon: "TrendingUp", desc: "Risk modeling" },
            { name: "Manufacturing", icon: "Factory", desc: "Yield optimization" },
            { name: "Healthcare", icon: "Activity", desc: "Outcome analysis" }
        ],

        stats: [
            { value: "PB+", label: "Data Processed" },
            { value: "ms", label: "Query Latency" },
            { value: "100%", label: "Governance" },
            { value: "Self", label: "Serve BI" }
        ],

        process: [
            {
                step: 1,
                title: "Audit & Strategy",
                description: "Assessing your current data maturity and designing the target architecture.",
                image: "/images/services/unsplash-1551288049-bebda4e38f71.jpg"
            },
            {
                step: 2,
                title: "Ingest & Store",
                description: "Setting up pipelines to move data from silos to a central lakehouse.",
                image: "/images/services/unsplash-1544383835-bda2bc66a55d.jpg"
            },
            {
                step: 3,
                title: "Transform & Model",
                description: "Cleaning and modeling data (dbt) to make it ready for analysis.",
                image: "/images/services/unsplash-1551288049-bebda4e38f71.jpg"
            },
            {
                step: 4,
                title: "Visualize & Act",
                description: "Building the dashboards and ML models that drive business action.",
                image: "/images/services/unsplash-1551288049-bebda4e38f71.jpg"
            }
        ],

        marketTrends: {
            title: "The Data Era",
            description: "Companies are shifting from 'System of Record' to 'System of Insight'.",
            series: [
                { year: "2023", value: 30, label: "Legacy BI", color: "#F87171" },
                { year: "2024", value: 50, label: "Cloud DW", color: "#FBBF24" },
                { year: "2025", value: 75, label: "Real-time", color: "#34D399" },
                { year: "2026", value: 95, label: "Predictive", color: "#4ADE80" }
            ]
        },

        comparison: {
            title: "Why Our Analytics?",
            headers: ["Feature", "Our Solution", "Legacy Systems", "Spreadsheets"],
            rows: [
                { feature: "Scalability", us: "Infinite Cloud", others: "Hardware Limit", saas: "Row Limit" },
                { feature: "Speed", us: "Real-time", others: "Daily Batch", saas: "Manual" },
                { feature: "Insights", us: "Predictive", others: "Descriptive", saas: "Static" },
                { feature: "Access", us: "Democratized", others: "IT Bottleneck", saas: "Siloed" }
            ]
        },

        testimonials: [
            {
                quote: "We finally have a single source of truth. No more arguing over whose spreadsheet is right.",
                author: "Mark S.",
                role: "CFO, Logistics Co",
                image: "/images/services/unsplash-1472099645785-5658abf4ff4e.jpg"
            },
            {
                quote: "The predictive churn model saved us $2M in revenue in the first quarter alone.",
                author: "Sarah J.",
                role: "VP Marketing, Telecom",
                image: "/images/services/unsplash-1573496359142-b8d87734a5a2.jpg"
            }
        ],

        faq: [
            { question: "How long until we see value?", answer: "We can deploy a Modern Data Stack MVP in 4-6 weeks with immediate insights." },
            { question: "Is my data secure?", answer: "Yes, we implement row-level security and strict governance (RBAC) from day one." },
            { question: "Do you support on-prem?", answer: "We can, but we highly recommend migrating to cloud (Snowflake/Databricks) for scale." }
        ]
    },
    "cloud-migration": {
        category: "Infrastructure",
        title: "Cloud Migration",
        subtitle: "Seamlessly move your legacy workloads to the cloud with zero downtime (6 Rs strategy).",
        heroImage: "/images/services/unsplash-1451187580459-43490279c0fa.jpg", /* Earth/Cloud */

        overview: {
            text: "Legacy systems hold you back. We specialize in lifting, shifting, and refactoring on-premise infrastructure to AWS, Azure, or GCP. Our '6 Rs' framework ensures every application finds its perfect cloud home, optimizing for cost, performance, and security during transit.",
            image: "/images/services/unsplash-1483478550801-ceba5fe50e8e.jpg", /* Server Room/Abstract */
            benefits: [
                "30-50% TCO Reduction",
                "Elastic Scalability on Demand",
                "Automated Disaster Recovery",
                "Compliance Hardening (SOC2/HIPAA)",
                "Legacy App Containerization"
            ]
        },

        features: [
            { title: "Assess & Plan", description: "Deep dependency mapping and TCO analysis before we move a single byte.", icon: "Activity" },
            { title: "Rehost (Lift & Shift)", description: "Rapid migration of VMs to EC2/Azure VMs for quick wins.", icon: "Globe" },
            { title: "Refactor (Cloud Native)", description: "Rewrite monolithic apps into microservices for true cloud agility.", icon: "Cpu" },
            { title: "Database Migration", description: "Move Oracle/SQL Server to managed RDS/Aurora/SQL Database.", icon: "Database" },
            { title: "Security Harmony", description: "Extend on-prem AD/LDAP to cloud IAM seamlessly.", icon: "Shield" },
            { title: "Cost FinOps", description: "Implement budget guardrails and spot instance strategies from Day 1.", icon: "Target" }
        ],

        techStack: [
            { name: "AWS", icon: "/images/services/Amazon_Web_Services_Logo.svg" },
            { name: "Azure", icon: "/images/services/Microsoft_Azure.svg" },
            { name: "Google Cloud", icon: "/images/services/Google_Cloud_logo.svg" },
            { name: "Docker", icon: "/images/services/Docker__28container_engine_29_logo.svg" },
            { name: "Kubernetes", icon: "/images/services/Kubernetes_logo_without_workmark.svg" },
            { name: "Terraform", icon: "/images/services/Terraform_Logo.svg" },
            { name: "VMware", icon: "/images/services/Vmware.svg" },
            { name: "Linux", icon: "/images/services/Tux.svg" }
        ],

        roi: {
            title: "Value of Migration",
            description: "Stop paying for idle hardware. Start paying for innovation.",
            stats: [
                { label: "Infra Savings", value: 40, prefix: "-", suffix: "%", color: "#10B981" },
                { label: "Deployment Speed", value: 3, prefix: "", suffix: "x", color: "#3B82F6" },
                { label: "Uptime", value: 99.99, prefix: "", suffix: "%", color: "#F59E0B" }
            ]
        },

        useCases: [
            { title: "Data Center Exit", description: "Shut down expensive colocation facilities completely.", tags: ["Cost", "Strategic"] },
            { title: "Scalable E-commerce", description: "Handle Black Friday traffic spikes without crashing.", tags: ["Scale", "Retail"] },
            { title: "Global Expansion", description: "Deploy localized instances in new regions in minutes.", tags: ["Growth", "Global"] }
        ],

        marketTrends: {
            title: "Cloud Adoption",
            description: "Cloud is no longer optional; it is the default for modern enterprise.",
            series: [
                { year: "2023", value: 50, label: "Hybrid", color: "#60A5FA" },
                { year: "2024", value: 70, label: "Cloud First", color: "#34D399" },
                { year: "2025", value: 90, label: "Cloud Native", color: "#FBBF24" }
            ]
        },

        comparison: {
            title: "Migration Approaches",
            headers: ["Metric", "Managed Migration", "DIY Migration", "Stay On-Prem"],
            rows: [
                { feature: "Risk", us: "Low (Proven patterns)", others: "High (Unknowns)", saas: "Medium" },
                { feature: "Speed", us: "Accelerated", others: "Slow", saas: "Stagnant" },
                { feature: "Cost Long-term", us: "Optimized", others: "Unpredictable", saas: "High (CapEx)" }
            ]
        },

        testimonials: [
            { quote: "We closed our data center 6 months ahead of schedule. Flawless execution.", author: "David K.", role: "CTO, Retail Giant", image: "/images/services/unsplash-1560250097-0b93528c311a.jpg" },
            { quote: "The move to AWS saved us $1.2M annually in hardware refresh costs.", author: "Lisa M.", role: "VP Ops, FinServ", image: "/images/services/unsplash-1573497019940-1c28c88b4f3e.jpg" }
        ],
        faq: [
            { question: "Will we have downtime?", answer: "We aim for zero-downtime using blue/green deployment strategies during cutover." },
            { question: "Which cloud is best?", answer: "It depends. We are cloud-agnostic and will recommend AWS, Azure, or GCP based on your workload." },
            { question: "How long does it take?", answer: "Typical timelines range from 3 to 9 months depending on complexity and estate size." }
        ]
    },

    "multi-cloud": {
        category: "Infrastructure",
        title: "Multi-Cloud Strategy",
        subtitle: "Avoid vendor lock-in and maximize reliability with a unified multi-cloud architecture.",
        heroImage: "/images/services/unsplash-1526374965328-7f61d4dc18c5.jpg", /* Matrix/Network */

        overview: {
            text: "Why choose one when you can have the best of all? We design robust multi-cloud environments that allow you to run workloads where they run best—whether that's AI on GCP, Windows apps on Azure, or serverless on AWS. We unify management through Terraform and Kubernetes, giving you a 'single pane of glass' control plane.",
            image: "/images/services/unsplash-1414235077428-338989a2e8c0.jpg", /* Servers/Connections */
            benefits: [
                "Zero Vendor Lock-in",
                "Best-of-Breed Services",
                "Geographic Redundancy",
                "Unified Cost Governance",
                "Automated Failover"
            ]
        },

        features: [
            { title: "Unified Control Plane", description: "Manage AWS, Azure, and GCP from a single Kubernetes dashboard.", icon: "Globe" },
            { title: "Infrastructure as Code", description: "Terraform modules that deploy identically across any provider.", icon: "Cpu" },
            { title: "Cost Arbitrage", description: "Dynamically route workloads to the cheapest available spot instances.", icon: "Target" },
            { title: "Global Traffic", description: "Intelligent DNS routing against latency and outages.", icon: "Activity" },
            { title: "Security Fabric", description: "Consistent policy enforcement across all cloud boundaries.", icon: "Shield" },
            { title: "Data Mobility", description: "Seamless replication of datasets between cloud providers.", icon: "Database" }
        ],

        techStack: [
            { name: "Terraform", icon: "/images/services/Terraform_Logo.svg" },
            { name: "Kubernetes", icon: "/images/services/Kubernetes_logo_without_workmark.svg" },
            { name: "Ansible", icon: "/images/services/1024px-ChatGPT_logo.svg.png" },
            { name: "Prometheus", icon: "/images/services/Prometheus_software_logo.svg" },
            { name: "Grafana", icon: "/images/services/Grafana_logo.svg" },
            { name: "GitLab", icon: "/images/services/GitLab_logo.svg" },
            { name: "HashiCorp Vault", icon: "/images/services/hashicorp-icon.svg" },
            { name: "Istio", icon: "/images/services/1024px-OpenAI_Logo.svg.png" }
        ],

        roi: {
            title: "Strategic Advantage",
            description: "Leverage leverage against cloud providers and ensure 100% business continuity.",
            stats: [
                { label: "Uptime Guarantee", value: 99.999, prefix: "", suffix: "%", color: "#10B981" },
                { label: "Cost Efficiency", value: 20, prefix: "+", suffix: "%", color: "#3B82F6" },
                { label: "Vendor Risk", value: 0, prefix: "", suffix: "%", color: "#F59E0B" }
            ]
        },

        useCases: [
            { title: "Disaster Recovery", description: "Primary on AWS, hot standby on Azure.", tags: ["Resilience", "DR"] },
            { title: "Regulatory Compliance", description: "Keep data in specific EU regions via local providers.", tags: ["GDPR", "Data"] },
            { title: "High Performance", description: "Use GCP for AI training and AWS for serving.", tags: ["AI", "Compute"] }
        ],

        marketTrends: {
            title: "Multi-Cloud Reality",
            description: "Enterprises are rapidly adopting >1 cloud provider.",
            series: [
                { year: "2023", value: 60, label: "Single Cloud", color: "#9CA3AF" },
                { year: "2024", value: 85, label: "Multi-Cloud", color: "#3B82F6" }
            ]
        },

        comparison: {
            title: "Why Multi-Cloud?",
            headers: ["Feature", "Our Orchestration", "Siloed Clouds", "Single Cloud"],
            rows: [
                { feature: "Visibility", us: "Unified", others: "Fragmented", saas: "Good" },
                { feature: "Flexibility", us: "Maximum", others: "Low", saas: "Locked" },
                { feature: "Resilience", us: "Extreme", others: "Manual", saas: "Region Dependent" }
            ]
        },

        testimonials: [
            { quote: "When AWS had an outage, we failed over to Azure in 3 minutes. Zero customer impact.", author: "James R.", role: "VP Eng, SaaS Co", image: "/images/services/unsplash-1519085360753-af0119f7cbe7.jpg" }
        ],
        faq: [
            { question: "Is multi-cloud harder to manage?", answer: "It can be, which is why we implement unified control planes like Kubernetes/Rancher." },
            { question: "Is it more expensive?", answer: "Not if done right. We arbitrage costs; otherwise, data egress fees can bite." }
        ]
    },

    "serverless": {
        category: "Infrastructure",
        title: "Serverless Architecture",
        subtitle: "Build apps that scale to zero and handle millions of requests without managing a single server.",
        heroImage: "/images/services/unsplash-1451187580459-43490279c0fa.jpg", /* Lightning/Abstract */

        overview: {
            text: "Stop paying for idle time. Serverless architecture allows you to run code only when an event triggers it—be it an API call, a database change, or a file upload. We build event-driven systems using AWS Lambda, Azure Functions, and Google Cloud Run that automatically scale from zero to infinity, dramatically reducing operational overhead.",
            image: "/images/services/unsplash-1550751827-4bd374c3f58b.jpg", /* Tech/Code */
            benefits: [
                "Pay Only for Execution Time",
                "Instant Infinite Scaling",
                "Zero Server Maintenance",
                "Faster Time to Market",
                "Microservices Native"
            ]
        },

        features: [
            { title: "Function as a Service", description: "Stateless compute containers (Lambda/Functions) that run on demand.", icon: "Cpu" },
            { title: "Event Bus", description: "Decoupled architecture using EventBridge/Kafka for async processing.", icon: "Activity" },
            { title: "API Gateway", description: "Secure, scalable entry points for your frontend clients.", icon: "Globe" },
            { title: "NoSQL Database", description: "DynamoDB/CosmosDB for millisecond-latency data access.", icon: "Database" },
            { title: "Auth & Identity", description: "Cognito/Auth0 integration for seamless user management.", icon: "Shield" },
            { title: "Edge Compute", description: "Run logic at the CDN edge for ultra-low latency.", icon: "Zap" }
        ],

        techStack: [
            { name: "AWS Lambda", icon: "/images/services/AWS_Lambda_Architecture_Logo.svg" },
            { name: "Azure Functions", icon: "/images/services/microsoft_azure-icon.svg" },
            { name: "Google Cloud Run", icon: "/images/services/Google_Cloud_logo.svg" },
            { name: "Vercel", icon: "/images/services/Vercel_logo_black.svg" },
            { name: "Netlify", icon: "/images/services/netlify-icon.svg" },
            { name: "DynamoDB", icon: "/images/services/DynamoDB.png" },
            { name: "MongoDB", icon: "/images/services/MongoDB_Logo.svg" },
            { name: "Node.js", icon: "/images/services/Node.js_logo.svg" }
        ],

        roi: {
            title: "Efficiency Gains",
            description: "Serverless destroys the concept of 'over-provisioning'.",
            stats: [
                { label: "Cost Savings", value: 60, prefix: "", suffix: "%", color: "#10B981" },
                { label: "Ops Time", value: 90, prefix: "-", suffix: "%", color: "#3B82F6" },
                { label: "Scale Time", value: 100, prefix: "", suffix: "ms", color: "#F59E0B" }
            ]
        },

        useCases: [
            { title: "Image Processing", description: "Generate thumbnails instantly on S3 upload.", tags: ["Media", "Async"] },
            { title: "Real-time API", description: "Chat backends that scale for millions of users.", tags: ["API", "Scale"] },
            { title: "Scheduled Tasks", description: "Cron jobs without the cron server.", tags: ["Ops", "Automation"] }
        ],

        marketTrends: {
            title: "Serverless Adoption",
            description: "The fastest growing cloud service model.",
            series: [
                { year: "2023", value: 30, label: "Experimenting", color: "#F87171" },
                { year: "2024", value: 50, label: "Production", color: "#FBBF24" },
                { year: "2025", value: 75, label: "Mainstream", color: "#34D399" }
            ]
        },

        comparison: {
            title: "Serverless vs Containers",
            headers: ["Feature", "Serverless", "Containers (K8s)", "Virtual Machines"],
            rows: [
                { feature: "Management", us: "None", others: "High", saas: "Very High" },
                { feature: "Scaling", us: "Instant", others: "Fast", saas: "Slow" },
                { feature: "Cost", us: "Per Request", others: "Per Hour", saas: "Per Hour" }
            ]
        },

        testimonials: [
            { quote: "We scaled to 1M users in a week and our bill was $50. Serverless is magic.", author: "Ben T.", role: "Founder, Viral App", image: "/images/services/unsplash-1506794778202-cad84cf45f1d.jpg" }
        ],
        faq: [
            { question: "What about cold starts?", answer: "We optimize package sizes and use provisioned concurrency to eliminate perceived lag." },
            { question: "Is it vendor lock-in?", answer: "Frameworks like Serverless Framework help allow some portability, but yes, it's stickier than K8s." }
        ]
    },

    "network-services": {
        category: "Infrastructure",
        title: "Enterprise Networking",
        subtitle: "Next-gen connectivity, SD-WAN, and SASE security for the distributed workforce.",
        heroImage: "/images/services/unsplash-1451187580459-43490279c0fa.jpg", /* Network/Lights */

        overview: {
            text: "The perimeter is gone. Modern networking is about connecting users to apps securely, regardless of location. We architect software-defined networks (SD-WAN) and Secure Access Service Edge (SASE) solutions that replace clunky VPNs with fast, zero-trust connectivity. We ensure your data flows smoothly and securely across the globe.",
            image: "/images/services/unsplash-1517433456452-f9633a875f6f.jpg", /* Cables/Tech */
            benefits: [
                "Zero Trust Network Access (ZTNA)",
                "SD-WAN Optimization",
                "Global MPLS Replacement",
                "IoT & 5G Private Networks",
                "DDoS & Edge Protection"
            ]
        },

        features: [
            { title: "SASE Implementation", description: "Merge security and networking into one cloud service.", icon: "Shield" },
            { title: "SD-WAN", description: "Intelligent routing over broadband + MPLS for cost/perf balance.", icon: "Globe" },
            { title: "VPN Replacement", description: "User-friendly ZTNA that doesn't kill productivity.", icon: "CheckCircle2" },
            { title: "Cloud Connect", description: "Direct ExpressRoute/DirectConnect links to public cloud.", icon: "Cpu" },
            { title: "Wi-Fi 6 Design", description: "High-density wireless campus networks.", icon: "Activity" },
            { title: "Network Analytics", description: "AI-driven visibility into traffic patterns and anomalies.", icon: "Target" }
        ],

        techStack: [
            { name: "Cisco", icon: "/images/services/Cisco_logo.svg" },
            { name: "Juniper", icon: "/images/services/Juniper_Networks_logo.svg" },
            { name: "Palo Alto", icon: "/images/services/Palo_Alto_Networks_logo.svg" },
            { name: "Cloudflare", icon: "/images/services/Cloudflare_Logo.svg" },
            { name: "Fortinet", icon: "/images/services/Fortinet_logo.svg" },
            { name: "Aruba", icon: "/images/services/Aruba_Networks_logo.svg" },
            { name: "Zscaler", icon: "/images/services/zscaler-icon.svg" },
            { name: "Meraki", icon: "/images/services/Akamai_logo.svg" }
        ],

        roi: {
            title: "Connectivity ROI",
            description: "Better speed, lower cost, higher security.",
            stats: [
                { label: "MPLS Savings", value: 50, prefix: "-", suffix: "%", color: "#10B981" },
                { label: "User Latency", value: 30, prefix: "-", suffix: "%", color: "#3B82F6" },
                { label: "Security Incidents", value: 80, prefix: "-", suffix: "%", color: "#F59E0B" }
            ]
        },

        useCases: [
            { title: "Branch Office", description: "Connect 500 retail locations securely via SD-WAN.", tags: ["Retail", "SD-WAN"] },
            { title: "Remote Work", description: "Secure access for 5,000 WFH employees.", tags: ["ZTNA", "Remote"] },
            { title: "Factory IoT", description: "Private 5G for autonomous robots.", tags: ["IoT", "5G"] }
        ],

        marketTrends: {
            title: "Network Evolution",
            description: "The move from hardware-centric to software-defined.",
            series: [
                { year: "2023", value: 40, label: "MPLS", color: "#F87171" },
                { year: "2024", value: 60, label: "SD-WAN", color: "#FBBF24" },
                { year: "2025", value: 85, label: "SASE", color: "#34D399" }
            ]
        },

        comparison: {
            title: "Networking 2.0",
            headers: ["Feature", "SASE/SD-WAN", "Traditional VPN", "MPLS"],
            rows: [
                { feature: "User Exp", us: "Seamless", others: "Frustrating", saas: "N/A" },
                { feature: "Cost", us: "Low/Medium", others: "Low", saas: "Very High" },
                { feature: "Security", us: "Integrated", others: "Perimeter", saas: "Limited" }
            ]
        },

        testimonials: [
            { quote: "Our remote team says the new ZTNA solution feels like being in the office. Fast and easy.", author: "Karen W.", role: "CIO, Healthcare", image: "/images/services/unsplash-1580489944761-15a19d654956.jpg" }
        ],
        faq: [
            { question: "Can we keep some MPLS?", answer: "Yes, Hybrid WAN is a common transition strategy we support." },
            { question: "Is SASE hard to deploy?", answer: "It requires policy planning, but we automate the rollout via cloud controllers." }
        ]
    },

    "web-hosting": {
        category: "Infrastructure",
        title: "Web Hosting & CDN",
        subtitle: "Global content delivery with sub-second load times and 100% uptime SLA.",
        heroImage: "/images/services/unsplash-1550751827-4bd374c3f58b.jpg", /* Server/Speed */

        overview: {
            text: "Speed is a feature. We engineer high-performance hosting solutions using global Content Delivery Networks (CDNs) and Edge Computing. Whether it's a static marketing site or a dynamic web app, we ensure your content reaches users instantly, anywhere in the world. We handle the SSL, the DDoS protection, and the scaling so you don't have to.",
            image: "/images/services/unsplash-1451187580459-43490279c0fa.jpg", /* Globe/Speed */
            benefits: [
                "Global Edge Network (250+ PoPs)",
                "DDoS Protection Included",
                "Automated SSL Management",
                "Instant Cache Purging",
                "HTTP/3 & QUIC Support"
            ]
        },

        features: [
            { title: "Edge Caching", description: "Cache content milliseconds away from your users.", icon: "Zap" },
            { title: "WAF Security", description: "Web Application Firewall to block bots and attacks.", icon: "Shield" },
            { title: "Image Opt", description: "Auto-resize and compress images for mobile.", icon: "Activity" },
            { title: "Serverless Edge", description: "Run custom logic (A/B testing, auth) at the edge.", icon: "Cpu" },
            { title: "DNS Management", description: "Fastest managed DNS in the world.", icon: "Globe" },
            { title: "Analytics", description: "Real-time logs and bandwidth usage insights.", icon: "Target" }
        ],

        techStack: [
            { name: "Cloudflare", icon: "/images/services/Cloudflare_Logo.svg" },
            { name: "Akamai", icon: "/images/services/Akamai_logo.svg" },
            { name: "Fastly", icon: "/images/services/Fastly_logo.svg" },
            { name: "AWS CloudFront", icon: "/images/services/Amazon_Web_Services_Logo.svg" },
            { name: "Nginx", icon: "/images/services/Nginx_logo.svg" },
            { name: "Varnish", icon: "/images/services/Varnish_Software_logo_2017.svg" },
            { name: "WordPress", icon: "/images/services/WordPress_blue_logo.svg" },
            { name: "Jamstack", icon: "/images/services/Amazon_Web_Services_Logo.svg" }
        ],

        roi: {
            title: "Performance ROI",
            description: "Faster sites rank better and convert more.",
            stats: [
                { label: "Conversion Rate", value: 15, prefix: "+", suffix: "%", color: "#10B981" },
                { label: "SEO Ranking", value: 20, prefix: "+", suffix: "pos", color: "#3B82F6" },
                { label: "Bounce Rate", value: 40, prefix: "-", suffix: "%", color: "#F59E0B" }
            ]
        },

        useCases: [
            { title: "Media Streaming", description: "Deliver 4K video without buffering.", tags: ["Media", "CDN"] },
            { title: "E-commerce", description: "Instant page loads for product catalogs.", tags: ["Retail", "Speed"] },
            { title: "Global Events", description: "Handle millions of concurrent users during launches.", tags: ["Scale", "Web"] }
        ],

        marketTrends: {
            title: "Web Standards",
            description: "The web is getting faster and more secure.",
            series: [
                { year: "2023", value: 70, label: "HTTPS", color: "#60A5FA" },
                { year: "2024", value: 85, label: "HTTP/3", color: "#34D399" },
                { year: "2025", value: 95, label: "Edge First", color: "#FBBF24" }
            ]
        },

        comparison: {
            title: "Hosting Tiers",
            headers: ["Feature", "Enterprise CDN", "Standard VPS", "Shared Hosting"],
            rows: [
                { feature: "Speed", us: "Global Edge", others: "Region Locked", saas: "Slow" },
                { feature: "Uptime", us: "100% SLA", others: "99.9%", saas: "99%" },
                { feature: "Security", us: "Enterprise WAF", others: "Basic Firewall", saas: "None" }
            ]
        },

        testimonials: [
            { quote: "Our LCP (Largest Contentful Paint) dropped to 0.8s globally. Amazing performance.", author: "Tom B.", role: "Web Lead, Agency", image: "/images/services/unsplash-1542909168-82c3e7fdca5c.jpg" }
        ],
        faq: [
            { question: "Do you support WordPress?", answer: "Yes, we have a specialized high-performance stack for WP." },
            { question: "What is Edge Computing?", answer: "It means running code at the closest server to the user, not in a central data center." }
        ]
    },
    "zero-trust": {
        category: "Security",
        title: "Zero Trust Architecture",
        subtitle: "Never trust, always verify. Securing your workforce, workloads, and workplace with identity-centric security.",
        heroImage: "/images/services/unsplash-1555949963-ff9fe0c870eb.jpg", /* Lock/Security */

        overview: {
            text: "Traditional perimeter security is dead. In a world of remote work and cloud apps, identity is the new firewall. We implement Zero Trust Architectures (ZTA) that enforce least-privilege access, simplify user sign-on, and prevent lateral movement. Whether you’re accessing a legacy app or a SaaS platform, every request is verified, every time.",
            image: "/images/services/unsplash-1472099645785-5658abf4ff4e.jpg", /* Shield/Lock */
            benefits: [
                "Eliminate VPN Reliance",
                "Prevent Lateral Movement",
                "Passwordless Authentication",
                "Micro-segmentation",
                "Seamless Remote Access"
            ]
        },

        features: [
            { title: "Identity (IAM)", description: "Single Sign-On (SSO) and MFA for all your apps.", icon: "Shield" },
            { title: "Device Trust", description: "Only allow healthy, managed devices to access data.", icon: "CheckCircle2" },
            { title: "Micro-segmentation", description: "Ring-fence critical workloads to stop attackers in their tracks.", icon: "Target" },
            { title: "Least Privilege", description: "Just-in-Time (JIT) access for admins; no standing privileges.", icon: "Lock" },
            { title: "API Security", description: "Secure service-to-service communication with mTLS.", icon: "Zap" },
            { title: "Continuous Auth", description: "Re-verify session risk scores in real-time.", icon: "Activity" }
        ],

        techStack: [
            { name: "Okta", icon: "/images/services/Okta_logo.svg" },
            { name: "Zscaler", icon: "/images/services/zscaler-icon.svg" },
            { name: "Palo Alto Networks", icon: "/images/services/Palo_Alto_Networks_logo.svg" },
            { name: "CrowdStrike", icon: "/images/services/CrowdStrike_logo.svg" },
            { name: "HashiCorp Boundary", icon: "/images/services/hashicorp-icon.svg" },
            { name: "Microsoft Entra", icon: "/images/services/Microsoft_Azure.svg" }, /* Using Azure icon which represents Entra/AD suite well */
            { name: "Cloudflare Access", icon: "/images/services/Cloudflare_Logo.svg" }
        ],

        roi: {
            title: "Security ROI",
            description: "Zero Trust isn't just secure; it's faster for users.",
            stats: [
                { label: "Breach Risk", value: 80, prefix: "-", suffix: "%", color: "#10B981" },
                { label: "Login Speed", value: 50, prefix: "+", suffix: "%", color: "#3B82F6" },
                { label: "VPN Tickets", value: 95, prefix: "-", suffix: "%", color: "#F59E0B" }
            ]
        },

        useCases: [
            { title: "Remote Work", description: "Employees access apps securely from coffee shops without VPN.", tags: ["Remote", "Access"] },
            { title: "M&A Integration", description: "Grant acquired entities access to specific apps in days, not months.", tags: ["Growth", "M&A"] },
            { title: "Privileged Access", description: "Developers get temporary access to prod DBs with audit trails.", tags: ["DevOps", "Security"] }
        ],

        marketTrends: {
            title: "Identity Trends",
            description: "Identity is replacing network security.",
            series: [
                { year: "2023", value: 40, label: "MFA", color: "#F87171" },
                { year: "2024", value: 65, label: "Passwordless", color: "#FBBF24" },
                { year: "2025", value: 90, label: "Zero Trust", color: "#34D399" }
            ]
        },

        comparison: {
            title: "Zero Trust vs VPN",
            headers: ["Feature", "Zero Trust (ZTA)", "Traditional VPN", "Public Exposure"],
            rows: [
                { feature: "Access", us: "App-Level", others: "Network-Level", saas: "Open" },
                { feature: "User Exp", us: "Invisible", others: "Clunky", saas: "Risky" },
                { feature: "Lateral Move", us: "Blocked", others: "Possible", saas: "High Risk" }
            ]
        },

        testimonials: [
            { quote: "Onboarding used to take a week. With Zero Trust, new hires have access in 5 minutes.", author: "Mike R.", role: "CISO, Fintech", image: "/images/services/unsplash-1519085360753-af0119f7cbe7.jpg" }
        ],
        faq: [
            { question: "Is this just for large corps?", answer: "No, even startups need to secure their SaaS apps (Google Workspace, Slack, AWS)." },
            { question: "Do we replace our firewall?", answer: "Eventually, yes for users. Firewalls remain for server-to-server traffic." }
        ]
    },

    "soc-siem": {
        category: "Security",
        title: "SOC & SIEM Services",
        subtitle: "24/7/365 threat monitoring, detection, and automated response.",
        heroImage: "/images/services/unsplash-1550751827-4bd374c3f58b.jpg", /* Matrix/Ops */

        overview: {
            text: "Sleep soundly while our Security Operations Center (SOC) watches the wall. We aggregate logs from every corner of your estate—cloud, endpoint, network, identity—into a next-gen SIEM. Our AI-driven detection engine spots anomalies in real-time, and our SOAR playbooks shut down threats before they become breaches.",
            image: "/images/services/unsplash-1563986768609-322da13575f3.jpg", /* Digital Map */
            benefits: [
                "24/7 Eyes on Glass",
                "Automated Threat Containment",
                "Compliance Reporting (PCI/SOC2)",
                "Threat Hunting Experts",
                "Dark Web Monitoring"
            ]
        },

        features: [
            { title: "Real-time SIEM", description: "Ingest Terabytes of logs instantly for correlation.", icon: "Activity" },
            { title: "SOAR Automation", description: "Automated playbooks to block IPs and disable users.", icon: "Zap" },
            { title: "UEBA", description: "User Entity Behavior Analytics to catch insider threats.", icon: "Target" },
            { title: "Threat Intel", description: "Feeds from global sources to block known bad actors.", icon: "Globe" },
            { title: "Forensics", description: "Deep dive investigation tools for root cause analysis.", icon: "Search" },
            { title: "Incident Response", description: "Retainer-based SWAT team for active breaches.", icon: "Shield" }
        ],

        techStack: [
            { name: "Splunk", icon: "/images/services/Splunk_Logo.svg" },
            { name: "Datadog", icon: "/images/services/Datadog_logo.svg" },
            { name: "Elastic Security", icon: "/images/services/Elasticsearch_logo_colored_2014.svg" },
            { name: "Sumo Logic", icon: "/images/services/sumologic-icon.svg" },
            { name: "Microsoft Sentinel", icon: "/images/services/Microsoft_Azure.svg" },
            { name: "CrowdStrike", icon: "/images/services/CrowdStrike_logo.svg" },
            { name: "Wiz", icon: "/images/services/Wiz_logo.svg" }
        ],

        roi: {
            title: "Operational Efficiency",
            description: "Reduce alert fatigue and mean time to respond (MTTR).",
            stats: [
                { label: "Alert Noise", value: 90, prefix: "-", suffix: "%", color: "#10B981" },
                { label: "MTTR", value: 5, prefix: "", suffix: "min", color: "#3B82F6" },
                { label: "Compliance Cost", value: 40, prefix: "-", suffix: "%", color: "#F59E0B" }
            ]
        },

        useCases: [
            { title: "Ransomware Defense", description: "Detect encryption behavior and isolate host instantly.", tags: ["Malware", "Defense"] },
            { title: "Insider Threat", description: "Alert when an employee downloads 5GB of sensitive data.", tags: ["Data", "HR"] },
            { title: "Audit Trail", description: "Retain 1 year of logs for forensic compliance.", tags: ["Audit", "Logs"] }
        ],

        marketTrends: {
            title: "Threat Landscape",
            description: "Attacks are getting faster; humans can't keep up.",
            series: [
                { year: "2023", value: 45, label: "Manual SOC", color: "#F87171" },
                { year: "2024", value: 70, label: "AI Assisted", color: "#FBBF24" },
                { year: "2025", value: 95, label: "Fully Auto", color: "#34D399" }
            ]
        },

        comparison: {
            title: "Managed SOC vs DIY",
            headers: ["Metric", "Our Managed SOC", "Internal DIY SOC", "No SOC"],
            rows: [
                { feature: "Cost", us: "Predictable Ops", others: "High (Staffing)", saas: "Breach Cost" },
                { feature: "Coverage", us: "24/7/365", others: "9-5 Mon-Fri", saas: "None" },
                { feature: "Expertise", us: "Global Team", others: "Limited", saas: "None" }
            ]
        },

        testimonials: [
            { quote: "The team caught a credential stuffing attack at 2AM on a Sunday. Saved us millions.", author: "Sarah L.", role: "CTO, Healthcare", image: "/images/services/unsplash-1573496359142-b8d87734a5a2.jpg" }
        ],
        faq: [
            { question: "Do I need a SIEM?", answer: "If you have compliance requirements (PCI, HIPAA, SOC2) or care about visibility, yes." },
            { question: "Is data stored locally?", answer: "We support data residency requirements for EU/US/APAC regions." }
        ]
    },

    "endpoint-security": {
        category: "Security",
        title: "Endpoint Protection",
        subtitle: "Stop malware, ransomware, and fileless attacks with AI-driven EDR/XDR.",
        heroImage: "/images/services/unsplash-1473341304170-971dccb5ac1e.jpg", /* Shield/Code */

        overview: {
            text: "Antivirus is obsolete. Today's threats don't always use files; they use memory, scripts, and trusted system tools. We deploy robust Endpoint Detection and Response (EDR) agents that monitor behavior, not just signatures. If a laptop gets infected, we isolate it from the network instantly, preventing the spread of ransomware.",
            image: "/images/services/unsplash-1483478550801-ceba5fe50e8e.jpg", /* Laptop/Lock */
            benefits: [
                "Next-Gen Antivirus (NGAV)",
                "Ransomware Rollback",
                "Device Control (USB)",
                "Automated Isolation",
                "Threat Hunting"
            ]
        },

        features: [
            { title: "Behavioral AI", description: "Detect attacks based on technique (MITRE ATT&CK), not hash.", icon: "Cpu" },
            { title: "Network Isolation", description: "One-click quarantine of infected devices.", icon: "Lock" },
            { title: "Remote Shell", description: "Securely access devices for forensic investigation.", icon: "Terminal" },
            { title: "Vulnerability Mgmt", description: "Identify unpatched apps (Chrome, Zoom, Adobe).", icon: "Activity" },
            { title: "Mobile Defense", description: "Protect iOS and Android devices from phishing.", icon: "Smartphone" },
            { title: "Rollback", description: "Restore files encrypted by ransomware to their previous state.", icon: "RotateCcw" }
        ],

        techStack: [
            { name: "CrowdStrike", icon: "/images/services/CrowdStrike_logo.svg" },
            { name: "SentinelOne", icon: "/images/services/SentinelOne_logo.svg" },
            { name: "Microsoft Defender", icon: "/images/services/Microsoft_Defender_Security_Center.svg" },
            { name: "Carbon Black", icon: "/images/services/vmware_carbonblack-icon.svg" },
            { name: "Sophos", icon: "/images/services/Sophos_logo.svg" },
            { name: "Trend Micro", icon: "/images/services/Trend_Micro_logo.svg" },
            { name: "Jamf", icon: "/images/services/Jamf_Logo.svg" }
        ],

        roi: {
            title: "Breach Prevention",
            description: "The cost of a tool vs. the cost of a breach.",
            stats: [
                { label: "Dwell Time", value: 99, prefix: "-", suffix: "%", color: "#10B981" },
                { label: "Remediation", value: 0, prefix: "$", suffix: " cost", color: "#3B82F6" },
                { label: "Coverage", value: 100, prefix: "", suffix: "%", color: "#F59E0B" }
            ]
        },

        useCases: [
            { title: "Remote Workers", description: "Protect laptops on insecure home Wi-Fi networks.", tags: ["WFH", "Endpoint"] },
            { title: "Server Protection", description: "Lock down Linux and Windows servers from crypto-miners.", tags: ["Server", "Cloud"] },
            { title: "USB Control", description: "Block USB sticks to prevent data exfiltration.", tags: ["DLP", "Hardware"] }
        ],

        marketTrends: {
            title: "Endpoint Evolution",
            description: "From AV to EDR to XDR.",
            series: [
                { year: "2023", value: 30, label: "Legacy AV", color: "#F87171" },
                { year: "2024", value: 60, label: "EDR", color: "#FBBF24" },
                { year: "2025", value: 85, label: "XDR", color: "#34D399" }
            ]
        },

        comparison: {
            title: "NGAV vs Legacy",
            headers: ["Feature", "Our NGAV/EDR", "Legacy Antivirus", "No Protection"],
            rows: [
                { feature: "Detection", us: "AI/Behavior", others: "Signatures", saas: "None" },
                { feature: "Response", us: "Auto-Kill", others: "Alert Only", saas: "Panic" },
                { feature: "Forensics", us: "Full Flight Data", others: "None", saas: "None" }
            ]
        },

        testimonials: [
            { quote: "SentinelOne rolled back a ransomware attack on our HR laptop in 30 seconds. Incredible.", author: "James T.", role: "SysAdmin, Logistics", image: "/images/services/unsplash-1507003211169-0a1dd7228f2d.jpg" }
        ],
        faq: [
            { question: "Does it slow down PCs?", answer: "No, modern agents are lightweight (<1% CPU) compared to legacy bloatware." },
            { question: "Mac and Linux?", answer: "Yes, we support Windows, macOS, and major Linux distributions." }
        ]
    },

    "cloud-security": {
        category: "Security",
        title: "Cloud Security (CNAPP)",
        subtitle: "Complete visibility and protection for your AWS, Azure, and GCP environments.",
        heroImage: "/images/services/unsplash-1451187580459-43490279c0fa.jpg", /* Cloud/Globe */

        overview: {
            text: "Cloud security is complex; misconfigurations are the #1 cause of breaches. We deploy Cloud Native Application Protection Platforms (CNAPP) that scan your entire cloud estate agentlessly. We find open S3 buckets, over-privileged IAM roles, and unpatched containers instantly. Secure your build pipeline and your runtime environment.",
            image: "/images/services/unsplash-1485827404703-89b55fcc595e.jpg", /* Cloud/Lock */
            benefits: [
                "Agentless Scanning",
                "Graph-based Risk Context",
                "Container Security",
                "IaC Scanning",
                "Just-in-Time Access"
            ]
        },

        features: [
            { title: "CSPM", description: "Cloud Security Posture Management to check compliance (CIS/NIST).", icon: "CheckSquare" },
            { title: "CIEM", description: "Cloud Infrastructure Entitlement Management to fix IAM permissions.", icon: "UserCheck" },
            { title: "CWPP", description: "Cloud Workload Protection Platform for runtime threats.", icon: "Shield" },
            { title: "Vulnerability Mgmt", description: "Find liabilities in VMs, serverless, and containers.", icon: "Search" },
            { title: "Attack Path Analysis", description: "Visualize how an attacker could move from a public IP to a DB.", icon: "Map" },
            { title: "Code Security", description: "Scan Terraform/K8s manifests for errors before deploy.", icon: "Code" }
        ],

        techStack: [
            { name: "Wiz", icon: "/images/services/Wiz_logo.svg" },
            { name: "Prisma Cloud", icon: "/images/services/Palo_Alto_Networks_logo.svg" },
            { name: "Orca Security", icon: "/images/services/Aruba_Networks_logo.svg" },
            { name: "Lacework", icon: "/images/services/Lacework_logo_2024.svg" },
            { name: "Snyk", icon: "/images/services/Snyk_logo.svg" },
            { name: "Aqua Security", icon: "/images/services/Aqua_Security_logo.svg" },
            { name: "AWS Security Hub", icon: "/images/services/Amazon_Web_Services_Logo.svg" }
        ],

        roi: {
            title: "Risk Reduction",
            description: "Fix the risks that actually matter.",
            stats: [
                { label: "Critical Issues", value: 90, prefix: "-", suffix: "%", color: "#10B981" },
                { label: "Audit Time", value: 75, prefix: "-", suffix: "%", color: "#3B82F6" },
                { label: "Dev Adoption", value: 100, prefix: "", suffix: "%", color: "#F59E0B" }
            ]
        },

        useCases: [
            { title: "Log4j Discovery", description: "Find every instance of a vulnerable library across 1000 VMs instantly.", tags: ["Vuln", "Speed"] },
            { title: "Compliance Drift", description: "Alert when a dev opens a database port to the public internet.", tags: ["Ops", "Sec"] },
            { title: "Least Privilege", description: "Remove 5,000 unused permissions from AWS roles.", tags: ["IAM", "Clean"] }
        ],

        marketTrends: {
            title: "Cloud Sec Adoption",
            description: "Shift from agents to agentless graphs.",
            series: [
                { year: "2023", value: 20, label: "CNAPP", color: "#F87171" },
                { year: "2024", value: 50, label: "Agentless", color: "#FBBF24" },
                { year: "2025", value: 80, label: "Integrated", color: "#34D399" }
            ]
        },

        comparison: {
            title: "Agentless vs Agents",
            headers: ["Feature", "Our Agentless CNAPP", "Legacy Agents", "Manual Audits"],
            rows: [
                { feature: "Coverage", us: "100% (API)", others: "Partial (Install)", saas: "Sample" },
                { feature: "Friction", us: "Zero", others: "High", saas: "High" },
                { feature: "Context", us: "Cross-Layer", others: "Siloed", saas: "None" }
            ]
        },

        testimonials: [
            { quote: "Wiz showed us that our 'private' database was actually exposed via a load balancer. Scariest value add ever.", author: "Alex D.", role: "Cloud Architect", image: "/images/services/unsplash-1542596594-649edbc13630.jpg" }
        ],
        faq: [
            { question: "Do you need root access?", answer: "No, we use read-only APIs to scan disk snapshots and metadata." },
            { question: "Does it support Multi-Cloud?", answer: "Yes, get a single view across AWS, Azure, GCP, and OCI." }
        ]
    },

    "compliance": {
        category: "Security",
        title: "Compliance & GRC",
        subtitle: "Automate your SOC2, HIPAA, and ISO 27001 journey. Get audit-ready in weeks.",
        heroImage: "/images/services/unsplash-1450101499163-c8848c66ca85.jpg", /* Paperwork/Pen */

        overview: {
            text: "Compliance doesn't have to be a nightmare of spreadsheets and screenshots. We implement automated GRC (Governance, Risk, and Compliance) platforms that connect to your infrastructure and continuously monitor controls. We help you achieve SOC2, HIPAA, GDPR, and ISO 27001 certification faster, closing deals with enterprise clients.",
            image: "/images/services/unsplash-1554224155-8d04cb21cd6c.jpg", /* Meeting/Audit */
            benefits: [
                "Automated Evidence Collection",
                "Continuous Control Monitoring",
                "Policy Management Templates",
                "Vendor Risk Management",
                "Streamlined Internal Audits"
            ]
        },

        features: [
            { title: "Continuous Monitoring", description: "Daily checks of AWS, Github, and HR controls.", icon: "Activity" },
            { title: "Policy Library", description: "Pre-written, auditor-approved policy templates.", icon: "FileText" },
            { title: "Staff Training", description: "Automated security awareness training tracking.", icon: "Users" },
            { title: "Vendor Risk", description: "Send and track security questionnaires to vendors.", icon: "Truck" },
            { title: "Asset Inventory", description: "Live view of all laptops and cloud resources.", icon: "Monitor" },
            { title: "Audit Hub", description: "Give auditors a restricted login to view evidence.", icon: "Lock" }
        ],

        techStack: [
            { name: "Drata", icon: "/images/services/Drata_Logo.svg" },
            { name: "Vanta", icon: "/images/services/Vanta_logo.svg" },
            { name: "OneTrust", icon: "/images/services/OneTrust_logo.svg" },
            { name: "Sprig", icon: "/images/services/Sprig_Logo.svg" }, /* Generic GRC */
            { name: "AWS Audit Manager", icon: "/images/services/Amazon_Web_Services_Logo.svg" },
            { name: "KnowBe4", icon: "/images/services/KnowBe4_logo.svg" }
        ],

        roi: {
            title: "Compliance Velocity",
            description: "Get certified faster and close bigger deals.",
            stats: [
                { label: "Time to SOC2", value: 50, prefix: "-", suffix: "%", color: "#10B981" },
                { label: "Manual Work", value: 80, prefix: "-", suffix: "%", color: "#3B82F6" },
                { label: "Audit Costs", value: 30, prefix: "-", suffix: "%", color: "#F59E0B" }
            ]
        },

        useCases: [
            { title: "SOC2 Type 2", description: "Gather 6 months of evidence automatically for your period check.", tags: ["SaaS", "SOC2"] },
            { title: "HIPAA", description: "Ensure PHI is encrypted and access is logged for healthcare apps.", tags: ["Health", "HIPAA"] },
            { title: "Enterprise Sales", description: "Pass vendor security reviews instantly with a Trust Center.", tags: ["Sales", "Growth"] }
        ],

        marketTrends: {
            title: "Compliance Automation",
            description: "Moving from point-in-time audits to continuous trust.",
            series: [
                { year: "2023", value: 30, label: "Manual", color: "#F87171" },
                { year: "2024", value: 60, label: "Hybrid", color: "#FBBF24" },
                { year: "2025", value: 90, label: "Automated", color: "#34D399" }
            ]
        },

        comparison: {
            title: "Automated vs Manual",
            headers: ["Feature", "Automated GRC", "Consultant/Manual", "Do Nothing"],
            rows: [
                { feature: "Updates", us: "Daily", others: "Yearly", saas: "Never" },
                { feature: "Evidence", us: "Auto-Screenshots", others: "Manual Drag/Drop", saas: "None" },
                { feature: "Confidence", us: "High", others: "Medium", saas: "Fail" }
            ]
        },

        testimonials: [
            { quote: "We got SOC2 Type 1 certified in 3 weeks using this platform. Our enterprise pipeline unlocked overnight.", author: "Daniel H.", role: "CEO, SaaS Startup", image: "/images/services/unsplash-1599566150163-29194dcaad36.jpg" }
        ],
        faq: [
            { question: "Does this replace an auditor?", answer: "No, you still need a CPA firm (like Coalfire/Schellman), but this makes their job 10x faster." },
            { question: "What frameworks do you support?", answer: "SOC2, ISO 27001, HIPAA, GDPR, PCI-DSS, and NIST." }
        ]
    },
    "app-modernization": {
        category: "Engineering",
        title: "App Modernization",
        subtitle: "Transform legacy monoliths into cloud-native microservices. Scalable, resilient, and ready for the future.",
        heroImage: "/images/services/unsplash-1555099962-4199c345e5dd.jpg", /* Code/Refactor */

        overview: {
            text: "Legacy code is technical debt that creates risk. We don't just 'lift and shift'; we modernize. Using the Strangler Fig pattern, we incrementally refactor monolithic applications into containerized microservices. This improves maintainability, allows for independent scaling, and enables you to deploy new features in hours, not months.",
            image: "/images/services/unsplash-1461749280684-dccba630e2f6.jpg", /* Coding/Screen */
            benefits: [
                "Eliminate Technical Debt",
                "Scalable Microservices",
                "Containerization (Docker/K8s)",
                "API-First Architecture",
                "Database Refactoring"
            ]
        },

        features: [
            { title: "Strangler Fig Pattern", description: "Replace legacy functionality piece-by-piece with new microservices.", icon: "RotateCcw" },
            { title: "Containerization", description: "Package apps with dependencies for consistent runtime anywhere.", icon: "Box" },
            { title: "API Gateway", description: "Unified entry point for all your microservices.", icon: "Globe" },
            { title: "Event-Driven", description: "Switch from synchronous calls to async messaging (Kafka).", icon: "Zap" },
            { title: "Database Split", description: "Break apart the monolithic database into domain-specific stores.", icon: "Database" },
            { title: "Automated Testing", description: "High unit test coverage to ensure safe refactoring.", icon: "CheckCircle2" }
        ],

        techStack: [
            { name: "Docker", icon: "/images/services/Docker__28container_engine_29_logo.svg" },
            { name: "Kubernetes", icon: "/images/services/Kubernetes_logo_without_workmark.svg" },
            { name: "PostgreSQL", icon: "/images/services/Postgresql_elephant.svg" },
            { name: "MongoDB", icon: "/images/services/MongoDB_Logo.svg" },
            { name: "Redis", icon: "/images/services/Redis_Logo.svg" },
            { name: "Kafka", icon: "/images/services/asset-55.jpg" },
            { name: "Spring Boot", icon: "/images/services/Spring_Framework_Logo_2018.svg" },
            { name: ".NET Core", icon: "/images/services/.NET_Core_Logo.svg" }
        ],

        roi: {
            title: "Modernization Value",
            description: "Break free from the 'fear of changing code'.",
            stats: [
                { label: "Deploy Frequency", value: 10, prefix: "", suffix: "x", color: "#10B981" },
                { label: "Bug Rate", value: 60, prefix: "-", suffix: "%", color: "#3B82F6" },
                { label: "Maintenance", value: 40, prefix: "-", suffix: "%", color: "#F59E0B" }
            ]
        },

        useCases: [
            { title: "Mainframe Offload", description: "Move high-cost compute from COBOL to Java on AWS.", tags: ["Cost", "Legacy"] },
            { title: "SaaS Transformation", description: "Turn a single-tenant on-prem app into a multi-tenant cloud SaaS.", tags: ["SaaS", "Growth"] },
            { title: "Performance Fix", description: "Scale only the 'Checkout' service instead of the whole monolith.", tags: ["Scale", "Perf"] }
        ],

        marketTrends: {
            title: "Architecture Trends",
            description: "The world is moving to distributed systems.",
            series: [
                { year: "2023", value: 40, label: "Monolith", color: "#F87171" },
                { year: "2024", value: 60, label: "Services", color: "#FBBF24" },
                { year: "2025", value: 85, label: "Serverless", color: "#34D399" }
            ]
        },

        comparison: {
            title: "Microservices vs Monolith",
            headers: ["Feature", "Microservices", "Monolith", "SOA (Legacy)"],
            rows: [
                { feature: "Scaling", us: "Precise", others: "All or Nothing", saas: "Complex" },
                { feature: "Resilience", us: "Fault Tolerant", others: "Fragile", saas: "Medium" },
                { feature: "Tech Stack", us: "Polyglot", others: "Locked", saas: "Heavy" }
            ]
        },

        testimonials: [
            { quote: "We couldn't release features because of regression testing. Modernization unlocked our roadmap.", author: "Eric P.", role: "VP Eng, Insurance", image: "/images/services/unsplash-1560250097-0b93528c311a.jpg" }
        ],
        faq: [
            { question: "Do we have to rewrite everything?", answer: "No, we use the Strangler Pattern to migrate gradually, reducing risk." },
            { question: "Is complex ops required?", answer: "Yes, microservices require mature DevOps/K8s, which we also build for you." }
        ]
    },

    "web-app-dev": {
        category: "Engineering",
        title: "Web & Mobile Development",
        subtitle: "High-performance consumer facing apps built with React, Next.js, and Flutter.",
        heroImage: "/images/services/unsplash-1555421689-491a97ff2040.jpg", /* Team/Screen */

        overview: {
            text: "Your digital front door matters. We build pixel-perfect, highly responsive web and mobile applications that users love. Whether it's a Progressive Web App (PWA) with offline capabilities or a cross-platform mobile app, we focus on performance (Core Web Vitals), accessibility (WCAG), and conversion.",
            image: "/images/services/unsplash-1551650975-87deedd944c3.jpg", /* Mobile/Design */
            benefits: [
                "Cross-Platform (iOS/Android)",
                "Ultra-Fast Load Times",
                "SEO Optimized (SSR)",
                "Accessibility Compliance",
                "Desgin System Integration"
            ]
        },

        features: [
            { title: "PWA Support", description: "Installable web apps that work offline.", icon: "Smartphone" },
            { title: "Server-Side Rendering", description: "Next.js for perfect SEO and fast initial paint.", icon: "Zap" },
            { title: "Headless CMS", description: "Decoupled content management (Strapi/Contentful).", icon: "FileText" },
            { title: "Real-time Data", description: "WebSockets for chat, notifications, and live updates.", icon: "Activity" },
            { title: "Component Library", description: "Reusable UI kit (Storybook) for consistent branding.", icon: "Layout" },
            { title: "Analytics", description: "Built-in tracking for user journey optimization.", icon: "Target" }
        ],

        techStack: [
            { name: "React", icon: "/images/services/React-icon.svg" },
            { name: "Next.js", icon: "/images/services/Nextjs-logo.svg" }, /* White-friendly version or invert */
            { name: "TypeScript", icon: "/images/services/Typescript_logo_2020.svg" },
            { name: "Flutter", icon: "/images/services/Google-flutter-logo.png" },
            { name: "Node.js", icon: "/images/services/Node.js_logo.svg" },
            { name: "GraphQL", icon: "/images/services/GraphQL_Logo.svg" },
            { name: "Tailwind CSS", icon: "/images/services/Tailwind_CSS_Logo.svg" },
            { name: "Figma", icon: "/images/services/Figma-logo.svg" }
        ],

        roi: {
            title: "User Experience ROI",
            description: "Better UX = Better Business.",
            stats: [
                { label: "Conversion", value: 25, prefix: "+", suffix: "%", color: "#10B981" },
                { label: "Dev Time", value: 40, prefix: "-", suffix: "%", color: "#3B82F6" },
                { label: "App Store", value: 4.8, prefix: "", suffix: "stars", color: "#F59E0B" }
            ]
        },

        useCases: [
            { title: "E-commerce App", description: "React Native app sharing 90% code with web platform.", tags: ["Retail", "Mobile"] },
            { title: "Customer Portal", description: "Self-service dashboard for managing subscriptions.", tags: ["SaaS", "Dashboard"] },
            { title: "Marketing Site", description: "High-speed landing pages with 99/100 Lighthouse score.", tags: ["SEO", "Growth"] }
        ],

        marketTrends: {
            title: "Frontend Trends",
            description: "JavaScript runs the world.",
            series: [
                { year: "2023", value: 50, label: "CSR", color: "#F87171" },
                { year: "2024", value: 70, label: "SSR/SSG", color: "#FBBF24" },
                { year: "2025", value: 90, label: "Edge", color: "#34D399" }
            ]
        },

        comparison: {
            title: "Modern vs Legacy Web",
            headers: ["Feature", "Our React/Next.js", "Old jQuery/PHP", "No Code"],
            rows: [
                { feature: "Interactivity", us: "Instant", others: "Page Reloads", saas: "Limited" },
                { feature: "Scalability", us: "Enterprise", others: "Hard", saas: "Capped" },
                { feature: "SEO", us: "Advanced", others: "Basic", saas: "Generic" }
            ]
        },

        testimonials: [
            { quote: "Our mobile app feels native but was built in half the time using Flutter. Amazing work.", author: "Jessica K.", role: "Product Owner", image: "/images/services/unsplash-1573497019940-1c28c88b4f3e.jpg" }
        ],
        faq: [
            { question: "Why React?", answer: "It's the industry standard, ensuring you can always find developers to maintain it." },
            { question: "Native vs Cross-platform?", answer: "We recommend Cross-platform (Flutter/React Native) for 95% of use cases to save cost." }
        ]
    },

    "devsecops": {
        category: "Engineering",
        title: "DevSecOps",
        subtitle: "Automate code delivery and bake security into every commit.",
        heroImage: "/images/services/unsplash-1498084393753-b411b2d26b34.jpg", /* Pipeline/Abstract */

        overview: {
            text: "Stop throwing code over the wall. We implement world-class DevSecOps pipelines that automate testing, security scanning, and deployment. By shifting security left, we catch vulnerabilities during development, not after deployment. Our goal is enabling you to push code to production multiple times a day with total confidence.",
            image: "/images/services/unsplash-1500648767791-00dcc994a43e.jpg", /* CI/CD */
            benefits: [
                "Automated CI/CD Pipelines",
                "Infrastructure as Code (IaC)",
                "Security Scanning (SAST/DAST)",
                "Zero-Downtime Deployment",
                "GitOps Workflow"
            ]
        },

        features: [
            { title: "Continuous Integration", description: "Build and test every commit automatically.", icon: "RotateCcw" },
            { title: "Continuous Delivery", description: "Deploy to staging/prod with a single click approval.", icon: "Truck" },
            { title: "Secret Management", description: "No more passwords in plain text (Vault).", icon: "Lock" },
            { title: "Policy as Code", description: "Enforce compliance rules (OPA) in the pipeline.", icon: "CheckSquare" },
            { title: "Artifact Management", description: "Secure storage for Docker images and binaries.", icon: "Box" },
            { title: "Monitoring", description: "Feedback loops from prod back to dev.", icon: "Activity" }
        ],

        techStack: [
            { name: "Jenkins", icon: "/images/services/Jenkins_logo.svg" },
            { name: "GitLab CI", icon: "/images/services/GitLab_logo.svg" },
            { name: "GitHub Actions", icon: "/images/services/Octicons-mark-github.svg" },
            { name: "SonarQube", icon: "/images/services/sonarqube-icon.svg" },
            { name: "Prometheus", icon: "/images/services/Prometheus_software_logo.svg" },
            { name: "Ansible", icon: "/images/services/1024px-ChatGPT_logo.svg.png" },
            { name: "HashiCorp Vault", icon: "/images/services/hashicorp-icon.svg" },
            { name: "ArgoCD", icon: "/images/services/Argo-cd.svg" }
        ],

        roi: {
            title: "Operational Velocity",
            description: "Move fast without breaking things.",
            stats: [
                { label: "Deploy Time", value: 90, prefix: "-", suffix: "%", color: "#10B981" },
                { label: "Failure Rate", value: 1, prefix: "<", suffix: "%", color: "#3B82F6" },
                { label: "Recovery", value: 5, prefix: "", suffix: "min", color: "#F59E0B" }
            ]
        },

        useCases: [
            { title: "Blue/Green Deploy", description: "Switch users to new version with zero downtime.", tags: ["Ops", "Stability"] },
            { title: "Compliance Scan", description: "Fail the build if code contains AWS keys.", tags: ["Sec", "Auto"] },
            { title: "Ephemeral Envs", description: "Spin up a full test env for every Pull Request.", tags: ["Dev", "QA"] }
        ],

        marketTrends: {
            title: "Automation Trends",
            description: "Everything is becoming code.",
            series: [
                { year: "2023", value: 40, label: "Manual", color: "#60A5FA" },
                { year: "2024", value: 70, label: "Pipelines", color: "#34D399" },
                { year: "2025", value: 95, label: "GitOps", color: "#FBBF24" }
            ]
        },

        comparison: {
            title: "DevOps vs Traditional",
            headers: ["Feature", "Our DevSecOps", "Traditional Ops", "Cowboy Coding"],
            rows: [
                { feature: "Deploys", us: "Daily", others: "Monthly", saas: "Random" },
                { feature: "Security", us: "Integrated", others: "Last Step", saas: "None" },
                { feature: "Stability", us: "High", others: "Medium", saas: "Low" }
            ]
        },

        testimonials: [
            { quote: "Our lead time for changes went from 3 weeks to 4 hours. Game changer.", author: "Maria G.", role: "Director of Eng", image: "/images/services/unsplash-1580489944761-15a19d654956.jpg" }
        ],
        faq: [
            { question: "What is GitOps?", answer: "It means using Git as the single source of truth for your infrastructure." },
            { question: "Can we use Jenkins?", answer: "Yes, though we recommend GitHub Actions/GitLab CI for modern features." }
        ]
    },

    "managed-it": {
        category: "Engineering",
        title: "Managed IT Services",
        subtitle: "Proactive, reliable IT support. We manage your tech so you can manage your business.",
        heroImage: "/images/services/unsplash-1542744173-8e7e53415bb0.jpg", /* Office/Team */

        overview: {
            text: "Downtime is expensive. Our Managed IT Services provide comprehensive support for your infrastructure, end-user devices, and software. From 24/7 helpdesk support to automated patch management and asset tracking, we act as your dedicated IT department. We fix problems before you even know they exist.",
            image: "/images/services/unsplash-1606857521015-7f9fcf423740.jpg", /* Support/Help */
            benefits: [
                "24/7/365 Help Desk",
                "Automated Patching",
                "Asset Lifecycle Management",
                "Onboarding/Offboarding",
                "Vendor Management"
            ]
        },

        features: [
            { title: "Remote Support", description: "Instant screen sharing to fix user issues.", icon: "Monitor" },
            { title: "Patch Mgmt", description: "Keep Windows/Mac and 3rd party apps updated.", icon: "RotateCcw" },
            { title: "Monitoring", description: "Watch disk space, CPU, and health of all workstations.", icon: "Activity" },
            { title: "Procurement", description: "We buy and setup laptops for your new hires.", icon: "Truck" },
            { title: "Backup", description: "Cloud backup for endpoints to prevent data loss.", icon: "Database" },
            { title: "Reporting", description: "Monthly executive reports on ticket volume and health.", icon: "FileText" }
        ],

        techStack: [
            { name: "ServiceNow", icon: "/images/services/ServiceNow_logo.svg" },
            { name: "Jira Service Mgmt", icon: "/images/services/Jira_Logo.svg" },
            { name: "SolarWinds", icon: "/images/services/solarwinds-icon.svg" },
            { name: "TeamViewer", icon: "/images/services/TeamViewer_Logo_Icon.svg" },
            { name: "Microsoft 365", icon: "/images/services/Microsoft_logo.svg" },
            { name: "Slack", icon: "/images/services/Slack_icon_2019.svg" },
            { name: "Zoom", icon: "/images/services/Zoom_Communications_Logo.png" },
            { name: "Kaseya", icon: "/images/services/Kaseya_Logo.jpg" } /* Might need check, sticking to reliable ones */
        ],

        roi: {
            title: "Business Continuity",
            description: "No more 'my computer is slow' complaints.",
            stats: [
                { label: "Ticket Solved", value: 95, prefix: "", suffix: "%", color: "#10B981" },
                { label: "Productivity", value: 20, prefix: "+", suffix: "%", color: "#3B82F6" },
                { label: "Downtime", value: 99, prefix: "-", suffix: "%", color: "#F59E0B" }
            ]
        },

        useCases: [
            { title: "Onboarding", description: "New employee gets a laptop, email, and access on Day 1.", tags: ["HR", "IT"] },
            { title: "Crypto Defense", description: "Prevent ransomware by ensuring all OS patches are applied.", tags: ["Sec", "Patch"] },
            { title: "Office Move", description: "Physical setup of Wi-Fi and conferencing in new HQ.", tags: ["Infra", "Office"] }
        ],

        marketTrends: {
            title: "IT Support Trends",
            description: "Moving from reactive break/fix to proactive managed.",
            series: [
                { year: "2023", value: 30, label: "Break/Fix", color: "#F87171" },
                { year: "2024", value: 60, label: "MSP", color: "#FBBF24" },
                { year: "2025", value: 85, label: "Co-Managed", color: "#34D399" }
            ]
        },

        comparison: {
            title: "MSP vs Hiring",
            headers: ["Feature", "Our MSP", "Internal Hire", "Break/Fix Shop"],
            rows: [
                { feature: "Cost", us: "Flat Monthly", others: "Salary + Benefits", saas: "Unpredictable" },
                { feature: "Availability", us: "24/7 Team", others: "Sick Days/Vacation", saas: "Best Effort" },
                { feature: "Tools", us: "Enterprise Stack", others: "Buy Your Own", saas: "None" }
            ]
        },

        testimonials: [
            { quote: "It feels like they are sitting in the office next to us. Super responsive.", author: "Bill M.", role: "CEO, Law Firm", image: "/images/services/unsplash-1472099645785-5658abf4ff4e.jpg" }
        ],
        faq: [
            { question: "How much does it cost?", answer: "We charge a flat fee per user/device per month. No surprises." },
            { question: "Do you support Macs?", answer: "Yes, we are an Apple Authorized Service Provider equivalent." }
        ]
    },

    "digital-workplace": {
        category: "Engineering",
        title: "Digital Workplace",
        subtitle: "Enable your team to work from anywhere, securely and collaboratively.",
        heroImage: "/images/services/unsplash-1504307651254-35680f356dfd.jpg", /* WFH/Desk */

        overview: {
            text: "Work is something you do, not a place you go. We design Digital Workplaces that bridge the gap between physical and remote teams. By integrating Microsoft 365, Slack, Zoom, and VDI solutions, we create a seamless environment where collaboration happens naturally. We ensure the experience is consistent whether on a laptop, tablet, or phone.",
            image: "/images/services/unsplash-1600880292203-757bb62b4baf.jpg", /* Collab/Video */
            benefits: [
                "Unified Collaboration Hub",
                "Virtual Desktop (VDI/DaaS)",
                "Intranet & Knowledge Base",
                "Secure File Sharing",
                "Meeting Room Solutions"
            ]
        },

        features: [
            { title: "Microsoft Teams", description: "Chat, video, and file sharing in one app.", icon: "MessageSquare" },
            { title: "SharePoint Intranet", description: "Center of truth for company docs and news.", icon: "FileText" },
            { title: "Virtual Desktop", description: "Stream a secure Windows desktop to any device.", icon: "Monitor" },
            { title: "Room Systems", description: "Zoom Rooms/Teams Rooms hardware setup.", icon: "Video" },
            { title: "Cloud Voice", description: "Replace desk phones with softphones (VoIP).", icon: "Phone" },
            { title: "Workflow Auto", description: "Automate approvals (Leave, Purchase) via Power Automate.", icon: "Zap" }
        ],

        techStack: [
            { name: "Microsoft 365", icon: "/images/services/Microsoft_logo.svg" },
            { name: "Slack", icon: "/images/services/Slack_icon_2019.svg" },
            { name: "Zoom", icon: "/images/services/Zoom_Communications_Logo.png" },
            { name: "Citrix", icon: "/images/services/Citrix_Systems_logo.svg" },
            { name: "Notion", icon: "/images/services/Notion_app_logo.png" },
            { name: "Asana", icon: "/images/services/Asana_logo.svg" },
            { name: "Google Workspace", icon: "/images/services/Google__22G_22_Logo.svg" },
            { name: "Dropbox", icon: "/images/services/Dropbox_Icon.svg" }
        ],

        roi: {
            title: "Productivity Gains",
            description: "Remove friction from collaboration.",
            stats: [
                { label: "Email Vol", value: 30, prefix: "-", suffix: "%", color: "#10B981" },
                { label: "Meeting Setup", value: 1, prefix: "<", suffix: "min", color: "#3B82F6" },
                { label: "Emp Satisfaction", value: 25, prefix: "+", suffix: "%", color: "#F59E0B" }
            ]
        },

        useCases: [
            { title: "Hybrid Office", description: "Seamlessly switch between WFH and Office desk.", tags: ["Hybrid", "Flex"] },
            { title: "Frontline Workers", description: "Mobile-first access for field staff.", tags: ["Mobile", "Field"] },
            { title: "Global Team", description: "Async collaboration across time zones.", tags: ["Async", "Global"] }
        ],

        marketTrends: {
            title: "Future of Work",
            description: "Hybrid is here to stay.",
            series: [
                { year: "2023", value: 50, label: "Remote", color: "#F87171" },
                { year: "2024", value: 80, label: "Hybrid", color: "#FBBF24" },
                { year: "2025", value: 95, label: "Digital First", color: "#34D399" }
            ]
        },

        comparison: {
            title: "Modern vs Legacy Office",
            headers: ["Feature", "Digital Workplace", "VPN + File Server", "Paper Based"],
            rows: [
                { feature: "Access", us: "Any Device", others: "Corporate PC", saas: "Office Only" },
                { feature: "Search", us: "Universal", others: "Slow", saas: "Impossible" },
                { feature: "Collab", us: "Real-time", others: "Email Chains", saas: "Meetings" }
            ]
        },

        testimonials: [
            { quote: "Slack + Zoom integration changed how we run meetings. No more fumbling for links.", author: "Ryan S.", role: "COO, Media", image: "/images/services/unsplash-1519345182560-3f2917c472ef.jpg" }
        ],
        faq: [
            { question: "Is data secure?", answer: "Yes, we wrap everything in MFA and conditional access policies." },
            { question: "Microsoft or Google?", answer: "We support both! We help you pick the one that fits your culture." }
        ]
    },
    "subsman": {
        category: "Platforms",
        title: "Subsman Platform",
        subtitle: "The complete recurring revenue operating system for modern SaaS.",
        heroImage: "/images/services/unsplash-1551288049-bebda4e38f71.jpg", /* Dashboard/Finance */

        overview: {
            text: "Scaling a subscription business is hard. Subsman simplifies it. From complex usage-based billing to automated dunning management and global tax compliance, we handle the boring infrastructure so you can focus on product. Our unified dashboard gives you real-time visibility into MRR, Churn, and LTV, helping you make data-driven decisions.",
            image: "/images/services/unsplash-1460925895917-afdab827c52f.jpg", /* Analytics/Chart */
            benefits: [
                "Automated Recurring Billing",
                "Smart Dunning (Churn Recovery)",
                "Global Tax Compliance",
                "Usage-Based Metering",
                "Self-Service Customer Portal"
            ]
        },

        features: [
            { title: "Smart Retries", description: "Recover 20% of failed payments with AI-timed retries.", icon: "RotateCcw" },
            { title: "Tax Automation", description: "Calculate VAT/GST in 100+ countries automatically.", icon: "Globe" },
            { title: "Customer Portal", description: "Let users upgrade/downgrade/cancel without support tickets.", icon: "User" },
            { title: "Revenue Recovery", description: "Automated email sequences for expired cards.", icon: "Mail" },
            { title: "Usage Metering", description: "Bill for seats, API calls, or gigabytes with ease.", icon: "BarChart2" },
            { title: "Integrations", description: "Sync data to Salesforce, Slack, and Xero instantly.", icon: "Zap" }
        ],

        techStack: [
            { name: "Stripe", icon: "/images/services/Stripe_Logo_2C_revised_2016.svg" },
            { name: "PayPal", icon: "/images/services/PayPal.svg" },
            { name: "Python", icon: "/images/services/Python-logo-notext.svg" },
            { name: "React", icon: "/images/services/React-icon.svg" },
            { name: "AWS Lambda", icon: "/images/services/Amazon_Web_Services_Logo.svg" },
            { name: "PostgreSQL", icon: "/images/services/Postgresql_elephant.svg" },
            { name: "Docker", icon: "/images/services/Docker__28container_engine_29_logo.svg" }
        ],

        roi: {
            title: "Revenue Growth",
            description: "Stop leaking revenue.",
            stats: [
                { label: "Recovered Rev", value: 15, prefix: "+", suffix: "%", color: "#10B981" },
                { label: "Admin Time", value: 80, prefix: "-", suffix: "%", color: "#3B82F6" },
                { label: "Failed Pmts", value: 50, prefix: "-", suffix: "%", color: "#F59E0B" }
            ]
        },

        useCases: [
            { title: "B2B SaaS", description: "Seat-based pricing with annual contracts and enterprise bulk discounts.", tags: ["SaaS", "B2B"] },
            { title: "Media Streaming", description: "Monthly subscriptions with free trials and region locking.", tags: ["Media", "B2C"] },
            { title: "Usage APIs", description: "Pay-as-you-go billing based on API request volume.", tags: ["API", "Dev"] }
        ],

        marketTrends: {
            title: "Subscription Economy",
            description: "Everything is becoming a subscription.",
            series: [
                { year: "2023", value: 40, label: "One-time", color: "#F87171" },
                { year: "2024", value: 65, label: "Hybrid", color: "#FBBF24" },
                { year: "2025", value: 90, label: "Recurring", color: "#34D399" }
            ]
        },

        comparison: {
            title: "Subsman vs Build Your Own",
            headers: ["Feature", "Subsman Platform", "In-House Build", "Legacy ERP"],
            rows: [
                { feature: "Time to Market", us: "Weeks", others: "Months/Years", saas: "Slow" },
                { feature: "Maintenance", us: "Zero", others: "High", saas: "Costly" },
                { feature: "Compliance", us: "Included", others: "Your Risk", saas: "Complex" }
            ]
        },

        testimonials: [
            { quote: "We switched to Subsman and recovered $50k in failed payments in the first month alone.", author: "David C.", role: "CFO, Tech Startup", image: "/images/services/unsplash-1506794778202-cad84cf45f1d.jpg" }
        ],
        faq: [
            { question: "Is it PCI Compliant?", answer: "Yes, we are Level 1 PCI DSS compliant. We handle the sensitive data so you don't have to." },
            { question: "Can I migrate from Chargebee?", answer: "Yes, we have a dedicated migration team to import your customer data." }
        ]
    },

    "crm": {
        category: "Platforms",
        title: "Custom CRM Solutions",
        subtitle: "Tailored customer relationship management systems that fit your unique workflow.",
        heroImage: "/images/services/unsplash-1552664730-d307ca884978.jpg", /* Meeting/Table */

        overview: {
            text: "Off-the-shelf CRMs like Salesforce are powerful but often bloated and expensive. We build Custom CRM solutions tailored exactly to your business processes. Whether you need a specific sales pipeline, complex inventory integration, or a unique customer portal, we build it. Own your data, own your workflow, and stop paying for features you don't use.",
            image: "/images/services/unsplash-1556761175-5973dc0f32e7.jpg", /* Handshake/Deal */
            benefits: [
                "Perfect Fit Workflow",
                "No Per-User License Fees",
                "Deep 3rd Party Integrations",
                "Custom Reporting",
                "Own Your Data"
            ]
        },

        features: [
            { title: "Pipeline Auto", description: "Automatically move deals through stages based on triggers.", icon: "GitPullRequest" },
            { title: "Contact 360", description: "See every email, call, and ticket for a customer in one view.", icon: "UserCheck" },
            { title: "Email Integration", description: "Sync with Gmail/Outlook to track open rates.", icon: "Mail" },
            { title: "Task Management", description: "Assign follow-ups and track team performance.", icon: "CheckSquare" },
            { title: "Quoting Engine", description: "Generate PDF quotes and collect signatures (eSign).", icon: "FileText" },
            { title: "Mobile App", description: "Access your CRM on the road with a native mobile experience.", icon: "Smartphone" }
        ],

        techStack: [
            { name: "Node.js", icon: "/images/services/Node.js_logo.svg" },
            { name: "PostgreSQL", icon: "/images/services/Postgresql_elephant.svg" },
            { name: "Retool", icon: "/images/services/Retool_logo.png" } /* Need verify or generic code icon */,
            { name: "Salesforce", icon: "/images/services/Salesforce.com_logo.svg" },
            { name: "HubSpot", icon: "/images/services/HubSpot_Logo.png" } /* Careful with png, used often */,
            { name: "Twilio", icon: "/images/services/Twilio-logo-red.svg" },
            { name: "SendGrid", icon: "/images/services/SendGrid_Logo.png" }
        ],

        roi: {
            title: "Sales Efficiency",
            description: "Close more deals, faster.",
            stats: [
                { label: "Close Rate", value: 20, prefix: "+", suffix: "%", color: "#10B981" },
                { label: "Data Entry", value: 60, prefix: "-", suffix: "%", color: "#3B82F6" },
                { label: "License Cost", value: 100, prefix: "-", suffix: "%", color: "#F59E0B" } /* If custom build owned */
            ]
        },

        useCases: [
            { title: "Real Estate", description: "Track properties, showings, and commissions in one place.", tags: ["Property", "Sales"] },
            { title: "Manufacturing", description: "Connect sales orders directly to the factory floor ERP.", tags: ["B2B", "Ops"] },
            { title: "Education", description: "Manage student applications and enrollment pipelines.", tags: ["EdTech", "Admin"] }
        ],

        marketTrends: {
            title: "CRM Strategy",
            description: "Vertical CRMs are winning.",
            series: [
                { year: "2023", value: 30, label: "Generic", color: "#F87171" },
                { year: "2024", value: 50, label: "Vertical", color: "#FBBF24" },
                { year: "2025", value: 80, label: "Custom", color: "#34D399" }
            ]
        },

        comparison: {
            title: "Custom vs Off-the-shelf",
            headers: ["Feature", "Our Custom CRM", "Salesforce/HubSpot", "Spreadsheets"],
            rows: [
                { feature: "Fit", us: "100% Tailored", others: "Generic", saas: "Manual" },
                { feature: "Cost", us: "One-time Build", others: "Recurring/User", saas: "Free" },
                { feature: "Complexity", us: "Low (Hides unused)", others: "High", saas: "Low" }
            ]
        },

        testimonials: [
            { quote: "Our custom CRM handles our complex commission structure perfectly. Salesforce couldn't do it.", author: "Amanda B.", role: "Sales Director", image: "/images/services/unsplash-1580894732444-8ecded7900cd.jpg" }
        ],
        faq: [
            { question: "How long to build?", answer: "Typically 4-8 weeks depending on complexity." },
            { question: "Can we integrate Outlook?", answer: "Yes, full 2-way sync for calendar and emails." }
        ]
    },
    "digital-strategy": {
        category: "Consulting",
        title: "Digital Strategy & Transformation",
        subtitle: "Future-proof your business with a pragmatic, roadmap-driven approach to digital evolution.",
        heroImage: "/images/services/unsplash-1552664730-d307ca884978.jpg", /* Strategy/Boardroom */

        overview: {
            text: "Technology moves faster than most organizations can adapt. Our Digital Strategy practice helps you cut through the noise. We don't just deliver slide decks; we align your technology investments with business outcomes. From modernizing legacy stacks to adopting AI at scale, we provide the blueprint—and the execution power—to turn ambition into reality.",
            image: "/images/services/unsplash-1531482615713-2afd69097998.jpg", /* Presentation */
            benefits: [
                "ROI-First Technology Roadmaps",
                "Vendor Agnostic Architecture",
                "Organizational Change Management",
                "Legacy Modernization Assessment",
                "Data Maturity Modeling"
            ]
        },

        features: [
            { title: "Tech Radar", description: "Assess emerging technologies relevant to your specific industry.", icon: "Target" },
            { title: "Cloud Strategy", description: "Decide when to Rehost, Replatform, or Refactor.", icon: "Globe" },
            { title: "AI Readiness", description: "Data and governance audits to prepare for GenAI adoption.", icon: "Zap" },
            { title: "IT Cost Optimization", description: "Rationalize application portfolios to reduce spend.", icon: "TrendingUp" },
            { title: "Security Posture", description: "Gap analysis against NIST/ISO frameworks.", icon: "Shield" },
            { title: "Agile Transformation", description: "Shift from waterfall projects to product-mode delivery.", icon: "Activity" }
        ],

        techStack: [
            { name: "McKinsey 7S", icon: "/images/services/2560px-McKinsey__26_Company_Mark.svg.png" } /* Concept icon/logo */,
            { name: "Miro", icon: "/images/services/Miro_logo.svg" },
            { name: "Jira Align", icon: "/images/services/Jira_Logo.svg" },
            { name: "Lucidchart", icon: "/images/services/Lucidsoftware-logo_2020.svg" },
            { name: "Gartner", icon: "/images/services/Gartner_logo.svg" }
        ],

        roi: {
            title: "Strategic Impact",
            description: "Good strategy pays for itself. Bad strategy costs everything.",
            stats: [
                { label: "Cost Savings", value: 30, prefix: "", suffix: "%", color: "#10B981" },
                { label: "Delivery Speed", value: 2, prefix: "", suffix: "x", color: "#3B82F6" },
                { label: "Adoption Rate", value: 95, prefix: "", suffix: "%", color: "#F59E0B" }
            ]
        },

        useCases: [
            { title: "Merger & Acquisition", description: "Unifying IT stacks after a complex corporate merger.", tags: ["M&A", "Integration"] },
            { title: "Mainframe Exit", description: "5-year roadmap to migrate core banking off COBOL.", tags: ["Modernization", "Cost"] },
            { title: "AI Center of Excellence", description: "Establishing governance and pilots for enterprise AI.", tags: ["AI", "Governance"] }
        ],

        marketTrends: {
            title: "Transformation Trends",
            description: "The shift from Project to Product.",
            series: [
                { year: "2023", value: 40, label: "Project", color: "#F87171" },
                { year: "2024", value: 60, label: "Hybrid", color: "#FBBF24" },
                { year: "2025", value: 85, label: "Product", color: "#34D399" }
            ]
        },

        comparison: {
            title: "Why Our Strategy Wins",
            headers: ["Metric", "MegaSite Strategy", "Big 4 Consulting", "Internal Planning"],
            rows: [
                { feature: "Output", us: "Executable Code/Plan", others: "PowerPoint Decks", saas: "Slow Consensus" },
                { feature: "Speed", us: "Weeks", others: "Months", saas: "Years" },
                { feature: "Practitioners", us: "Engineers Lead", others: "MBAs Lead", saas: "Political" }
            ]
        },

        testimonials: [
            { quote: "They didn't just give us a roadmap; they built the first MVP to prove it worked.", author: "Sarah J.", role: "CIO, Retail Giant", image: "/images/services/unsplash-1573496359142-b8d87734a5a2.jpg" }
        ],
        faq: [
            { question: "Do you just do advice?", answer: "No. We recognize ourselves as 'Strategy through Execution'. We code what we recommend." }
        ]
    },

    "staff-augmentation": {
        category: "Consulting",
        title: "Staff Augmentation",
        subtitle: "Scale your engineering team with top 1% global talent. On-demand.",
        heroImage: "/images/services/unsplash-1522071820081-009f0129c71c.jpg", /* Teamwork */

        overview: {
            text: "Recruiting elite engineers takes months. We give you access to them in days. Our Staff Augmentation service bridges the talent gap with pre-vetted, senior-level developers, architects, and designers who embed directly into your existing workflows. Whether you need a single specialist or a full squad, we scale with your roadmap.",
            image: "/images/services/unsplash-1600880292203-757bb62b4baf.jpg", /* Collaboration */
            benefits: [
                "Top 1% Global Talent Pool",
                "Time-to-Productivity < 1 Week",
                "Flexible Contracts (Month-to-Month)",
                "Full Timeflow/Timezone Overlap",
                "Risk-Free 2 Week Trial"
            ]
        },

        features: [
            { title: "Backend Engineers", description: "Java, Python, Node.js experts.", icon: "Cpu" },
            { title: "Frontend Pros", description: "React, Angular, Vue.js specialists.", icon: "Globe" },
            { title: "DevOps & Cloud", description: "AWS/Azure certified architects.", icon: "Zap" },
            { title: "QA Automation", description: "SDETs who build robust test suites.", icon: "Activity" },
            { title: "Product Designers", description: "UI/UX experts for complex workflows.", icon: "Target" },
            { title: "Scrum Masters", description: "Agile coaches to unblock your team.", icon: "TrendingUp" }
        ],

        techStack: [
            { name: "React", icon: "/images/services/React-icon.svg" },
            { name: "Node.js", icon: "/images/services/Node.js_logo.svg" },
            { name: "Python", icon: "/images/services/Python-logo-notext.svg" },
            { name: "AWS", icon: "/images/services/Amazon_Web_Services_Logo.svg" },
            { name: "Kubernetes", icon: "/images/services/Kubernetes_logo_without_workmark.svg" }
        ],

        roi: {
            title: "Hiring Efficiency",
            description: "Stop burning cash on empty seats.",
            stats: [
                { label: "Time to Fill", value: 5, prefix: "", suffix: " Days", color: "#10B981" },
                { label: "Cost Savings", value: 40, prefix: "", suffix: "%", color: "#3B82F6" },
                { label: "Retention", value: 98, prefix: "", suffix: "%", color: "#F59E0B" }
            ]
        },

        useCases: [
            { title: "Sprint Spike", description: "Adding 5 devs for 3 months to ship a critical release.", tags: ["Speed", "Scale"] },
            { title: "Niche Skills", description: "Sourcing a Rust or Go expert for a backend refactor.", tags: ["Specialist", "Backend"] },
            { title: "24/7 Support", description: "Building a follow-the-sun team for global ops.", tags: ["Support", "Global"] }
        ],

        marketTrends: {
            title: "Talent Strategy",
            description: "Remote is the new standard.",
            series: [
                { year: "2023", value: 40, label: "Local", color: "#F87171" },
                { year: "2024", value: 60, label: "Remote", color: "#FBBF24" },
                { year: "2025", value: 80, label: "Distributed", color: "#34D399" }
            ]
        },

        comparison: {
            title: "Augmentation vs Hiring",
            headers: ["Metric", "MegaSite Augmentation", "In-House Hiring", "Freelancers"],
            rows: [
                { feature: "Speed", us: "Days", others: "Months", saas: "Variable" },
                { feature: "Quality", us: "Vetted Top 1%", others: "Hit or Miss", saas: "Inconsistent" },
                { feature: "Management", us: "Managed", others: "High Effort", saas: "None" }
            ]
        },

        testimonials: [
            { quote: "We added 4 engineers to our team in a week. They hit the ground running and felt like part of the culture.", author: "Mike R.", role: "CTO, FinTech Scaleup", image: "/images/services/unsplash-1519085360753-af0119f7cbe7.jpg" }
        ],
        faq: [
            { question: "What timezones?", answer: "We support EST, PST, GMT, and IST overlap hours." },
            { question: "Is there a minimum?", answer: "Typically 3 months, full-time engagement." }
        ]
    },
    "electrical-instrumentation": {
        category: "Strategic Expertise",
        title: "Electrical & Instrumentation",
        subtitle: "Total supply solutions for Oil & Gas, Marine, and Petrochemical industries.",
        heroImage: "/images/services/industrial-electrical-hero.png",
        overview: {
            text: "Formed by highly experienced engineers and personnel from within the Oil & Gas, Marine, and Petrochemical Industries, we offer indepth knowledge of Electrical Engineering, Cables, and Equipment Supply. We provide TOTAL SUPPLY SOLUTIONS, from individual components to total turnkey services.",
            image: "/images/services/unsplash-1498084393753-b411b2d26b34.jpg",
            benefits: [
                "Full installation, repairs, and refits on vessels",
                "Total Turnkey Service availability",
                "Hazardous and non-hazardous area expertise",
                "Compliance with primary contract requirements",
                "Global support with rapid-response riding crews"
            ]
        },
        features: [
            { title: "Offshore Shipboard Cables", description: "Specialized wiring for marine environments and offshore projects.", icon: "Activity" },
            { title: "Cable Management", description: "Full range of trays, ladders, glands, and enclosures for all sectors.", icon: "Database" },
            { title: "LV & HV Switchgear", description: "Design and supply of switchboards, control desks, and distribution panels.", icon: "Zap" },
            { id: "marine", title: "Marine Retrofits", description: "Conversions and upgrades for vessels of all sizes, worldwide.", icon: "Globe" },
            { id: "automation", title: "Automation Products", description: "Advanced control systems for industrial and maritime applications.", icon: "Cpu" },
            { title: "Hazardous Enclosures", description: "Explosion-proof Eexe and Eexd enclosures for high-risk environments.", icon: "Shield" },
            { title: "Electrical Motors", description: "MV/LV motors, including explosion-proof and high-efficiency models.", icon: "Zap" },
            { title: "DG Sets & Alternators", description: "Diesel generating sets and alternator supplies for standby power.", icon: "Activity" },
            { title: "Heat Tracing", description: "Comprehensive heat tracing products and connection junction boxes.", icon: "Activity" }
        ],
        techStack: [
            { name: "IEC Standards", icon: "/images/services/logo.svg" },
            { name: "British Standards (BS)", icon: "/images/services/bsi-logo.png" },
            { name: "NEK Standards", icon: "/images/services/nek-logo.svg" },
            { name: "VDE", icon: "/images/services/VDE_Logo.svg" }
        ],
        roi: {
            title: "Industrial Reliability",
            description: "Reducing downtime through superior material procurement and engineering excellence.",
            stats: [
                { label: "Material Longevity", value: 95, prefix: "", suffix: "%", color: "#3B82F6" },
                { label: "Installation Speed", value: 30, prefix: "+", suffix: "%", color: "#10B981" },
                { label: "Maintenance Cost", value: 20, prefix: "-", suffix: "%", color: "#F59E0B" }
            ]
        },
        useCases: [
            { title: "FPSO Conversions", description: "Providing total electrical supply and engineering support for large-scale offshore conversions.", tags: ["Marine", "Oil & Gas", "Engineering"] },
            { title: "Petrochemical Plant Support", description: "Supply of flame-retardant and fire-resistant cables for high-security industrial zones.", tags: ["Petrochemical", "Safety", "Compliance"] }
        ],
        industries: [
            { name: "Marine", icon: "Globe", desc: "Vessel refits and build support" },
            { name: "Oil & Gas", icon: "Factory", desc: "Offshore platform E&I" },
            { name: "Petrochemical", icon: "Shield", desc: "High-integrity electrical systems" }
        ],
        stats: [
            { value: "24/7", label: "Service Support" },
            { value: "100%", label: "Standard Compliance" },
            { value: "Rapid", label: "Global Deployment" }
        ],
        process: [
            { step: 1, title: "Requirement Analysis", description: "Analyzing technical specs for specific industrial standards (IEC, BS, NEK).", image: "/images/services/industrial-analysis.png" },
            { step: 2, title: "Sourcing & Procurement", description: "Leveraging global networks for high-quality, cost-effective electrical materials.", image: "/images/services/unsplash-1586528116311-ad8dd3c8310d.jpg" },
            { step: 3, title: "Custom Engineering", description: "Designing tailormade switchgear and control systems to meet project needs.", image: "/images/services/unsplash-1531403009284-440f080d1e12.jpg" },
            { step: 4, title: "Delivery & Commissioning", description: "Ensuring timely arrival and professional oversight during installation.", image: "/images/services/unsplash-1551434678-e076c223a692.jpg" }
        ],
        faq: [
            { question: "Do you supply cables to specific standards?", answer: "Yes, we supply to IEC, BS, NEK, VDE, IEEE 45, and JIS standards." },
            { question: "Can you provide riding crews?", answer: "We can provide experienced offshore engineers on short notice anywhere in the world." }
        ]
    },
    "cables-management": {
        category: "Industrial & Marine",
        title: "Cables & Accessories",
        subtitle: "High-integrity wiring solutions for hazardous and maritime environments.",
        heroImage: "/images/services/industrial-cables-hero.png",
        overview: {
            text: "We specialize in the supply of offshore shipboard wiring, commercial maritime defense cables, and onshore flame-retardant / fire-resistant solutions. Our inventory meets international standards including IEC, BS, NEK, and VDE, ensuring maximum safety and compliance for oil, gas, and petrochemical projects.",
            image: "/images/services/unsplash-1508514177221-188b1cf16e9d.jpg",
            benefits: [
                "Full compliance with IEC, BS, NEK, and VDE",
                "Flame retardant and fire resistant materials",
                "Hazardous and non-hazardous area expertise",
                "Strategic sourcing for Oil & Gas sectors",
                "Custom design and international certifications"
            ]
        },
        features: [
            { title: "Offshore Shipboard Cables", description: "Specialized wiring for marine environments and offshore platforms.", icon: "Activity" },
            { title: "Joints and Closures", description: "High-integrity connection solutions for submerged and surface cabling.", icon: "Shield" },
            { title: "Terminations & Glands", description: "Precision-engineered cable ends and hazardous area glands.", icon: "Zap" },
            { title: "Cold and Heat Shrinks", description: "Durable insulation and protection sleeves for industrial use.", icon: "Database" },
            { title: "Lugs and Clamps", description: "Heavy-duty mechanical connectors for power and signal lines.", icon: "Target" }
        ],
        techStack: [
            { name: "IEC Standards", icon: "/images/services/logo.svg" },
            { name: "British Standards (BS)", icon: "/images/services/bsi-logo.png" },
            { name: "NEK Standards", icon: "/images/services/nek-logo.svg" }
        ],
        roi: {
            title: "Safety & Compliance",
            description: "Reducing risk of fire and electrical failure through certified premium cable solutions.",
            stats: [
                { label: "Fire Resistance", value: 100, prefix: "", suffix: "%", color: "#3B82F6" },
                { label: "Reliability Rate", value: 99, prefix: "", suffix: "%", color: "#10B981" },
                { label: "Compliance Score", value: 100, prefix: "", suffix: "%", color: "#F59E0B" }
            ]
        },
        stats: [
            { value: "100%", label: "Certified" },
            { value: "Global", label: "Supply" },
            { value: "Rapid", label: "Delivery" }
        ],
        process: [
            { step: 1, title: "Spec Analysis", description: "Evaluating cable requirements based on environment.", image: "/images/services/unsplash-1512314889357-e157c22f938d.jpg" },
            { step: 2, title: "Global Sourcing", description: "Procuring from certified manufacturers.", image: "/images/services/unsplash-1586528116311-ad8dd3c8310d.jpg" }
        ],
        faq: [
            { question: "Do you supply LSF cables?", answer: "Yes, we supply Low Smoke & Fume (LSF) and Low Smoke Zero Halogen (LSZH) cables." }
        ],
        useCases: [
            { title: "Offshore Platform Wiring", description: "Supply of fire-resistant cables for North Sea platforms.", tags: ["Offshore", "Safety"] }
        ],
        industries: [
            { name: "Marine", icon: "Globe", desc: "Maritime applications" },
            { name: "Oil & Gas", icon: "Factory", desc: "Energy sector" }
        ]
    },
    "switchgear-control": {
        category: "Industrial & Marine",
        title: "Switchgear & Control",
        subtitle: "Advanced LV & HV distribution and automation control panels.",
        heroImage: "/images/services/unsplash-1531403009284-440f080d1e12.jpg",
        overview: {
            text: "We provide total supply solutions for LV & HV switchboards, control desks, and distribution panels. Our expertise includes power factor compensation packages and motor control centers, ensuring efficient energy management and operational reliability in industrial settings.",
            image: "/images/services/unsplash-1513828583688-c52646db42da.jpg",
            benefits: [
                "Custom-designed LV & HV boards",
                "Power Factor Compensation for efficiency",
                "Integrated Automation & PLC systems",
                "Hazardous area Eexe and Eexd enclosures",
                "Technical support for installation and refit"
            ]
        },
        features: [
            { title: "HV Switchboards", description: "High-voltage distribution systems for industrial grids.", icon: "Zap" },
            { title: "Control Desks", description: "Ergonomic and technical interfaces for mission-critical operations.", icon: "Cpu" },
            { title: "Motor Control Centers", description: "Centralized motor control for marine and industrial plants.", icon: "Activity" },
            { title: "Capacitor Banks", description: "Power quality and reactive power management solutions.", icon: "Target" },
            { title: "Explosion Proof Enclosures", description: "Certified Eexe and Eexd housing for extreme environments.", icon: "Shield" }
        ],
        techStack: [
            { name: "Schneider Electric", icon: "/images/services/asset-72.jpg" },
            { name: "Siemens", icon: "/images/services/favicon.ico" },
            { name: "ABB", icon: "/images/services/asset-73.jpg" }
        ],
        roi: {
            title: "Grid Efficiency",
            description: "Advanced switchgear improves power distribution stability and safety.",
            stats: [
                { label: "Efficiency", value: 98, prefix: "", suffix: "%", color: "#3B82F6" },
                { label: "Safety Rating", value: 100, prefix: "", suffix: "%", color: "#10B981" }
            ]
        },
        stats: [
            { value: "High-Spec", label: "Design" },
            { value: "Certified", label: "Safety" }
        ],
        process: [
            { step: 1, title: "Panel Design", description: "Custom engineering for specific project loads.", image: "/images/services/unsplash-1531403009284-440f080d1e12.jpg" }
        ],
        faq: [
            { question: "Do you offer LV and HV solutions?", answer: "Yes, we handle both low and high voltage switchgear assemblies." }
        ],
        useCases: [
            { title: "Industrial Plant Upgrade", description: "Modernizing distribution panels for a factory complex.", tags: ["Industrial", "Upgrade"] }
        ],
        industries: [
            { name: "Manufacturing", icon: "Factory", desc: "Industrial plants" },
            { name: "Power", icon: "Zap", desc: "Grid infrastructure" }
        ]
    },
    "marine-offshore": {
        category: "Industrial & Marine",
        title: "Marine & Offshore",
        subtitle: "Global support for vessel refits, builds, and offshore conversions.",
        heroImage: "/images/services/unsplash-1498084393753-b411b2d26b34.jpg",
        overview: {
            text: "Our specialized engineering division offers full installation, repairs, and refits for vessels of all sizes. From FPSO conversions to new build support, our riding crews are available on short notice to ensure compliance with primary contracts and international maritime standards.",
            image: "/images/services/unsplash-1551434678-e076c223a692.jpg",
            benefits: [
                "Full repairs and refits on any vessel size",
                "Global rapid-response riding crews",
                "Offshore trained specialized engineers",
                "Compliance with primary module contracts",
                "Support for FPSO and maritime build projects"
            ]
        },
        features: [
            { title: "FPSO Conversions", description: "Complete electrical and structural support for offshore assets.", icon: "Target" },
            { title: "Riding Crews", description: "Elite technical teams available for global deployment.", icon: "Globe" },
            { title: "Vessel Modernization", description: "Upgrading legacy hulls with modern digital and electrical systems.", icon: "Zap" },
            { title: "Hazardous Compliance", description: "Certified offshore engineering for high-risk zones.", icon: "Shield" }
        ],
        industries: [
            { name: "Marine", icon: "Globe", desc: "Global shipping and naval support" },
            { name: "Oil & Gas", icon: "Factory", desc: "Offshore platform engineering" }
        ],
        techStack: [
            { name: "Maritime Standards", icon: "/images/services/asset-76.jpg" }
        ],
        roi: {
            title: "Vessel Longevity",
            description: "High-quality refits extend the operational life of maritime assets.",
            stats: [
                { label: "Asset Life", value: 15, prefix: "+", suffix: " yrs", color: "#3B82F6" }
            ]
        },
        stats: [
            { value: "Fast", label: "Deployment" },
            { value: "Global", label: "Reach" }
        ],
        process: [
            { step: 1, title: "Vessel Audit", description: "Assessing current electrical and structural state.", image: "/images/services/unsplash-1556388158-158ea5ccacbd.jpg" }
        ],
        faq: [
            { question: "Where are your crews based?", answer: "We have rapid-response teams available globally, coordinated from our regional hubs." }
        ],
        useCases: [
            { title: "Tanker Retrofit", description: "Complete electrical upgrade to meet new emission standards.", tags: ["Retrofit", "Compliance"] }
        ]
    },
    "automation-products": {
        category: "Capabilities",
        title: "Automation & Systems",
        subtitle: "Industry 4.0 solutions and integrated control logic.",
        heroImage: "/images/services/unsplash-1518770660439-4636190af475.jpg",
        overview: {
            text: "Leveraging leading-edge technology, we provide automation products and systems including Fieldbus components, HMI, and Industrial PCs. Our solutions are designed to optimize production processes in steel, aluminum, chemical, and food/beverage sectors.",
            image: "/images/services/unsplash-1531297484001-80022131f5a1.jpg",
            benefits: [
                "Advanced Programmable Controllers (PLC)",
                "High-performance Servo Drives and Motors",
                "Integrated HMI and Industrial PCs",
                "Fieldbus networking and synchronization",
                "Software tools for process optimization"
            ]
        },
        features: [
            { title: "HMI Interface", description: "Human-Machine interfaces for seamless process control.", icon: "Activity" },
            { title: "Programmable Controllers", description: "Robust PLC units for industrial logic and automation.", icon: "Cpu" },
            { title: "Servo Systems", description: "High-precision motion control for manufacturing lines.", icon: "Target" },
            { title: "Industrial PC Panels", description: "Ruggedized computing for harsh industrial environments.", icon: "Database" }
        ],
        techStack: [
            { name: "Omron", icon: "/images/services/asset-80.jpg" },
            { name: "Rockwell", icon: "/images/services/Databricks_Logo.png" }
        ],
        roi: {
            title: "Automation ROI",
            description: "Reducing manual error and increasing production speed.",
            stats: [
                { label: "Throughput", value: 30, prefix: "+", suffix: "%", color: "#10B981" }
            ]
        },
        stats: [
            { value: "Smart", label: "Logic" },
            { value: "Fast", label: "IO" }
        ],
        process: [
            { step: 1, title: "Logic Design", description: "Programming PLC and HMI systems for project specific tasks.", image: "/images/services/unsplash-1581091226825-a6a2a5aee158.jpg" }
        ],
        faq: [
            { question: "Do you handle custom software?", answer: "Yes, we provide the logic and software tools to optimize production." }
        ],
        useCases: [
            { title: "Bottling Plant Automation", description: "Implementing high-speed motion control for a production line.", tags: ["F&B", "Automation"] }
        ],
        industries: [
            { name: "Manufacturing", icon: "Factory", desc: "Industry 4.0 solutions" }
        ]
    },
    "solar-solutions": {
        category: "Energy & Infrastructure",
        title: "Solar Power Solutions",
        subtitle: "Turnkey PV systems for industrial and commercial energy independence.",
        heroImage: "/images/services/unsplash-1515378791036-0648a3ef77b2.jpg",
        overview: {
            text: "We provide complete solar PV solutions tailored for industrial, commercial, and building power needs. From site analysis to turnkey installation, our systems are designed to maximize energy yield and provide long-term sustainable power for modern infrastructure.",
            image: "/images/services/unsplash-1473341304170-971dccb5ac1e.jpg",
            benefits: [
                "Utility-scale PV system deployment",
                "Industrial roof-top power solutions",
                "Reduction in grid dependency and carbon footprint",
                "High-efficiency panel and inverter sourcing",
                "Full technical support and maintenance"
            ]
        },
        features: [
            { title: "PV System Design", description: "Custom engineering for maximum solar energy harvesting.", icon: "Zap" },
            { title: "Energy Management", description: "Integrated monitoring and smart grid synchronization.", icon: "Activity" },
            { title: "Battery Storage", description: "Scaleable storage solutions for consistent power delivery.", icon: "Database" }
        ],
        techStack: [
            { name: "Solar PV", icon: "/images/services/asset-82.jpg" },
            { name: "Inverter Tech", icon: "/images/services/asset-83.jpg" }
        ],
        process: [
            { step: 1, title: "Site Assessment", description: "Evaluating solar potential and roof load capacity.", image: "/images/services/unsplash-1508514177221-188b1cf16e9d.jpg" }
        ],
        stats: [
            { value: "99%", label: "Reliability" },
            { value: "Green", label: "Energy" }
        ],
        faq: [
            { question: "Do you offer energy storage?", answer: "Yes, we provide scalable battery storage solutions for nighttime power." }
        ],
        useCases: [
            { title: "Industrial Solar Farm", description: "5MW installation for a manufacturing complex.", tags: ["Solar", "Industry"] }
        ],
        industries: [
            { name: "Renewables", icon: "Zap", desc: "Sustainable energy" }
        ]
    },
    "hv-substations": {
        category: "Energy & Infrastructure",
        title: "HV & Substations",
        subtitle: "High-voltage equipment for reliable power transmission.",
        heroImage: "/images/services/unsplash-1544724569-5f546fd6f2b5.jpg",
        overview: {
            text: "Specializing in the supply of high-voltage substation equipment, we offer current transformers, inductive voltage transformers, isolators, and disconnectors. Our products are sourced from global leaders to ensure grid stability and technical compliance.",
            image: "/images/services/unsplash-1581092160607-ee22621dd758.jpg",
            benefits: [
                "Precision-engineered Current & Voltage Transformers",
                "Reliable MV Disconnector Isolators",
                "High-spec Fuse Cutouts and Ring Main Units",
                "Compliance with global utility standards",
                "Robust equipment for harsh environment substations"
            ]
        },
        features: [
            { title: "HV Transformers", description: "Current and voltage units for precise monitoring.", icon: "Activity" },
            { title: "Isolation Control", description: "Inductive and capacitive voltage transformers.", icon: "Shield" },
            { title: "Mini Substations", description: "Compact power distribution units for localized grids.", icon: "Cpu" }
        ],
        techStack: [
            { name: "High Voltage (HV)", icon: "/images/services/asset-87.jpg" }
        ],
        roi: {
            title: "Grid Reliability ROI",
            stats: [
                { label: "Uptime", value: 99.9, prefix: "", suffix: "%", color: "#10B981" }
            ]
        },
        stats: [
            { value: "Heavy-Duty", label: "Spec" }
        ],
        process: [
            { step: 1, title: "Grid Analysis", description: "Evaluating load and voltage requirements for the substation.", image: "/images/services/unsplash-1581092160607-ee22621dd758.jpg" }
        ],
        faq: [
            { question: "What voltage ranges do you cover?", answer: "We supply equipment for MV, HV, and EHV substation projects." }
        ],
        useCases: [
            { title: "Substation Upgrade", description: "Replacement of aging current transformers for a national utility.", tags: ["Utility", "Upgrade"] }
        ],
        industries: [
            { name: "Utilities", icon: "Globe", desc: "Grid support" }
        ]
    },
    "poles-towers": {
        category: "Energy & Infrastructure",
        title: "Poles & Towers",
        subtitle: "Certified structural support for power distribution and lighting.",
        heroImage: "/images/services/unsplash-1516110833967-0b5716ca1387.jpg",
        overview: {
            text: "Providing a complete range of tubular distribution poles and overhead line (OHL) towers. All structures are manufactured to international specifications, ensuring durability for regional electrification and lighting projects.",
            image: "/images/services/unsplash-1504307651254-35680f356dfd.jpg",
            benefits: [
                "Heavy-duty OHL steel towers",
                "Tubular distribution and lighting poles",
                "Wooden poles for specialized applications",
                "Line hardwares and pole line accessories",
                "Global logistics and freight management"
            ]
        },
        features: [
            { title: "Transmission Towers", description: "Lattice and tubular steel towers for OHL.", icon: "Factory" },
            { title: "Distribution Poles", description: "GI and wooden poles for local power networks.", icon: "Target" }
        ],
        techStack: [
            { name: "ASTM Standards", icon: "/images/services/asset-90.jpg" }
        ],
        roi: {
            title: "Structural Integrity",
            stats: [
                { label: "Lifespan", value: 30, prefix: "+", suffix: " yrs", color: "#3B82F6" }
            ]
        },
        stats: [
            { value: "Durable", label: "Design" }
        ],
        process: [
            { step: 1, title: "Structural Design", description: "Engineering towers to meet regional wind and load codes.", image: "/images/services/structural-design.png" }
        ],
        faq: [
            { question: "Do you supply pole accessories?", answer: "Yes, we provide full sets of line hardware including insulators and clamps." }
        ],
        useCases: [
            { title: "Rural Electrification", description: "Supply of 1000+ poles for a regional power expansion.", tags: ["Utility", "Infrastructure"] }
        ],
        industries: [
            { name: "Power", icon: "Zap", desc: "Transmission & Distribution" }
        ]
    },
    "steel-structures": {
        category: "Energy & Infrastructure",
        title: "Steel Structures",
        subtitle: "Structural engineering for substations and offshore builds.",
        heroImage: "/images/services/unsplash-1517433456452-f9633a875f6f.jpg",
        overview: {
            text: "We supply specialized substation steel structures and support for marine engineering projects. Our structural solutions are built for extreme load-bearing and corrosion resistance in coastal and offshore environments.",
            image: "/images/services/unsplash-1517245386807-bb43f82c33c4.jpg",
            benefits: [
                "Custom substation support frames",
                "High-integrity marine engineering steel",
                "Corrosion-resistant finishes for coastal use",
                "Supplied with all SS/GI bolts and fasteners",
                "Technical structural analysis support"
            ]
        },
        features: [
            { title: "Support Structures", description: "Precision-engineered frames for HV equipment.", icon: "Database" },
            { title: "Marine Steel", description: "Corrosion-protected structural components.", icon: "Globe" }
        ],
        techStack: [
            { name: "Structural Steel", icon: "/images/services/asset-92.jpg" }
        ],
        roi: {
            title: "Corrosion Resistance",
            stats: [
                { label: "Longevity", value: 50, prefix: "+", suffix: " yrs", color: "#10B981" }
            ]
        },
        stats: [
            { value: "Rigid", label: "Build" }
        ],
        process: [
            { step: 1, title: "Fabrication Oversight", description: "Ensuring precision during structural welding and galvanization.", image: "/images/services/fabrication-oversight.png" }
        ],
        faq: [
            { question: "What finishes do you offer?", answer: "We provide Hot Dip Galvanization (HDG) and specialized epoxy coatings for marine use." }
        ],
        useCases: [
            { title: "Coastal Substation Support", description: "Supplying HDG frames for a 132kV seaside substation.", tags: ["Marine", "HV"] }
        ],
        industries: [
            { name: "Civil Works", icon: "Factory", desc: "Foundations & Support" }
        ]
    },
    "hospitality-linen": {
        category: "Hospitality OS&E",
        title: "Housekeeping & Linen",
        subtitle: "Premium textile solutions for luxury guest experiences.",
        heroImage: "/images/services/unsplash-1518186285589-2f7649de83e0.jpg",
        overview: {
            text: "We represent MAEVA Spain, the leading supplier of quality bed and bath linen. Our collection includes custom-made plain and jacquard linen, alongside soft goods like feather and down products designed for elite hospitality brands.",
            image: "/images/services/unsplash-1584132967334-10e028bd69f7.jpg",
            benefits: [
                "Exclusive MAEVA Spain representation",
                "Custom-made plain and jacquard textiles",
                "High-standard feather and down products",
                "Tailored solutions for guestroom concept and design",
                "Durable and premium quality for boutique hotels"
            ]
        },
        features: [
            { title: "Bed Linen", description: "Soft, breathable fabrics for ultimate guest comfort.", icon: "ShoppingBag" },
            { title: "Bath Linen", description: "Highly absorbent, luxury towels and robes.", icon: "Shield" },
            { title: "Turndown Items", description: "Specialized textiles for evening room preparation.", icon: "Activity" }
        ],
        techStack: [
            { name: "MAEVA Spain", icon: "/images/services/asset-94.jpg" }
        ],
        roi: {
            title: "Luxury Linen ROI",
            stats: [
                { label: "Durability", value: 40, prefix: "+", suffix: "%", color: "#10B981" }
            ]
        },
        stats: [
            { value: "Luxury", label: "Class" }
        ],
        process: [
            { step: 1, title: "Fiber Selection", description: "Choosing high-thread count cotton and fine yarns for guest comfort.", image: "/images/services/fiber-selection.png" }
        ],
        faq: [
            { question: "Are your linens custom made?", answer: "Yes, we specialize in custom plain and jacquard linens to client spec." }
        ],
        useCases: [
            { title: "Palace Hotel Supply", description: "Outfitting 500+ rooms with custom jacquard linen from MAEVA.", tags: ["Luxury", "Textile"] }
        ],
        industries: [
            { name: "Hotels", icon: "ShoppingBag", desc: "Luxury guestrooms" }
        ]
    },
    "hospitality-electronics": {
        category: "Hospitality OS&E",
        title: "In-Room Electronics",
        subtitle: "Integrated technology for modern hotel rooms.",
        heroImage: "/images/services/unsplash-1566073771259-6a8506099945.jpg",
        overview: {
            text: "We represent GVtech for state-of-the-art minibar systems and RAMD S.A / SAFEOTEL for comprehensive in-room electronics. From smart safes and hair dryers to specialized hospitality trays, we provide technology that enhances guest convenience.",
            image: "/images/services/unsplash-1522770179533-24471fcdba45.jpg",
            benefits: [
                "Smart Safe solutions for hotel rooms",
                "Energy-efficient GVtech Minibar Systems",
                "RAMD S.A and SAFEOTEL brand representation",
                "Modern hair dryers and bathroom mirrors",
                "Hospitality trays and kettle setups"
            ]
        },
        features: [
            { title: "Minibars", description: "Silent and efficient guest room refreshment centers.", icon: "Zap" },
            { title: "Guest Safes", description: "Secure and user-friendly locking systems.", icon: "Shield" },
            { title: "Electronics", description: "Hairdryers, mirrors, and tech accessories.", icon: "Cpu" }
        ],
        techStack: [
            { name: "GVtech", icon: "/images/services/asset-97.jpg" },
            { name: "SAFEOTEL", icon: "/images/services/asset-98.jpg" }
        ],
        roi: {
            title: "Tech Convenience ROI",
            stats: [
                { label: "In-Room Revenue", value: 15, prefix: "+", suffix: "%", color: "#3B82F6" }
            ]
        },
        stats: [
            { value: "Smart", label: "Guestroom" }
        ],
        process: [
            { step: 1, title: "Tech Integration", description: "Ensuring minibars and safes integrate with hotel power and guest needs.", image: "/images/services/unsplash-1522770179533-24471fcdba45.jpg" }
        ],
        faq: [
            { question: "Do you supply hair dryers?", answer: "Yes, we represent RAMD S.A for high-standard hotel hair dryers." }
        ],
        useCases: [
            { title: "Tech Refresh", description: "Updating minibars to silent GVtech systems for a city hotel.", tags: ["Tech", "Upgrade"] }
        ],
        industries: [
            { name: "Hospitality", icon: "ShoppingBag", desc: "Smart guestrooms" }
        ]
    },
    "hospitality-kitchen": {
        category: "Hospitality OS&E",
        title: "Kitchen & Banquet",
        subtitle: "Commercial equipment for professional food service.",
        heroImage: "/images/services/unsplash-1556910103-1c02745aae4d.jpg",
        overview: {
            text: "Offering complete turnkey solutions for commercial kitchens and banqueting departments. We supply heavy-duty kitchen utensils, professional laundry equipment, and specialized banquet furniture to meet the high demands of large-scale hospitality operations.",
            image: "/images/services/unsplash-1590579491624-f98f36d4c763.jpg",
            benefits: [
                "Full turnkey kitchen equipment packages",
                "Durable commercial-grade utensils",
                "Banqueting supplies for large-scale events",
                "Industrial laundry and cleaning machinery",
                "Provisioning for staff accommodation OS&E"
            ]
        },
        features: [
            { title: "Kitchen Utensils", description: "Professional-grade stainless steel tools.", icon: "ShoppingBag" },
            { title: "Banquet Supplies", description: "Scaling hospitality for large guest counts.", icon: "Target" }
        ],
        techStack: [
            { name: "Commercial Grade", icon: "/images/services/asset-102.jpg" }
        ],
        roi: {
            title: "Operational Efficiency",
            stats: [
                { label: "Waste Reduction", value: 20, prefix: "-", suffix: "%", color: "#10B981" }
            ]
        },
        stats: [
            { value: "Heavy-Duty", label: "Rating" }
        ],
        process: [
            { step: 1, title: "Supply Chain Audit", description: "Standardizing kitchen gear for consistency across properties.", image: "/images/services/unsplash-1556910103-1c02745aae4d.jpg" }
        ],
        faq: [
            { question: "Do you handle staff housing items?", answer: "Yes, we provide full OS&E packages for staff accommodation as well." }
        ],
        useCases: [
            { title: "Resort Kitchen Setup", description: "Turnkey supply for an all-day dining commercial kitchen.", tags: ["Hospitality", "Turnkey"] }
        ],
        industries: [
            { name: "Hotels", icon: "ShoppingBag", desc: "Commercial kitchens" }
        ]
    },
    "hospitality-spa": {
        category: "Hospitality OS&E",
        title: "SPA & Wellbeing",
        subtitle: "Luxury wellness and industrial cleaning solutions.",
        heroImage: "/images/services/unsplash-1519085360753-af0119f7cbe7.jpg",
        overview: {
            text: "We provide specialized spa products and furniture for luxury wellness centers. Additionally, our cleaning equipment division supplies industrial-grade chemicals and machinery for comprehensive property maintenance.",
            image: "/images/services/unsplash-1600334089648-b0d9d3028eb2.jpg",
            benefits: [
                "Complete SPA furniture and equipment",
                "High-end wellness center supplies",
                "Industrial-grade cleaning chemicals",
                "Heavy-duty property maintenance tools",
                "Tailored solutions for luxury resorts"
            ]
        },
        features: [
            { title: "SPA Equipment", description: "Specialized furniture for luxury wellness.", icon: "Activity" },
            { title: "Cleaning Machinery", description: "Industrial tools for property hygiene.", icon: "Shield" }
        ],
        techStack: [
            { name: "Wellness Pro", icon: "/images/services/asset-105.jpg" }
        ],
        roi: {
            title: "Guest Wellness ROI",
            stats: [
                { label: "Guest Satisfaction", value: 95, prefix: "", suffix: "%", color: "#F59E0B" }
            ]
        },
        stats: [
            { value: "Premium", label: "Standard" }
        ],
        process: [
            { step: 1, title: "Wellness Concept", description: "Aligning spa equipment with the property's design theme.", image: "/images/services/wellness-spa.png" }
        ],
        faq: [
            { question: "Do you supply cleaning chemicals?", answer: "Yes, we represent leading industrial chemical brands for housekeeping." }
        ],
        useCases: [
            { title: "Boutique SPA Launch", description: "Providing all furniture and soft goods for a new wellness center.", tags: ["Wellness", "SPA"] }
        ],
        industries: [
            { name: "Hospitality", icon: "ShoppingBag", desc: "Wellness centers" }
        ]
    },
    "hospitality-fb": {
        category: "Hospitality OS&E",
        title: "F&B & Tabletop",
        subtitle: "Fine dining essentials and exclusive placemats.",
        heroImage: "/images/services/unsplash-1414235077428-338989a2e8c0.jpg",
        overview: {
            text: "Elevating the dining experience with premium tabletop items including chinaware, glassware, and stainless steel. We represent Tavola Spain for exclusive vinyl placemats and MAEVA for specialist F&B linen.",
            image: "/images/services/unsplash-1519389950473-47ba0277781c.jpg",
            benefits: [
                "Exclusive Tavola Spain vinyl placemats",
                "Premium chinaware and luxury glassware",
                "Professional-grade stainless steel tabletop",
                "Specialized F&B linen from MAEVA Spain",
                "Menu covers and dining room accessories"
            ]
        },
        features: [
            { title: "Vinyl Placemats", description: "Exclusive designs from Tavola Spain.", icon: "ShoppingBag" },
            { title: "Premium Tabletop", description: "Chinaware and glassware for fine dining.", icon: "Activity" }
        ],
        techStack: [
            { name: "Tavola Spain", icon: "/images/services/asset-107.jpg" },
            { name: "MAEVA Spain", icon: "/images/services/asset-94.jpg" }
        ],
        roi: {
            title: "Dining Aesthetics ROI",
            stats: [
                { label: "Guest Rating", value: 90, prefix: "+", suffix: "%", color: "#F59E0B" }
            ]
        },
        stats: [
            { value: "Fine", label: "Dining" }
        ],
        process: [
            { step: 1, title: "Design Selection", description: "Choosing patterns and textures that match the F&B concept.", image: "/images/services/design-selection.png" }
        ],
        faq: [
            { question: "Who do you represent for placemats?", answer: "We are the exclusive representative for Tavola Spain in the region." }
        ],
        useCases: [
            { title: "Signature Restaurant Launch", description: "Supplying exclusive vinyl placemats for an award-winning venue.", tags: ["Dining", "Exclusive"] }
        ],
        industries: [
            { name: "Hotels & Restaurants", icon: "ShoppingBag", desc: "Fine dining" }
        ]
    },
};
