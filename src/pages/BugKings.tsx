import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Crown, Code, Smartphone, Palette, UserPlus } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import emmanuelImage from "@/assets/emmanuel.jpg";
import kareemImage from "@/assets/kareem.jpg";

const bugKings = [
  {
    id: "benjamin-sanga",
    name: "Benjamin Sanga",
    title: "Lead Web Engineer",
    subtitle: "Full Stack Developer & Tech Lead",
    experience: "10+ years",
    image: "https://media.cakeresume.com/image/upload/s--EeKI5TEw--/c_fill,g_face,h_300,w_300/v1724317512/rfql28xlg1tqf2pnntpo.jpg",
    skills: ["JavaScript", "React", "Node.js", "TypeScript", "AWS", "Python", "PHP", "Laravel", "System Architecture"],
    description: "Seasoned full-stack engineer with expertise in modern web technologies and team leadership.",
    icon: Code
  },
  {
    id: "emmanuel-david",
    name: "Emmanuel David",
    title: "Lead Mobile Engineer", 
    subtitle: "Senior Flutter Developer",
    experience: "6+ years",
    image: emmanuelImage,
    skills: ["Flutter", "Dart", "Firebase", "Node.js", "Express.js", "Mobile Architecture"],
    description: "Expert mobile developer specializing in Flutter and cross-platform solutions.",
    icon: Smartphone
  },
  {
    id: "kareem-victor",
    name: "Kareem Victor",
    title: "Lead Product Engineer",
    subtitle: "UX Designer & Developer", 
    experience: "5+ years",
    image: kareemImage,
    skills: ["Figma", "Adobe Creative Suite", "Flutter", "Python", "User Research", "Prototyping"],
    description: "Creative technologist bridging design and development with user-centered solutions.",
    icon: Palette
  }
];

const BugKings = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticleBackground />
      
      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold magic-glow bg-clip-text text-transparent">
              Bug Kings
            </h1>
            <Crown className="h-8 w-8 text-primary" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our exceptional team of Bug Kings - masters who have attained expertise in multiple skill sets, 
            not just technology. Each king brings unique strengths to solve complex challenges.
          </p>
        </div>

        {/* Bug Kings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {bugKings.map((king) => {
            const IconComponent = king.icon;
            return (
              <Card key={king.id} className="group hover-lift border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="block">
                    <div className="text-center mb-4">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <img 
                          src={king.image} 
                          alt={king.name}
                          className="w-full h-full rounded-full object-cover border-4 border-primary/20"
                        />
                        <div className="absolute -top-2 -right-2 bg-primary rounded-full p-1">
                          <Crown className="h-4 w-4 text-primary-foreground" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-1">{king.name}</h3>
                      <p className="text-primary font-semibold">{king.title}</p>
                      <p className="text-sm text-muted-foreground mb-2">{king.subtitle}</p>
                      
                      <Badge variant="secondary" className="mb-4">
                        Pioneer Bug King • {king.experience}
                      </Badge>
                    </div>

                    <div className="text-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{king.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-1 justify-center">
                      {king.skills.slice(0, 4).map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {king.skills.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{king.skills.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Join Our Team Card */}
          <Card className="group hover-lift border-2 border-dashed border-primary/30 hover:border-primary/60 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-center mb-4">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <UserPlus className="h-12 w-12 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">Join Our Kingdom</h3>
                <p className="text-primary font-semibold mb-2">Become a Bug King</p>
                
                <Badge variant="secondary" className="mb-4">
                  Pioneer Bug King • Future Legend
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                Do you have mastery in multiple skill sets? Ready to join our elite team of problem solvers?
              </p>

              <Button variant="outline" className="w-full">
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BugKings;