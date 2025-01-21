const Footer = () => {
    return (
      <footer className="bg-white dark:bg-primary  shadow-lg   backdrop-blur-xl border-t border-btgold rounded-lg ">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-secondary dark:text-gray-300">
              © 2024 Sujan Bohora. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0 text-secondary">
              <a
                href="https://github.com/yourusername"
                className="text-secondary dark:text-gray-300 hover:text-gray-100 dark:hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="text-secondary dark:text-gray-300 hover:text-gray-100 dark:hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;