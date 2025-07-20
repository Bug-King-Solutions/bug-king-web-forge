import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Import tech logos
import reactLogo from "@/assets/logos/react.svg";
import flutterLogo from "@/assets/logos/flutter.svg";
import nodeLogo from "@/assets/logos/nodejs.svg";
import expressLogo from "@/assets/logos/express.svg";
import phpLogo from "@/assets/logos/php.svg";
import laravelLogo from "@/assets/logos/laravel.svg";
import pythonLogo from "@/assets/logos/python.svg";
import awsLogo from "@/assets/logos/aws.svg";
import firebaseLogo from "@/assets/logos/firebase.svg";
import kotlinLogo from "@/assets/logos/kotlin.svg";
import cppLogo from "@/assets/logos/cpp.svg";

const techCategories = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", logo: reactLogo },
      { name: "Flutter", logo: flutterLogo }
    ],
    color: "bg-tech-yellow/10 text-tech-black border-tech-yellow/20"
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", logo: nodeLogo },
      { name: "Express", logo: expressLogo },
      { name: "PHP", logo: phpLogo },
      { name: "Laravel", logo: laravelLogo },
      { name: "Python", logo: pythonLogo }
    ],
    color: "bg-tech-black/10 text-tech-black border-tech-black/20"
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "AWS", logo: awsLogo },
      { name: "Firebase", logo: firebaseLogo }
    ],
    color: "bg-tech-yellow/10 text-tech-black border-tech-yellow/20"
  },
  {
    category: "Mobile",
    technologies: [
      { name: "Flutter", logo: flutterLogo },
      { name: "Kotlin", logo: kotlinLogo }
    ],
    color: "bg-tech-black/10 text-tech-black border-tech-black/20"
  },
  {
    category: "Systems",
    technologies: [
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo }
    ],
    color: "bg-tech-yellow/10 text-tech-black border-tech-yellow/20"
  }
];

const TechStack = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage cutting-edge technologies across all domains to solve your problems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {techCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="relative p-6 rounded-xl border border-border/20 bg-card/5 backdrop-blur-sm hover:bg-card/10 transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-foreground mb-6 text-center">
                    {category.category}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.technologies.map((tech, techIndex) => (
                      <div 
                        key={techIndex} 
                        className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/10 hover:border-primary/20 transition-all duration-200 group/tech"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover/tech:scale-110 transition-transform duration-200">
                          <img 
                            src={tech.logo} 
                            alt={`${tech.name} logo`} 
                            className="w-5 h-5 object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium text-foreground group-hover/tech:text-primary transition-colors duration-200">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-border/20">
            <span className="text-muted-foreground">
              And many more technologies to meet your specific needs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;