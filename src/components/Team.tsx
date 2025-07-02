import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Mail } from "lucide-react";

const team = [
  {
    name: "Benjamin Sanga",
    role: "Lead Frontend Engineer",
    tag: "Pioneer Bug King",
    bio: "Full Stack Developer with over 10 years of experience specializing in modern web technologies and robotics.",
    skills: ["Vanilla JS", "Node.js", "React", "TypeScript", "AWS", "Robotics", "Java", "Python", "C#", "PHP", "Laravel"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Tuksa Emmanuel",
    role: "Lead Mobile Engineer",
    tag: "Pioneer Bug King",
    bio: "Fullstack Mobile Developer with over 6 years of experience in cross-platform mobile development.",
    skills: ["Flutter", "Java", "Kotlin", "Node.js", "Express.js"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Kareem Victor",
    role: "Lead Product Engineer",
    tag: "Pioneer Bug King",
    bio: "Product Engineer specializing in user experience design and system architecture with expertise in design tools.",
    skills: ["Figma", "Photoshop", "Flutter", "Python", "C++", "User Research", "System Design", "Adobe XD", "ProtoPie"],
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Join Our Team",
    role: "We're Hiring!",
    tag: "Future Pioneer",
    bio: "Looking for talented developers and designers to join our growing team of tech innovators.",
    skills: ["Passion", "Innovation", "Teamwork", "Excellence"],
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
                <p className="text-tech-black font-medium mb-1">{member.role}</p>
                <Badge variant="secondary" className="mb-3 text-xs bg-tech-yellow/20 text-tech-black">
                  {member.tag}
                </Badge>
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