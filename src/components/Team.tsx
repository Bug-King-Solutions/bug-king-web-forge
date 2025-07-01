import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Mail } from "lucide-react";

const team = [
  {
    name: "Alex Johnson",
    role: "Lead Software Engineer",
    bio: "Full-stack developer with 8+ years of experience in React, Node.js, and cloud technologies.",
    skills: ["React", "Node.js", "AWS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Design Lead",
    bio: "Creative designer passionate about crafting intuitive user experiences and beautiful interfaces.",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Michael Rodriguez",
    role: "Mobile App Developer",
    bio: "Specialist in React Native and Flutter with a track record of successful app store launches.",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Emily Thompson",
    role: "DevOps Engineer",
    bio: "Infrastructure expert ensuring scalable, secure, and reliable deployment pipelines.",
    skills: ["Docker", "Kubernetes", "CI/CD", "Monitoring"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-tech-yellow">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Talented professionals dedicated to delivering exceptional technology solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="hover-lift tech-shadow border-0 card-gradient overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-tech-black font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <div className="p-2 bg-tech-yellow/10 rounded-full hover:bg-tech-yellow/20 cursor-pointer transition-colors">
                    <Linkedin className="h-4 w-4 text-tech-black" />
                  </div>
                  <div className="p-2 bg-tech-yellow/10 rounded-full hover:bg-tech-yellow/20 cursor-pointer transition-colors">
                    <Github className="h-4 w-4 text-tech-black" />
                  </div>
                  <div className="p-2 bg-tech-yellow/10 rounded-full hover:bg-tech-yellow/20 cursor-pointer transition-colors">
                    <Mail className="h-4 w-4 text-tech-black" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;