import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Smartphone, Palette, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-6 py-12">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-20">
          <div className="text-2xl font-bold text-foreground">
            Bug King <span className="text-tech-yellow">Solutions</span>
          </div>
          <Button 
            variant="outline" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </Button>
        </nav>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-tech-yellow/10 rounded-full text-sm font-medium text-tech-yellow">
                🚀 Premium Tech Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Transform Your 
                <span className="text-tech-yellow block">Digital Vision</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                We craft exceptional software solutions, mobile apps, and digital experiences 
                that drive business growth and innovation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Quote
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 hover-lift bg-card border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-tech-yellow/10 rounded-lg">
                  <Code className="h-6 w-6 text-tech-yellow" />
                </div>
                <h3 className="font-semibold text-foreground">Software Engineering</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Custom software solutions built with modern technologies
              </p>
            </Card>
            
            <Card className="p-6 hover-lift bg-card border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-tech-yellow/10 rounded-lg">
                  <Smartphone className="h-6 w-6 text-tech-yellow" />
                </div>
                <h3 className="font-semibold text-foreground">Mobile Apps</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Native and cross-platform mobile applications
              </p>
            </Card>
            
            <Card className="p-6 hover-lift bg-card border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-tech-yellow/10 rounded-lg">
                  <Palette className="h-6 w-6 text-tech-yellow" />
                </div>
                <h3 className="font-semibold text-foreground">UI/UX Design</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Beautiful, user-centered design experiences
              </p>
            </Card>
            
            <Card className="p-6 hover-lift bg-card border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-tech-yellow/10 rounded-lg">
                  <Users className="h-6 w-6 text-tech-yellow" />
                </div>
                <h3 className="font-semibold text-foreground">Consultation</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Strategic technology guidance for your business
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;