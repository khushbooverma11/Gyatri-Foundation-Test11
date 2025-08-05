import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Target, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      icon: Target,
      title: t("about.values.excellence.title"),
      description: t("about.values.excellence.description"),
    },
    {
      icon: Heart,
      title: t("about.values.care.title"),
      description: t("about.values.care.description"),
    },
    {
      icon: Zap,
      title: t("about.values.innovation.title"),
      description: t("about.values.innovation.description"),
    },
    {
      icon: Award,
      title: t("about.values.success.title"),
      description: t("about.values.success.description"),
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("about.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              {t("about.empowering")}
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t("about.description1")}
              </p>
              <p>
                {t("about.description2")}
              </p>
              <p>
                {t("about.description3")}
              </p>
            </div>
            
            {/* Mission Statement */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-2">{t("about.mission")}</h4>
              <p className="text-muted-foreground italic">
                "{t("about.missionText")}"
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
            { number: "500+", label: t("about.stats.studentsEnrolled") },
            { number: "95%", label: t("about.stats.successRate") },
            { number: "8+", label: t("about.stats.yearsExcellence") },
            { number: "25+", label: t("about.stats.expertFaculty") },
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