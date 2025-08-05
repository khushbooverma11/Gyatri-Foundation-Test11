import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  BookOpen, 
  Clock, 
  GraduationCap, 
  Heart, 
  MessageCircle, 
  Star, 
  Target 
} from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();
  
  const reasons = [
    {
      icon: GraduationCap,
      title: "Expert Faculty",
      description: "Experienced teachers with proven track records in their respective subjects and competitive exam preparation.",
    },
    {
      icon: Target,
      title: "Personalized Attention",
      description: "Small batch sizes ensure every student gets individual attention and customized learning plans.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Study Material",
      description: "Well-researched study materials, practice papers, and resources designed by our expert team.",
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Multiple batch timings available to accommodate different schedules and preferences.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "95% success rate in JNV entrance and consistent excellent results in board examinations.",
    },
    {
      icon: Heart,
      title: "Nurturing Environment",
      description: "Supportive and encouraging atmosphere that builds confidence and love for learning.",
    },
    {
      icon: MessageCircle,
      title: "Regular Communication",
      description: "Consistent updates to parents about progress, attendance, and areas for improvement.",
    },
    {
      icon: Star,
      title: "Holistic Development",
      description: "Focus on overall personality development alongside academic excellence.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Gyatri Foundation?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We go beyond traditional teaching methods to create an environment where students thrive, 
            learn, and achieve their maximum potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
            >
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Success Stories That Inspire
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <p className="text-muted-foreground italic mb-2">
                    "Thanks to Gyatri Foundation, I cleared JNV entrance in my first attempt. 
                    The teachers were supportive and the study material was excellent."
                  </p>
                  <p className="font-semibold text-foreground">- Priya Sharma, JNV Selected 2023</p>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <p className="text-muted-foreground italic mb-2">
                    "My son's confidence and grades improved significantly after joining Gyatri Foundation. 
                    The individual attention made all the difference."
                  </p>
                  <p className="font-semibold text-foreground">- Mrs. Rekha Patel, Parent</p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <p className="text-muted-foreground italic mb-2">
                    "The foundation building approach here is exceptional. I scored 95% in Class 10 boards 
                    thanks to their guidance."
                  </p>
                  <p className="font-semibold text-foreground">- Arjun Kumar, Class 10 Topper</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/10">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Students Taught</div>
              </div>
              <div className="text-center p-6 bg-secondary/5 rounded-xl border border-secondary/10">
                <div className="text-4xl font-bold text-secondary mb-2">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center p-6 bg-accent/5 rounded-xl border border-accent/10">
                <div className="text-4xl font-bold text-accent mb-2">8+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-education-green/5 rounded-xl border border-education-green/10">
                <div className="text-4xl font-bold text-education-green mb-2">100+</div>
                <div className="text-muted-foreground">JNV Selections</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;