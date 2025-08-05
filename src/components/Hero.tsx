import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Trophy, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-background via-education-light to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                {t("hero.title")}
                <span className="text-primary block">{t("hero.titleHighlight")}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">{t("hero.students")}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-10 h-10 bg-secondary/10 rounded-full">
                  <Trophy className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">95%</div>
                  <div className="text-sm text-muted-foreground">{t("hero.successRate")}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-full">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">8+</div>
                  <div className="text-sm text-muted-foreground">{t("hero.yearsExperience")}</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 group"
              >
                {t("hero.startJourney")}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                {t("hero.learnMore")}
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Students learning at Gyatri Foundation"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                  <Trophy className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">{t("hero.jnvEntrance")}</div>
                  <div className="text-sm text-muted-foreground">{t("hero.specializedCoaching")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;