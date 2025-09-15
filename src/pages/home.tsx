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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-6xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
        
        {/* Background decoration */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
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
            <Card className="border-0 shadow-card bg-gradient-card hover:shadow-medical transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary-soft p-3 rounded-full w-fit mb-4">
                  <Video className="h-8 w-8 text-primary" />
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

            <Card className="border-0 shadow-card bg-gradient-card hover:shadow-medical transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto bg-secondary-soft p-3 rounded-full w-fit mb-4">
                  <Pill className="h-8 w-8 text-secondary" />
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

            <Card className="border-0 shadow-card bg-gradient-card hover:shadow-medical transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto bg-accent-soft p-3 rounded-full w-fit mb-4">
                  <Activity className="h-8 w-8 text-accent" />
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

            <Card className="border-0 shadow-card bg-gradient-card hover:shadow-medical transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary-soft p-3 rounded-full w-fit mb-4">
                  <Heart className="h-8 w-8 text-primary" />
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
      <section className="py-24 sm:py-32 bg-muted/30">
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
              <div className="flex flex-col items-center text-center">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <Users className="h-5 w-5 flex-none text-primary" />
                  24/7 Doctor Availability
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">Access to qualified doctors round the clock, ensuring healthcare support when you need it most.</p>
                </dd>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <Smartphone className="h-5 w-5 flex-none text-secondary" />
                  Mobile-First Design
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">Optimized for smartphones and tablets with minimal data usage for rural connectivity.</p>
                </dd>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <Shield className="h-5 w-5 flex-none text-accent" />
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