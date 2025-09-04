import { motion } from "framer-motion";
import { Code, Server, Brain, Database, Globe, Smartphone, Cloud, Cpu, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    {
      name: "Java",
      icon: "/my_images/java_icon.png", // image URL for custom icon
      tagline: "My main coding language, I use it everywhere",
      bgColor: "",
    },
    {
      name: "AWS",
      icon: "/my_images/AWS_icon.png", // React icon component from lucide-react
      tagline: "Learned how to deploy and scale stuff in college level",
      bgColor: "0",
    },
    {
      name: "Python",
      icon: "/my_images/python_icon.png",
      tagline: "My go-to for AI/ML and quick experiments",
      bgColor: "",
    },
    {
      name: "MicroSoft Azure",
      icon: "/my_images/microsoft_icon.png",
      tagline: "Explored AI and cloud integrations here",
      bgColor: "",
    },
    {
      name: "DSA",
      icon: "/my_images/DSA_icon.png",
      tagline: "Keeps me sharp for problem-solving and interviews",
      bgColor: "",
    },
    {
      name: "LeetCode",
      icon: "/my_images/leetcode_icon.png",
      tagline: "My gym for coding workouts",
      bgColor: "",
    },
    {
      name: "React",
      icon: "/my_images/react_icon.png",
      tagline: "Where I build cool, interactive web apps (learning)",
      bgColor: "",
    },
    {
      name: "CSS",
      icon: "/my_images/css_icon.png",
      tagline: "I make pages look less boring with this",
      bgColor: "",
    },
    {
      name: "Bootstrap",
      icon: "/my_images/Bootstrap.png",
      tagline: "Helps me style faster",
      bgColor: "",
    },
    {
      name: "Docker",
      icon: "/my_images/docker.png",
      tagline: "I containerize applications",
      bgColor: "",
    },
     {
      name: "Node.js",
      icon: "/my_images/nodejs_icon.png",
      tagline: "Used it to build some backend systems",
      bgColor: "",
    },
    {
      name: "VS Code",
      icon: "/my_images/VS-code_icon.png",
      tagline: "My everyday coding buddy",
      bgColor: "",
    },
    {
      name: "SQL",
      icon: "/my_images/SQL_icon.png",
      tagline: "Pretty fun, I hate playing with data here",
      bgColor: "",
    },
    {
      name: "GitHub",
      icon: "/my_images/github_icon.png",
      tagline: "My coding diary, where all projects live",
      bgColor: "",
    },
    {
      name: "HTML 5",
      icon: "/my_images/html5_icon.png",
      tagline: "The first thing I learned while building websites",
      bgColor: "",
    },
    {
      name: "Java Script",
      icon: "/my_images/JS_icon.png",
      tagline: "I know the basics, still leveling up",
      bgColor: "",
    },
    {
      name: "Postman",
      icon: "/my_images/postman.png",
      tagline: "My coding diary, where all projects live",
      bgColor: "",
    },
    {
      name: "REST API",
      icon: "/my_images/API.png",
      tagline: "I use this combo to connect (learning)",
      bgColor: "",
    },
    {
      name: "PostgreSQL",
      icon: "/my_images/SQL_icon.png",
      tagline: "The database I used in my e-commerce project (learning)",
      bgColor: "",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="skills-section stagger-item"
      data-testid="skills-section"
    >
      <motion.div variants={itemVariants} className="text-reveal mb-12">
        <div className="text-reveal-inner">
          <h2 className="text-3xl lg:text-4xl font-bold flex items-center gap-4" data-testid="skills-heading">
            <Code className="text-portfolio-accent" />
            Skills & Technologies
          </h2>
        </div>
      </motion.div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="skill-item-new"
            data-testid={`skill-item-${index}`}
          >
            <div className={`skill-icon-container bg-gradient-to-br ${skill.bgColor}`}>
              {typeof skill.icon === "string" ? (
                <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
              ) : (
                <skill.icon className="w-6 h-6 text-white" />
              )}
            </div>

            <div className="skill-content">
              <h3 className="text-lg font-bold text-portfolio-text-primary mb-1" data-testid={`skill-name-${index}`}>
                {skill.name}
              </h3>
              <p className="skill-tagline" data-testid={`skill-tagline-${index}`}>
                {skill.tagline}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
