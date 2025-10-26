import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Star, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroChicken from "@/assets/hero-chicken.jpg";
import burgerHero from "@/assets/burger-hero.jpg";
import fries from "@/assets/fries.jpg";
import wings from "@/assets/wings.jpg";
import salad from "@/assets/salad.jpg";
import drinks from "@/assets/drinks.jpg";
import pizza from "@/assets/pizza.jpg";
import grilledChicken from "@/assets/grilled-chicken.jpg";
import juice from "@/assets/juice.jpg";
import dessert from "@/assets/dessert.jpg";
import sandwich from "@/assets/sandwich.jpg";
import pasta from "@/assets/pasta.jpg";
import { useState, useEffect } from "react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: heroChicken,
      title: "Crispy & Delicious",
      subtitle: "Our signature fried chicken",
    },
    {
      image: burgerHero,
      title: "Burgers Done Right",
      subtitle: "Fresh ingredients, bold flavors",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    { name: "Pizza", image: pizza, path: "/category/pizza" },
    { name: "Ayam Bakar", image: grilledChicken, path: "/category/grilled-chicken" },
    { name: "Juice & Smoothies", image: juice, path: "/category/juice" },
    { name: "Chicken Wings", image: wings, path: "/category/wings" },
    { name: "Burgers", image: burgerHero, path: "/category/burgers" },
    { name: "French Fries", image: fries, path: "/category/fries" },
    { name: "Fresh Salads", image: salad, path: "/category/salads" },
    { name: "Pasta", image: pasta, path: "/category/pasta" },
    { name: "Sandwich", image: sandwich, path: "/category/sandwich" },
    { name: "Desserts", image: dessert, path: "/category/desserts" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Carousel */}
        <section className="relative h-[600px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/40">
                <div className="container mx-auto px-4 h-full flex items-center">
                  <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                      {slide.subtitle}
                    </p>
                    <Button size="lg" className="text-lg">
                      Order Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Features */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Get your food delivered hot and fresh within 30 minutes
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Quality Food</h3>
                  <p className="text-sm text-muted-foreground">
                    Made with premium ingredients and cooked to perfection
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Easy Ordering</h3>
                  <p className="text-sm text-muted-foreground">
                    Simple online ordering process for your convenience
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Browse Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((category) => (
                <Link key={category.name} to={category.path}>
                  <Card className="group overflow-hidden cursor-pointer transition-all hover:shadow-lg">
                    <CardContent className="p-0">
                      <div className="relative h-48">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
                          <h3 className="text-lg font-bold p-4 text-foreground">
                            {category.name}
                          </h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Order?</h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the best food in town, delivered to your doorstep
            </p>
            <Button size="lg" variant="secondary" className="text-lg">
              View Menu <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
