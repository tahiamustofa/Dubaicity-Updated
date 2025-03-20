import React from "react";
import Whatsapp from '../../assets/img/Group 496.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialIcons = [
        { name: 'instagram', icon: '/src/assets/img/Group 1.png' },
        { name: 'facebook', icon: '/src/assets/img/Group 2.png' },
        { name: 'tiktok', icon: '/src/assets/img/Group 3.png' },
        { name: 'twitter', icon: '/src/assets/img/Group 4.png' }
    ];
    
    const navigation = {
      explore: {
        title: "Explore",
        links: [
          { name: "Destinations", href: "#" },
          { name: "Attractions", href: "#" },
          { name: "Experiences", href: "#" },
          { name: "Travel Tips", href: "#" },
        ]
      },
      about: {
        title: "About Us",
        links: [
          { name: "Our Story", href: "#" },
          { name: "Mission & Vision", href: "#" },
          { name: "Team", href: "#" },
          { name: "Testimonials", href: "#" },
        ]
      },
      support: {
        title: "Customer Support",
        links: [
          { name: "Contact Us", href: "#" },
          { name: "FAQ", href: "#" },
          { name: "Terms & Conditions", href: "#" },
          { name: "Privacy Policy", href: "#" },
        ]
      },
      connect: {
        title: "Stay Connected",
        links: [
          { name: "Newsletter Signup", href: "#" },
          { name: "Blog", href: "#" },
          { name: "Reviews", href: "#" },
          { name: "Special Offers", href: "#" },
          { name: "Partner Programs", href: "#" },
        ]
      }
    };
  
    return (
      <footer className="bg-white relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Let's get started on something great</h2>
            <p className="text-gray-600">
              Embark on Unforgettable Journeys with Our Travel and Tourism Experts
            </p>
          </div>
  
          {/* Navigation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {Object.values(navigation).map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-600 hover:text-primary">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 mb-12">
          <button 
    onClick={() => window.open("https://wa.me/971581425513", "_blank")}
    className="relative flex items-center gap-2 px-6 py-2 font-medium text-white bg-green-500 rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden group hover:scale-105 hover:shadow-2xl"
> 
    {/* Expanding Background Effect */}
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400 to-green-700 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>

    {/* Floating Effect */}
    <span className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-500 ease-in-out"></span>

    {/* WhatsApp Icon */}
    <img src={Whatsapp} alt="WhatsApp icon" className="w-5 h-5 relative z-10 transition-transform duration-300 ease-out group-hover:scale-110" />

    {/* Text with Soft Color Transition */}
    <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:text-white">
        Chat Now
    </span>
</button>


            <button className="relative inline-flex items-center justify-center px-6 py-3 font-medium transition-all bg-[#DC893F] rounded-lg overflow-hidden group shadow-lg hover:shadow-xl">
    {/* Animated Background */}
    <span className="absolute inset-0 bg-gradient-to-r from-[#4BC45C] to-[#FF8800] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>

    {/* Text with Smooth Transition */}
    <span className="relative text-white transition-colors duration-300 ease-in-out group-hover:text-black">
        Get Started
    </span>
</button>
          </div>
  
          {/* Social Links */}
          {/* <div className="flex justify-center gap-6 mb-8">
            {['instagram', 'facebook', 'tiktok', 'twitter'].map((platform) => (
              <a
                key={platform}
                href={`#${platform}`}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >

                <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
              </a>
            ))}
          </div> */}
            <div className="flex justify-center gap-6 mb-8">
            {socialIcons.map((social) => (
                <a
                    key={social.name}
                    href={`#${social.name}`}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                    <img 
                        src={social.icon} 
                        alt={social.name} 
                        className="w-5 h-5 object-contain"
                    />
                </a>
            ))}
        </div>
  
          {/* Copyright */}
          <div className="text-center text-gray-600">
            <p>© {currentYear} Ambition Travel & Tourism UI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;