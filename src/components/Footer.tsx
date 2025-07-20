import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tech-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Bug King <span className="text-tech-yellow">Solutions</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your premier tech partner for software engineering, web development, 
              mobile applications, and digital transformation solutions.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-tech-yellow hover:bg-white/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-tech-yellow hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-tech-yellow hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-tech-yellow hover:bg-white/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-tech-yellow">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">Software Engineering</li>
              <li className="hover:text-white cursor-pointer transition-colors">Web Development</li>
              <li className="hover:text-white cursor-pointer transition-colors">Mobile Apps</li>
              <li className="hover:text-white cursor-pointer transition-colors">UI/UX Design</li>
              <li className="hover:text-white cursor-pointer transition-colors">Tech Consultation</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-tech-yellow">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>kareem@bugkingsolutions.com</li>
              <li>+234 (xxx) xxx-xxxx</li>
              <li>Netaccess Communications Limited</li>
              <li>Suite 1, 3rd Floor Taen Building</li>
              <li>Old Airport Junction, Jos</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 Bug King Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;