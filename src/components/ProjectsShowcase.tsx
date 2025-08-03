import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsShowcase = () => {
  const featuredProjects = [
    {
      title: "E-commerce Platform Revolution",
      description: "Complete digital transformation for a retail client, including custom e-commerce platform and analytics dashboard.",
      category: "Web Development",
      technologies: ["React", "Node.js", "AWS"],
      image: "/api/placeholder/400/250"
    },
    {
      title: "Personal Finance Optimization",
      description: "Comprehensive financial planning that helped achieve 40% portfolio growth and complete debt reduction.",
      category: "Life Consulting",
      technologies: ["Financial Strategy", "Investment Planning"],
      image: "/api/placeholder/400/250"
    },
    {
      title: "Healthcare Mobile App",
      description: "Cross-platform mobile application for patient management and telemedicine consultations.",
      category: "Mobile Development",
      technologies: ["React Native", "Healthcare APIs"],
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we've transformed businesses and lives across technology, finance, and personal development
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 2} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;