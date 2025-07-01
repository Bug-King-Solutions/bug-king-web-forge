import { Card, CardContent } from "@/components/ui/card";

const clients = [
  {
    name: "TechCorp",
    logo: "TC",
    description: "E-commerce platform development",
    industry: "Retail Technology"
  },
  {
    name: "FinanceFirst",
    logo: "FF",
    description: "Mobile banking application",
    industry: "Financial Services"
  },
  {
    name: "HealthPlus",
    logo: "H+",
    description: "Telemedicine platform",
    industry: "Healthcare"
  },
  {
    name: "EduTech Solutions",
    logo: "ET",
    description: "Learning management system",
    industry: "Education"
  },
  {
    name: "StartupX",
    logo: "SX",
    description: "MVP development & scaling",
    industry: "Technology Startup"
  },
  {
    name: "Manufacturing Co",
    logo: "MC",
    description: "IoT monitoring systems",
    industry: "Manufacturing"
  }
];

const Clients = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="text-tech-yellow">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've had the privilege of working with amazing companies across various industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <Card key={index} className="hover-lift tech-shadow border-0 card-gradient">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-tech-black text-tech-yellow rounded-full flex items-center justify-center text-xl font-bold">
                  {client.logo}
                </div>
                <h3 className="text-xl font-bold mb-2">{client.name}</h3>
                <p className="text-tech-black font-medium mb-2">{client.industry}</p>
                <p className="text-muted-foreground">{client.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Ready to join our growing list of satisfied clients?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;