import { motion } from "framer-motion";
import { Bot, Cloud, BarChart3, Github, ExternalLink, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

const ProjectsSection = () => {
  // 🔹 helper function to render skill pills
  const basePath = import.meta.env.BASE_URL;

  const renderSkills = (skills: string[]) => (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span
          key={idx}
          className="px-3 py-1 text-xs font-medium rounded-full border bg-portfolio-surface text-portfolio-accent border-portfolio-accent transition-all hover:bg-portfolio-accent hover:text-white"
        >
          {skill}
        </span>
      ))}
    </div>
  );

  const [stackedProjects, setStackedProjects] = useState<number[]>([]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [projectThemes, setProjectThemes] = useState<{ [key: number]: string }>({});
  const [visibleOtherProjects, setVisibleOtherProjects] = useState(6);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      id: 1,
      title: "Slide Genie - AI PPT generator",
      description:
        "An easy-to-use tool that creates slide outlines using AI from APIs like Google and Gemini. It adds images with AI image services and lets you edit slides through an AI assistant. You can use custom or built-in templates and export your presentation as PDF or PPTX.",
      technologies: ["DataBase", "Admin Panel", "Cart Feature", "React", "PostgreSQL"],
      icon: `${basePath}my_images/coming_soon.gif`,
      color: "from-cyan-600 to-black-800",
      textColor: "text-lime-400",
      date: "Coming Soon - 👍Final year capstone project",
      codeLink: "https://github.com/Chaitanya1436/Slide-Genie",
      demoLink: "https://github.com/Chaitanya1436/Slide-Genie",
    },
    {
      id: 2,
      title: "Boom Cart - Full Stack E-Commerce Platform",
      description:
        "Built a responsive e-commerce platform with real-time cart/wishlist updates, advanced product filtering, UPI-based checkout with dynamic QR and transaction validation, and a secure admin dashboard for authentication, order tracking, payment validation, and live order management.",
      technologies: ["DataBase", "Admin Panel", "Cart Feature", "React", "PostgreSQL"],
      icon: `${basePath}my_images/BoomCart_gif.gif`,
      color: "from-green-600 to-green-800",
      textColor: "text-lime-400",
      date: "2024 Dec",
      codeLink: "https://github.com/Chaitanya1436/BoomCart?tab=readme-ov-file",
      demoLink: "https://chaitanya1436.github.io/BoomCart/index.html",
    },
    {
      id: 3,
      title: "Ask Me Bot - AI Based Chatbot",
      description:
        "An AI chatbot using NLP, spaCy, Transformers to handle both closed and open domain queries by extracting answers from uploaded PDFs or retrieving relevant information from external sources when needed with enhanced intent recognition and automated report generation.",
      technologies: ["Python", "JavaScript", "spaCy", "Hugging Face", "NLP"],
      icon: `${basePath}my_images/medbot_gif.gif`,
      color: "from-blue-600",
      textColor: "text-rose-500",
      date: "2025 Feb",
      codeLink: "https://github.com/Chaitanya1436/ASK-Bot",
      demoLink: "https://github.com/Chaitanya1436/ASK-Bot",
    },
    {
      id: 4,
      title: "Operating System Banking Transaction Scheduler",
      description:
        "Designed a user-driven banking transaction scheduler simulating concurrency and deadlock control using semaphores and the banker's algorithm with real-time process tracking, deadlock detection with root cause insights, and dynamic resource flow visualization.",
      technologies: ["Core OS Concepts", "Deadlock", "concurrency", "Semaphore", "CSS"],
      icon: `${basePath}my_images/OS_Banking_Gif.gif`,
      color: "from-blue-600 to-blue-800",
      textColor: "text-orange-400",
      date: "2024 Aug",
      codeLink: "https://github.com/Chaitanya1436/OS-Banking-Visualization",
      demoLink: "https://chaitanya1436.github.io/OS-Banking-Visualization/",
    },
    
  ];

  const otherProjects = [
    {
      id: 1,
      title: "OnlyUs- Global Video Chat",
      description: "A scalable video & text chat platform with random and interest-based matchmaking.",
      year: "2023",
      technologies: ["React.js", "Node.js", "Express.js", "API"],
      image: `${basePath}my_images/hug-video-call.gif`,
      link: "https://github.com/Chaitanya1436/OnlyUs",
    },
    {
      id: 2,
      title: "IoT Surveillance Robot",
      description: "A robot that avoids obstacles, streams video, and sends a Telegram alert when it detects fire or smoke.",
      year: "2023",
      technologies: ["IoT", "Telegram", "ESP32-CAM", "Python", "Uno"],
      image: `${basePath}my_images/surv_robot.gif`,
      link: "https://github.com/Chaitanya1436/Surveillance-Robot",
    },
    {
      id: 3,
      title: "Slide Genie (CAPSTONE PROJECT)",
      description: "AI PPT generator with customizable features and an integrated ASK_PPT assistant.",
      year: "Coming Soon",
      technologies: ["API", "NextAuth", "pexels", "Gemini", "openai", "ollama", "React", "Docker"],
      image: `${basePath}my_images/ppt_gene.gif`,
      link: "https://github.com/Chaitanya1436/",
    },
    {
      id: 4,
      title: "Portfolio",
      description: "Personal portfolio website showcasing projects and skills",
      year: "2025",
      technologies: ["React", "TailwindCSS", "Framer Motion"],
      image: `${basePath}my_images/portfolio.gif`,
      link: "https://github.com/Chaitanya1436/Portfolio",
    },
    {
      id: 5,
      title: "AI Chatbot Assistant",
      description: "Closed Bound Intelligent conversational AI with natural language processing.",
      year: "2024",
      technologies: ["HugginFace", "StreamLit", "Groq", "BeautifulSoup"],
      image: `${basePath}my_images/AI_CHAT_BOT.gif`,
      link: "https://github.com/Chaitanya1436/ASK-Bot",
    },
    {
      id: 6,
      title: "Baby Sitting Robot",
      description: "Smart robot with cry detection, diaper alerts, object tracking, and live streaming.",
      year: "2024",
      technologies: ["Sensors", "Arduino", "VideoStream", "WifiMod"],
      image: `${basePath}my_images/babyrobot.jpg`,
      link: "https://github.com/Chaitanya1436/Toddler_Monitoring_Robot",
    },
    {
      id: 7,
      title: "RL Maze Solver",
      description: "Research project applying SARSA, Q-Learning, and Deep Q-Learning for maze-solving.",
      year: "2024",
      technologies: ["Python", "Colab", "Q Learning", "RL Concepts"],
      image: `${basePath}my_images/Maze_trained_gif.gif`,
      link: "https://github.com/Chaitanya1436/RL-Maze-Solver",
    },
    {
      id: 8,
      title: "Boom Cart",
      description: "Responsive e-commerce site with live cart/wishlist, UPI checkout, and secure admin dashboard.",
      year: "2024",
      technologies: ["HTML", "PostgreSQL", "NextAuth", "DataBase"],
      image: `${basePath}my_images/BoomCart_gif.gif`,
      link: "https://github.com/Chaitanya1436/BoomCart",
    },
    {
      id: 9,
      title: "Hybrid Deep Learning Model",
      description: "Custom deep learning model combining two architectures for improved accuracy.",
      year: "2024",
      technologies: ["Neural Networks", "DL", "GAN", "VGG16"],
      image: `${basePath}my_images/DL_Hybrid_model_gif.gif`,
      link: "https://github.com/Chaitanya1436/Deep_Learning-Customized-Models",
    },
    {
      id: 10,
      title: "Solar Energy Prediction",
      description: "Predicted solar energy generation using ensemble ML methods.",
      year: "2023",
      technologies: ["Python", "AdaBoost", "Random Forest"],
      image: `${basePath}my_images/medical_analysis_img.jpg`,
      link: "https://github.com/Chaitanya1436/Solar_Energy_Prediction_91Accuracy",
    },
    {
      id: 11,
      title: "DeadLock visualization",
      description: "Simulated deadlock situations with user interaction",
      year: "2023",
      technologies: ["JS", "OS Concepts", "Css", "HTML"],
      image: `${basePath}my_images/Deadlock.gif`,
      link: "https://github.com/Chaitanya1436/OS-Banking-Visualization",
    },
    {
      id: 12,
      title: "Students Performance Analysis",
      description: "Classification-based model to forecast student outcomes.",
      year: "2024",
      technologies: ["Three.js", "WebXR", "Blender"],
      image: `${basePath}my_images/student_analysis_gif.gif`,
      link: "https://github.com/Chaitanya1436/Student_Performance_Analysis",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const newStackedProjects: number[] = [];

      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isAboveViewport = rect.bottom < window.innerHeight / 3;

          if (isAboveViewport) {
            newStackedProjects.push(index);
          }
        }
      });

      setStackedProjects(newStackedProjects);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getRandomTheme = () => {
    const themes = ["green", "pink", "blue", "purple", "orange", "cyan", "red"];
    return themes[Math.floor(Math.random() * themes.length)];
  };

  const handleMouseEnter = (index: number) => {
    setHoveredProject(index);
    setProjectThemes((prev) => ({
      ...prev,
      [index]: getRandomTheme(),
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="projects-section stagger-item"
      data-testid="projects-section"
    >
      <motion.div variants={itemVariants} className="text-reveal mb-12">
        <div className="text-reveal-inner">
          <h2
            className="text-3xl lg:text-4xl font-bold flex items-center gap-4"
            data-testid="projects-heading"
          >
            <Bot className="text-portfolio-accent" />
            Major Projects
          </h2>
        </div>
      </motion.div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            variants={itemVariants}
            className={`project-card project-stack-item card-3d-hover skill-item-new ${
              stackedProjects.includes(index) ? "stacked" : ""
            } ${
              hoveredProject === index
                ? `project-theme-${projectThemes[index]}`
                : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{
              position: "sticky",
              top: `${100 + index * 20}px`,
              zIndex: index + 1,
            }}
            data-testid={`project-card-${project.id}`}
          >
            <div className="flex items-start gap-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl relative overflow-hidden flex-shrink-0`}
                data-testid={`project-icon-${project.id}`}
              >
                {typeof project.icon === "string" ? (
                  <img
                    src={project.icon}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ display: "block" }}
                  />
                ) : (
                  <project.icon className="w-8 h-8 text-white m-auto" />
                )}
              </motion.div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                  <div>
                    <h3
                      className="text-xl font-bold mb-2"
                      data-testid={`project-title-${project.id}`}
                    >
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className={`px-3 py-1 bg-portfolio-surface text-portfolio-accent rounded-full text-sm border border-portfolio-accent`}
                      >
                        {project.date}
                      </span>
                    </div>
                  </div>
                </div>

                <p
                  className="text-portfolio-secondary mb-4 leading-relaxed"
                  data-testid={`project-description-${project.id}`}
                >
                  {project.description}
                </p>

                <div className="mb-6">{renderSkills(project.technologies)}</div>

                <div className="flex gap-4">
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="ghost"
                        className={`btn-enhanced ${project.textColor} hover:text-white transition-colors`}
                        data-testid={`project-code-${project.id}`}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="ghost"
                        className={`btn-enhanced ${project.textColor} hover:text-white transition-colors`}
                        data-testid={`project-demo-${project.id}`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Projects Section */}
      <motion.div
        variants={itemVariants}
        className="mt-20"
        data-testid="other-projects-section"
      >
        <motion.div variants={itemVariants} className="text-reveal mb-12">
          <div className="text-reveal-inner">
            <h2
              className="text-3xl lg:text-4xl font-bold flex items-center gap-4"
              data-testid="other-projects-heading"
            >
              <Folder className="text-portfolio-accent" />
              Other Projects
            </h2>
          </div>
        </motion.div>

        <div className="other-projects-grid">
          {otherProjects.slice(0, visibleOtherProjects).map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="other-project-card skill-item-new"
              data-testid={`other-project-card-${project.id}`}
            >
              <div className="other-project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  data-testid={`other-project-image-${project.id}`}
                />
                <div
                  className="other-project-year"
                  data-testid={`other-project-year-${project.id}`}
                >
                  {project.year}
                </div>
              </div>

              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-2"
                  data-testid={`other-project-title-${project.id}`}
                >
                  {project.title}
                </h3>

                <p
                  className="text-portfolio-secondary mb-4 text-sm leading-relaxed"
                  data-testid={`other-project-description-${project.id}`}
                >
                  {project.description}
                </p>

                <div className="mb-4">{renderSkills(project.technologies)}</div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    className="btn-enhanced text-portfolio-accent hover:text-white transition-colors w-full"
                    data-testid={`other-project-link-${project.id}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleOtherProjects < otherProjects.length && (
          <div className="text-center mt-8">
            <Button
              onClick={() =>
                setVisibleOtherProjects((prev) =>
                  Math.min(prev + 6, otherProjects.length)
                )
              }
              className="btn-enhanced bg-portfolio-accent hover:bg-portfolio-accent-bright text-white px-8 py-3 rounded-full transition-all duration-300"
              data-testid="load-more-button"
            >
              Load More Projects ({otherProjects.length - visibleOtherProjects}{" "}
              remaining)
            </Button>
          </div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;
