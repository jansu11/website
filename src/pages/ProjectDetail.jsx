import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import ModernButton from "../components/Button/ModernButton";

const ProjectDetail = () => {
  const [projects, setProjects] = useState([]);
  const { id } = useParams();
  const pid = Number(id);
  const navigate = useNavigate();

  // Fetch project data
  useEffect(() => {
    window.scrollTo(0,0)
    fetch("/projectdetail.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching project data:", error));
  }, []);

  const project = projects.find((pro) => pro.id === pid);

  if (!project) {
    return <div className="p-6 text-red-500">Project not found</div>;
  }

  const handleRequest = (message) => {
    navigate("/contact", { state: { message } });
  };

  return (
    <div className="dark:bg-primary-dark bg-secondary-light max-w-full">
      {/* Title Section */}
      <ScrollElement
        index={0}
        content={
          <div className="px-4">
            <h1 className="mb-6 w-full text-4xl md:text-6xl font-bold dark:text-white text-gray-800 text-center">
              {project.title}
            </h1>
            <div>
              <p className="w-3/4 mx-auto text-lg md:text-2xl dark:text-gray-300 text-gray-800 text-justify md:text-left">
                {project.description}
              </p>

            </div>
            <div className="flex  md:w-3/4 justify-center md:mx-auto items-center sm:gap-4 mt-8 md:gap-6 sm:text-sm">
              <ModernButton
                text="Visit GitHub Link"
                onClick={() => window.open(project.githubLink, "_blank")}
                visible={true}
              />
              <ModernButton
                text="Request Data"
                onClick={() => handleRequest(`Please send me data of ${project.title}`)}
                visible={!!project.request}
              />
              <ModernButton
                text="Request Project Documentation"
                onClick={() =>
                  handleRequest(
                    `Please send me the project documentation for ${project.title}.`
                  )
                }
                visible={!!project.request}
              />
              <ModernButton
                text="visit website"
                onClick={() =>
                  window.open(project.visit)
                }
                visible={!!project.visit}
              />
            </div>
          </div>
        }
      />

      {/* Project Overview Section */}

      {/* Features Section */}
      {project.features.map((feature, index) => (
        <ScrollElement
          key={feature.title}
          index={index + 2}
          content={
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10 px-4">
              <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={feature.imagedark}
                  alt={feature.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl md:text-3xl font-bold mb-4 text-center md:text-left dark:text-subheader-dark text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-base md:text-lg dark:text-smokewhite-light text-gray-800 text-justify md:text-left md:pr-16">
                  {feature.description}
                </p>
              </div>
            </div>
          }
        />
      ))}

      <div className="fixed bottom-[5vh] right-[5vw]">
        <Link
          to="/projects"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

// ScrollElement component for handling scroll-triggered animations
const ScrollElement = ({ index, content }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }} // Start hidden and below the viewport
      animate={{
        opacity: inView ? 1 : 0, // Fade in when in view
        y: inView ? 0 : 100, // Move up when in view
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1, // Stagger the appearance
      }}
      className="min-h-[80vh] flex justify-center items-center dark:bg-primary-dark bg-gray-50 shadow-md rounded-lg px-4 py-8 mb-8"
    >
      {content}
    </motion.div>
  );
};

export default ProjectDetail;
