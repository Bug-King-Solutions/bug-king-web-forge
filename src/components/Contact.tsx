import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-tech-yellow">Touch</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can help bring your ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Company</label>
                <Input placeholder="Your Company Name" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Project Type</label>
                <Input placeholder="Web Development, Mobile App, etc." />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your project requirements..." 
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-tech-yellow mr-3" />
                  <h3 className="text-xl font-semibold text-white">Email Us</h3>
                </div>
                <p className="text-gray-200 mb-2">info@bugkingsolutions.com</p>
                <p className="text-gray-200">support@bugkingsolutions.com</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 text-tech-yellow mr-3" />
                  <h3 className="text-xl font-semibold text-white">Call Us</h3>
                </div>
                <p className="text-gray-200 mb-2">+1 (555) 123-4567</p>
                <p className="text-gray-200">+1 (555) 987-6543</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-tech-yellow mr-3" />
                  <h3 className="text-xl font-semibold text-white">Visit Us</h3>
                </div>
                <p className="text-gray-200 mb-2">123 Tech Street</p>
                <p className="text-gray-200">Innovation District, CA 90210</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-tech-yellow mr-3" />
                  <h3 className="text-xl font-semibold text-white">Business Hours</h3>
                </div>
                <p className="text-gray-200 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-200">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-200">Sunday: Closed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;