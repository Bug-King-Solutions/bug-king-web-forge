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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4">
                  <div className="text-3xl md:text-4xl font-bold text-tech-yellow mb-1 group-hover:scale-105 transition-transform">
                    {stat.number}
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;