import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Globe, 
  Smartphone, 
  Code, 
  Palette, 
  Users, 
  Cog, 
  Monitor, 
  Wifi,
  Bot,
  Cpu,
  Heart,
  Lightbulb,
  Shield,
  Briefcase,
  GraduationCap,
  Home,
  Wrench,
  TrendingUp,
  MessageCircle,
  Zap
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Engineering",
    description: "Custom software development with modern technologies and best practices",
    features: ["Full-stack development", "API integration", "Database design", "Cloud deployment"],
    color: "tech-yellow"
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store deployment"],
    color: "tech-blue"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates exceptional digital experiences",
    features: ["User research", "Prototyping", "Visual design", "Usability testing"],
    color: "tech-purple"
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Responsive websites and web applications that drive business growth",
    features: ["React/Next.js", "E-commerce platforms", "CMS solutions", "SEO optimization"],
    color: "tech-green"
  },
  {
    icon: Briefcase,
    title: "Business Solutions",
    description: "Process optimization and workflow improvements for better efficiency",
    features: ["Process automation", "Workflow design", "System integration", "Performance tracking"],
    color: "tech-orange"
  },
  {
    icon: Heart,
    title: "Personal Development",
    description: "Life coaching and personal growth solutions tailored to your needs",
    features: ["Goal setting", "Habit building", "Mindset coaching", "Progress tracking"],
    color: "tech-pink"
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    description: "Learning solutions and skill development programs",
    features: ["Custom curricula", "Online courses", "Workshops", "Certification programs"],
    color: "tech-blue"
  },
  {
    icon: Home,
    title: "Home & Lifestyle",
    description: "Solutions for everyday home and lifestyle challenges",
    features: ["Home automation", "Organization systems", "Lifestyle optimization", "Smart solutions"],
    color: "tech-green"
  },
  {
    icon: Shield,
    title: "Support & Maintenance",
    description: "24/7 support and ongoing maintenance for all your solutions",
    features: ["Technical support", "System monitoring", "Regular updates", "Emergency response"],
    color: "tech-yellow"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 surface-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Problems We <span className="problem-solving-glow bg-clip-text text-transparent">Solve</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our Bug Kings are masters across multiple domains, ready to tackle any challenge life throws your way
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colorClass = service.color;
            return (
              <Card key={index} className="group hover-lift surface-gradient border-border/50 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-3 bg-${colorClass}/10 rounded-xl group-hover:bg-${colorClass}/20 transition-colors`}>
                      <IconComponent className={`h-6 w-6 text-${colorClass}`} />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 bg-${colorClass} rounded-full mr-3 flex-shrink-0`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;