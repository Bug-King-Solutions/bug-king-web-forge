import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Crown, Code, Smartphone, Palette, Mail, Github, Linkedin, Award, Calendar, MapPin } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const bugKingsData = {
  "benjamin-sanga": {
    name: "Benjamin Sanga",
    title: "Lead Front End Engineer",
    subtitle: "Full Stack Developer & Tech Lead",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    skills: ["JavaScript", "React", "Node.js", "TypeScript", "AWS", "Python", "PHP", "Laravel", "System Architecture"],
    description: "Seasoned full-stack engineer with expertise in modern web technologies and team leadership.",
    longDescription: "Benjamin is a highly skilled full-stack developer and tech lead with over 10 years of experience in software engineering. He specializes in JavaScript technologies, particularly React and Node.js, and has extensive experience with cloud platforms like AWS. His leadership skills and technical expertise make him invaluable in driving complex projects to completion.",
    projects: [
      { name: "Enterprise Web Platform", tech: "React, Node.js, AWS", impact: "Serving 50k+ users daily" },
      { name: "E-commerce Solution", tech: "Laravel, PHP, MySQL", impact: "Processing $1M+ transactions" },
      { name: "Mobile API Backend", tech: "Node.js, Express, MongoDB", impact: "Supporting 3 mobile apps" }
    ],
    achievements: [
      "Led development teams of 8+ engineers",
      "Architected systems handling 100k+ concurrent users", 
      "Reduced deployment time by 70% through CI/CD",
      "Mentored 15+ junior developers"
    ],
    location: "Lagos, Nigeria",
    joinDate: "2019"
  },
  "emmanuel-david": {
    name: "Emmanuel David",
    title: "Lead Mobile Engineer",
    subtitle: "Senior Flutter Developer", 
    experience: "6+ years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    skills: ["Flutter", "Dart", "Firebase", "Node.js", "Express.js", "Mobile Architecture"],
    description: "Expert mobile developer specializing in Flutter and cross-platform solutions.",
    longDescription: "Emmanuel is a passionate mobile developer with deep expertise in Flutter development. Over his 6+ years in mobile development, he has built and shipped numerous successful mobile applications. His focus on clean architecture and user experience has made him the go-to expert for complex mobile projects.",
    projects: [
      { name: "Fintech Mobile App", tech: "Flutter, Firebase", impact: "100k+ downloads" },
      { name: "Social Commerce App", tech: "Flutter, Node.js", impact: "Featured by Google" },
      { name: "Healthcare Platform", tech: "Flutter, Express.js", impact: "Serving 10k+ patients" }
    ],
    achievements: [
      "Built 12+ production mobile apps",
      "Achieved 4.7+ average app store rating",
      "Led mobile architecture for 5+ projects", 
      "Reduced app crash rate by 90%"
    ],
    location: "Lagos, Nigeria",
    joinDate: "2020"
  },
  "kareem-victor": {
    name: "Kareem Victor",
    title: "Lead Product Engineer",
    subtitle: "UX Designer & Developer",
    experience: "5+ years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    skills: ["Figma", "Adobe Creative Suite", "Flutter", "Python", "User Research", "Prototyping"],
    description: "Creative technologist bridging design and development with user-centered solutions.",
    longDescription: "Kareem is a unique talent who seamlessly bridges the gap between design and development. With a strong background in user experience design and technical implementation, he ensures that products are not only visually appealing but also technically sound and user-friendly. His holistic approach to product development has been instrumental in creating award-winning digital experiences.",
    projects: [
      { name: "Design System", tech: "Figma, Flutter", impact: "Adopted across 8+ products" },
      { name: "UX Research Platform", tech: "Python, Adobe XD", impact: "Improved user satisfaction by 45%" },
      { name: "Interactive Prototypes", tech: "Protopie, Figma", impact: "Reduced development time by 35%" }
    ],
    achievements: [
      "Designed 20+ award-winning interfaces",
      "Conducted UX research for 50+ features",
      "Improved user conversion rates by 40%",
      "Built comprehensive design systems"
    ],
    location: "Lagos, Nigeria",
    joinDate: "2021"
  }
};

const BugKingProfile = () => {
  const { id } = useParams<{ id: string }>();
  const king = id ? bugKingsData[id as keyof typeof bugKingsData] : null;

  if (!king) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Bug King Not Found</h1>
          <Button asChild>
            <Link to="/bug-kings">Back to Bug Kings</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/bug-kings" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Bug Kings
            </Link>
          </Button>
        </div>

        {/* Profile Header */}
        <Card className="mb-8 border-2 border-primary/20">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="relative">
                <img 
                  src={king.image} 
                  alt={king.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                />
                <div className="absolute -top-2 -right-2 bg-primary rounded-full p-2">
                  <Crown className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                  <Crown className="h-5 w-5 text-primary" />
                  <Badge variant="secondary">Pioneer Bug King</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{king.name}</h1>
                <p className="text-xl text-primary font-semibold mb-1">{king.title}</p>
                <p className="text-muted-foreground mb-4">{king.subtitle} • {king.experience}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground justify-center md:justify-start mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {king.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Joined {king.joinDate}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{king.longDescription}</p>

                <div className="flex gap-2 justify-center md:justify-start">
                  <Button size="sm" variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {king.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Key Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {king.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Featured Projects */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Featured Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {king.projects.map((project, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">{project.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{project.tech}</p>
                  <Badge variant="outline" className="text-xs">
                    {project.impact}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BugKingProfile;