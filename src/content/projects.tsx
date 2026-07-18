export interface IProjectItem {
  title: string;
  images: { src: string; text: string }[];
  skills: {
    front?: string[];
    back?: string[];
    other?: string[];
  };
  description: string;
  achievements: {
    title: string;
    description: string;
  }[];
}

export const projects = [
  {
    title: "Livestream Event Platform",
    images: [
      {
        src: "/images/livestream-platform/dashboard.png",
        text:
          "Dashboard for creating and managing interactive audience games, participants, prompts, and event settings.",
      },
      {
        src: "/images/livestream-platform/player.png",
        text:
          "Participant view with a dynamically generated game card and real-time updates as prompts are called.",
      },
      {
        src: "/images/livestream-platform/moderation.png",
        text:
          "Moderation tools for reviewing participant activity, validating results, and managing active sessions.",
      },
      {
        src: "/images/livestream-platform/templates.png",
        text:
          "Reusable prompt templates that can be searched, previewed, and copied into new or existing events.",
      },
      {
        src: "/images/livestream-platform/token-store.png",
        text:
          "Integrated purchasing workflow that allows hosts to increase participant capacity for individual events.",
      },
    ],
    skills: {
      front: ["Angular", "TypeScript", "HTML", "SCSS", "Bootstrap"],
      back: ["PHP", "Laravel", "REST API", "PostgreSQL"],
      other: ["WebSockets", "Twitch API", "Stripe API"],
    },
    description:
      "Independently developed a full-stack platform that allows livestream hosts to create and run interactive audience games. The application includes real-time participation, configurable game settings, moderation tools, account integrations, payment processing, and administrative workflows. The project name and identifying details have been withheld for privacy.",
    achievements: [
      {
        title: "Full-Stack Product Development",
        description:
          "Designed and developed the application across the frontend, backend, database, authentication, deployment, and real-time communication layers.",
      },
      {
        title: "Real-Time Event Architecture",
        description:
          "Implemented presence channels and WebSocket-based updates to synchronize game activity across participant, moderator, and host views.",
      },
      {
        title: "Authentication & Platform Integration",
        description:
          "Integrated third-party authentication and channel APIs to support account linking, permissions, audience restrictions, and role-based access.",
      },
      {
        title: "Payments & Capacity Management",
        description:
          "Developed Stripe-based purchasing workflows and a token system that allows hosts to increase participant capacity for individual events.",
      },
      {
        title: "Administrative & Moderation Workflows",
        description:
          "Built tools for participant management, invitations, result validation, configurable permissions, and lifecycle-based restrictions.",
      },
      {
        title: "Deployment & Infrastructure",
        description:
          "Containerized the development environment and configured separate application, database, real-time, and frontend deployment workflows.",
      },
    ],
  },
  {
    title: "Gaming Platform",
    images: [
      {
        src: "/images/game/geoguesser.jpg",
        text: "Users can play a location-guessing game based on maps from a multiplayer video game.",
      },
      {
        src: "/images/game/geoguesser2.jpg",
        text: "Statistics are tracked per user if logged in.",
      },
      {
        src: "/images/game/twitchext.jpg",
        text: "Developed a Twitch extension allowing streamers to invite their audience to participate in guessing locations. Uses WebSockets to communicate live information both ways.",
      },
      {
        src: "/images/game/account.jpg",
        text: "Users can connect their Twitch account to enable automatic connection with the Twitch extension on their channel.",
      },
      {
        src: "/images/game/loadout.jpg",
        text: "The Loadout Randomizer feature allows users to randomize the items that they bring into their game matches.",
      },
      {
        src: "/images/game/bingosettings.jpg",
        text: 'Streamers can set up bingo games to play with their audiences. It includes settings for date and time, whether or not to allow user rerolls, public or private games, etc. Users can also import prompts via CSV file. An example prompt might be "Streamer gets more than 5 kills in one match"',
      },
      {
        src: "/images/game/bingoplayer.jpg",
        text: "The player view of a bingo game. Uses WebSockets to keep list of calls up to date.",
      },
    ],
    skills: {
      front: ["ReactJS", "HTML", "CSS", "Bootstrap"],
      back: ["Node.js", "Express.js", "REST API", "Postgres"],
      other: ["AWS S3", "WebSockets", "Twitch API", "PayPal API"],
    },
    description:
      'Developed a collection of interactive tools for players and livestream audiences centered on the video game "Hunt: Showdown." Features include multiplayer location-guessing games, livestream integrations, player statistics, loadout generation, and configurable audience bingo games. The project name is withheld because it is associated with a personal gaming identity.',
    achievements: [
      {
        title: "Full-Stack Development",
        description:
          "Independently developed the website, API, database functionality, and Twitch extension.",
      },
      {
        title: "Twitch Integration",
        description:
          "Connected user Twitch accounts and automated extension configuration so livestream sessions could synchronize with the website.",
      },
      {
        title: "Real-Time Updates",
        description:
          "Implemented WebSocket communication to keep participants and livestream viewers synchronized during active games.",
      },
      {
        title: "CSV Import",
        description:
          "Built CSV upload and validation workflows for importing configurable game prompts.",
      },
    ],
  },
  {
    title: "Property Data",
    images: [
      {
        src: "/images/bounds/search.jpg",
        text: "Map uses Esri / ArcGIS. All parcels searchable by owner and/or location. Dropdowns offer suggestions as you type.",
      },
      {
        src: "/images/bounds/crophistory.jpg",
        text: "Each parcel's historical land-use data can be seen. Values are pulled from DB and displayed in chart form. Created chart components to be used throughout the site.",
      },
      {
        src: "/images/bounds/yield.jpg",
        text: "Each parcel's yield can be seen. Values are pulled from DB and percent change is calculated.",
      },
      {
        src: "/images/bounds/ucc.jpg",
        text: "Built a searchable secured financial filings table backed by a query joining six tables and consolidating one-to-many records into structured JSON. Secured associated PDF files behind authenticated API endpoints.",
      },
      {
        src: "/images/bounds/mra.jpg",
        text: "Mortgage rate analysis table. Estimates interest rate based on historical values if actual value is not stored in DB. Optimized query and load time.",
      },
      {
        src: "/images/bounds/financialoverview.jpg",
        text: "Financial overview dashboard. Several values involve complicated SQL queries to calculate. Optimized query and load time.",
      },
    ],
    skills: {
      front: ["ReactJS", "TypeScript", "HTML", "CSS", "Tailwind"],
      back: ["Python", "Django", "REST API", "MS SQL Server"],
      other: ["ArcGIS", "Powershell"],
    },
    description:
      "Developed features for a land-data platform that provides searchable parcel, ownership, tax, mortgage, and agricultural information for properties across Kansas.",
    achievements: [
      {
        title: "Performance Optimization",
        description:
          "Optimized SQL queries and API processing, reducing response times by as much as 75%.",
      },
      {
        title: "Automated Data Imports",
        description:
          "Created PowerShell workflows to retrieve source files from an FTP server, validate and import records, log results, and remove obsolete files.",
      },
      {
        title: "Analytics Dashboards",
        description:
          "Built searchable and filterable dashboards for analyzing mortgage activity, farmable acreage, historical land-use data, and changes across reporting periods.",
      },
    ],
  },
  {
    title: "Design Community",
    images: [
      {
        src: "/images/logolounge/main.jpg",
        text: "",
      },
      {
        src: "/images/logolounge/home.jpg",
        text: '"Fresh" page displaying most recently submitted logos. User can hover over logo to like or save directly, or click on logo to view detail modal. Implemented like and save functionality both front and back end.',
      },
      {
        src: "/images/logolounge/logodetail.jpg",
        text: "Logo detail modal. User can view details, like / save, and comment. Related logos pulled based on similar tags. Implemented comment functionality front and back end, as well as related logos query.",
      },
      {
        src: "/images/logolounge/collection.jpg",
        text: "Logo save modal. Can be saved to and removed from multiple collections. Implemented all logic and functionality for collections.",
      },
      {
        src: "/images/logolounge/news.jpg",
        text: "News page. Uses Wordpress API to pull articles from the organization's Wordpress blog site. Implemented all functionality for this page.",
      },
      {
        src: "/images/logolounge/awards.jpg",
        text: "Awards tab on profile page. Award badges are dynamically added to logos that have been selected for external recognition. Wrote query for user awards.",
      },
      {
        src: "/images/logolounge/checkout.jpg",
        text: "Checkout / renewal screen. Membership can be paid via PayPal, credit card, or gift card code. Implemented payment endpoints in API, PayPal connection, and gift card generation, verification, and tracking.",
      },
    ],
    skills: {
      front: ["ReactJS", "TypeScript", "HTML", "CSS", "Bootstrap"],
      back: ["Python", "Django", "REST API", "MS SQL Server"],
      other: ["OpenAI API", "Azure Blob Storage", "PayPal API", "MailChimp API", "WordPress API"],
    },
    description:
      "Contributed full-stack features to a professional community and portfolio platform for creative professionals. Users can publish work, follow designers, interact with submissions, organize saved logos, and manage paid memberships.",
    achievements: [
      {
        title: "AI-Assisted Content",
        description:
          "Integrated the OpenAI API to generate suggested descriptions and searchable tags for uploaded logos.",
      },
      {
        title: "Membership & Payment Workflows",
        description:
          "Developed PayPal-based membership payments, renewal workflows, coupons, and gift-card generation and redemption.",
      },
      {
        title: "User Engagement Features",
        description:
          "Implemented frontend and backend functionality for follows, views, likes, comments, search, and saved-logo collections.",
      },
      {
        title: "Performance Optimization",
        description:
          "Improved database queries and API processing, reducing response times by as much as 50%.",
      },
    ],
  },
  {
    title: "Asset Management",
    images: [
      {
        src: "/images/pk/modelviewer2.jpg",
        text: "3D model viewer using Autodesk. Implemented interactability between outer website and embedded component.",
      },
      {
        src: "/images/pk/modelviewer.jpg",
        text: "Item detail. Wrote queries to pull and link to related information in right side panel.",
      },
      {
        src: "/images/pk/hierarchy.jpg",
        text: "Item list. Added several columns.",
      },
      {
        src: "/images/pk/components.jpg",
        text: "Component list, similar to item list.",
      },
      {
        src: "/images/pk/dashboard.jpg",
        text: "Dashboard showing facilities for organization.",
      },
      {
        src: "/images/pk/formedit.jpg",
        text: "Form editor. Added Anomaly Closeout item.",
      },
      {
        src: "/images/pk/formdetail.jpg",
        text: "Anomaly Closeout form item settings.",
      },
      {
        src: "/images/pk/tasks.jpg",
        text: "Tasks for user.",
      },
      {
        src: "/images/pk/task.jpg",
        text: "Task detail. Implemented display of associated forms and documents.",
      },
    ],
    skills: {
      front: [".NET", "C#", "HTML", "CSS", "JavaScript"],
      back: ["SQLite"],
      other: ["Autodesk"],
    },
    description:
      "Contributed to a web and mobile operations platform used to manage facilities, equipment, tasks, forms, documents, and operational issues. The system includes interactive 3D facility models and offline mobile synchronization.",
    achievements: [
      {
        title: "Full-Stack Feature Development",
        description:
          "Developed frontend and backend workflows for anomaly tracking, task management, form completion, and document access.",
      },
      {
        title: "Interactive 3D Integration",
        description:
          "Connected the application with an embedded Autodesk model viewer, allowing selections and anomaly data to remain synchronized between the model and surrounding interface.",
      },
      {
        title: "Offline Mobile Workflows",
        description:
          "Contributed to mobile functionality that synchronized operational data for offline use and uploaded completed forms when connectivity was restored.",
      },
    ],
  },
  {
    title: "Service Platform",
    images: [
      {
        src: "/images/buttermove/main.jpg",
        text: "Main page.",
      },
      {
        src: "/images/buttermove/map.jpg",
        text: "Users can search movers by location and view on map.",
      },
      {
        src: "/images/buttermove/butterpay.jpg",
        text: "Mover account checklist. Implemented checklist functionality and several items on the checklist to be seen in detail later.",
      },
      {
        src: "/images/buttermove/profile.jpg",
        text: "Mover profile. Implemented functionality for several editable features.",
      },
      {
        src: "/images/buttermove/widget.jpg",
        text: "Implemented functionality to generate widget embed code and display preview.",
      },
      {
        src: "/images/buttermove/estimate.jpg",
        text: "Created page and form with validation, including address autocompletion using the Google Maps API.",
      },
      {
        src: "/images/buttermove/invoices.jpg",
        text: "Created queries for analytics and searchable / filterable table.",
      },
      {
        src: "/images/buttermove/estimatetoinvoice.jpg",
        text: "Created queries and functionality for entire page, including logic to determine process stage, related transactions, and related documents. Added buttons and backend functionality to allow mover to add on charges or issue a refund.",
      },
      {
        src: "/images/buttermove/onboardingops.jpg",
        text: "Implemented connection to Pipedrive API to pull data about leads and calls.",
      },
      {
        src: "/images/buttermove/forecastedrevenue.jpg",
        text: "Created all front and backend functionality and calculations for forecasted revenue page. Sample page does not have recent data, but would have cards with details for each mover that signed up for the ButterMove site, along with their stage in the onboarding process.",
      },
    ],
    skills: {
      front: ["Preact", "HTML", "CSS", "Bootstrap"],
      back: ["Go", "GraphQL"],
      other: ["Stripe API", "Twilio API", "Google Maps API"],
    },
    description: 
      "Contributed full-stack features to a platform that helps moving companies manage customer inquiries, estimates, payments, onboarding, scheduling, and business performance.",
    achievements: [
      {
        title: "Payment Processing",
        description:
          "Implemented Stripe workflows for payment authorization, capture, additional charges, and refunds.",
      },
      {
        title: "Secure Account Registration",
        description:
          "Developed account-registration and two-factor authentication workflows using the Twilio API.",
      },
      {
        title: "Operational Dashboards",
        description:
          "Built dashboards with business metrics, forecasting calculations, charts, filtering, and onboarding status tracking.",
      },
      {
        title: "Location Services",
        description:
          "Integrated Google Maps for address autocomplete, geographic searches, and map-based presentation of move details.",
      },
    ],
  },
];
