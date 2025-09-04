import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { count: projectsCount, triggerAnimation: triggerProjects } = useCountUp(15);
  const { count: websitesCount, triggerAnimation: triggerWebsites } = useCountUp(2);
  const { count: certificationsCount, triggerAnimation: triggerCertifications } = useCountUp(3);
  const { count: papersCount, triggerAnimation: triggerPapers } = useCountUp(3);
  
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  
  const typingTexts = [
    "Final Year(2022-2026) CSE Student",
    "AI-ML specialization",
    "VIT-Vellore Institute of Technology"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerProjects();
            triggerWebsites();
            triggerCertifications();
            triggerPapers();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [triggerProjects, triggerWebsites, triggerCertifications, triggerPapers]);

  useEffect(() => {
    // Start typing animation after a delay
    const startTyping = setTimeout(() => {
      setShowTyping(true);
    }, 1000);

    return () => clearTimeout(startTyping);
  }, []);

  useEffect(() => {
    if (!showTyping) return;

    const currentFullText = typingTexts[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1));
        } else {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Move to next text
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % typingTexts.length);
        }
      }
    }, isDeleting ? 100 : 50); // 100ms for deleting, 50ms for typing

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, showTyping, typingTexts]);

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
      animate="visible"
      className="hero-section stagger-item"
      data-testid="hero-section"
    >
      <motion.div variants={itemVariants} className="text-reveal mb-4">
        <div className="text-reveal-inner">
          <h2 className="text-xl text-portfolio-accent mb-2" data-testid="greeting">👋 Hello</h2>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="text-reveal mb-6">
        <div className="text-reveal-inner">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4" data-testid="main-heading">
            I'm Chai, <br />
            
            {/* Typing Animation Section */}
            {showTyping && (
              <div className="my-6 typing-container">
                <span 
                  className="typing-text text-lg lg:text-xl"
                  data-testid="typing-text"
                >
                  {currentText}
                </span>
              </div>
            )}
            
            <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              From Andhra Pradesh, India
            </span>
          </h1>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="text-reveal">
        <div className="text-reveal-inner">
          <p className="text-lg lg:text-xl text-portfolio-secondary leading-relaxed max-w-3xl" data-testid="description">
            I specialize in building{" "}
            <span className="text-portfolio-accent font-semibold">intelligent, scalable, and user-friendly applications</span>{" "}
            by combining AI/ML with full-stack development. My focus is on creating projects that are not just functional but also{" "}
            <span className="text-portfolio-accent font-semibold">innovative and impactful</span>.
          </p>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        data-testid="stats-section"
      >
        <motion.div
          whileHover={{ rotateX: 5, rotateY: 5, z: 20 }}
          className="card-3d glass rounded-2xl p-6 text-center"
          data-testid="stat-projects"
        >
          <div className="stat-counter text-3xl font-bold" data-testid="stat-projects-count">
            {projectsCount}
          </div>
          <p className="text-sm text-portfolio-muted mt-2">Projects</p>
        </motion.div>

        <motion.div
          whileHover={{ rotateX: 5, rotateY: 5, z: 20 }}
          className="card-3d glass rounded-2xl p-6 text-center"
          data-testid="stat-websites"
        >
          <div className="stat-counter text-3xl font-bold" data-testid="stat-websites-count">
            {websitesCount}
          </div>
          <p className="text-sm text-portfolio-muted mt-2">Full Stack Websites</p>
        </motion.div>

        <motion.div
          whileHover={{ rotateX: 5, rotateY: 5, z: 20 }}
          className="card-3d glass rounded-2xl p-6 text-center"
          data-testid="stat-certifications"
        >
          <div className="stat-counter text-3xl font-bold" data-testid="stat-certifications-count">
            {certificationsCount}
          </div>
          <p className="text-sm text-portfolio-muted mt-2">Cloud Certifications</p>
        </motion.div>

        <motion.div
          whileHover={{ rotateX: 5, rotateY: 5, z: 20 }}
          className="card-3d glass rounded-2xl p-6 text-center"
          data-testid="stat-papers"
        >
          <div className="stat-counter text-3xl font-bold" data-testid="stat-papers-count">
            {papersCount}
          </div>
          <p className="text-sm text-portfolio-muted mt-2">Research Papers</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
