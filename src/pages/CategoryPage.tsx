import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useParams, Navigate } from "react-router-dom";
import pizza from "@/assets/pizza.jpg";
import grilledChicken from "@/assets/grilled-chicken.jpg";
import juice from "@/assets/juice.jpg";
import wings from "@/assets/wings.jpg";
import burgerHero from "@/assets/burger-hero.jpg";
import fries from "@/assets/fries.jpg";
import salad from "@/assets/salad.jpg";
import pasta from "@/assets/pasta.jpg";
import sandwich from "@/assets/sandwich.jpg";
import dessert from "@/assets/dessert.jpg";

interface MenuItem {
  name: string;
  price: string;
  image: string;
  description: string;
  isNew?: boolean;
  isPopular?: boolean;
}

interface CategoryData {
  title: string;
  description: string;
  items: MenuItem[];
  bannerImage: string;
}

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const categories: Record<string, CategoryData> = {
    pizza: {
      title: "Pizza",
      description: "Delicious handcrafted pizzas with fresh toppings",
      bannerImage: pizza,
      items: [
        { name: "Margherita Pizza", price: "$12.99", image: pizza, description: "Classic tomato, mozzarella, and basil", isPopular: true },
        { name: "Pepperoni Pizza", price: "$14.99", image: pizza, description: "Loaded with pepperoni and cheese" },
        { name: "Hawaiian Pizza", price: "$13.99", image: pizza, description: "Ham, pineapple, and mozzarella" },
        { name: "BBQ Chicken Pizza", price: "$15.99", image: pizza, description: "BBQ sauce, grilled chicken, and onions", isNew: true },
        { name: "Vegetarian Pizza", price: "$13.99", image: pizza, description: "Fresh vegetables and cheese" },
        { name: "Meat Lovers Pizza", price: "$16.99", image: pizza, description: "Pepperoni, sausage, bacon, and ham", isPopular: true },
      ],
    },
    "grilled-chicken": {
      title: "Ayam Bakar",
      description: "Authentic grilled chicken with traditional spices",
      bannerImage: grilledChicken,
      items: [
        { name: "Ayam Bakar Madu", price: "$10.99", image: grilledChicken, description: "Honey glazed grilled chicken", isPopular: true },
        { name: "Ayam Bakar Kecap", price: "$10.99", image: grilledChicken, description: "Sweet soy sauce grilled chicken" },
        { name: "Ayam Bakar Pedas", price: "$11.99", image: grilledChicken, description: "Spicy grilled chicken with sambal", isNew: true },
        { name: "Ayam Bakar Bumbu Rujak", price: "$11.99", image: grilledChicken, description: "Grilled chicken with spicy peanut sauce" },
        { name: "Ayam Bakar Taliwang", price: "$12.99", image: grilledChicken, description: "Traditional Lombok-style grilled chicken", isPopular: true },
        { name: "Ayam Bakar Rica-Rica", price: "$11.99", image: grilledChicken, description: "Spicy Manado-style grilled chicken" },
      ],
    },
    juice: {
      title: "Juice & Smoothies",
      description: "Fresh fruit juices and healthy smoothies",
      bannerImage: juice,
      items: [
        { name: "Orange Juice", price: "$4.99", image: juice, description: "Freshly squeezed oranges", isPopular: true },
        { name: "Mixed Berry Smoothie", price: "$5.99", image: juice, description: "Strawberry, blueberry, and raspberry" },
        { name: "Mango Juice", price: "$5.49", image: juice, description: "Sweet tropical mango", isNew: true },
        { name: "Green Detox", price: "$6.99", image: juice, description: "Spinach, apple, cucumber, and lemon" },
        { name: "Watermelon Juice", price: "$4.99", image: juice, description: "Refreshing watermelon blend" },
        { name: "Avocado Smoothie", price: "$6.49", image: juice, description: "Creamy avocado with honey", isPopular: true },
      ],
    },
    wings: {
      title: "Chicken Wings",
      description: "Crispy wings with various flavors",
      bannerImage: wings,
      items: [
        { name: "Buffalo Wings", price: "$9.99", image: wings, description: "Classic spicy buffalo sauce", isPopular: true },
        { name: "BBQ Wings", price: "$9.99", image: wings, description: "Sweet and tangy BBQ" },
        { name: "Garlic Parmesan", price: "$10.99", image: wings, description: "Garlic butter and parmesan cheese", isNew: true },
        { name: "Honey Sriracha", price: "$10.99", image: wings, description: "Sweet and spicy combination" },
        { name: "Teriyaki Wings", price: "$10.99", image: wings, description: "Japanese-style teriyaki glaze" },
        { name: "Korean Style", price: "$11.99", image: wings, description: "Gochujang spicy sauce", isPopular: true },
      ],
    },
    burgers: {
      title: "Burgers",
      description: "Juicy burgers with premium ingredients",
      bannerImage: burgerHero,
      items: [
        { name: "Classic Beef Burger", price: "$8.99", image: burgerHero, description: "100% beef patty with fresh vegetables", isPopular: true },
        { name: "Cheese Burger", price: "$9.99", image: burgerHero, description: "Double cheese beef burger" },
        { name: "Chicken Burger", price: "$8.99", image: burgerHero, description: "Crispy chicken fillet", isNew: true },
        { name: "Mushroom Swiss", price: "$10.99", image: burgerHero, description: "Sautéed mushrooms and swiss cheese" },
        { name: "BBQ Bacon Burger", price: "$11.99", image: burgerHero, description: "Bacon, BBQ sauce, and onion rings" },
        { name: "Veggie Burger", price: "$8.99", image: burgerHero, description: "Plant-based patty with vegetables", isPopular: true },
      ],
    },
    fries: {
      title: "French Fries",
      description: "Golden crispy fries with various seasonings",
      bannerImage: fries,
      items: [
        { name: "Classic Fries", price: "$3.99", image: fries, description: "Salted golden fries", isPopular: true },
        { name: "Cheese Fries", price: "$5.99", image: fries, description: "Loaded with melted cheese" },
        { name: "Chili Cheese Fries", price: "$6.99", image: fries, description: "Topped with chili and cheese", isNew: true },
        { name: "Garlic Parmesan Fries", price: "$5.49", image: fries, description: "Garlic and parmesan seasoning" },
        { name: "Sweet Potato Fries", price: "$4.99", image: fries, description: "Crispy sweet potato fries" },
        { name: "Truffle Fries", price: "$7.99", image: fries, description: "Truffle oil and parmesan", isPopular: true },
      ],
    },
    salads: {
      title: "Fresh Salads",
      description: "Healthy and delicious salad bowls",
      bannerImage: salad,
      items: [
        { name: "Caesar Salad", price: "$7.99", image: salad, description: "Romaine lettuce, parmesan, croutons", isPopular: true },
        { name: "Greek Salad", price: "$8.99", image: salad, description: "Feta cheese, olives, tomatoes" },
        { name: "Garden Salad", price: "$6.99", image: salad, description: "Mixed greens with vegetables", isNew: true },
        { name: "Chicken Caesar", price: "$10.99", image: salad, description: "Caesar salad with grilled chicken" },
        { name: "Cobb Salad", price: "$11.99", image: salad, description: "Chicken, bacon, eggs, avocado" },
        { name: "Asian Salad", price: "$9.99", image: salad, description: "Asian dressing with sesame", isPopular: true },
      ],
    },
    pasta: {
      title: "Pasta",
      description: "Italian-style pasta dishes",
      bannerImage: pasta,
      items: [
        { name: "Spaghetti Carbonara", price: "$11.99", image: pasta, description: "Creamy bacon pasta", isPopular: true },
        { name: "Spaghetti Bolognese", price: "$10.99", image: pasta, description: "Classic meat sauce pasta" },
        { name: "Fettuccine Alfredo", price: "$11.99", image: pasta, description: "Creamy parmesan sauce", isNew: true },
        { name: "Penne Arrabiata", price: "$10.99", image: pasta, description: "Spicy tomato sauce" },
        { name: "Lasagna", price: "$12.99", image: pasta, description: "Layered pasta with meat and cheese" },
        { name: "Aglio e Olio", price: "$9.99", image: pasta, description: "Garlic and olive oil pasta", isPopular: true },
      ],
    },
    sandwich: {
      title: "Sandwiches",
      description: "Fresh sandwiches with quality ingredients",
      bannerImage: sandwich,
      items: [
        { name: "Club Sandwich", price: "$8.99", image: sandwich, description: "Triple-layer classic sandwich", isPopular: true },
        { name: "BLT Sandwich", price: "$7.99", image: sandwich, description: "Bacon, lettuce, and tomato" },
        { name: "Chicken Sandwich", price: "$8.99", image: sandwich, description: "Grilled chicken with vegetables", isNew: true },
        { name: "Tuna Sandwich", price: "$7.99", image: sandwich, description: "Fresh tuna salad" },
        { name: "Veggie Sandwich", price: "$6.99", image: sandwich, description: "Assorted fresh vegetables" },
        { name: "Steak Sandwich", price: "$11.99", image: sandwich, description: "Grilled steak with onions", isPopular: true },
      ],
    },
    desserts: {
      title: "Desserts",
      description: "Sweet treats to complete your meal",
      bannerImage: dessert,
      items: [
        { name: "Chocolate Cake", price: "$5.99", image: dessert, description: "Rich chocolate layer cake", isPopular: true },
        { name: "Cheesecake", price: "$6.99", image: dessert, description: "New York style cheesecake" },
        { name: "Ice Cream Sundae", price: "$4.99", image: dessert, description: "Vanilla ice cream with toppings", isNew: true },
        { name: "Brownie", price: "$4.99", image: dessert, description: "Fudgy chocolate brownie" },
        { name: "Apple Pie", price: "$5.99", image: dessert, description: "Classic apple pie with cinnamon" },
        { name: "Tiramisu", price: "$6.99", image: dessert, description: "Italian coffee-flavored dessert", isPopular: true },
      ],
    },
  };

  const categoryData = slug ? categories[slug] : null;

  if (!categoryData) {
    return <Navigate to="/menu" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Category Banner */}
        <section className="relative h-80 overflow-hidden">
          <img
            src={categoryData.bannerImage}
            alt={categoryData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">{categoryData.title}</h1>
              <p className="text-xl text-muted-foreground">{categoryData.description}</p>
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryData.items.map((item) => (
                <Card key={item.name} className="overflow-hidden group relative">
                  {item.isNew && (
                    <Badge className="absolute top-4 right-4 z-10 bg-secondary text-secondary-foreground">
                      NEW
                    </Badge>
                  )}
                  {item.isPopular && (
                    <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
                      POPULAR
                    </Badge>
                  )}
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
                      <span className="text-primary font-bold text-lg">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
