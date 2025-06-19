// Site Configuration - Edit this file to update your content across all pages
const siteConfig = {
    // Basic Information
    navName: "John Bollenbacher",           // Name shown in top navigation
    heroName: "John Bollenbacher, PhD",    // Name shown on hero/landing page  
    copyrightName: "John Bollenbacher",    // Name shown in footer copyright
    title: "Data Science & AI Consultant",
    email: "jmbollenbacher@gmail.com",
    photo: "resources/profile.webp", // Local file in same directory
    
    // Hero Section
    hero: {
        description: "Delivering the promise of AI and advanced analytics to improve the human condition."
    },
    
    // About Section
    about: {
        paragraphs: [
            "I'm a data scientist and AI consultant serving mission-driven organizations. At [RTI International](https://rti.org), I help government agencies and Fortune 500 clients bridge the gap between cutting-edge research and tangible impacts.",
            
            "I believe in delivering the promise of AI and advanced analytics to improve the human condition.",
            
            "I work in public health, environmental science, and computational social science to help clients make data-driven decisions and scale their efforts to serve the public good."
        ]
    },
    
    // Expertise Areas
    expertise: [
        {
            title: "AI Development",
            description: "AI strategy, AI automation, and AI performance validation to accelerate and scale your work. Privacy, ethics, and model welfare in AI deployment."
        },
        {
            title: "Data Science",
            description: "Statistical and geospatial analysis, predictive modeling, and data visualization for actionable insights."
        },
        {
            title: "Causal Inference",
            description: "Estimating the effects of policies and strategic decisions on outcomes using statistical methods and causal analyses."   
        },
        {
            title: "Natural Language Processing",
            description: "Document understanding, social media analysis, and AI-assisted qualitative analysis to get the most out of your unstructured text data."
        },
    ],
    
    // Projects
    projects: [
        {
            title: "Measuring Effects of Antivaccine Content on COVID-19 Outcomes",
            description: "Estimated the effect of antivaccine social media posts on COVID-19 vaccinations, cases, and deaths in US counties using a novel compartmental epidemiological model and causal inference.",
            image: "resources/antivax_tweets_project_thumbnail.png",
            tags: ["Public Health", "Social Media Analysis", "Bayesian Statistics", "Causal Inference"],
            url: "https://github.com/osome-iu/effects_of_antivax_tweets_on_covid19_outcomes"
        },
        {
            title: "AI-Assisted Qualitative Analysis of NSF Research Merit Review Reports",
            description: "Applied AI to efficiently conduct a systematic review of a large collection of National Science Foundation's research merit review [reports](https://www.nsf.gov/about/performance/cov) to identify common recommendations, difficulties, and emerging research trends to inform research funding priorities and research merit review processes.",
            image: "resources/nsf_logo.jpeg",
            tags: ["Natural Language Processing", "Applied AI", "Government Innovation","Program Evaluation"],
            url: null
        },
        {
            title: "EPA Methane Emissions Inventory",
            description: "Aggregated, homogenized, and geolocated a diverse collection of methane emissions data from dozens of sources for the US Environmental Protection Agency as part of the EPA's Greenhouse Gas Reporting Program (GHGRP).",
            image: "resources/epa_logo.png",
            tags: ["Data Science", "Geospatial Data", "Environmental Science", "Climate Change"],
            url: 'https://www.epa.gov/ghgreporting/ghgrp-emissions-location'
        }
    ],
    
    // Publications
    publications: [
        {
            title: "Effects of Antivaccine Tweets on COVID-19 Vaccinations, Cases, and Deaths",
            journal: "EPJ Data Science",
            year: "2025",
            url: 'https://arxiv.org/abs/2406.09142'
        },
        {
            title: "LLM-Assisted Content Analysis: Using Large Language Models to Support Deductive Coding",
            journal: "arxiv",
            year: "2023",
            url: "https://arxiv.org/abs/2306.14924"
        },
        {
            title: "Measuring Offline Effects of Online Social Media",
            journal: "PhD Thesis, Indiana University",
            year: "2023",
            url: 'https://www.proquest.com/openview/5c1fcc6bc79d00a28c219b3c09c108f9/1'
        },
        {
            title: "CoVaxxy: A collection of English-language Twitter posts about COVID-19 vaccines",
            journal: "International AAAI Conference on Web and Social Media (ICWSM)",
            year: "2021",
            url: 'https://ojs.aaai.org/index.php/ICWSM/article/view/18122'
        }
    ],
    
    // Contact & Social Links
    contact: {
        intro: "I'm always interested in discussing mission-driven projects, academic collaborations, or consulting opportunities that align with my values of public service and ethical AI development.",
        interests: "Areas of Interest: Public Health, Environmental Protection, AI Ethics, Government Innovation, Academic Research"
    },

    // Resume Section
    resume: {
        intro: "Download my resume and CV for detailed information about my experience, publications, and qualifications.",
        files: [
            {
                title: "Skills Resume",
                description: "Focused on consulting experience, technical skills, and recent projects. Ideal for recruiters and potential clients.",
                filename: "resources/Resume.pdf"
            },
            {
                title: "Full CV",
                description: "Comprehensive academic curriculum vitae including all publications and most projects.",
                filename: "resources/CV.pdf"
            }
        ]
    },
    
    // Social Media Links
    social: [
        {
            name: "Google Scholar",
            url: "https://scholar.google.com/citations?user=uiUoGrgAAAAJ&hl=en",
            icon: "📚" // Can be emoji or image file path like "google-scholar.png"
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/jmbollenbacher",
            icon: "💼" // Can be emoji or image file path like "linkedin.png"
        },
        {
            name: "GitHub",
            url: "https://github.com/jbollenbacher",
            icon: "💻" // Can be emoji or image file path like "twitter.png"
        },
        {
            name: "Email",
            url: "mailto:jmbollenbacher@gmail.com",
            icon: "✉️" // Can be emoji or image file path like "email.png"
        }
    ]
};