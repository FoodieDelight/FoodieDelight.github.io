import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroChicken from "@/assets/hero-chicken.jpg";
import burgerHero from "@/assets/burger-hero.jpg";

const Deals = () => {
  const deals = [
    {
      title: "Family Feast",
      description: "8 pieces of chicken, 2 large fries, 1 large coleslaw, 4 drinks",
      price: "$29.99",
      originalPrice: "$39.99",
      discount: "25% OFF",
      image: heroChicken,
    },
    {
      title: "Burger Combo",
      description: "2 burgers, 2 fries, 2 drinks",
      price: "$15.99",
      originalPrice: "$21.99",
      discount: "30% OFF",
      image: burgerHero,
    },
    {
      title: "Tuesday Special",
      description: "Buy 1 Get 1 Free on all chicken items",
      price: "BOGO",
      originalPrice: "",
      discount: "SPECIAL",
      image: heroChicken,
    },
    {
      title: "Student Meal",
      description: "Burger, fries, and drink with valid student ID",
      price: "$8.99",
      originalPrice: "$12.99",
      discount: "20% OFF",
      image: burgerHero,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center mb-4">Special Deals</h1>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Save big with our limited-time offers
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deals.map((deal) => (
                <Card key={deal.title} className="overflow-hidden group">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground text-lg px-4 py-2">
                      {deal.discount}
                    </Badge>
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
                    <p className="text-muted-foreground mb-4">{deal.description}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-primary">{deal.price}</span>
                      {deal.originalPrice && (
                        <span className="text-xl text-muted-foreground line-through">
                          {deal.originalPrice}
                        </span>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" size="lg">
                      Order Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Terms & Conditions</h2>
            <div className="max-w-2xl mx-auto text-left space-y-2 text-muted-foreground">
              <p>• All deals are valid for a limited time only</p>
              <p>• Cannot be combined with other offers</p>
              <p>• Available at participating locations</p>
              <p>• Tuesday Special valid only on Tuesdays</p>
              <p>• Student Meal requires valid student ID</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Deals;
