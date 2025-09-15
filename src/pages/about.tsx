import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Target, 
  Users, 
  Globe,
  Award,
  TrendingUp,
  MapPin,
  Phone
} from "lucide-react";

export default function About() {
  const stats = [
    { label: "Patients Served", value: "5,000+", icon: Users },
    { label: "Consultations", value: "15,000+", icon: Heart },
    { label: "Partner Pharmacies", value: "50+", icon: MapPin },
    { label: "Success Rate", value: "95%", icon: TrendingUp }
  ];

  const features = [
    {
      title: "24/7 Healthcare Access",
      description: "Round-the-clock medical support for rural communities across Punjab",
      icon: Heart
    },
    {
      title: "Multilingual Support",
      description: "Services available in Punjabi, Hindi, and English for better communication",
      icon: Globe
    },
    {
      title: "Offline Capability",
      description: "Health records and basic features work even with limited internet connectivity",
      icon: Award
    },
    {
      title: "Local Integration",
      description: "Connected with local pharmacies and healthcare providers in the region",
      icon: MapPin
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-8">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full">
              <Heart className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
            About TeleCare Nabha
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bridging the healthcare gap in rural Punjab through innovative telemedicine solutions. 
            Making quality healthcare accessible, affordable, and available to everyone, everywhere.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="shadow-medical border-0 mb-12">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To transform healthcare delivery in rural Punjab by leveraging technology to connect patients 
                  with qualified medical professionals, ensuring that geographic and economic barriers no longer 
                  prevent access to quality healthcare.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that every individual, regardless of their location or economic status, deserves 
                  access to timely, professional, and compassionate healthcare services.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gradient-card rounded-lg">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Problem Statement */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
            The Healthcare Challenge in Rural Punjab
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-card border-0">
              <CardContent className="p-6 text-center">
                <div className="bg-accent-soft p-3 rounded-full w-fit mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Geographic Barriers</h3>
                <p className="text-muted-foreground text-sm">
                  Many rural areas lack nearby healthcare facilities, requiring long travels for basic medical consultation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-0">
              <CardContent className="p-6 text-center">
                <div className="bg-primary-soft p-3 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Doctor Shortage</h3>
                <p className="text-muted-foreground text-sm">
                  Limited number of qualified doctors available in rural areas, leading to long waiting times.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-0">
              <CardContent className="p-6 text-center">
                <div className="bg-secondary-soft p-3 rounded-full w-fit mx-auto mb-4">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Technology Gap</h3>
                <p className="text-muted-foreground text-sm">
                  Lack of digital healthcare solutions adapted for rural connectivity and local languages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Solutions */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
            Our Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card border-0 hover:shadow-medical transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-soft p-3 rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <Card className="shadow-medical border-0 mb-12 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-6">
              Our Impact on Rural Healthcare
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">75%</div>
                <p className="text-sm text-muted-foreground">Reduction in travel time for consultations</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">60%</div>
                <p className="text-sm text-muted-foreground">Cost savings on healthcare expenses</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">40%</div>
                <p className="text-sm text-muted-foreground">Faster access to medicine information</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">90%</div>
                <p className="text-sm text-muted-foreground">Patient satisfaction rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technology Features */}
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Built for Rural Connectivity
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="bg-primary-soft text-primary">
              Low Bandwidth Optimized
            </Badge>
            <Badge variant="secondary" className="bg-secondary-soft text-secondary">
              Offline Capable
            </Badge>
            <Badge variant="secondary" className="bg-accent-soft text-accent">
              Mobile-First Design
            </Badge>
            <Badge variant="secondary" className="bg-primary-soft text-primary">
              Multi-language Support
            </Badge>
            <Badge variant="secondary" className="bg-secondary-soft text-secondary">
              End-to-End Encrypted
            </Badge>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every feature of TeleCare Nabha is designed with rural constraints in mind, ensuring reliable 
            healthcare access even in areas with limited internet connectivity and basic smartphones.
          </p>
        </div>
      </div>
    </main>
  );
}