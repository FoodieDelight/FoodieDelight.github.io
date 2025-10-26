import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Locations = () => {
  const locations = [
    {
      name: "Downtown Branch",
      address: "123 Main Street, City Center",
      phone: "+1 (555) 123-4567",
      hours: "10:00 AM - 11:00 PM",
    },
    {
      name: "North Plaza",
      address: "456 North Avenue, Shopping Mall",
      phone: "+1 (555) 234-5678",
      hours: "11:00 AM - 10:00 PM",
    },
    {
      name: "East Side",
      address: "789 East Boulevard, Food Court",
      phone: "+1 (555) 345-6789",
      hours: "10:00 AM - 11:00 PM",
    },
    {
      name: "West End",
      address: "321 West Road, Community Center",
      phone: "+1 (555) 456-7890",
      hours: "9:00 AM - 10:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center mb-4">Our Locations</h1>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Find a FoodieDelight near you
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {locations.map((location) => (
                <Card key={location.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold mb-4">{location.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground">{location.address}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                        <p className="text-muted-foreground">{location.phone}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                        <p className="text-muted-foreground">{location.hours}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-muted">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Store Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Dine-In</h4>
                    <p className="text-muted-foreground">Comfortable seating available</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Takeaway</h4>
                    <p className="text-muted-foreground">Quick pickup service</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Delivery</h4>
                    <p className="text-muted-foreground">Fast delivery to your door</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Locations;
