import React, { useState } from 'react';
import TechLogo from '../components/TechLogo';
import {useLocation} from "react-router-dom"

const Contact = () => {
  const location = useLocation();
  const message = location.state?.message || "";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: message,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-primary-dark flex items-center justify-center p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          {/* Contact Information Section */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 dark:from-gray-900 dark:to-button-dark p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className=" uppercase text-3xl  text-subheader-dark font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-200 mb-8">
                Have a project in mind? 
                <p>

                Lets work together to bring the idea to life.
                </p>
              </p>
            </div>

            <div>
              <div className="flex items-center mb-8">
                <TechLogo  className= 'text-gray-100 h-8 w-8' name={'Email'}></TechLogo>

                <a
                  href="mailto:bohorasujan3@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20there,%20I%20would%20like%20to%20connect%20with%20you." 
                  className="hover:text-gray-300 dark:text-header-dark transition-colors"
                  aria-label="Email"
                >

                <span 
                
                className='ml-4'>
                bohorasujan3@gmail.com</span>
                </a>
              </div>
              <div className="flex items-center mb-8">
                <TechLogo className= 'text-gray-100 h-8 w-8' name={'Phone'}></TechLogo>
                <span className='ml-4'>+977 9800817476</span>
              </div>
              <div className="flex items-center mb-8">
                <TechLogo  className= 'text-gray-100 h-8 w-8' name={'Mappin'}></TechLogo>
                <span className='ml-4'>Imadole, Lalitpur, Nepal</span>
              </div>

              <div className="flex space-x-4">
                <a 
                  href="https://github.com/jansu11" 
                  className="hover:text-gray-300 dark:text-header-dark transition-colors"
                  aria-label="GitHub Profile"
                >
                    <TechLogo className='h-8 w-8 hover:scale-150 transition-all duration-300' name={'GitHub'}></TechLogo>
                </a>
                <a 
                  href="https://www.linkedin.com/in/bohorasujan/" 
                  className="hover:text-gray-300  dark:text-header-dark transition-colors "
                  aria-label="LinkedIn Profile"
                >
                    <TechLogo className='h-8 w-8 hover:scale-150 transition-all duration-300' name='LinkedIn'></TechLogo>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 dark:to-blue-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;