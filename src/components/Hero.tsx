import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Palette } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-in fade-in duration-700">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Bug King
            <span className="text-tech-yellow"> Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Your premier tech partner for software engineering, web development, 
            mobile applications, and digital transformation solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="default" 
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Work
            </Button>
          </div>
          
          {/* Service Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover-lift">
              <Code className="h-12 w-12 text-tech-yellow mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Software Engineering</h3>
              <p className="text-gray-300 text-center">Custom software solutions built with cutting-edge technologies</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover-lift">
              <Smartphone className="h-12 w-12 text-tech-yellow mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Mobile Apps</h3>
              <p className="text-gray-300 text-center">Native and cross-platform mobile applications</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover-lift">
              <Palette className="h-12 w-12 text-tech-yellow mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">UI/UX Design</h3>
              <p className="text-gray-300 text-center">Beautiful, user-centered design experiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;