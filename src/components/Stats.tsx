import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "30+",
    label: "Projects Completed",
    description: "Successfully delivered solutions"
  },
  {
    number: "20+",
    label: "Happy Clients",
    description: "Across various industries"
  },
  {
    number: "10+",
    label: "Years Experience",
    description: "In technology solutions"
  },
  {
    number: "24/7",
    label: "Support",
    description: "Round-the-clock assistance"
  }
];

const Stats = () => {
  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-tech-yellow">Achievements</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Numbers that reflect our commitment to excellence and client satisfaction
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-tech-yellow mb-2">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-300">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;