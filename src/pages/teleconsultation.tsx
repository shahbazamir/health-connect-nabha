import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Video, 
  Clock, 
  Star, 
  CalendarDays, 
  Languages,
  Stethoscope,
  Heart,
  Brain,
  Baby,
  Users
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const doctors = [
  {
    id: 1,
    name: "Dr. Preet Kaur",
    specialty: "General Medicine",
    experience: "8 years",
    rating: 4.8,
    languages: ["Punjabi", "Hindi", "English"],
    consultationFee: 150,
    nextAvailable: "Today 2:00 PM",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Dr. Rajesh Sharma",
    specialty: "Pediatrics",
    experience: "12 years",
    rating: 4.9,
    languages: ["Hindi", "English"],
    consultationFee: 200,
    nextAvailable: "Today 4:30 PM",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Dr. Simran Singh",
    specialty: "Gynecology",
    experience: "10 years",
    rating: 4.7,
    languages: ["Punjabi", "Hindi", "English"],
    consultationFee: 250,
    nextAvailable: "Tomorrow 10:00 AM",
    avatar: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Dr. Maninder Pal",
    specialty: "Cardiology",
    experience: "15 years",
    rating: 4.9,
    languages: ["Punjabi", "English"],
    consultationFee: 300,
    nextAvailable: "Tomorrow 2:00 PM",
    avatar: "/placeholder.svg"
  }
];

const specialties = [
  { id: "general", name: "General Medicine", icon: Stethoscope },
  { id: "cardiology", name: "Cardiology", icon: Heart },
  { id: "neurology", name: "Neurology", icon: Brain },
  { id: "pediatrics", name: "Pediatrics", icon: Baby },
  { id: "gynecology", name: "Gynecology", icon: Users },
];

export default function Teleconsultation() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const { toast } = useToast();

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleBookConsultation = (doctorId: number) => {
    toast({
      title: "Consultation Booked!",
      description: "You will receive a confirmation call shortly. Please be ready 5 minutes before your appointment.",
    });
  };

  const filteredDoctors = selectedSpecialty 
    ? doctors.filter(doctor => doctor.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase()))
    : doctors;

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
            Video Consultations
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with qualified doctors from the comfort of your home. Secure, private, and optimized for rural internet connections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Panel */}
          <div className="lg:col-span-1">
            <Card className="shadow-medical border-0 sticky top-24">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  Book Consultation
                </CardTitle>
                <CardDescription>
                  Select your preferred date, time, and specialty
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Specialty</label>
                  <Select onValueChange={setSelectedSpecialty}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Specialties</SelectItem>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty.id} value={specialty.id}>
                          {specialty.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Select Date</label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Preferred Time</label>
                  <Select onValueChange={setSelectedTimeSlot}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-secondary-soft p-4 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Video Call Requirements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Stable internet connection</li>
                    <li>• Camera and microphone access</li>
                    <li>• Well-lit, quiet environment</li>
                    <li>• Have your medical history ready</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Doctors List */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-semibold">Available Doctors</h2>
              <Badge variant="secondary" className="bg-secondary-soft text-secondary">
                {filteredDoctors.length} doctors found
              </Badge>
            </div>

            <div className="space-y-4">
              {filteredDoctors.map((doctor) => (
                <Card key={doctor.id} className="shadow-card border-0 hover:shadow-medical transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={doctor.avatar} alt={doctor.name} />
                          <AvatarFallback className="bg-primary-soft text-primary text-lg font-medium">
                            {doctor.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-heading font-semibold text-lg">{doctor.name}</h3>
                              <p className="text-muted-foreground text-sm">{doctor.specialty}</p>
                              <p className="text-muted-foreground text-sm">{doctor.experience} experience</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{doctor.rating}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center gap-1">
                              <Languages className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                {doctor.languages.join(", ")}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-secondary" />
                              <span className="text-sm text-secondary font-medium">
                                {doctor.nextAvailable}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-lg font-semibold text-foreground">
                                ₹{doctor.consultationFee}
                              </span>
                              <span className="text-sm text-muted-foreground ml-1">
                                /consultation
                              </span>
                            </div>
                            <Button 
                              onClick={() => handleBookConsultation(doctor.id)}
                              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                            >
                              <Video className="h-4 w-4 mr-2" />
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Section */}
            <Card className="mt-8 border-accent/20 bg-accent-soft/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Emergency Consultation</h3>
                    <p className="text-sm text-muted-foreground">Need immediate medical attention?</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Call Emergency: 108
                  </Button>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Urgent Video Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}