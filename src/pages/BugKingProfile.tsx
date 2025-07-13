import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Crown, Code, Smartphone, Palette, Mail, Github, Linkedin, Award, Calendar, MapPin } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
// import victorImage from "@/assets/victor.JPG";

const bugKingsData = {
  "benjamin-sanga": {
    name: "Benjamin Sanga",
    title: "Lead Front End Engineer",
    subtitle: "Full Stack Developer",
    experience: "10+ years",
    image: "/placeholder.svg",
    skills: ["Vanilla JS", "Node.js", "React", "TypeScript", "AWS", "Robotics", "Java", "Python", "C#", "PHP", "Laravel"],
    description: "Master of full-stack development with over a decade of experience building scalable applications.",
    longDescription: "Benjamin is a seasoned full-stack developer with an exceptional track record of delivering complex web applications. His expertise spans from front-end frameworks to backend systems, cloud infrastructure, and even robotics. With over 10 years in the field, he has led numerous projects and mentored countless developers.",
    projects: [
      { name: "E-commerce Platform", tech: "React, Node.js, AWS", impact: "Handled 100k+ daily users" },
      { name: "IoT Dashboard", tech: "Python, React, AWS IoT", impact: "Monitored 500+ devices" },
      { name: "Robotics Control System", tech: "C#, Python, Java", impact: "Automated factory operations" }
    ],
    achievements: [
      "Led 15+ successful project deliveries",
      "Architected systems serving 100k+ users",
      "Mentored 20+ junior developers",
      "Pioneered company's robotics division"
    ],
    location: "Lagos, Nigeria",
    joinDate: "2019"
  },
  "tuksa-emmanuel": {
    name: "Tuksa Emmanuel",
    title: "Lead Mobile Engineer", 
    subtitle: "Fullstack Mobile Developer",
    experience: "6+ years",
    image: "/placeholder.svg",
    skills: ["Flutter", "Java", "Kotlin", "Node.js", "Express.js"],
    description: "Mobile development virtuoso specializing in cross-platform solutions.",
    longDescription: "Tuksa is our mobile development expert with deep knowledge in both native and cross-platform development. His passion for creating seamless user experiences on mobile devices has resulted in apps that delight users and drive business growth.",
    projects: [
      { name: "Financial Mobile App", tech: "Flutter, Node.js", impact: "50k+ downloads" },
      { name: "Health Tracking App", tech: "Kotlin, Express.js", impact: "Featured on Play Store" },
      { name: "Social Platform", tech: "Flutter, Node.js", impact: "10k+ active users" }
    ],
    achievements: [
      "Published 8+ apps on app stores",
      "Achieved 4.8+ average app rating",
      "Led mobile team of 5 developers",
      "Implemented CI/CD for mobile apps"
    ],
    location: "Lagos, Nigeria", 
    joinDate: "2020"
  },
  "kareem-victor": {
    name: "Kareem Victor",
    title: "Lead Product Engineer",
    subtitle: "Design & Development",
    experience: "5+ years", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    skills: ["Figma", "Photoshop", "Flutter", "Python", "C++", "User Research", "System Design", "Adobe XD", "ProtoPie"],
    description: "Product visionary combining design expertise with technical prowess.",
    longDescription: "Kareem bridges the gap between design and development, bringing a unique perspective that ensures products are not only beautiful but also technically sound. His background in both creative design and programming languages makes him invaluable in product development.",
    projects: [
      { name: "Design System Framework", tech: "Figma, Flutter", impact: "Used across 5+ products" },
      { name: "User Research Platform", tech: "Python, Adobe XD", impact: "Improved UX by 40%" },
      { name: "Interactive Prototypes", tech: "ProtoPie, C++", impact: "Reduced dev time by 30%" }
    ],
    achievements: [
      "Designed 12+ award-winning interfaces",
      "Conducted user research for 100+ features",
      "Built reusable design systems",
      "Improved conversion rates by 35%"
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