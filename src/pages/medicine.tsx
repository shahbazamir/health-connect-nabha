import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MapPin, 
  Phone, 
  Clock, 
  Pill,
  CheckCircle,
  XCircle,
  AlertCircle,
  Navigation
} from "lucide-react";
import { useState } from "react";

const pharmacies = [
  {
    id: 1,
    name: "HealthCare Pharmacy",
    address: "Main Market, Nabha",
    phone: "+91 98765 43210",
    distance: "0.5 km",
    openUntil: "10:00 PM",
    rating: 4.6,
    medicines: {
      "Paracetamol 500mg": { available: true, price: 12, stock: 50 },
      "Crocin Advance": { available: true, price: 18, stock: 30 },
      "Amoxicillin 250mg": { available: false, price: 85, stock: 0 },
      "Combiflam": { available: true, price: 22, stock: 15 }
    }
  },
  {
    id: 2,
    name: "City Medical Store",
    address: "Civil Lines, Nabha",
    phone: "+91 98765 43211",
    distance: "1.2 km",
    openUntil: "9:00 PM",
    rating: 4.4,
    medicines: {
      "Paracetamol 500mg": { available: true, price: 15, stock: 80 },
      "Crocin Advance": { available: false, price: 18, stock: 0 },
      "Amoxicillin 250mg": { available: true, price: 90, stock: 25 },
      "Combiflam": { available: true, price: 25, stock: 40 }
    }
  },
  {
    id: 3,
    name: "Apollo Pharmacy",
    address: "Bus Stand Road, Nabha",
    phone: "+91 98765 43212",
    distance: "2.1 km",
    openUntil: "11:00 PM",
    rating: 4.8,
    medicines: {
      "Paracetamol 500mg": { available: true, price: 10, stock: 100 },
      "Crocin Advance": { available: true, price: 20, stock: 60 },
      "Amoxicillin 250mg": { available: true, price: 80, stock: 35 },
      "Combiflam": { available: true, price: 20, stock: 55 }
    }
  }
];

const commonMedicines = [
  "Paracetamol 500mg",
  "Crocin Advance",
  "Amoxicillin 250mg",
  "Combiflam",
  "Cetirizine 10mg",
  "Omeprazole 20mg",
  "Azithromycin 500mg",
  "Ibuprofen 400mg"
];

export default function Medicine() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMedicine, setSelectedMedicine] = useState("");

  const handleSearch = (medicine: string) => {
    setSelectedMedicine(medicine);
    setSearchTerm(medicine);
  };

  const filteredPharmacies = pharmacies.filter(pharmacy => 
    !selectedMedicine || pharmacy.medicines[selectedMedicine]
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-8">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
            Medicine Availability Checker
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check real-time medicine availability at local pharmacies in Nabha. Save time and avoid unnecessary trips.
          </p>
        </div>

        {/* Search Section */}
        <Card className="shadow-medical border-0 mb-8">
          <CardHeader>
            <CardTitle className="font-heading flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              Search Medicine
            </CardTitle>
            <CardDescription>
              Enter medicine name or select from common medicines
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for medicine (e.g., Paracetamol, Crocin...)"
                className="pl-10"
              />
            </div>
            
            <div>
              <p className="text-sm font-medium mb-3">Common Medicines:</p>
              <div className="flex flex-wrap gap-2">
                {commonMedicines.map((medicine) => (
                  <Button
                    key={medicine}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSearch(medicine)}
                    className="text-xs hover:bg-primary-soft hover:border-primary"
                  >
                    <Pill className="h-3 w-3 mr-1" />
                    {medicine}
                  </Button>
                ))}
              </div>
            </div>

            {searchTerm && (
              <Button 
                onClick={() => handleSearch(searchTerm)}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                Check Availability
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Results Section */}
        {selectedMedicine && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-xl font-semibold">
                Results for "{selectedMedicine}"
              </h2>
              <Badge variant="secondary" className="bg-secondary-soft text-secondary">
                {filteredPharmacies.length} pharmacies found
              </Badge>
            </div>

            <div className="space-y-4">
              {filteredPharmacies.map((pharmacy) => {
                const medicineInfo = pharmacy.medicines[selectedMedicine];
                return (
                  <Card key={pharmacy.id} className="shadow-card border-0 hover:shadow-medical transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-heading font-semibold text-lg">{pharmacy.name}</h3>
                              <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                                <MapPin className="h-4 w-4" />
                                {pharmacy.address}
                              </div>
                              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                                <Navigation className="h-4 w-4" />
                                {pharmacy.distance} away
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1 text-sm">
                                <Clock className="h-4 w-4 text-secondary" />
                                <span className="text-secondary font-medium">
                                  Open until {pharmacy.openUntil}
                                </span>
                              </div>
                            </div>
                          </div>

                          {medicineInfo && (
                            <div className="bg-gradient-card p-4 rounded-lg mb-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  {medicineInfo.available ? (
                                    <CheckCircle className="h-6 w-6 text-secondary" />
                                  ) : (
                                    <XCircle className="h-6 w-6 text-destructive" />
                                  )}
                                  <div>
                                    <p className="font-medium">
                                      {medicineInfo.available ? "Available" : "Out of Stock"}
                                    </p>
                                    {medicineInfo.available && (
                                      <p className="text-sm text-muted-foreground">
                                        {medicineInfo.stock} units in stock
                                      </p>
                                    )}
                                  </div>
                                </div>
                                {medicineInfo.available && (
                                  <div className="text-right">
                                    <p className="text-lg font-semibold text-primary">
                                      ₹{medicineInfo.price}
                                    </p>
                                    <p className="text-xs text-muted-foreground">per unit</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button 
                              variant="outline" 
                              className="flex items-center gap-2"
                              onClick={() => window.open(`tel:${pharmacy.phone}`)}
                            >
                              <Phone className="h-4 w-4" />
                              {pharmacy.phone}
                            </Button>
                            <Button 
                              variant="outline"
                              onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(pharmacy.address)}`)}
                            >
                              <MapPin className="h-4 w-4 mr-2" />
                              Get Directions
                            </Button>
                            {medicineInfo?.available && (
                              <Button className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 transition-opacity">
                                Reserve Medicine
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Information Section */}
        <Card className="border-secondary/20 bg-secondary-soft/30">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-secondary mt-1" />
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Important Information</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Medicine availability is updated in real-time but may change quickly</li>
                  <li>• Always call the pharmacy to confirm before visiting</li>
                  <li>• Prescription medicines require a valid doctor's prescription</li>
                  <li>• Prices may vary and are subject to change</li>
                  <li>• For emergency medicines, call 108 for immediate assistance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}