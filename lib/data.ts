import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'sabnamsajda25@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Sajda, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/tajmirul',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/sajda25' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/sajda-sabnam-486614265/',
    },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'HTML',
            icon: '/logo/html.png',
        },
        {
            name: 'CSS',
            icon: '/logo/css.png',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'Java',
            icon: '/logo/java.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
        {
            name: 'Visual Studio Code',
            icon: '/logo/visualstudio.jpeg',
        },
        {
            name: 'Postman',
            icon: '/logo/postman.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Voice Cooking Assistant',
        slug: 'voice-cooking-assistant',
        //  liveUrl: 'https://electroev.co.uk/',
        year: 2024,
        role: 'Full Stack Developer',
        description: `
      A mobile application that allows users to search and follow recipes using voice commands. It integrates speech recognition and text-to-speech for hands-free cooking guidance, with a Node.js backend handling API integration, validation, and error management for smooth, real-time interactions.
       <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🎤 Voice-Controlled Navigation – Search recipes, move between steps, and control the app using simple voice commands</li>
        <li>🔊 Text-to-Speech Guidance – Step-by-step cooking instructions read aloud for hands-free cooking</li>
        <li>🍽️ Smart Recipe Search – Find recipes based on ingredients, cuisine, or dish name</li>
        <li>⏱️ Hands-Free Cooking Mode – Designed for use while cooking without touching the device</li>
        <li>🌐 API-Based Recipe Fetching – Real-time recipe data retrieved via backend API integration</li>
        <li>⚙️ Node.js Backend Processing – Efficient request handling, validation, and error management</li>

      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>🎤 Speech-to-text for voice command processing</li>
        <li>🔊 Text-to-speech for hands-free cooking guidance</li>
        <li>⚙️ Node.js backend for API handling and validation</li>
        <li>🌐 REST API integration for recipe data</li>
        <li>🔄 Asynchronous processing for real-time responses</li>
        <li>📱 Mobile-friendly, hands-free user experience</li>

      </ul>
      `,
        techStack: [
            'React Native',
            'Node.js',
            'Express.js',
            'Expo',
            'Spoonacular API',
            'expo-speech',
            'react-native-voice',
        ],
        thumbnail: '/projects/thumbnail/sweet-thumbnail.png',
        longThumbnail: '/projects/long/pipeline-node.png',
        images: [
            '/projects/images/pipeline-node.png',
            '/projects/images/pipeline-result.png',
        ],
    },
    {
        title: 'Campus Connect',
        slug: 'campus-connect',
        role: 'Full Stack Developer',
        techStack: ['React.js', 'Node.js', ' MongoDB', 'HTML', 'CSS'],
        thumbnail: '/projects/thumbnail/sweet-thumbnail.png',
        longThumbnail: '/projects/long/pipeline-node.png',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/pipeline-node.png',
        ],
        sourceCode: 'https://github.com/sajda25/campus-connect',

        // liveUrl: 'https://demo.epikcart.siphertech.com/',
        year: 2025,
        description: `Campus Connect is a web-based platform designed to improve communication and collaboration within a college campus. It connects students, faculty, and administrators by providing a centralized space for sharing announcements, academic updates, events, and resources, making campus information easily accessible and organized.<br/></br>
         <b> Key Features:</b><br/>
         <ul>
         <li>🎓 Student–Faculty Communication – Enables seamless interaction between students, faculty, and administration</li>
         <li>📢 Centralized Announcements – One platform for notices, circulars, and important updates</li>
         <li>📅 Event & Activity Management – View and manage campus events, seminars, and workshops</li>
         <li>📚 Academic Updates – Share assignments, schedules, and academic resources</li>
         <li>🔐 Role-Based Access Control – Separate access levels for students, faculty, and admins</li>
         <li>🗂️ Resource Sharing – Upload and access documents, study materials, and notices</li>
         <li>📱 User-Friendly Interface – Simple, responsive design for easy navigation</li>
         </ul><br/><br/>
         </br/></br>`,
    },
    {
        title: 'Email Verification',
        slug: 'email-verification',
        role: 'Backend Developer',
        techStack: [' PHP', 'CRON', ' Shell Script', ' HTML'],
        thumbnail: '/projects/thumbnail/pipeline-node.png',
        longThumbnail: '/projects/long/pipeline-node.png',
        images: [
            '/projects/images/pipeline-node.png',
            '/projects/images/pipeline-result.png',
            '/projects/images/epikcart-1.png',
        ],
        sourceCode: 'https://github.com/sajda25/Email-verification',
        //liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2024,
        description: `The Email Verification System is designed to validate user email addresses during registration by sending a verification link or code. It ensures authentic user accounts, prevents fake registrations, and improves application security and reliability.<br/></br>
         <b> Key Features:</b><br/>
         <ul>
         <li>📧 Email Validation – Verifies user email addresses during registration</li>
         <li>🔗 Verification Link / OTP System – Sends secure verification links or one-time codes</li>
         <li>🔐 Prevents Fake Accounts – Ensures only genuine users can activate accounts</li>
         <li>⏱️ Time-Based Verification – Verification links or OTPs expire for security</li>
         <li>🔄 Resend Verification Option – Allows users to request a new verification email</li>
         <li>⚙️ Backend Integration – Seamlessly integrates with authentication systems</li>
         <li>🛡️ Improved Application Security – Adds an extra layer of user account protection</li>
         </ul><br/><br/>
         </br/></br>`,
    },
    {
        title: 'Sweet Shop Management System',
        slug: 'sweet-shop-management-system',
        role: 'Full Stack Developer',
        techStack: ['Node.js', ' TypeScript', 'Express', ' React', 'SQLite'],
        thumbnail: '/projects/thumbnail/sweet-thumbnail.png',
        longThumbnail: '/projects/long/pipeline-node.png',
        images: [
            '/projects/images/pipeline-node.png',
            '/projects/images/pipeline-result.png',
            '/projects/images/epikcart-2.png',
        ],
        sourceCode: 'https://github.com/sajda25/sweet-shop-management-system',
        // liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2025,
        description: `The Sweet Management System is a software application designed to manage the day-to-day operations of a sweet shop. It helps in maintaining records of sweets, inventory, sales, and customer orders, ensuring efficient stock management, accurate billing, and smooth business operations.<br/></br>
         <b> Key Features:</b><br/>
         <ul>
         <li>🍬 Sweet Inventory Management – Track available sweets, quantities, and stock levels</li>
         <li>🧾 Billing & Invoice Generation – Automated bill creation for customer purchases</li>
         <li>📦 Stock Monitoring – Alerts for low stock and inventory updates</li>
         <li>🛒 Order Management – Manage customer orders efficiently</li>
         <li>💰 Sales Tracking – Maintain daily sales records and revenue details</li>
         <li>🔐 User Authentication – Secure login for shop staff and admin</li>
         <li>📊 Report Generation – Sales and inventory reports for better decision-making</li>
        <li>🖥️ Simple & User-Friendly Interface – Easy to use for shop employees</li>

         </ul><br/><br/>
         </br/></br>`,
    },
    {
        title: 'Voice Stress Detection System',
        slug: 'voice-stress-detection-system',
        role: 'Frontend Developer',
        techStack: ['Java', 'Apache Maven', 'Java Sound API', 'Java Swing'],
        thumbnail: '/projects/thumbnail/pipeline-node.png',
        longThumbnail: '/projects/long/pipeline-node.png',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/sajda25/voice-stress-detection',
        // liveUrl: 'https://crenotive.netlify.app/',
        year: 2026,
        description: ` Voice Stress Detection System is an AI-powered desktop application built in Java that analyzes vocal stress during interview practice by processing voice features like pitch, pauses, speech rate, and energy. It provides real-time feedback and visual insights to help users improve communication confidence and performance.<br/></br>
         <b> Key Features:</b><br/>
         <ul>
         <li>🎙️ Real-Time Voice Analysis – Processes audio input to detect stress patterns instantly</li>
         <li>📊 Stress Level Visualization – Displays stress indicators through interactive charts and graphs</li>
         <li>🧠 Pattern Recognition – Identifies emotional states and psychological indicators from voice data</li>
         <li>📈 Analytics Dashboard – Comprehensive overview of voice analysis results and trends</li>
         <li>🔐 Secure Data Processing – Ensures privacy and confidentiality of audio recordings</li>
         <li>⚛️ React-Based UI – Modern, responsive, and component-based frontend interface</li>
         <li>📱 Cross-Platform Support – Works smoothly across desktop and mobile devices</li>
        <li>🔄 Real-Time Updates – Instant feedback on voice stress detection results</li>

         </ul><br/><br/>
         </br/></br>`,
    },
    {
        title: 'Vectorshift Pipeline Builder',
        slug: 'word-racer',
        role: 'Frontend Developer',
        techStack: [
            'React',
            'Javascript',
            'FastAPI',
            'Zustand(for state management)',
            'REST APIs',
        ],
        thumbnail: '/projects/thumbnail/pipeline-node.png',
        longThumbnail: '/projects/long/pipeline-node.png',
        images: [
            '/projects/images/pipeline-node.png',
            '/projects/images/pipeline-result.png',
            '/projects/images/epikcart-3.png',
        ],
        sourceCode: 'https://github.com/sajda25/Pipeline-builder',
        //liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2026,
        description: `Built a visual pipeline builder that lets users create, connect, and validate workflows using drag-and-drop nodes, with dynamic text variables, real-time execution simulation, and backend DAG validation for reliability and scalability.<br/></br>
         <b> Key Features:</b><br/>
         <ul>
         <li>🧩 Reusable Node Abstraction – Config-driven BaseNode system enabling fast creation of multiple node types</li>
         <li>🖱️ Visual Pipeline Builder – Drag-and-drop workflow editor with clear input/output connections</li>
         <li>📝 Dynamic Text Node – Real-time resizing and automatic {{variable}} detection with dynamic input handles</li>
         <li>🔗 Execution & Data Flow Simulation – Visual step-by-step execution following dependency order</li>
         <li>🧠 Backend DAG Validation – FastAPI backend using Kahn’s algorithm to validate pipeline correctness</li>
         <li>⏪⏩ Undo/Redo & Persistence – Keyboard shortcuts, auto-save, and restore for safe iteration</li>
         <li>🌓 Polished UX – Dark mode, smooth animations, keyboard shortcuts, and mini-map support</li>

         </ul><br/><br/>
         </br/></br>`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'InnoSpark Hackathon,IEEE ',
        company: 'IEEE(Chandigarh University)',
        duration: '2024',
    },
    {
        title: 'HackMatrix Hackathon,IIT Patna',
        company: 'IIT Patna',
        duration: '2024',
    },
    {
        title: 'Smart India Hackathon(Teckathon) ',
        company: 'SIH',
        duration: '2024',
    },
    {
        title: 'Codex 2.0',
        company: 'Panipat Institute of Engineering & Technology',
        duration: '2025',
    },
];
