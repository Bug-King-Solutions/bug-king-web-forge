import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const TestimonialsShowcase = () => {
  const featuredTestimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechStart Solutions",
      content: "The Bug Kings transformed our entire digital infrastructure. Their expertise helped us scale from startup to million-dollar company in 18 months.",
      rating: 5,
      image: "/api/placeholder/64/64"
    },
    {
      name: "Michael Chen",
      title: "Personal Client",
      content: "I was struggling with work-life balance and finances. They gave me a complete life optimization strategy that's still working two years later.",
      rating: 5,
      image: "/api/placeholder/64/64"
    },
    {
      name: "Emma Rodriguez",
      title: "CTO, HealthTech Innovations",
      content: "Their mobile app development exceeded expectations. They understood our healthcare domain and delivered a solution our patients love.",
      rating: 5,
      image: "/api/placeholder/64/64"
    }
  ];

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

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            What Our <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from people whose lives and businesses we've transformed
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {featuredTestimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {renderStars(testimonial.rating)}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="relative">
                  <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-1" />
                  <p className="text-muted-foreground pl-6 italic line-clamp-4">
                    {testimonial.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/testimonials">
              Read All Testimonials
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsShowcase;