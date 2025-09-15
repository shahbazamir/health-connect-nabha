import { Heart, Activity, Pill, Shield } from "lucide-react";

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating medical icons */}
      <div className="absolute top-1/4 left-1/12 text-primary/20 float">
        <Heart className="h-8 w-8" />
      </div>
      <div className="absolute top-1/3 right-1/6 text-secondary/20 float-delayed">
        <Activity className="h-6 w-6" />
      </div>
      <div className="absolute bottom-1/3 left-1/6 text-accent/20 float">
        <Pill className="h-7 w-7" />
      </div>
      <div className="absolute top-2/3 right-1/12 text-primary/20 float-delayed">
        <Shield className="h-9 w-9" />
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/6 left-1/3 w-4 h-4 bg-primary/10 rounded-full float"></div>
      <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-secondary/10 rounded-full float-delayed"></div>
      <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-accent/10 rounded-full float"></div>
      <div className="absolute bottom-1/6 right-1/4 w-5 h-5 bg-primary/10 rounded-full float-delayed"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/5 right-1/5 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl float"></div>
      <div className="absolute bottom-1/5 left-1/5 w-24 h-24 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-xl float-delayed"></div>
    </div>
  );
}