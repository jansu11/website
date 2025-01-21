import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { 
  Home,
  FolderKanban,
  Code2,
  Briefcase,
  Mail,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navigation = [
    { 
      name: 'Home', 
      href: '/', 
      icon: Home,
      tooltip: 'Home'
    },
    { 
      name: 'Projects', 
      href: '/projects', 
      icon: FolderKanban,
      tooltip: 'Projects'
    },
    { 
      name: 'Skills', 
      href: '/skills', 
      icon: Code2,
      tooltip: 'Skills'
    },
    { 
      name: 'Experience', 
      href: '/experience', 
      icon: Briefcase,
      tooltip: 'Experience'
    },
    { 
      name: 'Contact', 
      href: '/contact', 
      icon: Mail,
      tooltip: 'Contact'
    },
  ];


  return (
    <nav className="dark:fixed top-0 left-0 right-0 py-5   backdrop-blur-xl shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around align-middle h-20">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold dark:text-btgold-dark text-accent-light">
              SUJAN BOHORA
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group relative p-3 rounded-lg dark:text-secondary-dark   transition-all duration-300"
                >
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-150 " />
                  
                  {/* Tooltip */}
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900  text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {item.tooltip}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-accent-light dark:text-gray-300 hover:bg-gray-700 hover:text-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 dark:text-secondary-dark text-accent-light hover:bg-gray-800 
                  hover:text-gray-300 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 " 
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;