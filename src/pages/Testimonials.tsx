import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ArrowLeft, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Testimonial } from "@/types/database";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      // TODO: Replace with actual Supabase query
      // const { data, error } = await supabase
      //   .from('testimonials')
      //   .select('*')
      //   .order('created_at', { ascending: false });
      
      // Mock data for now
      const mockTestimonials: Testimonial[] = [
        {
          id: "1",
          client_name: "Sarah Johnson",
          client_title: "CEO",
          client_company: "TechStart Solutions",
          content: "The Bug Kings transformed our entire digital infrastructure. Their expertise in both technology and business strategy helped us scale from a startup to a million-dollar company in just 18 months.",
          rating: 5,
          image_url: "/api/placeholder/64/64",
          featured: true,
          created_at: "2024-01-15",
          updated_at: "2024-01-15"
        },
        {
          id: "2",
          client_name: "Michael Chen",
          client_title: "Personal Client",
          client_company: "Individual",
          content: "I was struggling with work-life balance and financial planning. The Bug Kings didn't just solve my immediate problems - they gave me a complete life optimization strategy that's still working two years later.",
          rating: 5,
          image_url: "/api/placeholder/64/64",
          featured: true,
          created_at: "2024-02-10",
          updated_at: "2024-02-10"
        },
        {
          id: "3",
          client_name: "Emma Rodriguez",
          client_title: "CTO",
          client_company: "HealthTech Innovations",
          content: "Their mobile app development exceeded all expectations. The Bug Kings understood our healthcare domain deeply and delivered a solution that our patients love using.",
          rating: 5,
          image_url: "/api/placeholder/64/64",
          featured: false,
          created_at: "2024-03-05",
          updated_at: "2024-03-05"
        },
        {
          id: "4",
          client_name: "David Park",
          client_title: "Operations Manager",
          client_company: "RetailCorp Inc.",
          content: "The e-commerce platform they built for us increased our online sales by 200%. But what impressed me most was their ongoing consultation on business processes.",
          rating: 4,
          image_url: "/api/placeholder/64/64",
          featured: false,
          created_at: "2024-03-20",
          updated_at: "2024-03-20"
        },
        {
          id: "5",
          client_name: "Lisa Thompson",
          client_title: "Entrepreneur",
          client_company: "Thompson Consulting",
          content: "From personal branding to technical implementation, the Bug Kings handled everything. They're not just developers - they're life consultants who happen to be tech experts.",
          rating: 5,
          image_url: "/api/placeholder/64/64",
          featured: true,
          created_at: "2024-04-01",
          updated_at: "2024-04-01"
        },
        {
          id: "6",
          client_name: "Robert Kim",
          client_title: "Personal Client",
          client_company: "Individual",
          content: "I hired them for a simple website but ended up getting business mentoring that changed my career trajectory. True problem solvers in every sense.",
          rating: 5,
          image_url: "/api/placeholder/64/64",
          featured: false,
          created_at: "2024-04-15",
          updated_at: "2024-04-15"
        }
      ];
      
      setTestimonials(mockTestimonials);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div>
                      <Skeleton className="h-4 w-24 mb-1" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-3 w-full mb-2" />
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
              Client <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Testimonials</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from clients whose lives and businesses we've transformed
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Featured Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Testimonials</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.filter(t => t.featured).map((testimonial) => (
              <Card key={testimonial.id} className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.image_url} alt={testimonial.client_name} />
                        <AvatarFallback>
                          {testimonial.client_name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{testimonial.client_name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.client_title} {testimonial.client_company !== 'Individual' && `at ${testimonial.client_company}`}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-1" />
                    <p className="text-muted-foreground pl-6 italic">
                      {testimonial.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Testimonials */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Testimonials</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.image_url} alt={testimonial.client_name} />
                      <AvatarFallback>
                        {testimonial.client_name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-sm">{testimonial.client_name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.client_title} {testimonial.client_company !== 'Individual' && `at ${testimonial.client_company}`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-4">
                    {testimonial.content}
                  </p>
                  <p className="text-xs text-muted-foreground mt-3">
                    {new Date(testimonial.created_at).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;