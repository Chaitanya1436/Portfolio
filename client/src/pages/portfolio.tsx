import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";

const Portfolio = () => {
  const contentRef = useScrollAnimations();

  useEffect(() => {
    // Set page title and meta description
    document.title = "G Chaitanya Naga Sai - Full Stack Developer & AI/ML Engineer";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Portfolio of G Chaitanya Naga Sai - Specializing in intelligent, scalable applications by combining AI/ML with full-stack development. Based in Andhra Pradesh, India.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Portfolio of G Chaitanya Naga Sai - Specializing in intelligent, scalable applications by combining AI/ML with full-stack development. Based in Andhra Pradesh, India.';
      document.head.appendChild(meta);
    }

    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: 'G Chaitanya Naga Sai - Full Stack Developer & AI/ML Engineer' },
      { property: 'og:description', content: 'Portfolio showcasing innovative projects combining AI/ML with full-stack development' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630' },
    ];

    ogTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
  }, []);

  return (
    <div className="min-h-screen relative" data-testid="portfolio-page">
      <AnimatePresence>
        <LoadingScreen />
      </AnimatePresence>

      <ScrollProgress />
      <CustomCursor />
      <AnimatedBackground />
      <Header />

      <main ref={contentRef} className="relative z-10">
        <div className="mx-auto px-[10%] py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-16"
            data-testid="main-layout"
          >
            <Sidebar />
            
            <div className="main-content flex-1 space-y-20" data-testid="main-content">
              <div id="hero" data-section="hero">
                <HeroSection />
              </div>
              <div id="projects" data-section="projects">
                <ProjectsSection />
              </div>
              <div id="skills" data-section="skills">
                <SkillsSection />
              </div>
              <div id="contact" data-section="contact">
                <ContactSection />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
