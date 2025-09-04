import { motion } from "framer-motion";
import { Mail, Phone, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="contact-section stagger-item"
      data-testid="contact-section"
    >
      <motion.div variants={itemVariants} className="text-reveal mb-12">
        <div className="text-reveal-inner">
          <h2
            className="text-3xl lg:text-4xl font-bold text-center mb-4"
            data-testid="contact-heading"
          >
            Let's Work Together
          </h2>
          <p
            className="text-xl text-portfolio-secondary text-center max-w-2xl mx-auto"
            data-testid="contact-description"
          >
            Ready to bring your ideas to life? Let's discuss your next project and
            create something amazing together.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        whileHover={{ rotateX: 5, rotateY: 5, z: 20 }}
        className="card-3d glass rounded-3xl p-8 lg:p-12 max-w-2xl mx-auto"
        data-testid="contact-card"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
{/* Email */}
<motion.div
  whileHover={{ scale: 1.05 }}
  className="text-center"
  data-testid="contact-email"
>
  <a
    href="mailto:chaitanya.24085@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6 }}
      className="w-16 h-16 flex items-center justify-center mx-auto mb-4 cursor-pointer"
    >
      <img
        src={`${import.meta.env.BASE_URL}my_images/maillogo.png`}
        alt="Email"
        className="w-16 h-16 rounded-2xl"
      />
    </motion.div>
  </a>
  <h3 className="font-bold mb-2">Email me?</h3>
  <p className="text-portfolio-secondary">
    <a
      href="mailto:chaitanya.24085@gmail.com"
      className="hover:underline"
    >
      chaitanya.24085@gmail.com
    </a>
  </p>
</motion.div>


          {/* WhatsApp */}
<motion.div
  whileHover={{ scale: 1.05 }}
  className="text-center"
  data-testid="contact-phone"
>
  <a
    href="https://wa.me/918919255311"
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6 }}
      className="w-16 h-16 flex items-center justify-center mx-auto mb-4 cursor-pointer"
    >
      <img
        src={`${import.meta.env.BASE_URL}my_images/whatsapplogo.png`} alt="WhatsApp"
        className="w-16 h-16 rounded-2xl"
      />
    </motion.div>
  </a>
  <h3 className="font-bold mb-2">WhatsApp?</h3>
  <p className="text-portfolio-secondary">
    <a
      href="https://wa.me/918919255311"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      +91 8919255311
    </a>
  </p>
</motion.div>

        </div>

        {/* CTA Button → opens email */}
        <div className="text-center">
          <a
            href="mailto:chaitanya.24085@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="btn-enhanced ripple bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-4 px-8 rounded-xl font-semibold text-lg"
              data-testid="button-start-project"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Contact right now? Click to email me...
            </Button>
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
