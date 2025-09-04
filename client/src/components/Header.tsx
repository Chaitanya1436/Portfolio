import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Home, User, Briefcase, Code, Award, Mail } from "lucide-react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const navigation = [
    { id: "hero", label: "Home", icon: Home },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => nav.id);
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId) || 
                       document.querySelector(`[data-section="${sectionId}"]`) ||
                       document.querySelector(`.${sectionId}-section`);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call on mount to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId) || 
                   document.querySelector(`[data-section="${sectionId}"]`) ||
                   document.querySelector(`.${sectionId}-section`);
    
    if (element) {
      const offsetTop = element.offsetTop - 100; // Account for header height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="header-nav"
      data-testid="header-navigation"
    >
      <nav className="nav-container">
        {navigation.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            data-testid={`nav-${item.id}`}
          >
            <item.icon className="nav-icon" />
            <span className="nav-label">{item.label}</span>
            <div className="nav-indicator" />
          </motion.button>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;