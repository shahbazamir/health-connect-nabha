import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Video, 
  Pill, 
  Activity, 
  Heart, 
  Users, 
  Clock, 
  Shield,
  Smartphone,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden morphing-bg medical-pattern py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <div className="pulse-ring inline-block mb-8">
              <div className="bg-primary/20 p-4 rounded-full">
                <Heart className="h-12 w-12 text-primary animate-glow-pulse" />
              </div>
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-6xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Healthcare Without Boundaries
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Connect with qualified doctors, manage your health records, and access essential medicines 
              from anywhere in rural Punjab. Quality healthcare is now just a click away.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link to="/register">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration with floating elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-xl float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-xl float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-full blur-xl float"></div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] animate-morph-bg" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Complete Healthcare Solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need for modern healthcare delivery in rural areas, optimized for low-bandwidth connectivity.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            <Card className="border-0 shadow-card bg-gradient-card hover:shadow-medical transition-all duration-500 card-3d group hover:glow-primary animate-slide-up">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary-soft p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300 pulse-ring">
                  <Video className="h-8 w-8 text-primary group-hover:animate-glow-pulse" />
                </div>
                <CardTitle className="font-heading">Video Consultations</CardTitle>
                <CardDescription>
                  Connect with certified doctors via secure video calls optimized for rural internet speeds.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/teleconsultation">Book Consultation</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card hover:shadow-medical transition-all duration-500 card-3d group hover:glow-secondary animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="text-center">
                <div className="mx-auto bg-secondary-soft p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300 pulse-ring">
                  <Pill className="h-8 w-8 text-secondary group-hover:animate-glow-pulse" />
                </div>
                <CardTitle className="font-heading">Medicine Availability</CardTitle>
                <CardDescription>
                  Check real-time medicine stock at local pharmacies before visiting. Save time and travel costs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/medicine">Check Medicine</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card hover:shadow-medical transition-all duration-500 card-3d group hover:glow-accent animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <CardHeader className="text-center">
                <div className="mx-auto bg-accent-soft p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300 pulse-ring">
                  <Activity className="h-8 w-8 text-accent group-hover:animate-glow-pulse" />
                </div>
                <CardTitle className="font-heading">AI Symptom Checker</CardTitle>
                <CardDescription>
                  Get instant preliminary assessments and guidance on when to seek professional medical care.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/symptoms">Check Symptoms</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card hover:shadow-medical transition-all duration-500 card-3d group hover:glow-primary animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary-soft p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300 pulse-ring">
                  <Heart className="h-8 w-8 text-primary group-hover:animate-glow-pulse" />
                </div>
                <CardTitle className="font-heading">Digital Health Records</CardTitle>
                <CardDescription>
                  Secure, offline-accessible health records that sync when internet is available.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/register">Create Account</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32 bg-muted/30 hexagon-pattern relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose TeleCare Nabha?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Designed specifically for rural healthcare challenges with innovative solutions.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col items-center text-center group animate-fade-in-up"  style={{ animationDelay: '0.2s' }}>
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="pulse-ring">
                    <Users className="h-5 w-5 flex-none text-primary group-hover:animate-glow-pulse" />
                  </div>
                  24/7 Doctor Availability
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">Access to qualified doctors round the clock, ensuring healthcare support when you need it most.</p>
                </dd>
              </div>
              
              <div className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="pulse-ring">
                    <Smartphone className="h-5 w-5 flex-none text-secondary group-hover:animate-glow-pulse" />
                  </div>
                  Mobile-First Design
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">Optimized for smartphones and tablets with minimal data usage for rural connectivity.</p>
                </dd>
              </div>
              
              <div className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="pulse-ring">
                    <Shield className="h-5 w-5 flex-none text-accent group-hover:animate-glow-pulse" />
                  </div>
                  Secure & Private
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">End-to-end encrypted consultations and secure storage of all your health information.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Transform Your Healthcare Experience?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Join thousands of families in rural Punjab who are already benefiting from accessible, quality healthcare.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link to="/register">Start Your Journey</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}