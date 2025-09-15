import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Heart,
  MessageSquare,
  AlertTriangle,
  Headphones
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
    priority: "normal"
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    console.log("Contact form data:", formData);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "",
      message: "",
      priority: "normal"
    });
  };

  const emergencyContacts = [
    {
      title: "Medical Emergency",
      number: "108",
      description: "Ambulance service across India",
      icon: AlertTriangle,
      color: "text-destructive"
    },
    {
      title: "Health Emergency",
      number: "102",
      description: "Free medical helpline",
      icon: Heart,
      color: "text-accent"
    },
    {
      title: "TeleCare Helpline",
      number: "+91 98765 43210",
      description: "24/7 technical support",
      icon: Headphones,
      color: "text-primary"
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["TeleCare Nabha Office", "Main Market, Nabha", "Punjab - 147201"],
      color: "text-secondary"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211", "Available 24/7"],
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["help@telecare-nabha.in", "support@telecare-nabha.in", "Response within 24 hours"],
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Monday - Sunday", "24/7 Emergency Support", "9 AM - 9 PM Regular Support"],
      color: "text-secondary"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-8">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full">
              <MessageSquare className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
            Contact TeleCare Nabha
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our support team for any questions, technical assistance, or feedback. 
            We're here to help you access better healthcare.
          </p>
        </div>

        {/* Emergency Contacts */}
        <Card className="shadow-medical border-0 mb-12 border-accent/20 bg-accent-soft/20">
          <CardHeader>
            <CardTitle className="font-heading text-center text-destructive">
              Emergency Contacts
            </CardTitle>
            <CardDescription className="text-center">
              For immediate medical emergencies, use these numbers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="text-center p-4 bg-background rounded-lg border">
                  <contact.icon className={`h-8 w-8 mx-auto mb-2 ${contact.color}`} />
                  <h3 className="font-semibold text-foreground">{contact.title}</h3>
                  <p className={`text-xl font-bold ${contact.color} my-1`}>{contact.number}</p>
                  <p className="text-sm text-muted-foreground">{contact.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2"
                    onClick={() => window.open(`tel:${contact.number.replace(/\s/g, '')}`)}
                  >
                    Call Now
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-medical border-0">
            <CardHeader>
              <CardTitle className="font-heading">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select onValueChange={(value) => setFormData({...formData, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="medical">Medical Query</SelectItem>
                        <SelectItem value="billing">Billing/Payment</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select defaultValue="normal" onValueChange={(value) => setFormData({...formData, priority: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="Brief description of your query"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe your query in detail..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="font-heading">Get in Touch</CardTitle>
                <CardDescription>
                  Multiple ways to reach our support team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-gradient-card p-3 rounded-lg">
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 bg-secondary-soft/30">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-3">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">How do I book a consultation?</p>
                    <p className="text-xs text-muted-foreground">Visit our Teleconsultation page and select your preferred doctor and time slot.</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Is the service available 24/7?</p>
                    <p className="text-xs text-muted-foreground">Yes, emergency consultations are available round the clock.</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">What if I have connectivity issues?</p>
                    <p className="text-xs text-muted-foreground">Our platform is optimized for low-bandwidth connections. Contact support for assistance.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}