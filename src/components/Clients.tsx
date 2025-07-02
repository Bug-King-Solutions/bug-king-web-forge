import { Card, CardContent } from "@/components/ui/card";

const clients = [
  {
    name: "Netaccess Communications Limited",
    logo: "NC",
    description: "Enterprise networking solutions",
    industry: "Telecommunications"
  },
  {
    name: "Choice Pet",
    logo: "CP",
    description: "Pet care mobile application",
    industry: "Pet Care"
  },
  {
    name: "Studio 24",
    logo: "S24",
    description: "Creative studio platform",
    industry: "Creative Services"
  },
  {
    name: "Bit Design Agency",
    logo: "BDA",
    description: "Digital design solutions",
    industry: "Design Agency"
  },
  {
    name: "Sabi Save",
    logo: "SS",
    description: "Financial savings platform",
    industry: "FinTech"
  },
  {
    name: "Your Company",
    logo: "YC",
    description: "Ready to work together?",
    industry: "All Industries"
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