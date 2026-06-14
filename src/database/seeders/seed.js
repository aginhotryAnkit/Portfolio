require('dotenv').config({ path: require('path').resolve(__dirname, '../../../.env') });
const sequelize = require('../db');
const { PersonalDetail, ProfileSummary, Education, Skill, CoreCompetency, Certification, Hobby } = require('../models/profile.model');
const { WorkExperience } = require('../models/experience.model');
const { Project, Achievement } = require('../models/projects.model');

async function seed() {
  try {
    await sequelize.authenticate();
    console.log('✅ DB connected');

    await sequelize.sync({ force: true });
    console.log('✅ Tables synced');

    // ── PERSONAL DETAILS
    await PersonalDetail.create({
      name: 'Ankit Agnihotry',
      phone: '+91 9670014450',
      email: 'akaginhotry9651@gmail.com',
      linkedin: 'https://linkedin.com/in/ankit-aginhotry-b3a2551b4',
      github: 'https://github.com/aginhotryAnkit',
      languages: 'English & Hindi',
      profile_photo: 'https://plain-apac-prod-public.komododecks.com/202606/13/PHmlqnEmTsNRZrXo7SsE/image.png',
      resume_url: 'https://drive.google.com/file/d/15ti6U5qD73MyDZtWhaRRK4HKMo0ipnbW',
    });

    // ── PROFILE SUMMARY
    await ProfileSummary.create({
      content: `A competent and results-driven Software Developer with over 3 years of industry experience in full-stack web development, specializing in backend technologies with the MERN stack (MongoDB, Express.js, Node.js). Currently working at Cedcoss Technologies, Lucknow, India, I have a deep understanding of the Software Development Lifecycle (SDLC), covering requirement analysis, system design, development, testing, and deployment. Proficient in building scalable and high-performance applications, with expertise in backend development, API design, database management, and system architecture. Skilled in JavaScript, TypeScript, and modern backend frameworks, I specialize in developing RESTful APIs, integrating third-party services, and optimizing system performance for scalability and security. A proactive problem-solver with a focus on clean, efficient code and best practices, I thrive in fast-paced environments and am passionate about learning new technologies to drive innovation.`,
    });

    // ── EDUCATION
    await Education.bulkCreate([
      { degree: 'BCA', institution: 'Babu Banarasi Das University, Lucknow', year: '2022', percentage: '79.6%' },
      { degree: 'Class 12', institution: 'Saraswati Vidya Mandir, Lakhimpur Kheri', year: '2019', percentage: '71.4%' },
      { degree: 'Class 10', institution: 'Saraswati Vidya Mandir, Lakhimpur Kheri', year: '2017', percentage: '73.4%' },
    ]);

    // ── SKILLS
    await Skill.bulkCreate([
      // Languages
      { name: 'JavaScript', category: 'language' },
      { name: 'TypeScript', category: 'language' },
      { name: 'PHP', category: 'language' },
      { name: 'Java', category: 'language' },
      // Frameworks
      { name: 'Node.js', category: 'framework' },
      { name: 'Express.js', category: 'framework' },
      { name: 'React', category: 'framework' },
      { name: 'Next.js', category: 'framework' },
      { name: 'Laravel', category: 'framework' },
      // Databases
      { name: 'PostgreSQL', category: 'database' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Redis', category: 'database' },
      { name: 'SQL', category: 'database' },
      // Cloud
      { name: 'AWS EC2', category: 'cloud' },
      { name: 'AWS Lambda', category: 'cloud' },
      { name: 'Amazon S3', category: 'cloud' },
      { name: 'AWS Secrets Manager', category: 'cloud' },
      { name: 'Amazon API Gateway', category: 'cloud' },
      { name: 'Elastic Load Balancing', category: 'cloud' },
      { name: 'Amazon CloudWatch', category: 'cloud' },
      { name: 'AWS IAM', category: 'cloud' },
      { name: 'AWS SQS', category: 'cloud' },
      // Tools
      { name: 'REST API', category: 'tool' },
      { name: 'GraphQL', category: 'tool' },
      { name: 'Git', category: 'tool' },
      { name: 'GitHub', category: 'tool' },
      { name: 'GitLab', category: 'tool' },
      { name: 'Postman', category: 'tool' },
      { name: 'Swagger/OpenAPI', category: 'tool' },
      { name: 'Docker', category: 'tool' },
      { name: 'Nginx', category: 'tool' },
      // Security
      { name: 'JWT', category: 'security' },
      { name: 'OAuth', category: 'security' },
      { name: 'Secure Hashing', category: 'security' },
      { name: 'Access Control', category: 'security' },
      { name: 'Rate Limiting', category: 'security' },
      { name: 'CORS', category: 'security' },
      { name: 'Helmet.js', category: 'security' },
      // Architecture
      { name: 'Microservices', category: 'architecture' },
      { name: 'N-Tier Architecture', category: 'architecture' },
      { name: 'Singleton Pattern', category: 'architecture' },
      { name: 'Event-Driven Architecture', category: 'architecture' },
      { name: 'SOLID Principles', category: 'architecture' },
      { name: 'MVC Pattern', category: 'architecture' },
    ]);

    // ── CORE COMPETENCIES
    await CoreCompetency.bulkCreate([
      { title: 'Scalable & High-Performance Backend Development' },
      { title: 'Efficient Database Design & Query Optimization' },
      { title: 'Advanced Security, Authentication & Compliance' },
      { title: 'Cloud-Native Deployment & Infrastructure Management' },
      { title: 'Seamless Payment Processing & API Integrations' },
      { title: 'RESTful API Design & Third-Party Integrations' },
      { title: 'Agile Development & Code Review Practices' },
      { title: 'Microservices Design & Inter-Service Communication' },
      { title: 'Performance Optimization & Caching Strategies' },
      { title: 'CI/CD Pipelines & Deployment Workflows' },
    ]);

    // ── CERTIFICATIONS
    await Certification.bulkCreate([
      { title: 'Stripe Certified Professional Developer', issuer: 'Stripe' },
      { title: 'Postman API Fundamentals', issuer: 'Postman' },
      { title: 'Python Quiz Certification', issuer: '' },
    ]);

    // ── HOBBIES
    await Hobby.bulkCreate([
      { name: 'Coding Side Projects', emoji: '💻' },
      { name: 'Reading Tech Blogs', emoji: '📖' },
      { name: 'Open Source Contribution', emoji: '🌍' },
      { name: 'Gaming', emoji: '🎮' },
      { name: 'Travelling', emoji: '✈️' },
    ]);

    // ── WORK EXPERIENCE
    await WorkExperience.bulkCreate([
      {
        company: 'Care Health Insurance Ltd',
        role: 'Software Developer',
        start_date: 'Jan 2025',
        end_date: null,
        is_current: true,
        company_logo: 'https://supremusangel.com/assets/frontend/img/productimg/care-health-insurance-pre-ipo-shares-logo.webp',
        points: [
          'Joined Care Health Insurance as a full-time Software Developer after a successful project at NeogenCode Technologies.',
          'Developed and maintained Node.js microservices and REST APIs.',
          'Contributed to Care Health Insurance platform deployment and enhancements.',
          'Worked on Utility Microservice and Customer Information Sheet projects.',
          'Currently developing the Announcement Service for centralized communications.',
          'Collaborated in Agile teams to optimize backend performance and reliability.',
          'Implemented security measures for data protection and compliance.',
        ],
      },
      {
        company: 'Care Health Insurance Ltd (via NeogenCode Technologies)',
        role: 'Software Developer',
        start_date: 'Mar 2024',
        end_date: 'Jan 2025',
        is_current: false,
        company_logo: 'https://media.licdn.com/dms/image/v2/D560BAQG81o4MivEEuA/company-logo_200_200/B56Zr8wyMIHkAI-/0/1765177238812/neogencode_technologies_pvt_ltd_logo?e=2147483647&v=beta&t=IC-TYgtr0DRBwTQbsJdQu-BezuYYHki16ATbgUuJ6nI',
        points: [
          'Developed scalable backend services and REST APIs using Node.js and PostgreSQL.',
          'Built search, inventory management, and document management solutions using AWS S3.',
          'Designed and implemented microservices architecture utilizing API Gateway and Load Balancing.',
          'Managed secure application configurations using AWS Secrets Manager.',
          'Deployed services on EC2 and AWS Lambda.',
          'Received the "Project of the Quarter" award for outstanding contribution.',
          'Collaborated in Agile teams, participating in sprint planning, code reviews, and production releases.',
        ],
      },
      {
        company: 'Cedcoss Technologies, Lucknow',
        role: 'Software Developer (Backend)',
        start_date: 'Jan 2022',
        end_date: 'Mar 2024',
        is_current: false,
        company_logo: 'https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a15aa869ddc5_cedcoss-logo-edited-hqd-27-june-2-1.png',
        points: [
          'Collaborated with cross-functional teams in an Agile environment to deliver scalable web applications.',
          'Designed and implemented RESTful APIs for frontend integration and third-party services.',
          'Worked on microservices-based applications, contributing to new feature development.',
          'Implemented authentication and authorization using JWT and OAuth.',
          'Optimized database queries and API performance to improve application responsiveness.',
          'Gained hands-on experience with Docker, AWS services, and CI/CD deployment workflows.',
          'Maintained backend applications using Node.js, Express.js, and MongoDB.',
        ],
      },
    ]);

    // ── PROJECTS
    await Project.bulkCreate([
      {
        title: 'Announcement Service',
        description: 'Centralized announcement microservice for Care Health Insurance platform. Handles multi-channel communication delivery across the organization.',
        tech_stack: ['Node.js', 'PostgreSQL', 'REST API', 'Microservices'],
        github_url: '',
        live_url: '',
        image: '/images/projects/placeholder.png',
        is_featured: true,
      },
      {
        title: 'Customer Information Sheet',
        description: 'Document management system for customer data at Care Health Insurance with secure storage and retrieval using AWS S3.',
        tech_stack: ['Node.js', 'AWS S3', 'PostgreSQL', 'Express.js'],
        github_url: '',
        live_url: '',
        image: '/images/projects/placeholder.png',
        is_featured: true,
      },
      {
        title: 'Utility Microservice',
        description: 'Reusable utility microservice providing shared functionalities across Care Health Insurance backend services.',
        tech_stack: ['Node.js', 'Express.js', 'AWS Lambda', 'API Gateway'],
        github_url: '',
        live_url: '',
        image: '/images/projects/placeholder.png',
        is_featured: false,
      },
    ]);

    // ── ACHIEVEMENTS
    await Achievement.bulkCreate([
      {
        title: 'Project of the Quarter Award',
        description: 'Received the "Project of the Quarter" award for outstanding contribution while working on Care Health Insurance projects at NeogenCode Technologies.',
      },
    ]);

    console.log('✅ All seed data inserted successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeder error:', err);
    process.exit(1);
  }
}

seed();
