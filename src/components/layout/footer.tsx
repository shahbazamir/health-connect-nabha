import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl">TeleCare Nabha</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Bridging healthcare gaps in rural Punjab through innovative telemedicine solutions. 
              Accessible, affordable, and reliable healthcare for everyone.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/teleconsultation" className="hover:text-primary transition-colors">Book Consultation</Link></li>
              <li><Link to="/medicine" className="hover:text-primary transition-colors">Find Medicine</Link></li>
              <li><Link to="/symptoms" className="hover:text-primary transition-colors">Check Symptoms</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Emergency Contacts</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>108 (Ambulance)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>102 (Emergency)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>help@telecare-nabha.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Nabha, Punjab</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 TeleCare Nabha. All rights reserved. Making healthcare accessible for rural communities.
          </p>
        </div>
      </div>
    </footer>
  );
}