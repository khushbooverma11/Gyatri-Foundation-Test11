import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">Gyatri Foundation</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Empowering students to achieve academic excellence through quality education, 
              dedicated faculty, and proven teaching methodologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-background/80 hover:text-background transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="text-background/80 hover:text-background transition-colors duration-300">
                  Courses
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold mb-4">Our Courses</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-background/80">Class 6-8 Foundation</li>
              <li className="text-background/80">Class 9-10 Advanced</li>
              <li className="text-background/80">JNV Entrance Preparation</li>
              <li className="text-background/80">Individual Coaching</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-background/80 mt-0.5 flex-shrink-0" />
                <span className="text-background/80">
                  123 Education Street, Knowledge Colony, City Center
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-background/80 flex-shrink-0" />
                <span className="text-background/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-background/80 flex-shrink-0" />
                <span className="text-background/80">info@gyatrifoundation.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/80 text-sm">
              © 2024 Gyatri Foundation. All rights reserved.
            </p>
            <p className="text-background/80 text-sm">
              Designed with ❤️ for education excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;