import React from 'react';
import { FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section data-aos="fade-up" data-aos-delay="250" id="contact" className="py-20 px-4 bg-gradient-to-b">
      <div className="max-w-lg mx-auto relative">
        {/* Header with subtle animation */}
        <div className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-2">
            Get In <span className='text-yellow-500'>Touch</span> </h2>
        </div>
        {/* Contact Form */}
       
          <form className="space-y-6 bg-gray-200/85 p-8 rounded-xl shadow-md border border-gray-100">
            {/* Name Field */}
            <motion.div whileHover={{ scale: 1.01 }}>
              <label className="block text-gray-700 mb-2">Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2
                   focus:ring-red-400 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div whileHover={{ scale: 1.01 }}>
              <label className="block text-gray-700 mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-400" />
                </div>
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2
                   focus:ring-red-400 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </motion.div>

            {/* Message Field */}
            <motion.div whileHover={{ scale: 1.01 }}>
              <label className="block text-gray-700 mb-2">Message</label>
              <div className="relative">
                <div className="absolute top-3 left-3">
                  <FiMessageSquare className="text-gray-400" />
                </div>
                <textarea
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2
                   focus:ring-red-400 focus:border-transparent"
                  rows="4"
                  placeholder="Write your message"
                ></textarea>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 bg-yellow-500 text-white rounded-lg font-medium
               hover:bg-yellow-400 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </div>

        {/* Alternative Contact */}
        <div className="mt-8 text-center text-white">
          <p>Or email me directly at: <span className="text-white-950 font-bold">Giginacleetus@gmail.com</span></p>
        </div>
    </section>
  );
};

export default Contact;
