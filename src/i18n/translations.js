// ─────────────────────────────────────────────────────────────────────────
// Decoupled translation dictionary — the single source of truth for all copy.
// `en` and `it` share an identical shape; the engine (LanguageContext) reads
// the active locale and resolves dot-paths against the matching dictionary.
// ─────────────────────────────────────────────────────────────────────────

export const en = {
  nav: {
    brand: 'AXION INSPECT SRL',
    tagline: 'Anywhere in Europe',
    links: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      industries: 'Industries',
      contact: 'Contact',
    },
    cta: 'Get Quote',
  },

  hero: {
    eyebrow: 'European Third-Party Inspection Leader',
    titleLead: 'Ensuring',
    titleHighlight: 'Quality',
    titleTail: 'and Compliance',
    body: 'AXION INSPECT SRL provides comprehensive third-party inspection and expediting services across Europe. We ensure quality assurance, regulatory compliance, and on-time project execution — anywhere in Europe.',
    ctaPrimary: 'Request a Quote',
    ctaSecondary: 'Contact Us',
    imageAlt: '3rd Party Inspection: How to Ensure Quality and Compliance',
  },

  impact: {
    eyebrow: 'Excellence in Every Inspection',
    titleLead: 'Demonstrating',
    titleHighlightA: 'Excellence',
    titleMid: 'through',
    titleHighlightB: 'Innovation',
    body: 'AXION INSPECT SRL is a comprehensive, end-to-end provider of independent inspection services across Europe. We combine decades of engineering expertise with rigorous quality standards to deliver precision, reliability, and complete regulatory compliance at every stage of your project.',
    ctaPrimary: 'Request a Quote',
    ctaSecondary: 'Explore Our Services',
  },

  about: {
    eyebrow: 'About Axion Inspect',
    hook: 'Delivering Precision and Reliability Across Borders',
    body: 'Founded in 2014, AXION INSPECT SRL has grown into a trusted partner for industrial inspection across Europe. We deliver independent, standards-driven assurance that protects quality, ensures compliance, and keeps projects on schedule.',
    badgeValue: '10+',
    badgeLabel: 'Years of Expertise',
    whoTitle: 'Who We Are',
    whatTitle: 'What We Do',
    points: [
      {
        title: 'Fully Independent Third-Party Services',
        text: 'Unbiased inspection and verification with no conflict of interest.',
      },
      {
        title: 'Internationally Certified Professionals',
        text: 'Inspectors qualified to global standards — WPQR, UT, RT, MT, PT, VT.',
      },
      {
        title: 'Rapid European Mobilization',
        text: 'On-site, anywhere in Europe, with fast deployment and coverage.',
      },
      {
        title: 'End-to-End Quality Assurance',
        text: 'Stage-wise inspection from manufacturing through pre-shipment.',
      },
    ],
  },

  stats: {
    title: 'AXION INSPECT SRL',
    body: 'An independent European inspection authority built on precision engineering, uncompromising integrity, and a reach that spans the continent — wherever quality and compliance matter most.',
    items: [
      { value: 27, suffix: '+', label: 'Countries Covered' },
      { value: 30, suffix: '+', label: 'Certified Professionals' },
      { value: 8, suffix: '', label: 'Industries Served' },
      { value: 100, suffix: '%', label: 'Independent Assurance' },
    ],
  },

  industries: {
    eyebrow: 'Industries We Serve',
    title: 'Diverse Industry Expertise',
    body: "Trusted across Europe's most demanding sectors — delivering independent inspection wherever quality and safety are critical.",
    items: [
      { name: 'Oil & Gas', desc: 'Upstream, midstream & downstream assets' },
      { name: 'Power Generation', desc: 'Conventional & nuclear power plants' },
      { name: 'Petrochemical', desc: 'Refineries & process facilities' },
      { name: 'Renewable Energy', desc: 'Wind, solar & hydrogen projects' },
      { name: 'Infrastructure', desc: 'Bridges, pipelines & structures' },
      { name: 'Manufacturing', desc: 'Heavy equipment & fabrication' },
      { name: 'Marine', desc: 'Shipbuilding & offshore structures' },
      { name: 'Aerospace', desc: 'Precision components & assemblies' },
    ],
  },

  services: {
    eyebrow: 'What We Do',
    title: 'Comprehensive Inspection Solutions',
    body: 'A complete suite of independent inspection, testing and expediting services — covering every stage from fabrication to final delivery.',
    linkLabel: 'Learn more',
    moreTitle: 'More Capabilities',
    serviceLabel: 'Service',
    items: [
      {
        title: 'Third-Party Inspection',
        desc: 'Independent stage-wise inspections, manufacturing reviews and certification across the full project lifecycle.',
      },
      {
        title: 'Expediting Services',
        desc: 'Proactive timeline management and vendor-client coordination to keep deliveries on schedule.',
      },
      {
        title: 'Quality Audits',
        desc: 'Thorough supplier evaluations, system audits and compliance analysis against international standards.',
      },
      {
        title: 'Non-Destructive Testing',
        desc: 'Advanced NDT methods — UT, RT, MT, PT and VT — performed by certified Level II/III technicians.',
      },
      {
        title: 'Welding & Coating',
        desc: 'WPQR review, welder qualification and coating verification to ensure structural integrity.',
      },
      {
        title: 'Painting Inspection',
        desc: 'Surface preparation checks, DFT measurement and full coating-system verification.',
      },
      {
        title: 'Pre-Shipment Verification',
        desc: 'Final product checks, packing and documentation review before dispatch from the vendor.',
      },
      {
        title: 'Technical Manpower',
        desc: 'Certified inspectors and engineers for temporary or long-term on-site assignments.',
      },
      {
        title: 'Vendor Oversight',
        desc: 'Supply-chain coordination and continuous progress monitoring across multiple vendors.',
      },
    ],
  },

  howWeWork: {
    eyebrow: 'How We Work',
    title: 'A Proven Inspection Workflow',
    body: 'A structured, transparent process that delivers consistent, audit-ready results on every engagement.',
    row1Title: 'Inspection & Audit Excellence',
    row1Body: 'From first review to final certification, every engagement follows a disciplined four-step path designed for full traceability.',
    illustrationAlt: 'Inspection and audit excellence illustration',
    steps: [
      {
        title: 'Requirement Analysis',
        desc: 'We review specifications, codes and client expectations to define a precise inspection scope.',
      },
      {
        title: 'Inspection Planning',
        desc: 'An Inspection & Test Plan (ITP) is prepared with clear hold points and a mobilization schedule.',
      },
      {
        title: 'On-Site Execution',
        desc: 'Certified inspectors perform stage-wise inspection, witnessing and non-destructive testing.',
      },
      {
        title: 'Reporting & Certification',
        desc: 'Detailed reports, compliance records and certificates are delivered for full traceability.',
      },
    ],
    row2Eyebrow: 'Quality Assurance',
    row2Title: 'Pre-Aligned Verification Process',
    row2Body: 'Every checkpoint feeds a single, centrally coordinated verification loop — keeping inspection, testing and reporting in lockstep.',
    hubLabel: 'Central Verification',
    stages: [
      'Document Review',
      'Material Check',
      'In-Process Inspection',
      'Witness Testing',
      'Final Verification',
      'Reporting & Sign-off',
    ],
  },

  certifications: {
    eyebrow: 'Accredited & Compliant',
    title: 'Technical Certifications & Standards',
    body: 'Our work is backed by internationally recognised certifications and full regulatory compliance.',
    items: [
      { code: 'ISO 9001', label: 'Quality Management' },
      { code: 'ISO 45001', label: 'Occupational Health & Safety' },
      { code: 'ISO 14001', label: 'Environmental Management' },
      { code: 'EN ISO 9712', label: 'NDT Personnel Certification' },
      { code: 'PED 2014/68/EU', label: 'Pressure Equipment Directive' },
      { code: 'API / ASNT', label: 'Industry Accreditation' },
    ],
  },

  partners: {
    eyebrow: 'Partners & Strategy',
    title: 'Partners & Recognition',
    body: 'Built on strong industry relationships and a strategy centred on independence, integrity and measurable results.',
    columns: [
      {
        title: 'Strategic Partnerships',
        desc: 'Trusted collaborations with leading EPC contractors, fabricators and OEMs across the European industrial sector.',
        tags: ['EPC Contractors', 'Fabricators', 'OEMs'],
      },
      {
        title: 'Industry Recognition',
        desc: 'Recognised for excellence and integrity in independent third-party inspection, expediting and quality assurance.',
        tags: ['Quality Excellence', 'Proven Track Record', 'Client Trust'],
      },
      {
        title: 'Partners & Strategy',
        desc: 'Inspection programmes aligned to each client’s compliance, safety and delivery objectives — anywhere in Europe.',
        tags: ['Compliance-Driven', 'Risk-Aligned', 'On-Time Delivery'],
      },
    ],
  },

  contact: {
    eyebrow: 'Get In Touch',
    title: 'Request a Quote',
    body: 'Ready to ensure quality and compliance on your next project? Contact AXION INSPECT SRL — anywhere in Europe.',
    infoTitle: 'Contact Information',
    infoBody: 'Reach our team directly — we respond to every enquiry within one business day.',
    details: {
      emailLabel: 'Email Us',
      email: 'srmech.electinspection16@gmail.com',
      phoneLabel: 'Call Us',
      phone: '+39 349 540 3226',
      addressLabel: 'Visit Us',
      address: 'Via Luca Combiaso 5, Genova, Italy 16142',
    },
    highlightTitle: 'Anywhere in Europe',
    highlightBody: 'Rapid mobilization of certified inspectors across the continent.',
    form: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      firstNamePlaceholder: 'John',
      lastNamePlaceholder: 'Smith',
      emailPlaceholder: 'john@company.com',
      phonePlaceholder: '+39 349 540 3226',
      messagePlaceholder: 'Tell us about your project and inspection requirements...',
      submit: 'Submit',
      required: 'Required',
      invalidEmail: 'Enter a valid email',
      successTitle: 'Thank you!',
      successBody: 'Your request has been received. Our team will get back to you within one business day.',
      sendAnother: 'Send another message',
    },
  },

  footer: {
    blurb: 'European third-party inspection leader — ensuring quality, compliance and on-time delivery across the continent.',
    quickLinksTitle: 'Quick Links',
    servicesTitle: 'Services',
    contactTitle: 'Contact',
    quickLinks: ['Home', 'About', 'Services', 'Industries', 'Contact'],
    serviceLinks: [
      'Third-Party Inspection',
      'Expediting Services',
      'Quality Audits',
      'Non-Destructive Testing',
      'Vendor Oversight',
    ],
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  },
}

export const it = {
  nav: {
    brand: 'AXION INSPECT SRL',
    tagline: 'Ovunque in Europa',
    links: {
      home: 'Home',
      about: 'Chi Siamo',
      services: 'Servizi',
      industries: 'Settori',
      contact: 'Contatti',
    },
    cta: 'Richiedi Preventivo',
  },

  hero: {
    eyebrow: 'Leader Europeo dell’Ispezione di Terza Parte',
    titleLead: 'Garantire',
    titleHighlight: 'Qualità',
    titleTail: 'e Conformità',
    body: 'AXION INSPECT SRL offre servizi completi di ispezione di terza parte ed expediting in tutta Europa. Garantiamo controllo qualità, conformità normativa ed esecuzione dei progetti nei tempi previsti — ovunque in Europa.',
    ctaPrimary: 'Richiedi un Preventivo',
    ctaSecondary: 'Contattaci',
    imageAlt: 'Ispezione di Terza Parte: Come Garantire Qualità e Conformità',
  },

  impact: {
    eyebrow: 'Eccellenza in Ogni Ispezione',
    titleLead: 'Dimostrare',
    titleHighlightA: 'l’Eccellenza',
    titleMid: 'attraverso',
    titleHighlightB: 'l’Innovazione',
    body: 'AXION INSPECT SRL è un fornitore completo ed end-to-end di servizi di ispezione indipendenti in tutta Europa. Uniamo decenni di esperienza ingegneristica a rigorosi standard di qualità per offrire precisione, affidabilità e piena conformità normativa in ogni fase del vostro progetto.',
    ctaPrimary: 'Richiedi un Preventivo',
    ctaSecondary: 'Esplora i Nostri Servizi',
  },

  about: {
    eyebrow: 'Chi è Axion Inspect',
    hook: 'Precisione e Affidabilità Oltre i Confini',
    body: 'Fondata nel 2014, AXION INSPECT SRL è diventata un partner di fiducia per l’ispezione industriale in tutta Europa. Offriamo garanzie indipendenti e basate sugli standard, che tutelano la qualità, assicurano la conformità e mantengono i progetti nei tempi previsti.',
    badgeValue: '10+',
    badgeLabel: 'Anni di Esperienza',
    whoTitle: 'Chi Siamo',
    whatTitle: 'Cosa Facciamo',
    points: [
      {
        title: 'Servizi di Terza Parte Pienamente Indipendenti',
        text: 'Ispezione e verifica imparziali, senza alcun conflitto di interesse.',
      },
      {
        title: 'Professionisti Certificati a Livello Internazionale',
        text: 'Ispettori qualificati secondo standard globali — WPQR, UT, RT, MT, PT, VT.',
      },
      {
        title: 'Rapida Mobilitazione in Europa',
        text: 'Sul posto, ovunque in Europa, con interventi e copertura rapidi.',
      },
      {
        title: 'Garanzia di Qualità End-to-End',
        text: 'Ispezione per fasi, dalla produzione fino alla pre-spedizione.',
      },
    ],
  },

  stats: {
    title: 'AXION INSPECT SRL',
    body: 'Un’autorità europea indipendente nelle ispezioni, fondata su precisione ingegneristica, integrità senza compromessi e una copertura che abbraccia l’intero continente — ovunque qualità e conformità siano essenziali.',
    items: [
      { value: 27, suffix: '+', label: 'Paesi Coperti' },
      { value: 30, suffix: '+', label: 'Professionisti Certificati' },
      { value: 8, suffix: '', label: 'Settori Serviti' },
      { value: 100, suffix: '%', label: 'Garanzia Indipendente' },
    ],
  },

  industries: {
    eyebrow: 'Settori in cui Operiamo',
    title: 'Competenza in Molteplici Settori',
    body: 'Scelti nei settori più esigenti d’Europa — offriamo ispezioni indipendenti ovunque qualità e sicurezza siano determinanti.',
    items: [
      { name: 'Oil & Gas', desc: 'Asset upstream, midstream e downstream' },
      { name: 'Generazione di Energia', desc: 'Centrali convenzionali e nucleari' },
      { name: 'Petrolchimico', desc: 'Raffinerie e impianti di processo' },
      { name: 'Energie Rinnovabili', desc: 'Progetti eolici, solari e a idrogeno' },
      { name: 'Infrastrutture', desc: 'Ponti, condotte e strutture' },
      { name: 'Industria Manifatturiera', desc: 'Macchinari pesanti e carpenteria' },
      { name: 'Navale', desc: 'Cantieristica e strutture offshore' },
      { name: 'Aerospaziale', desc: 'Componenti e assemblaggi di precisione' },
    ],
  },

  services: {
    eyebrow: 'Cosa Facciamo',
    title: 'Soluzioni Complete di Ispezione',
    body: 'Una suite completa di servizi indipendenti di ispezione, testing ed expediting — che copre ogni fase, dalla fabbricazione alla consegna finale.',
    linkLabel: 'Scopri di più',
    moreTitle: 'Altre Competenze',
    serviceLabel: 'Servizio',
    items: [
      {
        title: 'Ispezione di Terza Parte',
        desc: 'Ispezioni indipendenti per fasi, revisioni di produzione e certificazioni lungo l’intero ciclo di vita del progetto.',
      },
      {
        title: 'Servizi di Expediting',
        desc: 'Gestione proattiva delle tempistiche e coordinamento tra fornitore e cliente per rispettare le consegne.',
      },
      {
        title: 'Audit di Qualità',
        desc: 'Valutazioni approfondite dei fornitori, audit di sistema e analisi di conformità agli standard internazionali.',
      },
      {
        title: 'Controlli Non Distruttivi',
        desc: 'Metodi NDT avanzati — UT, RT, MT, PT e VT — eseguiti da tecnici certificati di Livello II/III.',
      },
      {
        title: 'Saldatura e Rivestimenti',
        desc: 'Revisione WPQR, qualifica dei saldatori e verifica dei rivestimenti per garantire l’integrità strutturale.',
      },
      {
        title: 'Ispezione delle Verniciature',
        desc: 'Controlli sulla preparazione delle superfici, misurazione dello spessore (DFT) e verifica completa del ciclo di verniciatura.',
      },
      {
        title: 'Verifica Pre-Spedizione',
        desc: 'Controlli finali del prodotto, imballaggio e revisione della documentazione prima della spedizione dal fornitore.',
      },
      {
        title: 'Personale Tecnico',
        desc: 'Ispettori e ingegneri certificati per incarichi temporanei o di lungo termine sul posto.',
      },
      {
        title: 'Supervisione dei Fornitori',
        desc: 'Coordinamento della supply chain e monitoraggio continuo dell’avanzamento su più fornitori.',
      },
    ],
  },

  howWeWork: {
    eyebrow: 'Come Lavoriamo',
    title: 'Un Flusso di Lavoro Collaudato',
    body: 'Un processo strutturato e trasparente che garantisce risultati coerenti e pronti per l’audit in ogni incarico.',
    row1Title: 'Eccellenza in Ispezioni e Audit',
    row1Body: 'Dalla prima revisione alla certificazione finale, ogni incarico segue un percorso disciplinato in quattro fasi, progettato per la piena tracciabilità.',
    illustrationAlt: 'Illustrazione dell’eccellenza in ispezioni e audit',
    steps: [
      {
        title: 'Analisi dei Requisiti',
        desc: 'Esaminiamo specifiche, normative e aspettative del cliente per definire un ambito d’ispezione preciso.',
      },
      {
        title: 'Pianificazione dell’Ispezione',
        desc: 'Viene preparato un Piano di Ispezione e Test (ITP) con punti di sosta chiari e un calendario di mobilitazione.',
      },
      {
        title: 'Esecuzione in Cantiere',
        desc: 'Ispettori certificati eseguono ispezioni per fasi, presenziamenti e controlli non distruttivi.',
      },
      {
        title: 'Reportistica e Certificazione',
        desc: 'Report dettagliati, registri di conformità e certificati vengono forniti per la piena tracciabilità.',
      },
    ],
    row2Eyebrow: 'Garanzia di Qualità',
    row2Title: 'Processo di Verifica Pre-Allineato',
    row2Body: 'Ogni checkpoint alimenta un unico ciclo di verifica coordinato a livello centrale — mantenendo ispezione, testing e reportistica perfettamente allineati.',
    hubLabel: 'Verifica Centrale',
    stages: [
      'Revisione Documentale',
      'Controllo Materiali',
      'Ispezione in Corso d’Opera',
      'Test Presenziati',
      'Verifica Finale',
      'Report e Approvazione',
    ],
  },

  certifications: {
    eyebrow: 'Accreditati e Conformi',
    title: 'Certificazioni e Standard Tecnici',
    body: 'Il nostro lavoro è supportato da certificazioni riconosciute a livello internazionale e dalla piena conformità normativa.',
    items: [
      { code: 'ISO 9001', label: 'Gestione della Qualità' },
      { code: 'ISO 45001', label: 'Salute e Sicurezza sul Lavoro' },
      { code: 'ISO 14001', label: 'Gestione Ambientale' },
      { code: 'EN ISO 9712', label: 'Certificazione del Personale NDT' },
      { code: 'PED 2014/68/EU', label: 'Direttiva Attrezzature a Pressione' },
      { code: 'API / ASNT', label: 'Accreditamento di Settore' },
    ],
  },

  partners: {
    eyebrow: 'Partner e Strategia',
    title: 'Partner e Riconoscimenti',
    body: 'Costruiti su solide relazioni di settore e su una strategia incentrata su indipendenza, integrità e risultati misurabili.',
    columns: [
      {
        title: 'Partnership Strategiche',
        desc: 'Collaborazioni di fiducia con i principali contractor EPC, fabbricatori e OEM del settore industriale europeo.',
        tags: ['Contractor EPC', 'Fabbricatori', 'OEM'],
      },
      {
        title: 'Riconoscimento del Settore',
        desc: 'Riconosciuti per eccellenza e integrità nell’ispezione di terza parte indipendente, nell’expediting e nel controllo qualità.',
        tags: ['Eccellenza Qualitativa', 'Comprovata Esperienza', 'Fiducia dei Clienti'],
      },
      {
        title: 'Partner e Strategia',
        desc: 'Programmi di ispezione allineati agli obiettivi di conformità, sicurezza e consegna di ogni cliente — ovunque in Europa.',
        tags: ['Orientati alla Conformità', 'Allineati al Rischio', 'Consegne Puntuali'],
      },
    ],
  },

  contact: {
    eyebrow: 'Mettiti in Contatto',
    title: 'Richiedi un Preventivo',
    body: 'Pronto a garantire qualità e conformità nel tuo prossimo progetto? Contatta AXION INSPECT SRL — ovunque in Europa.',
    infoTitle: 'Informazioni di Contatto',
    infoBody: 'Contatta direttamente il nostro team — rispondiamo a ogni richiesta entro un giorno lavorativo.',
    details: {
      emailLabel: 'Scrivici',
      email: 'srmech.electinspection16@gmail.com',
      phoneLabel: 'Chiamaci',
      phone: '+39 349 540 3226',
      addressLabel: 'Vieni a Trovarci',
      address: 'Via Luca Combiaso 5, Genova, Italia 16142',
    },
    highlightTitle: 'Ovunque in Europa',
    highlightBody: 'Mobilitazione rapida di ispettori certificati in tutto il continente.',
    form: {
      firstName: 'Nome',
      lastName: 'Cognome',
      email: 'Email',
      phone: 'Telefono',
      message: 'Messaggio',
      firstNamePlaceholder: 'Mario',
      lastNamePlaceholder: 'Rossi',
      emailPlaceholder: 'mario@azienda.com',
      phonePlaceholder: '+39 349 540 3226',
      messagePlaceholder: 'Raccontaci il tuo progetto e le esigenze di ispezione...',
      submit: 'Invia',
      required: 'Obbligatorio',
      invalidEmail: 'Inserisci un’email valida',
      successTitle: 'Grazie!',
      successBody: 'La tua richiesta è stata ricevuta. Il nostro team ti risponderà entro un giorno lavorativo.',
      sendAnother: 'Invia un altro messaggio',
    },
  },

  footer: {
    blurb: 'Leader europeo nell’ispezione di terza parte — garantiamo qualità, conformità e consegne puntuali in tutto il continente.',
    quickLinksTitle: 'Link Rapidi',
    servicesTitle: 'Servizi',
    contactTitle: 'Contatti',
    quickLinks: ['Home', 'Chi Siamo', 'Servizi', 'Settori', 'Contatti'],
    serviceLinks: [
      'Ispezione di Terza Parte',
      'Servizi di Expediting',
      'Audit di Qualità',
      'Controlli Non Distruttivi',
      'Supervisione dei Fornitori',
    ],
    rights: 'Tutti i diritti riservati.',
    privacy: 'Informativa sulla Privacy',
    terms: 'Termini di Servizio',
  },
}

export const dictionaries = { en, it }

export const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'it', label: 'IT' },
]
