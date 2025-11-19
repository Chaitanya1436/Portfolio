import { motion } from "framer-motion";
import { Mail, Download, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import CertificatesSection from "@/components/CertificatesSection";

const Sidebar = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="sidebar w-full lg:w-96 lg:max-w-96 flex-shrink-0"
      data-testid="sidebar"
    >
      <div className="glass rounded-3xl p-8 lg:p-12 sticky top-8 floating">
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="profile-image-container w-48 h-48 lg:w-64 lg:h-64 mx-auto mb-8"
          data-testid="profile-image-container"
        >
          <img
            src={`${import.meta.env.BASE_URL}my_images/chaipic.jpg`}
            alt="G Chaitanya Naga Sai"
            className="w-full h-full object-cover rounded-full"
            data-testid="profile-image"
          />
        </motion.div>

        {/* Profile Content */}
        <div className="text-center mb-8">
          <motion.div variants={itemVariants} className="text-reveal">
            <div className="text-reveal-inner">
              <h1 className="text-2xl lg:text-3xl font-bold mb-4 typewriter" data-testid="profile-name">
              G Chaitanya Naga Sai
              </h1>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <div className="glass rounded-xl px-4 py-2 inline-flex items-center gap-2" data-testid="availability-status">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" data-testid="status-indicator"></div>
              <span className="text-sm font-medium">Available for work</span>
            </div>
          </motion.div>

{/* Social Links */}
<motion.div
  variants={itemVariants}
  className="flex justify-center gap-4 mb-8"
  data-testid="social-links"
>
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/chaitanya-gangupalli/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.div
      whileHover={{ y: -5, scale: 2.1 }}
      whileTap={{ scale: 0.95 }}
      className="social-link glass rounded-xl p-3 cursor-pointer"
      data-testid="link-linkedin"
    >
      <img
        src={`${import.meta.env.BASE_URL}my_images/linkedin_icon.png`}
        alt="LeetCode"
        className="w-5 h-5"
      />
    </motion.div>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/Chaitanya1436"
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.div
      whileHover={{ y: -5, scale: 2.1 }}
      whileTap={{ scale: 0.95 }}
      className="social-link glass rounded-xl p-3 cursor-pointer"
      data-testid="link-github"
    >
      <img
        src={`${import.meta.env.BASE_URL}my_images/github_icon.png`}
        alt="LeetCode"
        className="w-5 h-5"
      />
    </motion.div>
  </a>

  {/* LeetCode */}
  <a
    href="https://leetcode.com/u/Chai_tanya143/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.div
      whileHover={{ y: -5, scale: 2.1 }}
      whileTap={{ scale: 0.95 }}
      className="social-link glass rounded-xl p-3 cursor-pointer"
      data-testid="link-leetcode"
    >
      {/* Option 1: If you have your PNG in public/my_images/ */}
      <img
        src={`${import.meta.env.BASE_URL}my_images/leetcode_icon.png`}
        alt="LeetCode"
        className="w-5 h-5"
      />
      {/* Option 2: If you prefer react-icons instead */}
      {/* <SiLeetcode className="w-5 h-5" /> */}
    </motion.div>
  </a>

  {/* Email */}
  <a
    href="mailto:chaitanya.24085@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.div
      whileHover={{ y: -5, scale: 2.1 }}
      whileTap={{ scale: 0.95 }}
      className="social-link glass rounded-xl p-3 cursor-pointer"
      data-testid="link-email"
    >
      <img
        src={`${import.meta.env.BASE_URL}my_images/Email_icon.png`}
        alt="LeetCode"
        className="w-5 h-5"
      />
      
    </motion.div>
  </a>
</motion.div>



          {/* Action Buttons */}
<motion.div variants={itemVariants} className="flex gap-3" data-testid="action-buttons">
  <a
    href="mailto:chaitanya.24085@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button
      className="btn-enhanced ripple w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 px-6 rounded-xl font-semibold"
      data-testid="button-contact"
    >
      <Mail className="w-4 h-4 mr-2" />
      Contact Me
    </Button>
  </a>

  <a
    href="https://drive.google.com/file/d/1L0HyQcBQVFfeta_Z28H30kQ4hsEVR11s/view?usp=drivesdk"
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button
      variant="outline"
      className="btn-enhanced ripple w-full glass text-gray-300 py-3 px-6 rounded-xl font-semibold hover:text-white border-portfolio"
      data-testid="button-resume"
    >
      <Download className="w-4 h-4 mr-2" />
      Resume
    </Button>
  </a>
</motion.div>

        </div>

        {/* Certificates Section */}
        <CertificatesSection />
      </div>
    </motion.div>
  );
};

export default Sidebar;
