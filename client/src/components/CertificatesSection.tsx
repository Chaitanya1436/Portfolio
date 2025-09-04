import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CertificatesSection = () => {
  const [visibleCertificates, setVisibleCertificates] = useState(4);

  const certificates = [
    {
      id: 1,
      title: "AWS Cloud Architecting Certified",
      description: "Got certified in AWS cloud architecting",
      image: "/Portfolio/my_images/AWS_Academy_Cloud_Architecting_certificate.png",
      link: "https://www.linkedin.com/in/chaitanya-gangupalli",
    },
    {
      id: 2,
      title: "Microsoft Azure Fundamentals Certified",
      description: "Achieved Google Cloud certification",
      image: "/Portfolio/my_images/Microsoft_Azure_AI_Fundamentals_Certificate.png",
      link: "https://www.linkedin.com/in/chaitanya-gangupalli",
    },
    {
      id: 3,
      title: "AWS Cloud Foundations Certified",
      description: "Certified in Azure cloud services",
      image: "/Portfolio/my_images/AWS_Academy_Cloud_Foundations_Certificate.png",
      link: "https://www.linkedin.com/in/chaitanya-gangupalli",
    },
    {
      id: 4,
      title: "LeetCode 100Days Streak Badge",
      description: "",
      image: "/Portfolio/my_images/Leetcode_100days_badge_noram.png",
      link: "https://www.linkedin.com/in/chaitanya-gangupalli",
    },
    {
      id: 5,
      title: "GFG 28th Rank in college",
      description: "",
      image: "/Portfolio/my_images/GFG 28th rank in VIT.png",
      link: "https://www.linkedin.com/in/chaitanya-gangupalli",
    },
    {
      id: 6,
      title: "LeetCode never bored once..",
      description: "",
      image: "/Portfolio/my_images/Leetcode_50days_badge_ss.png",
      link: "https://www.linkedin.com/in/chaitanya-gangupalli",
    },
    {
      id: 7,
      title: "Got 87% in MicroSoft Azure Test",
      description: "",
      image: "/Portfolio/my_images/Microsoft_Azure_Marks.png",
      link: "https://www.linkedin.com/in/chaitanya-gangupalli",
    },
    {
      id: 8,
      title: "I'm a University Volleyball player",
      description: "",
      image: "/Portfolio/my_images/Tropy_from_Gitam.jpeg",
      link: "https://www.linkedin.com/in/chaitanya-gangupalli",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="certificates-section mt-8"
      data-testid="certificates-section"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <h3
          className="text-xl font-bold flex items-center gap-3 text-portfolio-text-primary"
          data-testid="certificates-heading"
        >
          <Award className="text-portfolio-accent w-5 h-5" />
          Certificates
        </h3>
      </motion.div>

      <div className="certificates-grid">
        {certificates.slice(0, visibleCertificates).map((cert) => (
          <motion.div
            key={cert.id}
            variants={itemVariants}
            className="certificate-card card-3d-hover skill-item-new"
            data-testid={`certificate-card-${cert.id}`}
          >
            <div
              className="certificate-image"
              data-testid={`certificate-image-${cert.id}`}
            >
              {cert.image ? (
                <img src={cert.image} alt={cert.title} />
              ) : (
                <Award className="w-8 h-8 text-portfolio-accent" />
              )}
            </div>

            <div className="certificate-footer">
              <h4
                className="certificate-title"
                data-testid={`certificate-title-${cert.id}`}
              >
                {cert.title}
              </h4>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`certificate-link-${cert.id}`}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="certificate-view-button btn-enhanced text-portfolio-accent hover:text-white transition-colors text-xs"
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  View
                </Button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {visibleCertificates < certificates.length && (
        <div className="text-center mt-6">
          <Button
            onClick={() =>
              setVisibleCertificates((prev) =>
                Math.min(prev + 4, certificates.length)
              )
            }
            className="btn-enhanced bg-portfolio-accent hover:bg-portfolio-accent-bright text-white px-6 py-2 rounded-full transition-all duration-300"
            data-testid="load-more-certificates-button"
          >
            Load More Certificates ({certificates.length - visibleCertificates}{" "}
            remaining)
          </Button>
        </div>
      )}
    </motion.section>
  );
};

export default CertificatesSection;
