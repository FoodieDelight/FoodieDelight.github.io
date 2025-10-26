import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

const Menu = () => {
  const menuItems = {
    pizza: [
      { name: "Margherita Pizza", price: "$12.99", image: pizza, description: "Classic tomato, mozzarella, and basil" },
      { name: "Pepperoni Pizza", price: "$14.99", image: pizza, description: "Loaded with pepperoni and cheese" },
      { name: "BBQ Chicken Pizza", price: "$15.99", image: pizza, description: "BBQ sauce, grilled chicken, and onions" },
    ],
    "grilled-chicken": [
      { name: "Ayam Bakar Madu", price: "$10.99", image: grilledChicken, description: "Honey glazed grilled chicken" },
      { name: "Ayam Bakar Kecap", price: "$10.99", image: grilledChicken, description: "Sweet soy sauce grilled chicken" },
      { name: "Ayam Bakar Pedas", price: "$11.99", image: grilledChicken, description: "Spicy grilled chicken with sambal" },
    ],
    chicken: [
      { name: "Original Fried Chicken", price: "$8.99", image: heroChicken, description: "Crispy on the outside, juicy on the inside" },
      { name: "Spicy Wings", price: "$9.99", image: wings, description: "Hot and spicy chicken wings with special sauce" },
    ],
    burgers: [
      { name: "Classic Burger", price: "$7.99", image: burgerHero, description: "Beef patty with fresh vegetables and cheese" },
      { name: "Chicken Burger", price: "$8.99", image: burgerHero, description: "Crispy chicken fillet with special mayo" },
      { name: "BBQ Bacon Burger", price: "$11.99", image: burgerHero, description: "Bacon, BBQ sauce, and onion rings" },
    ],
    pasta: [
      { name: "Spaghetti Carbonara", price: "$11.99", image: pasta, description: "Creamy bacon pasta" },
      { name: "Spaghetti Bolognese", price: "$10.99", image: pasta, description: "Classic meat sauce pasta" },
      { name: "Fettuccine Alfredo", price: "$11.99", image: pasta, description: "Creamy parmesan sauce" },
    ],
    sandwich: [
      { name: "Club Sandwich", price: "$8.99", image: sandwich, description: "Triple-layer classic sandwich" },
      { name: "Chicken Sandwich", price: "$8.99", image: sandwich, description: "Grilled chicken with vegetables" },
    ],
    sides: [
      { name: "French Fries", price: "$3.99", image: fries, description: "Golden crispy fries" },
      { name: "Garden Salad", price: "$5.99", image: salad, description: "Fresh mixed greens with dressing" },
    ],
    drinks: [
      { name: "Soft Drinks", price: "$2.99", image: drinks, description: "Choice of cola, sprite, or orange" },
      { name: "Fresh Juice", price: "$4.99", image: juice, description: "Made from fresh fruits" },
    ],
    desserts: [
      { name: "Chocolate Cake", price: "$5.99", image: dessert, description: "Rich chocolate layer cake" },
      { name: "Ice Cream Sundae", price: "$4.99", image: dessert, description: "Vanilla ice cream with toppings" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center mb-4">Our Menu</h1>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Discover our delicious selection of meals
            </p>

            <Tabs defaultValue="pizza" className="w-full">
              <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 md:grid-cols-5 lg:grid-cols-9 mb-12">
                <TabsTrigger value="pizza">Pizza</TabsTrigger>
                <TabsTrigger value="grilled-chicken">Ayam Bakar</TabsTrigger>
                <TabsTrigger value="chicken">Chicken</TabsTrigger>
                <TabsTrigger value="burgers">Burgers</TabsTrigger>
                <TabsTrigger value="pasta">Pasta</TabsTrigger>
                <TabsTrigger value="sandwich">Sandwich</TabsTrigger>
                <TabsTrigger value="sides">Sides</TabsTrigger>
                <TabsTrigger value="drinks">Drinks</TabsTrigger>
                <TabsTrigger value="desserts">Desserts</TabsTrigger>
              </TabsList>

              {Object.entries(menuItems).map(([category, items]) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                      <Card key={item.name} className="overflow-hidden group">
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            <span className="text-primary font-bold">{item.price}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">Add to Cart</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
