export interface CaseStudy {
  id: string;
  category: 'computer-vision' | 'conversational-ai' | 'finance' | 'operations';
  title: string;
  industry: string;
  desc: string;
  tech: string[];
  iconName: 'Cog' | 'ImageIcon' | 'ScanSearch' | 'LineChart' | 'MessageSquare' | 'Globe2' | 'HeartPulse';
  problem: string;
  solution: string;
  impact: {
    value: string;
    label: string;
  }[];
}

export const CASE_STUDIES_LIST: CaseStudy[] = [
  {
    id: 'industrial-vision',
    category: 'computer-vision',
    title: 'Automated Quality Inspection for Commercial Automotive Manufacturing',
    industry: 'Manufacturing & Industrial',
    desc: 'Transforming manual assembly line inspection for a leading multi-national commercial vehicle manufacturer using deep learning quality inspection.',
    tech: ['PyTorch', 'ResNet-50', 'TensorRT', 'Edge AI'],
    iconName: 'Cog',
    problem: 'A leading multi-national vehicle manufacturer relied on manual visual inspection for 500+ critical engine parts. High fatigue led to a 5% defect leakage, causing expensive assembly line halts and aftermarket recalls.',
    solution: 'We deployed a high-speed Computer Vision system at the edge. Using custom-trained Deep Learning models (ResNet-50 & TensorRT), we achieved real-time detection of micro-cracks and misalignment with sub-millisecond latency.',
    impact: [
      { value: '99.8%', label: 'Detection Accuracy' },
      { value: '40%', label: 'Reduction in Rework Costs' },
      { value: 'Zero', label: 'Manual Fatigue Errors' },
    ],
  },
  {
    id: 'hospitality-visual-intelligence',
    category: 'computer-vision',
    title: 'Multi-modal AI for Scaleable Travel Content Curation',
    industry: 'Leisure & Hospitality',
    desc: 'Leveraging Multi-modal LLMs to automate aesthetic scoring and gallery optimization for high-traffic travel portals.',
    tech: ['Gemini 1.5 Pro', 'Python', 'Vector DBs', 'Vision-Language Models'],
    iconName: 'ImageIcon',
    problem: 'Global hotel booking portals process millions of user-uploaded photos daily. Manually scoring these for aesthetic quality, lighting, and brand compliance took weeks, delaying property launches.',
    solution: 'Developed an automated pipeline using Vision-Language Models (VLMs) and Gemini 1.5 Pro. The system scores images based on "vacation appeal," brightness, and composition, auto-optimizing gallery ordering.',
    impact: [
      { value: '95%', label: 'Automated Approval Rate' },
      { value: '2s', label: 'Processing Time per Album' },
      { value: '18%', label: 'Lift in User Engagement' },
    ],
  },
  {
    id: 'semantic-identity-verification',
    category: 'computer-vision',
    title: 'Automated Identity & Duplicate Verification in Global Property Inventories',
    industry: 'PropTech & Real Estate',
    desc: 'Automating the final verification funnel for property listings by replacing manual visual inspection with targeted semantic duplication checks.',
    tech: ['CLIP Embeddings', 'Milvus', 'Python', 'Metadata Matching'],
    iconName: 'ScanSearch',
    problem: 'Property inventory platforms faced significant identity fraud where users uploaded stock photos or already listed property shots. While probable matches were identified via metadata (name, location, attributes), the final verification required a slow, manual human inspection to confirm visual duplication.',
    solution: 'We implemented a Targeted Semantic Visual Verification stage. By applying CLIP Embeddings at the final verification step for probable hotel matches, we automated the visual cross-referencing process, eliminating the need for human intervention and instantly flagging verified duplicates.',
    impact: [
      { value: '100%', label: 'Visual Inspection Automation' },
      { value: 'Instant', label: 'Verification Speed' },
      { value: '92%', label: 'Fraud Detection Accuracy' },
    ],
  },
  {
    id: 'energy-trading',
    category: 'finance',
    title: 'AI-Driven Revenue Optimization in Energy Trading',
    industry: 'Energy & Trading',
    desc: 'Architecting high-frequency trading algorithms to identify arbitrage opportunities and maximize profits within the UK electricity market.',
    tech: ['Python', 'ML', 'Time Series', 'Predictive Analytics'],
    iconName: 'LineChart',
    problem: 'The UK day-ahead electricity market presents high-risk volatility between auction windows, requiring sub-marginal timing for non-physical financial trades to hedge against price spikes.',
    solution: 'Architected a high-frequency trading algorithm that leverages ensemble ML models and time-series analysis to identify arbitrage opportunities across the grid. The system automates trade execution by correlating weather patterns, grid load, and historical pricing cycles.',
    impact: [
      { value: '22%', label: 'Profit Margin Increase' },
      { value: '85%', label: 'Prediction Confidence' },
      { value: 'Real-time', label: 'Market Signals' },
    ],
  },
  {
    id: 'cpa-revenue-optimization',
    category: 'finance',
    title: 'Precision Predictive Modeling for Global Revenue Optimization',
    industry: 'TravelTech & Finance',
    desc: 'Engineering robust forecasting pipelines to predict realized revenue and stabilize attribution signals across global marketing channels.',
    tech: ['Predictive Modeling', 'Revenue Optimization', 'Revenue Operations', 'Python'],
    iconName: 'LineChart',
    problem: 'Global travel platforms struggle with high variance in attributed revenue due to booking cancellations and attribution window latency, leading to inefficient marketing spend.',
    solution: 'Engineered a robust forecasting pipeline to predict final realized revenue with extreme precision. The system integrates deep market-level behavioral features to stabilize attribution signals and optimize global budget allocation strategies.',
    impact: [
      { value: '0.23%', label: 'Global Error Rate' },
      { value: '8%', label: 'MAPE' },
      { value: '9%', label: 'Additional Revenue' },
    ],
  },
  {
    id: 'enterprise-telephony',
    category: 'conversational-ai',
    title: 'Enterprise AI Telephony & Autonomous Voice Engineering',
    industry: 'Customer Support & BPO',
    desc: 'Architecting high-scale AI voice platforms with 95% STT latency reduction and real-time IVR navigation for global operations.',
    tech: ['LiveKit', 'GPT-4', 'STT/TTS', 'MongoDB'],
    iconName: 'Cog',
    problem: 'Enterprises managing massive call volumes faced high operational costs, slow IVR navigation, and inconsistent human performance leading to significant customer drop-offs and data latency.',
    solution: 'Architected a robust AI telephony platform featuring campaign management and real-time behavioral analytics. We engineered an intelligent Voice Bot system using LiveKit and GPT-4 to handle fluid IVR navigation and mission-critical speech processing at scale.',
    impact: [
      { value: '95%', label: 'STT Latency Reduction' },
      { value: '10k+', label: 'Concurrent Voice Streams' },
      { value: '60%', label: 'Call Center Cost Savings' },
    ],
  },
  {
    id: 'alfaaz-ai',
    category: 'conversational-ai',
    title: 'Alfaaz: Specialized Multilingual Speech-to-Text for Indic Languages',
    industry: 'Media & EdTech',
    desc: 'Fine-tuning open-source models for Hindi, Urdu, and Hinglish with Devanagari post-processing and sentiment analysis.',
    tech: ['Whisper', 'Fine-tuning', 'Python', 'React'],
    iconName: 'MessageSquare',
    problem: 'Off-the-shelf Speech-to-Text APIs fail on code-mixed Indic languages (Hinglish/Urdu), producing poor transcriptions for regional media and customer support channels.',
    solution: 'Built Alfaaz AI, fine-tuning OpenAI Whisper on custom Indic speech datasets. Implemented real-time Devanagari text normalization and automated sentiment classification.',
    impact: [
      { value: '94%', label: 'Word Error Rate Accuracy' },
      { value: '3 Languages', label: 'Hindi, Urdu, Hinglish' },
      { value: '<500ms', label: 'Streaming Latency' },
    ],
  },
  {
    id: 'whatsapp-chatbots',
    category: 'conversational-ai',
    title: 'Omnichannel Conversational Commerce & Service Automation',
    industry: 'Retail & Healthcare',
    desc: 'Deploying intelligent WhatsApp chatbots for hospitals, e-commerce, and restaurants to automate end-to-end user journeys.',
    tech: ['WhatsApp API', 'LLMs', 'Node.js', 'Automated Workflows'],
    iconName: 'Globe2',
    problem: 'Businesses struggled with low conversion on web forms and high support desk congestion for routine customer queries.',
    solution: 'Designed turn-key WhatsApp Business API bots integrating LLM intent recognition, automated appointment booking, payment link generation, and CRM synchronization.',
    impact: [
      { value: '70%', label: 'Reduction in Support Tickets' },
      { value: '3x', label: 'Higher Lead Conversion' },
      { value: '24/7', label: 'Instant Automated Resolution' },
    ],
  },
  {
    id: 'healthcare-risk',
    category: 'operations',
    title: 'Applied Data Science for Clinical Healthcare Risk',
    industry: 'Healthcare',
    desc: 'Created an ML risk classification system analyzing blood pressure metrics for early clinical risk detection.',
    tech: ['Healthcare Tech', 'ML', 'Data Science', 'Python'],
    iconName: 'HeartPulse',
    problem: 'Early clinical risk identification in hypertensive patients often failed due to fragmented electronic health records and un-monitored outpatient blood pressure trends.',
    solution: 'Developed a predictive data science pipeline using supervised Machine Learning to continuously analyze patient vitals and trigger clinical risk alerts for early intervention.',
    impact: [
      { value: '88%', label: 'Risk Stratification Precision' },
      { value: 'Early Alert', label: 'Automated Doctor Alerts' },
      { value: '35%', label: 'Faster Intervention Rate' },
    ],
  },
  {
    id: 'health-insurance-fraud',
    category: 'operations',
    title: 'Predictive Analytics for Health Insurance Fraud & Claims Pre-authorization',
    industry: 'Health Insurance & FinTech',
    desc: 'Architecting an integrated API-based engine to predict fraud probability and streamline pre-authorization decisions for insurance providers.',
    tech: ['H2O.ai', 'REST APIs', 'ML Classification', 'Secure Diagnostics'],
    iconName: 'LineChart',
    problem: 'Insurance providers suffered heavy financial losses from fraudulent health claims and experienced bottlenecks in manual pre-authorization claim approvals.',
    solution: 'Architected an automated fraud detection engine using H2O.ai classification algorithms and secure REST APIs to evaluate incoming claim patterns in real time.',
    impact: [
      { value: '$2.4M', label: 'Fraudulent Claims Intercepted' },
      { value: '80%', label: 'Auto-Approval for Valid Claims' },
      { value: 'Sub-second', label: 'Scoring Latency' },
    ],
  },
  {
    id: 'inventory-optimization',
    category: 'operations',
    title: 'Resilient Supply Chain Architecture: Predictive Inventory Optimization',
    industry: 'Logistics & Supply Chain',
    desc: 'Designing automated multi-echelon forecasting systems using hybrid deep learning architectures for global supply chain resilience.',
    tech: ['TensorFlow', 'Random Forests', 'LSTM RNNs', 'Supply Chain AI'],
    iconName: 'Cog',
    problem: 'Supply chain disruptions caused frequent inventory stockouts and overstocking across regional distribution centers.',
    solution: 'Built a multi-echelon demand forecasting system combining LSTM recurrent neural networks and Random Forests to predict localized demand spikes with seasonal adjustment.',
    impact: [
      { value: '30%', label: 'Reduction in Holding Costs' },
      { value: '98%', label: 'On-Time Order Fulfillment' },
      { value: '15%', label: 'Decrease in Stockouts' },
    ],
  },
  {
    id: 'global-data-search',
    category: 'operations',
    title: 'High-Scale Search Infrastructure & Global Data Aggregation',
    industry: 'Data Strategy & Search',
    desc: 'Scaling distributed search infrastructure to index and analyze billions of global data points for real-time intelligence discovery.',
    tech: ['Search Infrastructure', 'Distributed Systems', 'Data Mining', 'Python'],
    iconName: 'ScanSearch',
    problem: 'Legacy data search systems crashed under sub-second query requirements across multi-terabyte un-indexed document stores.',
    solution: 'Engineered a high-performance distributed indexing engine capable of real-time full-text search, semantic clustering, and low-latency data aggregation.',
    impact: [
      { value: '10B+', label: 'Data Points Indexed' },
      { value: '<50ms', label: 'Average Query Latency' },
      { value: '99.99%', label: 'System Uptime' },
    ],
  },
  {
    id: 'erp-solutions',
    category: 'operations',
    title: 'Digital ERP Transformation for Educational Impact',
    industry: 'Education & Governance',
    desc: 'Designed custom management and ERP solutions to streamline billing, attendance, and record keeping for local institutions.',
    tech: ['Web Platforms', 'Custom Database Systems', 'ERP', 'Node.js'],
    iconName: 'Globe2',
    problem: 'Regional educational institutions struggled with paper-based record management, delayed fee collection, and administrative overhead.',
    solution: 'Developed a custom cloud ERP suite featuring automated billing, attendance tracking, student record management, and administrative dashboards.',
    impact: [
      { value: '100%', label: 'Paperless Administration' },
      { value: '50%', label: 'Reduction in Billing Delay' },
      { value: '5,000+', label: 'Active Daily Users' },
    ],
  },
];

export const CASE_STUDY_MAP: Record<string, CaseStudy> = CASE_STUDIES_LIST.reduce(
  (acc, study) => {
    acc[study.id] = study;
    return acc;
  },
  {} as Record<string, CaseStudy>
);
