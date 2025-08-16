import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Crown, Code, Smartphone, Palette, UserPlus } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { BugKing } from "@/types/bug-kings";

const fetchBugKings = async (): Promise<BugKing[]> => {
  const { data, error } = await (supabase as any)
    .from('bug_kings')
    .select('*')
    .order('created_at', { ascending: true });
  
  if (error) throw error;
  return (data as BugKing[]) || [];
};

const getIconForTitle = (title: string) => {
  if (title.toLowerCase().includes('web') || title.toLowerCase().includes('full')) return Code;
  if (title.toLowerCase().includes('mobile')) return Smartphone;
  if (title.toLowerCase().includes('product') || title.toLowerCase().includes('design')) return Palette;
  return Code;
};

const BugKings = () => {
  const { data: bugKings, isLoading } = useQuery({
    queryKey: ['bug_kings'],
    queryFn: fetchBugKings,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
        <ParticleBackground />
        <div className="text-xl text-muted-foreground">Loading Bug Kings...</div>
      </div>
    );
  }

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
          {bugKings?.map((king) => {
            const IconComponent = getIconForTitle(king.title);
            return (
              <Card key={king.id} className="group hover-lift border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="block">
                    <div className="text-center mb-4">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <img 
                          src={king.image_url || '/placeholder.svg'} 
                          alt={king.name}
                          className="w-full h-full rounded-full object-cover border-4 border-primary/20"
                        />
                        <div className="absolute -top-2 -right-2 bg-primary rounded-full p-1">
                          <Crown className="h-4 w-4 text-primary-foreground" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-1">{king.name}</h3>
                      <p className="text-primary font-semibold">{king.title}</p>
                      <p className="text-sm text-muted-foreground mb-2">{king.description}</p>
                      
                      <Badge variant="secondary" className="mb-4">
                        Pioneer Bug King
                      </Badge>
                    </div>

                    <div className="text-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{king.bio}</p>
                    </div>

                    <div className="flex flex-wrap gap-1 justify-center">
                      {king.skills?.slice(0, 4).map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {(king.skills?.length || 0) > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{(king.skills?.length || 0) - 4} more
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