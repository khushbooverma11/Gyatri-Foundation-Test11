import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Star, Users } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Class 6-8 Foundation",
      description: "Strong foundation building with focus on core concepts in Mathematics, Science, and Language Arts.",
      duration: "2 Hours/Day",
      students: "15-20",
      features: [
        "Conceptual Learning",
        "Regular Assessments",
        "Doubt Clearing Sessions",
        "Study Materials Provided"
      ],
      price: "₹3,000/month",
      popular: false,
    },
    {
      title: "Class 9-10 Advanced",
      description: "Comprehensive preparation for Class 9-10 with focus on board exam excellence and competitive readiness.",
      duration: "3 Hours/Day",
      students: "12-15",
      features: [
        "Board Exam Preparation",
        "Competitive Foundation",
        "Mock Tests",
        "Individual Attention",
        "Career Guidance"
      ],
      price: "₹4,000/month",
      popular: true,
    },
    {
      title: "JNV Entrance Preparation",
      description: "Specialized coaching for Jawahar Navodaya Vidyalaya entrance examination with proven success record.",
      duration: "2.5 Hours/Day",
      students: "10-12",
      features: [
        "JNV Specific Curriculum",
        "Regular Mock Tests",
        "Mental Ability Training",
        "Language Development",
        "Previous Year Papers"
      ],
      price: "₹5,000/month",
      popular: false,
    },
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our carefully designed courses that cater to different academic needs and goals. 
            Each program is crafted to ensure maximum learning outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className={`relative group hover:shadow-2xl transition-all duration-300 border-border ${
                course.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {course.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {course.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">{course.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Course Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">{course.students}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <Star className="w-4 h-4 text-accent mr-2" />
                    Course Features
                  </h4>
                  <ul className="space-y-1">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <BookOpen className="w-3 h-3 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                <div className="text-center border-t border-border pt-4">
                  <div className="text-2xl font-bold text-primary mb-4">{course.price}</div>
                  <Button 
                    className={`w-full ${
                      course.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-secondary hover:bg-secondary/90'
                    }`}
                  >
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              🎓 Special Offers & Facilities
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground">Sibling Discount:</strong><br />
                10% off on second child enrollment
              </div>
              <div>
                <strong className="text-foreground">Free Trial Classes:</strong><br />
                Experience our teaching before enrollment
              </div>
              <div>
                <strong className="text-foreground">Flexible Timings:</strong><br />
                Morning and evening batches available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;