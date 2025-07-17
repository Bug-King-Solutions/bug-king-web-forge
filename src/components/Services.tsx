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
  Cpu
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Engineering",
    description: "Custom software development with modern technologies and best practices",
    features: ["Full-stack development", "API integration", "Database design", "Cloud deployment"]
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Responsive websites and web applications that drive business growth",
    features: ["React/Next.js", "E-commerce platforms", "CMS solutions", "SEO optimization"]
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store deployment"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates exceptional digital experiences",
    features: ["User research", "Prototyping", "Visual design", "Usability testing"]
  },
  {
    icon: Bot,
    title: "Robotics",
    description: "Advanced robotics solutions for automation and intelligent systems",
    features: ["Robot development", "Automation systems", "AI integration", "Custom robotics"]
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description: "Internet of Things solutions for smart connectivity and data collection",
    features: ["IoT device development", "Sensor networks", "Data analytics", "Smart systems"]
  },
  {
    icon: Users,
    title: "Tech Consultation",
    description: "Strategic technology guidance to accelerate your digital transformation",
    features: ["Technology audits", "Architecture planning", "Team training", "Process optimization"]
  },
  {
    icon: Cog,
    title: "Solution Deployment",
    description: "End-to-end deployment and maintenance of your technology solutions",
    features: ["Cloud migration", "DevOps setup", "Security implementation", "Performance monitoring"]
  },
  {
    icon: Monitor,
    title: "IT Equipment",
    description: "Purchase and installation of cutting-edge IT gadgets and hardware",
    features: ["Hardware procurement", "Setup & configuration", "Maintenance support", "Upgrade planning"]
  },
  {
    icon: Wifi,
    title: "Networking & Internet",
    description: "Reliable networking solutions and internet services for your business",
    features: ["Network design", "Internet setup", "Security configuration", "24/7 support"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            What We <span className="text-tech-yellow">Deliver</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover-lift bg-card border-border/50 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-tech-yellow/10 rounded-xl group-hover:bg-tech-yellow/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-tech-yellow" />
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
                        <div className="w-1.5 h-1.5 bg-tech-yellow rounded-full mr-3 flex-shrink-0" />
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