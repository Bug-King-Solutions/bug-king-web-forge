import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Crown, Lightbulb, Target, Zap, Heart, Shield } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient">
      <div className="container mx-auto px-6 py-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-20">
          <div className="text-2xl font-bold text-foreground">
            <Crown className="inline-block mr-2 h-6 w-6 text-tech-yellow" />
            Bug King <span className="problem-solving-glow bg-clip-text text-transparent">Solutions</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button 
              variant="outline" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Help
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 surface-gradient rounded-full text-sm font-medium text-tech-yellow border border-tech-yellow/20">
                <Crown className="mr-2 h-4 w-4" />
                Problem-Solving Experts
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                We Are The
                <span className="problem-solving-glow bg-clip-text text-transparent block">Bug Kings</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                From technology challenges to life's everyday problems, our Bug Kings are 
                masters at finding solutions across all aspects of life. We don't just fix bugs - 
                we solve problems that matter.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group tech-shadow"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Zap className="mr-2 h-5 w-5" />
                See Our Solutions
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Heart className="mr-2 h-5 w-5" />
                Get Help Now
              </Button>
            </div>
          </div>

          {/* Right Column - Problem-Solving Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 hover-lift surface-gradient border-border/50 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-tech-yellow/10 rounded-xl group-hover:bg-tech-yellow/20 transition-colors">
                  <Lightbulb className="h-6 w-6 text-tech-yellow" />
                </div>
                <h3 className="font-semibold text-foreground">Technology</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Software bugs, system issues, and digital challenges solved by our tech experts
              </p>
            </Card>
            
            <Card className="p-6 hover-lift surface-gradient border-border/50 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-tech-green/10 rounded-xl group-hover:bg-tech-green/20 transition-colors">
                  <Target className="h-6 w-6 text-tech-green" />
                </div>
                <h3 className="font-semibold text-foreground">Business</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Process optimization, workflow improvements, and operational solutions
              </p>
            </Card>
            
            <Card className="p-6 hover-lift surface-gradient border-border/50 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-tech-purple/10 rounded-xl group-hover:bg-tech-purple/20 transition-colors">
                  <Heart className="h-6 w-6 text-tech-purple" />
                </div>
                <h3 className="font-semibold text-foreground">Personal</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Life coaching, personal development, and everyday problem-solving
              </p>
            </Card>
            
            <Card className="p-6 hover-lift surface-gradient border-border/50 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-tech-blue/10 rounded-xl group-hover:bg-tech-blue/20 transition-colors">
                  <Shield className="h-6 w-6 text-tech-blue" />
                </div>
                <h3 className="font-semibold text-foreground">Support</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                24/7 assistance and ongoing support for all your needs
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;