import React from 'react';
import { FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const Contact = () => {

  const [result, setResult] = React.useState("");
  
      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        // Enter your Web3Forms Access Key below
        formData.append("access_key", "416af221-9419-48fa-baab-7344a67822ed");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("");
          toast.success("Message Sent",{
            position: 'top-center',
            theme: 'dark',
          });
          event.target.reset();
        } else {
          console.log("Error", data);
          toast.error(data.message)
          setResult("");
        }
      };

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
       
          <form onSubmit={onSubmit} className="space-y-6 bg-gray-200/85 p-8 rounded-xl shadow-md border border-gray-100">
            {/* Name Field */}
            <motion.div whileHover={{ scale: 1.01 }}>
              <label className="block text-gray-700 mb-2">Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-400" />
                </div>
                <input
                  type="text" name="Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2
                   focus:ring-red-400 focus:border-transparent"
                  placeholder="Enter your name" required
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
                  type="email" name="Email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2
                   focus:ring-red-400 focus:border-transparent"
                  placeholder="Enter your email" required
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
                <textarea name="Message"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2
                   focus:ring-red-400 focus:border-transparent"
                  rows="4"
                  placeholder="Write your message" required
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
               {result ? result : "Send Message"}
            </motion.button>
          </form>
        </div>

        {/* Alternative Contact */}
        <div className="mt-8 text-center text-white">
          <p>Or email me directly at: <span className="text-white-950 font-bold">Giginacleetus18@gmail.com</span></p>
        </div>
    </section>
  );
};

export default Contact;
