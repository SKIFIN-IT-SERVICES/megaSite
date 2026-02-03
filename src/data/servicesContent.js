/* src/data/servicesContent.js */
import { Zap, Activity, Shield, Target, CheckCircle2, Cpu, Globe, Database } from 'lucide-react';

export const servicesContent = {
    // AI & Data
    "generative-ai": {
        category: "AI & Data Solutions",
        title: "Generative AI Engineering",
        subtitle: "Architecting the future with Large Language Models and custom generative pipelines.",
        heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2000", /* Abstract Neural Network */

        overview: {
            text: "Our Generative AI solutions go beyond chat interfaces. We build enterprise-grade reasoning engines that integrate securely with your proprietary data. From RAG (Retrieval-Augmented Generation) architectures to fine-tuned foundation models, we enable automated content creation, code generation, and complex decision support.",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1200", /* Code/Dashboard */
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
            { name: "PyTorch", icon: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" },
            { name: "TensorFlow", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
            { name: "Hugging Face", icon: "https://github.com/huggingface.png" },
            { name: "LangChain", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
            { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png?20230316161605" }, /* White logo workaround via ChatGPT logo which is white-compatible or inverted by filter */
            { name: "Pinecone", icon: "https://github.com/pinecone-io.png" },
            { name: "NVIDIA", icon: "https://github.com/nvidia.png" },
            { name: "Databricks", icon: "https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png" }
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
                image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
            },
            {
                step: 2,
                title: "Data Prep & Vectorization",
                description: "Cleaning unstructured data, creating knowledge graphs, and setting up vector indexes for efficient retrieval.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                step: 3,
                title: "Model Development",
                description: "Fine-tuning base models, engineering prompt chains, and orchestrating agent workflows.",
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800"
            },
            {
                step: 4,
                title: "Deployment & Monitoring",
                description: "Rolling out to production with comprehensive observability for latency, cost, and hallucination rates.",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
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
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
            },
            {
                quote: "Their RAG pipeline architecture allowed us to query 10TB of legacy documents instantly with zero hallucinations.",
                author: "Michael C.",
                role: "CTO, Manufacturing Giant",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
            },
            {
                quote: "The ability to deploy open-weight models on our own hardware was a game changer for our compliance requirements.",
                author: "Dr. Emily R.",
                role: "VP AI, HealthSystems",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
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
        heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2000", /* Neural Network / Connectivity */

        overview: {
            text: "Agentic AI moves beyond simple chatbots to autonomous systems capable of pursuing goals. Our agents utilize advanced reasoning, tool use, and memory to handle end-to-end business processes—from supply chain optimization to autonomous software regulation—reducing human overhead by up to 60%.",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200", /* Robot/Cybernetics */
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
            { name: "AutoGPT", icon: "https://github.com/Significant-Gravitas.png" }, /* Official AutoGPT Avatar (Natural) */
            { name: "LangGraph", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
            { name: "CrewAI", icon: "https://github.com/joaomdmoura.png" },
            { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png" }, /* Green/Black standard logo */
            { name: "Anthropic", icon: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" },
            { name: "Pinecone", icon: "https://github.com/pinecone-io.png" },
            { name: "Celery", icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/Celery_logo.png" },
            { name: "Docker", icon: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" }
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
                image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800"
            },
            {
                step: 2,
                title: "Tool Definition",
                description: "Creating secure API wrappers and data connectors for agent interaction.",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
            },
            {
                step: 3,
                title: "Agent Training",
                description: "Teaching agents via few-shot prompting and simulating edge cases in a sandbox.",
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
            },
            {
                step: 4,
                title: "Orchestration",
                description: "Deploying the multi-agent supervisors to manage sub-agents and ensure goal completion.",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
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
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
            },
            {
                quote: "Ideally suited for our supply chain. The agents autonomously negotiated minor re-orders, saving us hours.",
                author: "Maria G.",
                role: "Director of Ops, RetailBrand",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
            },
            {
                quote: "The ability to have a 'coder' agent and a 'reviewer' agent work together on tickets is mind-blowing.",
                author: "David K.",
                role: "Engineering Lead, TechFlow",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
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
        heroImage: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=2000", /* Circuit/Robot Hand */

        overview: {
            text: "We don't just build bots; we build digital workforces. Our Intelligent RPA solutions bridge legacy systems with modern AI, allowing you to automate complex cross-application workflows like invoice processing, employee onboarding, and claims management without ripping and replacing your core infrastructure.",
            image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=1200", /* AI/Hand interaction */
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
            { name: "UiPath", icon: "https://github.com/UiPath.png" },
            { name: "Blue Prism", icon: "https://github.com/blueprism.png" }, /* Official GitHub Org */
            { name: "Automation Anywhere", icon: "https://github.com/AutomationAnywhere.png" },
            { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
            { name: "Selenium", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png" },
            { name: "Docker", icon: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" },
            { name: "Celery", icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/Celery_logo.png" }
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
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                step: 2,
                title: "Bot Design",
                description: "Architecting the bot's logic flow, exception handling, and security credentials.",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
            },
            {
                step: 3,
                title: "Development & Testing",
                description: "Building the scripts and stress-testing them against edge cases and system lag.",
                image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=800"
            },
            {
                step: 4,
                title: "Hypercare Support",
                description: "We monitor the bots closely for the first 2 weeks to ensure 100% stability in production.",
                image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
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
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
            },
            {
                quote: "The bots are incredibly reliable. They handle our peak season order volume without breaking a sweat.",
                author: "Sarah W.",
                role: "Ops Manager, Ecommerce",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
            },
            {
                quote: "Seamless legacy integration. We kept our 20-year-old mainframe but gave it a modern API interface.",
                author: "Amit P.",
                role: "CIO, Banking",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
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
        heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000", /* Coding/IDE */

        overview: {
            text: "Vibe Coding isn't just about speed; it's about flow. We integrate advanced AI coding assistants like GitHub Copilot, Cursor, and custom LLMs into your development environment. This 'Human-in-the-Loop' approach reduces boilerplate, catches bugs early, and allows your senior engineers to focus on architecture and 'vibe'—the intuitive art of great software design.",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200", /* Laptop/Code */
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
            { name: "Antigravity", icon: "https://ui-avatars.com/api/?name=Antigravity&background=000&color=fff&rounded=true" }, /* Custom Agentic Brand */
            { name: "GitHub Copilot", icon: "https://github.com/github.png" },
            { name: "TypeScript", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
            { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
            { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" }, /* Black SVG -> Will be Inverted to White */
            { name: "Anthropic", icon: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" }, /* Black SVG -> Will be Inverted to White */
            { name: "Vercel", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg" }, /* Black SVG -> Will be Inverted to White */
            { name: "Supabase", icon: "https://github.com/supabase.png" }
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
                image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800"
            },
            {
                step: 2,
                title: "Prompt Engineering",
                description: "Training your team on how to prompt for optimal code generation.",
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
            },
            {
                step: 3,
                title: "Vibe Check / Review",
                description: "Humans review the AI output for architecture, security, and 'vibe'.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
            },
            {
                step: 4,
                title: "Deploy",
                description: "Automated CI/CD pipelines push the verified code to production.",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
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
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
            },
            {
                quote: "Our junior devs are performing like mid-levels thanks to the AI guardrails.",
                author: "Tom H.",
                role: "Engineering Manager",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
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
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000", /* Data/Charts */

        overview: {
            text: "Data is your most valuable asset, but only if you can understand it. We help enterprises build modern data platforms—from Data Lakes to Warehouses—enabling real-time reporting, predictive modeling, and self-service BI. We move beyond static spreadsheets to dynamic, interactive insights that drive decision-making.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200", /* Dashboard */
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
            { name: "Snowflake", icon: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg" },
            { name: "Databricks", icon: "https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png" },
            { name: "PowerBI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
            { name: "Tableau", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" },
            { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
            { name: "dbt", icon: "https://github.com/dbt-labs.png" }, /* Official dbt Avatar */
            { name: "Apache Spark", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg" },
            { name: "Kafka", icon: "https://github.com/apache.png" } /* Apache Avatar (Kafka) */
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
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                step: 2,
                title: "Ingest & Store",
                description: "Setting up pipelines to move data from silos to a central lakehouse.",
                image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800"
            },
            {
                step: 3,
                title: "Transform & Model",
                description: "Cleaning and modeling data (dbt) to make it ready for analysis.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                step: 4,
                title: "Visualize & Act",
                description: "Building the dashboards and ML models that drive business action.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
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
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
            },
            {
                quote: "The predictive churn model saved us $2M in revenue in the first quarter alone.",
                author: "Sarah J.",
                role: "VP Marketing, Telecom",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
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
        heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000", /* Earth/Cloud */

        overview: {
            text: "Legacy systems hold you back. We specialize in lifting, shifting, and refactoring on-premise infrastructure to AWS, Azure, or GCP. Our '6 Rs' framework ensures every application finds its perfect cloud home, optimizing for cost, performance, and security during transit.",
            image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&q=80&w=1200", /* Server Room/Abstract */
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
            { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
            { name: "Azure", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
            { name: "Google Cloud", icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
            { name: "Docker", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
            { name: "Kubernetes", icon: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
            { name: "Terraform", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg" },
            { name: "VMware", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg" },
            { name: "Linux", icon: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" }
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
            { quote: "We closed our data center 6 months ahead of schedule. Flawless execution.", author: "David K.", role: "CTO, Retail Giant", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" },
            { quote: "The move to AWS saved us $1.2M annually in hardware refresh costs.", author: "Lisa M.", role: "VP Ops, FinServ", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200" }
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
        heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2000", /* Matrix/Network */

        overview: {
            text: "Why choose one when you can have the best of all? We design robust multi-cloud environments that allow you to run workloads where they run best—whether that's AI on GCP, Windows apps on Azure, or serverless on AWS. We unify management through Terraform and Kubernetes, giving you a 'single pane of glass' control plane.",
            image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=1200", /* Servers/Connections */
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
            { name: "Terraform", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg" },
            { name: "Kubernetes", icon: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
            { name: "Ansible", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ansible_Logo.svg" },
            { name: "Prometheus", icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg" },
            { name: "Grafana", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg" },
            { name: "GitLab", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg" },
            { name: "HashiCorp Vault", icon: "https://www.vectorlogo.zone/logos/hashicorp/hashicorp-icon.svg" },
            { name: "Istio", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Istio_logo.svg" }
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
            { quote: "When AWS had an outage, we failed over to Azure in 3 minutes. Zero customer impact.", author: "James R.", role: "VP Eng, SaaS Co", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" }
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
        heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&q=80&w=2000", /* Lightning/Abstract */

        overview: {
            text: "Stop paying for idle time. Serverless architecture allows you to run code only when an event triggers it—be it an API call, a database change, or a file upload. We build event-driven systems using AWS Lambda, Azure Functions, and Google Cloud Run that automatically scale from zero to infinity, dramatically reducing operational overhead.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200", /* Tech/Code */
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
            { name: "AWS Lambda", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8f/AWS_Lambda_Architecture_Logo.svg" },
            { name: "Azure Functions", icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
            { name: "Google Cloud Run", icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
            { name: "Vercel", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg" },
            { name: "Netlify", icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
            { name: "DynamoDB", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png" },
            { name: "MongoDB", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
            { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" }
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
            { quote: "We scaled to 1M users in a week and our bill was $50. Serverless is magic.", author: "Ben T.", role: "Founder, Viral App", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" }
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
        heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&q=80&w=2000", /* Network/Lights */

        overview: {
            text: "The perimeter is gone. Modern networking is about connecting users to apps securely, regardless of location. We architect software-defined networks (SD-WAN) and Secure Access Service Edge (SASE) solutions that replace clunky VPNs with fast, zero-trust connectivity. We ensure your data flows smoothly and securely across the globe.",
            image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80&w=1200", /* Cables/Tech */
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
            { name: "Cisco", icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg" },
            { name: "Juniper", icon: "https://upload.wikimedia.org/wikipedia/commons/2/23/Juniper_Networks_logo.svg" },
            { name: "Palo Alto", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Palo_Alto_Networks_logo.svg" },
            { name: "Cloudflare", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg" },
            { name: "Fortinet", icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Fortinet_logo.svg" },
            { name: "Aruba", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Aruba_Networks_logo.svg" },
            { name: "Zscaler", icon: "https://www.vectorlogo.zone/logos/zscaler/zscaler-icon.svg" },
            { name: "Meraki", icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Meraki_Logo.svg" }
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
            { quote: "Our remote team says the new ZTNA solution feels like being in the office. Fast and easy.", author: "Karen W.", role: "CIO, Healthcare", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200" }
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
        heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000", /* Server/Speed */

        overview: {
            text: "Speed is a feature. We engineer high-performance hosting solutions using global Content Delivery Networks (CDNs) and Edge Computing. Whether it's a static marketing site or a dynamic web app, we ensure your content reaches users instantly, anywhere in the world. We handle the SSL, the DDoS protection, and the scaling so you don't have to.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200", /* Globe/Speed */
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
            { name: "Cloudflare", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg" },
            { name: "Akamai", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Akamai_logo.svg" },
            { name: "Fastly", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Fastly_logo.svg" },
            { name: "AWS CloudFront", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
            { name: "Nginx", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg" },
            { name: "Varnish", icon: "https://upload.wikimedia.org/wikipedia/commons/2/28/Varnish_Software_logo_2017.svg" },
            { name: "WordPress", icon: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" },
            { name: "Jamstack", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Jamstack_icon_original.svg" }
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
            { quote: "Our LCP (Largest Contentful Paint) dropped to 0.8s globally. Amazing performance.", author: "Tom B.", role: "Web Lead, Agency", image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=200" }
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
        heroImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2000", /* Lock/Security */

        overview: {
            text: "Traditional perimeter security is dead. In a world of remote work and cloud apps, identity is the new firewall. We implement Zero Trust Architectures (ZTA) that enforce least-privilege access, simplify user sign-on, and prevent lateral movement. Whether you’re accessing a legacy app or a SaaS platform, every request is verified, every time.",
            image: "https://images.unsplash.com/photo-1614064641938-3bcee5297129?auto=format&fit=crop&q=80&w=1200", /* Shield/Lock */
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
            { name: "Okta", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Okta_logo.svg" },
            { name: "Zscaler", icon: "https://www.vectorlogo.zone/logos/zscaler/zscaler-icon.svg" },
            { name: "Palo Alto Networks", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Palo_Alto_Networks_logo.svg" },
            { name: "CrowdStrike", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/CrowdStrike_logo.svg" },
            { name: "HashiCorp Boundary", icon: "https://www.vectorlogo.zone/logos/hashicorp/hashicorp-icon.svg" },
            { name: "Microsoft Entra", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" }, /* Using Azure icon which represents Entra/AD suite well */
            { name: "Cloudflare Access", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg" }
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
            { quote: "Onboarding used to take a week. With Zero Trust, new hires have access in 5 minutes.", author: "Mike R.", role: "CISO, Fintech", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" }
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
        heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000", /* Matrix/Ops */

        overview: {
            text: "Sleep soundly while our Security Operations Center (SOC) watches the wall. We aggregate logs from every corner of your estate—cloud, endpoint, network, identity—into a next-gen SIEM. Our AI-driven detection engine spots anomalies in real-time, and our SOAR playbooks shut down threats before they become breaches.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200", /* Digital Map */
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
            { name: "Splunk", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Splunk_Logo.svg" },
            { name: "Datadog", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Datadog_logo.svg" },
            { name: "Elastic Security", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Elasticsearch_logo_colored_2014.svg" },
            { name: "Sumo Logic", icon: "https://www.vectorlogo.zone/logos/sumologic/sumologic-icon.svg" },
            { name: "Microsoft Sentinel", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
            { name: "CrowdStrike", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/CrowdStrike_logo.svg" },
            { name: "Wiz", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Wiz_logo.svg" }
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
            { quote: "The team caught a credential stuffing attack at 2AM on a Sunday. Saved us millions.", author: "Sarah L.", role: "CTO, Healthcare", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" }
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
        heroImage: "https://images.unsplash.com/photo-1563206767-5b1d972d9323?auto=format&fit=crop&q=80&w=2000", /* Shield/Code */

        overview: {
            text: "Antivirus is obsolete. Today's threats don't always use files; they use memory, scripts, and trusted system tools. We deploy robust Endpoint Detection and Response (EDR) agents that monitor behavior, not just signatures. If a laptop gets infected, we isolate it from the network instantly, preventing the spread of ransomware.",
            image: "https://images.unsplash.com/photo-1590494860768-ff99a08ce1d9?auto=format&fit=crop&q=80&w=1200", /* Laptop/Lock */
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
            { name: "CrowdStrike", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/CrowdStrike_logo.svg" },
            { name: "SentinelOne", icon: "https://upload.wikimedia.org/wikipedia/commons/6/67/SentinelOne_logo.svg" },
            { name: "Microsoft Defender", icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_Defender_Security_Center.svg" },
            { name: "Carbon Black", icon: "https://www.vectorlogo.zone/logos/vmware_carbonblack/vmware_carbonblack-icon.svg" },
            { name: "Sophos", icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Sophos_logo.svg" },
            { name: "Trend Micro", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Trend_Micro_logo.svg" },
            { name: "Jamf", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Jamf_Logo.svg" }
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
            { quote: "SentinelOne rolled back a ransomware attack on our HR laptop in 30 seconds. Incredible.", author: "James T.", role: "SysAdmin, Logistics", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" }
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
        heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000", /* Cloud/Globe */

        overview: {
            text: "Cloud security is complex; misconfigurations are the #1 cause of breaches. We deploy Cloud Native Application Protection Platforms (CNAPP) that scan your entire cloud estate agentlessly. We find open S3 buckets, over-privileged IAM roles, and unpatched containers instantly. Secure your build pipeline and your runtime environment.",
            image: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&q=80&w=1200", /* Cloud/Lock */
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
            { name: "Wiz", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Wiz_logo.svg" },
            { name: "Prisma Cloud", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Palo_Alto_Networks_logo.svg" },
            { name: "Orca Security", icon: "https://upload.wikimedia.org/wikipedia/en/2/21/Orca_Security_Logo.svg" },
            { name: "Lacework", icon: "https://upload.wikimedia.org/wikipedia/commons/0/07/Lacework_logo_2024.svg" },
            { name: "Snyk", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Snyk_logo.svg" },
            { name: "Aqua Security", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Aqua_Security_logo.svg" },
            { name: "AWS Security Hub", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" }
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
            { quote: "Wiz showed us that our 'private' database was actually exposed via a load balancer. Scariest value add ever.", author: "Alex D.", role: "Cloud Architect", image: "https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80&w=200" }
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
        heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000", /* Paperwork/Pen */

        overview: {
            text: "Compliance doesn't have to be a nightmare of spreadsheets and screenshots. We implement automated GRC (Governance, Risk, and Compliance) platforms that connect to your infrastructure and continuously monitor controls. We help you achieve SOC2, HIPAA, GDPR, and ISO 27001 certification faster, closing deals with enterprise clients.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200", /* Meeting/Audit */
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
            { name: "Drata", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Drata_Logo.svg" },
            { name: "Vanta", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Vanta_logo.svg" },
            { name: "OneTrust", icon: "https://upload.wikimedia.org/wikipedia/commons/8/80/OneTrust_logo.svg" },
            { name: "Sprig", icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Sprig_Logo.svg" }, /* Generic GRC */
            { name: "AWS Audit Manager", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
            { name: "KnowBe4", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9c/KnowBe4_logo.svg" }
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
            { quote: "We got SOC2 Type 1 certified in 3 weeks using this platform. Our enterprise pipeline unlocked overnight.", author: "Daniel H.", role: "CEO, SaaS Startup", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200" }
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
        heroImage: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=2000", /* Code/Refactor */

        overview: {
            text: "Legacy code is technical debt that creates risk. We don't just 'lift and shift'; we modernize. Using the Strangler Fig pattern, we incrementally refactor monolithic applications into containerized microservices. This improves maintainability, allows for independent scaling, and enables you to deploy new features in hours, not months.",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200", /* Coding/Screen */
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
            { name: "Docker", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
            { name: "Kubernetes", icon: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
            { name: "PostgreSQL", icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
            { name: "MongoDB", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
            { name: "Redis", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Redis_Logo.svg" },
            { name: "Kafka", icon: "https://cdn.simpleicons.org/apachekafka/white" },
            { name: "Spring Boot", icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg" },
            { name: ".NET Core", icon: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg" }
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
            { quote: "We couldn't release features because of regression testing. Modernization unlocked our roadmap.", author: "Eric P.", role: "VP Eng, Insurance", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" }
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
        heroImage: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=2000", /* Team/Screen */

        overview: {
            text: "Your digital front door matters. We build pixel-perfect, highly responsive web and mobile applications that users love. Whether it's a Progressive Web App (PWA) with offline capabilities or a cross-platform mobile app, we focus on performance (Core Web Vitals), accessibility (WCAG), and conversion.",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200", /* Mobile/Design */
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
            { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
            { name: "Next.js", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" }, /* White-friendly version or invert */
            { name: "TypeScript", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
            { name: "Flutter", icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" },
            { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
            { name: "GraphQL", icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" },
            { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
            { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" }
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
            { quote: "Our mobile app feels native but was built in half the time using Flutter. Amazing work.", author: "Jessica K.", role: "Product Owner", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200" }
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
        heroImage: "https://images.unsplash.com/photo-1667372393119-c81c0cda0a63?auto=format&fit=crop&q=80&w=2000", /* Pipeline/Abstract */

        overview: {
            text: "Stop throwing code over the wall. We implement world-class DevSecOps pipelines that automate testing, security scanning, and deployment. By shifting security left, we catch vulnerabilities during development, not after deployment. Our goal is enabling you to push code to production multiple times a day with total confidence.",
            image: "https://images.unsplash.com/photo-1607799275518-d58665d096c5?auto=format&fit=crop&q=80&w=1200", /* CI/CD */
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
            { name: "Jenkins", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg" },
            { name: "GitLab CI", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg" },
            { name: "GitHub Actions", icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
            { name: "SonarQube", icon: "https://www.vectorlogo.zone/logos/sonarqube/sonarqube-icon.svg" },
            { name: "Prometheus", icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg" },
            { name: "Ansible", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ansible_Logo.svg" },
            { name: "HashiCorp Vault", icon: "https://www.vectorlogo.zone/logos/hashicorp/hashicorp-icon.svg" },
            { name: "ArgoCD", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Argo-cd.svg" }
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
            { quote: "Our lead time for changes went from 3 weeks to 4 hours. Game changer.", author: "Maria G.", role: "Director of Eng", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200" }
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
        heroImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000", /* Office/Team */

        overview: {
            text: "Downtime is expensive. Our Managed IT Services provide comprehensive support for your infrastructure, end-user devices, and software. From 24/7 helpdesk support to automated patch management and asset tracking, we act as your dedicated IT department. We fix problems before you even know they exist.",
            image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=1200", /* Support/Help */
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
            { name: "ServiceNow", icon: "https://upload.wikimedia.org/wikipedia/commons/1/15/ServiceNow_logo.svg" },
            { name: "Jira Service Mgmt", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Jira_Logo.svg" },
            { name: "SolarWinds", icon: "https://www.vectorlogo.zone/logos/solarwinds/solarwinds-icon.svg" },
            { name: "TeamViewer", icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/TeamViewer_Logo_Icon.svg" },
            { name: "Microsoft 365", icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
            { name: "Slack", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
            { name: "Zoom", icon: "https://upload.wikimedia.org/wikipedia/commons/2/24/Zoom_Communications_Logo.png" },
            { name: "Kaseya", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Kaseya_Logo.jpg" } /* Might need check, sticking to reliable ones */
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
            { quote: "It feels like they are sitting in the office next to us. Super responsive.", author: "Bill M.", role: "CEO, Law Firm", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" }
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
        heroImage: "https://images.unsplash.com/photo-1593642632823-8f78536709c6?auto=format&fit=crop&q=80&w=2000", /* WFH/Desk */

        overview: {
            text: "Work is something you do, not a place you go. We design Digital Workplaces that bridge the gap between physical and remote teams. By integrating Microsoft 365, Slack, Zoom, and VDI solutions, we create a seamless environment where collaboration happens naturally. We ensure the experience is consistent whether on a laptop, tablet, or phone.",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200", /* Collab/Video */
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
            { name: "Microsoft 365", icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
            { name: "Slack", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
            { name: "Zoom", icon: "https://upload.wikimedia.org/wikipedia/commons/2/24/Zoom_Communications_Logo.png" },
            { name: "Citrix", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Citrix_Systems_logo.svg" },
            { name: "Notion", icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
            { name: "Asana", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg" },
            { name: "Google Workspace", icon: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" },
            { name: "Dropbox", icon: "https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg" }
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
            { quote: "Slack + Zoom integration changed how we run meetings. No more fumbling for links.", author: "Ryan S.", role: "COO, Media", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=200" }
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
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000", /* Dashboard/Finance */

        overview: {
            text: "Scaling a subscription business is hard. Subsman simplifies it. From complex usage-based billing to automated dunning management and global tax compliance, we handle the boring infrastructure so you can focus on product. Our unified dashboard gives you real-time visibility into MRR, Churn, and LTV, helping you make data-driven decisions.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200", /* Analytics/Chart */
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
            { name: "Stripe", icon: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
            { name: "PayPal", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
            { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
            { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
            { name: "AWS Lambda", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
            { name: "PostgreSQL", icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
            { name: "Docker", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" }
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
            { quote: "We switched to Subsman and recovered $50k in failed payments in the first month alone.", author: "David C.", role: "CFO, Tech Startup", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" }
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
        heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000", /* Meeting/Table */

        overview: {
            text: "Off-the-shelf CRMs like Salesforce are powerful but often bloated and expensive. We build Custom CRM solutions tailored exactly to your business processes. Whether you need a specific sales pipeline, complex inventory integration, or a unique customer portal, we build it. Own your data, own your workflow, and stop paying for features you don't use.",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200", /* Handshake/Deal */
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
            { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
            { name: "PostgreSQL", icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
            { name: "Retool", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Retool_logo.png" } /* Need verify or generic code icon */,
            { name: "Salesforce", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
            { name: "HubSpot", icon: "https://upload.wikimedia.org/wikipedia/commons/1/15/HubSpot_Logo.png" } /* Careful with png, used often */,
            { name: "Twilio", icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg" },
            { name: "SendGrid", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2b/SendGrid_Logo.png" }
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
            { quote: "Our custom CRM handles our complex commission structure perfectly. Salesforce couldn't do it.", author: "Amanda B.", role: "Sales Director", image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=200" }
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
        heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000", /* Strategy/Boardroom */

        overview: {
            text: "Technology moves faster than most organizations can adapt. Our Digital Strategy practice helps you cut through the noise. We don't just deliver slide decks; we align your technology investments with business outcomes. From modernizing legacy stacks to adopting AI at scale, we provide the blueprint—and the execution power—to turn ambition into reality.",
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200", /* Presentation */
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
            { name: "McKinsey 7S", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/McKinsey_%26_Company_Mark.svg/2560px-McKinsey_%26_Company_Mark.svg.png" } /* Concept icon/logo */,
            { name: "Miro", icon: "https://upload.wikimedia.org/wikipedia/commons/5/53/Miro_logo.svg" },
            { name: "Jira Align", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Jira_Logo.svg" },
            { name: "Lucidchart", icon: "https://upload.wikimedia.org/wikipedia/commons/7/75/Lucidsoftware-logo_2020.svg" },
            { name: "Gartner", icon: "https://upload.wikimedia.org/wikipedia/commons/6/66/Gartner_logo.svg" }
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
            { quote: "They didn't just give us a roadmap; they built the first MVP to prove it worked.", author: "Sarah J.", role: "CIO, Retail Giant", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" }
        ],
        faq: [
            { question: "Do you just do advice?", answer: "No. We recognize ourselves as 'Strategy through Execution'. We code what we recommend." }
        ]
    },

    "staff-augmentation": {
        category: "Consulting",
        title: "Staff Augmentation",
        subtitle: "Scale your engineering team with top 1% global talent. On-demand.",
        heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000", /* Teamwork */

        overview: {
            text: "Recruiting elite engineers takes months. We give you access to them in days. Our Staff Augmentation service bridges the talent gap with pre-vetted, senior-level developers, architects, and designers who embed directly into your existing workflows. Whether you need a single specialist or a full squad, we scale with your roadmap.",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200", /* Collaboration */
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
            { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
            { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
            { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
            { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
            { name: "Kubernetes", icon: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" }
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
            { quote: "We added 4 engineers to our team in a week. They hit the ground running and felt like part of the culture.", author: "Mike R.", role: "CTO, FinTech Scaleup", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" }
        ],
        faq: [
            { question: "What timezones?", answer: "We support EST, PST, GMT, and IST overlap hours." },
            { question: "Is there a minimum?", answer: "Typically 3 months, full-time engagement." }
        ]
    }
};
