// Portfolio Data
const portfolioData = {
    personal: {
        name: "Mohd Arshad",
        title: "AWS DevOps Engineer (Trainee)",
        tagline: "Automating, scaling, and securing cloud infrastructure with AWS & DevOps.",
        email: "mohdarshad56821@gmail.com",
        linkedin: "https://www.linkedin.com/in/mohd-arshad-227611281/",
        github: "https://github.com/yourusername",
        phone: "+91-7218893101",
        // ✅ FIXED & WORKING RESUME LINK
        resume: "https://drive.google.com/file/d/1cLjspGBJ6TROLT1nWnOAzNkvd3Z2lner/view?usp=drive_link"

    },

    about: {
        description: `AWS DevOps Engineer with hands-on knowledge in CI/CD pipelines, Infrastructure as Code (IaC), AWS 
        CloudFormation, Docker containerization, Kubernetes (EKS), and Linux systems on Ubuntu and Amazon 
        Linux. Proficient in AWS services including EC2, S3, VPC, IAM, RDS, CloudWatch, ECS, EKS, Lambda, and 
        Ansible configuration management. Delivers strong problem-solving, adaptability, and team collaboration to 
        scalable cloud infrastructure projects..`,
        highlights: [
           // "5+ years of cloud engineering experience",//
            "Cloud expertise (AWS)",
            "Strong automation and DevOps background",
           // "Cost optimization specialist",//
            //"Security-first mindset"//
        ]
    },

    skills: {
        "Cloud Platforms": [
            "AWS (EC2, S3, Lambda, RDS, VPC)",
           // "Azure (VMs, Storage, Functions, AKS)",
            "Google Cloud Platform (Compute, Storage)",
          //  "DigitalOcean, Linode"
        ],
        "Infrastructure as Code": [
            "Terraform",
            "CloudFormation",
            "Ansible",
          //  "Pulumi",
          //  "ARM Templates"
        ],
        "Containerization & Orchestration": [
            "Docker",
            "Kubernetes",
            "ECS/EKS",
           // "Helm Charts",
            "Docker Compose"
        ],
        "CI/CD Tools": [
            "Jenkins",
            "GitLab CI/CD",
            "GitHub Actions",
          //  "Azure DevOps",
          //  "ArgoCD",
          //  "CircleCI"
        ],
        "Programming & Scripting": [
          //  "Python",
            "Bash/Shell",
            "PowerShell",
         //   "Go",
         //   "JavaScript/Node.js"
        ],
        "Monitoring & Logging": [
            "CloudWatch",
         //   "Prometheus",
         //   "Grafana",
         //   "ELK Stack",
         //   "Datadog",
         //   "New Relic"
        ],
        "Security & Compliance": [
            "IAM & RBAC",
            "Security Groups",
         //   "KMS & Secrets Manager",
         //   "SSL/TLS",
         //   "Compliance (SOC2, ISO 27001)"
        ],
        "Networking": [
            "VPC Design",
            "Load Balancers",
            "DNS & Route53",
            "VPN & Direct Connect",
            "CDN (CloudFront, CloudFlare)"
        ]
    },

    experience: [
       /* {
            role: "Senior Cloud Engineer",
            company: "Tech Innovations Inc.",
            location: "San Francisco, CA",
            period: "Jan 2022 - Present",
            responsibilities: [
                "Lead cloud infrastructure design and implementation for enterprise applications serving 10M+ users",
                "Architect multi-region, highly available solutions achieving 99.99% uptime",
                "Mentor team of 5 junior engineers on cloud best practices and DevOps methodologies",
                "Drive cost optimization initiatives resulting in $1.2M annual savings",
                "Establish CI/CD pipelines and infrastructure automation standards across organization",
                "Implement security controls and compliance frameworks (SOC2, ISO 27001)"
            ],
            achievements: [
                "Reduced infrastructure costs by 40% through rightsizing and reserved instances",
                "Migrated 100+ services to Kubernetes with zero downtime",
                "Achieved PCI-DSS compliance for payment processing infrastructure"
            ]
        },
        {
            role: "Cloud Engineer",
            company: "StartUp Solutions",
            location: "Austin, TX",
            period: "Jun 2020 - Dec 2021",
            responsibilities: [
                "Migrated entire on-premise infrastructure (50+ servers) to AWS cloud",
                "Implemented Kubernetes-based microservices architecture for 30+ services",
                "Automated infrastructure provisioning using Terraform and Ansible",
                "Managed monitoring, logging, and alerting systems using Prometheus and Grafana",
                "Developed Python scripts for automated backups and disaster recovery"
            ],
            achievements: [
                "Completed full cloud migration 2 months ahead of schedule",
                "Improved deployment frequency from weekly to multiple times daily",
                "Reduced incident response time by 60%"
            ]
        },
        {
            role: "DevOps Engineer",
            company: "Digital Media Corp",
            location: "New York, NY",
            period: "Mar 2019 - May 2020",
            responsibilities: [
                "Built and maintained CI/CD pipelines using Jenkins and GitLab CI",
                "Containerized legacy applications using Docker",
                "Implemented infrastructure monitoring and alerting",
                "Automated deployment processes and configuration management",
                "Collaborated with development teams on application architecture"
            ],
            achievements: [
                "Reduced build times by 70% through pipeline optimization",
                "Containerized 25+ legacy applications",
                "Implemented automated testing reducing production bugs by 50%"
            ]
        }*/
    ],

    projects: [
        /*{
            title: "Multi-Region AWS Infrastructure",
            description: `Designed and deployed a highly available, multi-region infrastructure on AWS 
            serving 10M+ monthly users with 99.99% uptime. Implemented auto-scaling, disaster recovery, 
            and comprehensive cost optimization strategies.`,
            technologies: ["AWS", "Terraform", "EKS", "Route53", "CloudFront", "RDS", "ElastiCache"],
            highlights: [
                "Reduced infrastructure costs by 35% through reserved instances and rightsizing",
                "Automated deployment pipeline reducing deployment time by 80%",
                "Implemented zero-downtime deployment strategy with blue-green deployments",
                "Achieved 99.99% uptime SLA with automated failover",
                "Set up comprehensive monitoring with custom CloudWatch dashboards"
            ],
            github: "https://github.com/yourusername/aws-multi-region",
            demo: null
        },
        {
            title: "Kubernetes Migration & Optimization",
            description: `Led the migration of 50+ microservices from legacy VM-based infrastructure to 
            containerized Kubernetes clusters. Established GitOps workflows and implemented service mesh 
            architecture for improved observability.`,
            technologies: ["Kubernetes", "Docker", "Helm", "Istio", "Prometheus", "ArgoCD", "Grafana"],
            highlights: [
                "Improved resource utilization by 60% through proper pod sizing",
                "Reduced deployment time from hours to minutes using GitOps",
                "Enhanced monitoring and observability with Prometheus/Grafana stack",
                "Implemented automated rollback mechanisms and canary deployments",
                "Created comprehensive runbooks and documentation"
            ],
            github: "https://github.com/yourusername/k8s-migration",
            demo: null
        },
        {
            title: "Cloud Security Automation Platform",
            description: `Built an automated security compliance scanning and remediation system across 
            multi-cloud environment. Integrated with SIEM and ticketing systems for comprehensive incident 
            response workflow.`,
            technologies: ["Python", "AWS Config", "Lambda", "Security Hub", "Boto3", "Terraform", "SNS"],
            highlights: [
                "Automated 80% of security compliance checks across 500+ resources",
                "Reduced security vulnerabilities by 70% through automated remediation",
                "Real-time alerting and automated response for critical security events",
                "Generated compliance reports for SOC2 and ISO 27001 audits",
                "Integrated with Slack for security team notifications"
            ],
            github: "https://github.com/yourusername/cloud-security-automation",
            demo: null
        },
        {
            title: "Infrastructure Cost Optimization Tool",
            description: `Developed a comprehensive Python-based tool to analyze cloud spending patterns, 
            identify waste, and provide actionable optimization recommendations. Integrated with Slack for 
            daily cost reports and alerts.`,
            technologies: ["Python", "AWS Cost Explorer API", "Pandas", "Matplotlib", "Slack API", "Lambda"],
            highlights: [
                "Identified $500K+ in annual cost savings opportunities",
                "Automated tagging compliance checks across all resources",
                "Created custom dashboards for cost visibility by team/project",
                "Implemented budget alerts and forecasting using ML",
                "Generated weekly executive reports with actionable insights"
            ],
            github: "https://github.com/yourusername/cost-optimizer",
            demo: null
        },
        {
            title: "Serverless Data Processing Pipeline",
            description: `Architected and implemented a fully serverless data processing pipeline handling 
            10TB+ of data monthly. Built with AWS Lambda, Step Functions, and S3 for event-driven processing.`,
            technologies: ["AWS Lambda", "Step Functions", "S3", "DynamoDB", "EventBridge", "Python"],
            highlights: [
                "Processed 10TB+ data monthly with 99.9% success rate",
                "Reduced processing costs by 60% compared to EC2-based solution",
                "Implemented automatic retry logic and error handling",
                "Built real-time monitoring dashboard for pipeline health",
                "Scaled automatically to handle 10x traffic spikes"
            ],
            github: "https://github.com/yourusername/serverless-pipeline",
            demo: null
        }*/
    ],

    certifications: [
        {
            name: "LINUX NETWORKING,CLOUD DEVOPS",
            issuer: "EXLEARN TECHNOLOGIES",
            date: "Dec-2025",
            credentialId: "f083cbb3-e027-4ee0-805b57597e1fb8e5"
        },
        /*{
            name: "AWS Certified DevOps Engineer - Professional",
            issuer: "Amazon Web Services",
            date: "2023",
            credentialId: "DEF-456-UVW"
        },
        {
            name: "Certified Kubernetes Administrator (CKA)",
            issuer: "Cloud Native Computing Foundation",
            date: "2022",
            credentialId: "CKA-789-RST"
        },
        {
            name: "Certified Kubernetes Application Developer (CKAD)",
            issuer: "Cloud Native Computing Foundation",
            date: "2022",
            credentialId: "CKAD-012-PQR"
        },
        {
            name: "HashiCorp Certified: Terraform Associate",
            issuer: "HashiCorp",
            date: "2022",
            credentialId: "TF-345-MNO"
        },
        {
            name: "Azure Solutions Architect Expert",
            issuer: "Microsoft",
            date: "2021",
            credentialId: "AZ-678-JKL"
        },
        {
            name: "Google Cloud Professional Cloud Architect",
            issuer: "Google Cloud",
            date: "2021",
            credentialId: "GCP-901-GHI"
        }*/
    ],

    education: [
        {
            degree: "Bachelor of Commerce in Computer Applicatoions (BCCA)",
            institution: "RTMNU Univercity",
            location: "Nagpur, Maharashtra, India",
            year: "2024",
            gpa: "7.16"
        },
        {
            degree: "HSC (12th standard)",
            institution: "State Board",
            location: "Amravati, Maharashtra, India",
            year: "2020",
            percentage: "48.62%"
        },       
        {
            degree: "SSC (10th standard)",
            institution: "State Board",
            location: "Amravati, Maharashtra, India",
            year: "2018",
            percentage: "70.80%"
        }
    ]
};

// DOM Manipulation Functions
class Portfolio {
    constructor(data) {
        this.data = data;
        this.init();
    }

    init() {
        this.renderHeader();
        this.renderAbout();
        this.renderSkills();
        this.renderExperience();
        this.renderProjects();
        this.renderCertifications();
        this.renderEducation();
        this.setupEventListeners();
        this.setupScrollEffects();
    }

    renderHeader() {
        const header = document.getElementById('header');
        if (!header) return;

        header.innerHTML = `
            <div class="header-content">
                <h1>${this.data.personal.name}</h1>
                <p class="title">${this.data.personal.title}</p>
                <p class="tagline">${this.data.personal.tagline}</p>
                <div class="contact-links">
                    <a href="mailto:${this.data.personal.email}" class="btn-contact">
                        <i class="icon">📧</i> Email
                    </a>
                    <a href="${this.data.personal.linkedin}" target="_blank" class="btn-contact">
                        <i class="icon">💼</i> LinkedIn
                    </a>
                    <a href="${this.data.personal.github}" target="_blank" class="btn-contact">
                        <i class="icon">💻</i> GitHub
                    </a>
                    <a href="tel:${this.data.personal.phone}" class="btn-contact">
                        <i class="icon">📱</i> Call
                    </a>
                    <!-- ✅ WORKING RESUME BUTTON -->
                    <a href="${this.data.personal.resume}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-resume">
                        <i class="icon">📄</i> Resume
                    </a>
                    
                </div>
            </div>
        `;
    }

    renderAbout() {
        const aboutSection = document.getElementById('about');
        if (!aboutSection) return;

        const highlightsList = this.data.about.highlights
            .map(h => `<li>${h}</li>`)
            .join('');

        aboutSection.innerHTML = `
            <h2>About Me</h2>
            <p class="about-description">${this.data.about.description}</p>
            <div class="highlights">
                <h3>Key Highlights</h3>
                <ul>${highlightsList}</ul>
            </div>
        `;
    }

    renderSkills() {
        const skillsSection = document.getElementById('skills');
        if (!skillsSection) return;

        const skillsGrid = Object.entries(this.data.skills)
            .map(([category, skills]) => `
                <div class="skill-category">
                    <h3>${category}</h3>
                    <ul>
                        ${skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
            `).join('');

        skillsSection.innerHTML = `
            <h2>Technical Skills</h2>
            <div class="skills-grid">${skillsGrid}</div>
        `;
    }

    renderExperience() {
        const experienceSection = document.getElementById('experience');
        if (!experienceSection) return;

        const experienceItems = this.data.experience.map(job => `
            <div class="experience-item">
                <div class="experience-header">
                    <div>
                        <h3>${job.role}</h3>
                        <p class="company">${job.company} • ${job.location}</p>
                    </div>
                    <p class="period">${job.period}</p>
                </div>
                <div class="responsibilities">
                    <h4>Responsibilities:</h4>
                    <ul>
                        ${job.responsibilities.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
                ${job.achievements ? `
                    <div class="achievements">
                        <h4>Key Achievements:</h4>
                        <ul>
                            ${job.achievements.map(a => `<li>${a}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        `).join('');

        experienceSection.innerHTML = `
            <h2>Professional Experience</h2>
            ${experienceItems}
        `;
    }

    renderProjects() {
        const projectsSection = document.getElementById('projects');
        if (!projectsSection) return;

        const projectItems = this.data.projects.map(project => `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="tech-stack">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-highlights">
                    <h4>Key Highlights:</h4>
                    <ul>
                        ${project.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                </div>
                <div class="project-links">
                    ${project.github ? `<a href="${project.github}" target="_blank" class="project-link">View Code</a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link">Live Demo</a>` : ''}
                </div>
            </div>
        `).join('');

        projectsSection.innerHTML = `
            <h2>Featured Projects</h2>
            ${projectItems}
        `;
    }

    renderCertifications() {
        const certificationsSection = document.getElementById('certifications');
        if (!certificationsSection) return;

        const certItems = this.data.certifications.map(cert => `
            <div class="cert-card">
                <span class="cert-icon">🏆</span>
                <div class="cert-details">
                    <h3>${cert.name}</h3>
                    <p class="cert-issuer">${cert.issuer}</p>
                    <p class="cert-date">Issued: ${cert.date}</p>
                    ${cert.credentialId ? `<p class="cert-id">ID: ${cert.credentialId}</p>` : ''}
                </div>
            </div>
        `).join('');

        certificationsSection.innerHTML = `
            <h2>Certifications</h2>
            <div class="certifications-grid">${certItems}</div>
        `;
    }

    renderEducation() {
        const educationSection = document.getElementById('education');
        if (!educationSection) return;

        const educationItems = this.data.education.map(edu => `
            <div class="education-item">
                <h3>${edu.degree}</h3>
                <p class="institution">${edu.institution} • ${edu.location}</p>
                
                ${edu.year ? `<p class="year">Year: ${edu.year}</p>` : ''}
                ${edu.gpa ? `<p class="gpa">GPA: ${edu.gpa}</p>` : ''}
                ${edu.percentage ? `<p class="percentage">Percentage: ${edu.percentage}</p>` : ''}
            </div>
        `).join('');

        educationSection.innerHTML = `
            <h2>Education</h2>
            ${educationItems}
        `;
    }

    setupEventListeners() {
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Add active class to navigation on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }

    setupScrollEffects() {
        // Intersection Observer for fade-in animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section, .project-card, .experience-item, .skill-category').forEach(el => {
            observer.observe(el);
        });
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio(portfolioData);
});

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Portfolio, portfolioData };
}

// ==========================

