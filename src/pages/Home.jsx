import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Data Engineer & Developer
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Building scalable data solutions and transforming raw data into actionable insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Python & Data Processing</li>
            <li>• SQL & Database Design</li>
            <li>• ETL Pipeline Development</li>
            <li>• React & Web Development</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• ETL Data Pipeline</li>
            <li>• React Dashboard</li>
            <li>• Data Quality Framework</li>
            <li>• API Integration Project</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;