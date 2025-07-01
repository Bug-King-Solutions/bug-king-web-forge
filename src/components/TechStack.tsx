import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const techCategories = [
  {
    category: "Frontend",
    technologies: ["React", "Flutter"],
    color: "bg-tech-yellow/10 text-tech-black border-tech-yellow/20"
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "PHP", "Laravel", "Python"],
    color: "bg-tech-black/10 text-tech-black border-tech-black/20"
  },
  {
    category: "Cloud & DevOps",
    technologies: ["AWS", "Firebase"],
    color: "bg-tech-yellow/10 text-tech-black border-tech-yellow/20"
  },
  {
    category: "Mobile",
    technologies: ["Flutter", "Kotlin"],
    color: "bg-tech-black/10 text-tech-black border-tech-black/20"
  },
  {
    category: "Systems",
    technologies: ["C++", "Python"],
    color: "bg-tech-yellow/10 text-tech-black border-tech-yellow/20"
  }
];

const TechStack = () => {
  return (
    <section className="py-20 bg-tech-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-tech-yellow">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {techCategories.map((category, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm hover-lift">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-tech-black">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      className={`${category.color} font-medium px-3 py-1`}
                      variant="outline"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg">
            And many more technologies to meet your specific needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;