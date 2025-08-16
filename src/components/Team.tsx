import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { BugKing } from "@/types/bug-kings";

const fetchBugKings = async (): Promise<BugKing[]> => {
  const { data, error } = await (supabase as any)
    .from('bug_kings')
    .select('*')
    .eq('featured', true)
    .order('created_at', { ascending: true });
  
  if (error) throw error;
  return (data as BugKing[]) || [];
};

const Team = () => {
  const { data: bugKings, isLoading } = useQuery({
    queryKey: ['bug_kings_featured'],
    queryFn: fetchBugKings,
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="text-xl text-muted-foreground">Loading Bug Kings...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="h-6 w-6 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Meet Our <span className="magic-glow bg-clip-text text-transparent">Bug Kings</span>
            </h2>
            <Crown className="h-6 w-6 text-primary" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Our elite team of Bug Kings - masters who have attained expertise in multiple skill sets, 
            not just technology. Each king brings unique strengths to solve complex challenges.
          </p>
          <Button asChild variant="outline" className="group">
            <Link to="/bug-kings" className="flex items-center gap-2">
              View All Bug Kings
              <Crown className="h-4 w-4 transition-transform group-hover:scale-110" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bugKings?.map((member) => (
            <Card key={member.id} className="hover-lift tech-shadow border-0 card-gradient overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image_url || '/placeholder.svg'} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                <p className="text-primary font-medium mb-1">{member.title}</p>
                <Badge variant="secondary" className="mb-3 text-xs bg-primary/20 text-primary">
                  Pioneer Bug King
                </Badge>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills?.slice(0, 6).map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {(member.skills?.length || 0) > 6 && (
                    <Badge variant="secondary" className="text-xs">
                      +{(member.skills?.length || 0) - 6} more
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <div className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 cursor-pointer transition-colors">
                    <Linkedin className="h-4 w-4 text-primary" />
                  </div>
                  <div className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 cursor-pointer transition-colors">
                    <Github className="h-4 w-4 text-primary" />
                  </div>
                  <div className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 cursor-pointer transition-colors">
                    <Mail className="h-4 w-4 text-primary" />
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