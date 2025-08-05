import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Target, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for academic excellence in every student we teach",
    },
    {
      icon: Heart,
      title: "Care",
      description: "Individual attention and care for each student's unique needs",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Modern teaching methods combined with traditional values",
    },
    {
      icon: Award,
      title: "Success",
      description: "Proven track record of student success and achievements",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Gyatri Foundation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded with a vision to nurture young minds, Gyatri Foundation has been a beacon of quality education, 
            helping students achieve their academic dreams for over 8 years.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Empowering Students Since 2016
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At Gyatri Foundation, we believe that every child has the potential to excel. Our dedicated team of 
                experienced educators works tirelessly to provide comprehensive coaching for students from Classes 6 to 10.
              </p>
              <p>
                We specialize in preparing students for the prestigious Jawahar Navodaya Vidyalaya entrance examination, 
                with a proven track record of success that speaks for itself.
              </p>
              <p>
                Our approach combines traditional teaching values with modern educational techniques, ensuring that 
                students not only excel academically but also develop as well-rounded individuals.
              </p>
            </div>
            
            {/* Mission Statement */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-2">Our Mission</h4>
              <p className="text-muted-foreground italic">
                "To provide quality education that empowers students to achieve their dreams and contribute 
                meaningfully to society."
              </p>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: "500+", label: "Students Enrolled" },
            { number: "95%", label: "Success Rate" },
            { number: "8+", label: "Years of Excellence" },
            { number: "25+", label: "Expert Faculty" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;