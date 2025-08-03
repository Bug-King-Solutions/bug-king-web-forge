import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Project } from "@/types/database";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      // TODO: Replace with actual Supabase query
      // const { data, error } = await supabase
      //   .from('projects')
      //   .select('*')
      //   .order('completion_date', { ascending: false });
      
      // Mock data for now
      const mockProjects: Project[] = [
        {
          id: "1",
          title: "E-commerce Platform Revolution",
          description: "Complete digital transformation for a retail client, including custom e-commerce platform, inventory management, and customer analytics dashboard.",
          image_url: "/api/placeholder/400/300",
          category: "Web Development",
          technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
          client_name: "RetailCorp Inc.",
          completion_date: "2024-01-15",
          project_url: "https://example.com",
          featured: true,
          created_at: "2024-01-01",
          updated_at: "2024-01-15"
        },
        {
          id: "2",
          title: "Personal Finance Optimization",
          description: "Comprehensive financial planning and investment strategy that helped a client achieve 40% portfolio growth and debt reduction.",
          image_url: "/api/placeholder/400/300",
          category: "Financial Consulting",
          technologies: ["Financial Analysis", "Investment Strategy", "Risk Management"],
          client_name: "John Smith",
          completion_date: "2024-02-20",
          featured: true,
          created_at: "2024-02-01",
          updated_at: "2024-02-20"
        },
        {
          id: "3",
          title: "Mobile App for Healthcare",
          description: "Cross-platform mobile application for patient management and telemedicine consultations with real-time video calling.",
          image_url: "/api/placeholder/400/300",
          category: "Mobile Development",
          technologies: ["React Native", "WebRTC", "Firebase", "Healthcare APIs"],
          client_name: "HealthTech Solutions",
          completion_date: "2024-03-10",
          featured: false,
          created_at: "2024-03-01",
          updated_at: "2024-03-10"
        }
      ];
      
      setProjects(mockProjects);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setLoading(false);
    }
  };

  const categories = ["all", ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-48 w-full mb-4" />
                  <Skeleton className="h-3 w-full mb-2" />
                  <Skeleton className="h-3 w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Our <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the innovative solutions we've crafted across technology, business, and life optimization
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.client_name} • {new Date(project.completion_date).toLocaleDateString()}
                    </p>
                  </div>
                  {project.featured && (
                    <Badge variant="secondary">Featured</Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={project.image_url} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
                
                {project.project_url && (
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={project.project_url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found for the selected category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;