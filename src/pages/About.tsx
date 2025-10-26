import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroChicken from "@/assets/hero-chicken.jpg";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Quality First",
      description: "We use only the finest ingredients to create memorable meals",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority, always",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "Award-winning recipes and service you can trust",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "Constantly improving and expanding our menu",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <section className="relative h-96 overflow-hidden">
          <img
            src={heroChicken}
            alt="About us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">About FoodieDelight</h1>
              <p className="text-xl text-muted-foreground">
                Serving happiness, one meal at a time
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2020, FoodieDelight started with a simple mission: to bring
                delicious, quality food to everyone. What began as a small family
                restaurant has grown into a beloved chain of locations serving
                thousands of happy customers every day.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that great food brings people together. Every recipe is
                crafted with care, using time-tested methods and the freshest
                ingredients. Our commitment to excellence has made us a favorite in
                every community we serve.
              </p>
            </div>

            <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title}>
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Locations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">Awards Won</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
