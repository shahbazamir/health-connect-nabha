import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Brain, 
  Heart, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Thermometer,
  Activity,
  User,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const symptomCategories = [
  {
    id: "general",
    name: "General Symptoms",
    icon: Activity,
    symptoms: [
      "Fever", "Fatigue", "Loss of appetite", "Weight loss", "Night sweats", "Chills"
    ]
  },
  {
    id: "respiratory",
    name: "Respiratory",
    icon: Activity,
    symptoms: [
      "Cough", "Shortness of breath", "Chest pain", "Wheezing", "Sore throat", "Runny nose"
    ]
  },
  {
    id: "digestive",
    name: "Digestive",
    icon: Activity,
    symptoms: [
      "Nausea", "Vomiting", "Diarrhea", "Constipation", "Abdominal pain", "Heartburn"
    ]
  },
  {
    id: "neurological",
    name: "Neurological",
    icon: Brain,
    symptoms: [
      "Headache", "Dizziness", "Confusion", "Memory problems", "Seizures", "Numbness"
    ]
  },
  {
    id: "cardiovascular",
    name: "Cardiovascular",
    icon: Heart,
    symptoms: [
      "Chest pain", "Palpitations", "Shortness of breath", "Swelling in legs", "Fainting"
    ]
  }
];

const urgencyLevels = {
  low: {
    color: "bg-secondary text-secondary-foreground",
    message: "These symptoms are generally not urgent. Consider scheduling a routine consultation.",
    recommendation: "Schedule a teleconsultation within 1-2 days"
  },
  medium: {
    color: "bg-accent text-accent-foreground",
    message: "These symptoms should be evaluated soon. Consider booking a consultation today.",
    recommendation: "Book a teleconsultation within 24 hours"
  },
  high: {
    color: "bg-destructive text-destructive-foreground",
    message: "These symptoms require immediate medical attention. Seek emergency care.",
    recommendation: "Contact emergency services (108) or visit nearest hospital immediately"
  }
};

export default function Symptoms() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [ageGroup, setAgeGroup] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [assessment, setAssessment] = useState<any>(null);
  const { toast } = useToast();

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const analyzeSymptoms = () => {
    if (selectedSymptoms.length === 0) {
      toast({
        title: "No symptoms selected",
        description: "Please select at least one symptom to analyze.",
        variant: "destructive"
      });
      return;
    }

    // Simple AI-like logic for demonstration
    const urgentSymptoms = ["Chest pain", "Shortness of breath", "Seizures", "Fainting", "Severe headache"];
    const moderateSymptoms = ["Fever", "Persistent cough", "Abdominal pain", "Palpitations"];
    
    let urgencyLevel = "low";
    if (selectedSymptoms.some(s => urgentSymptoms.includes(s))) {
      urgencyLevel = "high";
    } else if (selectedSymptoms.some(s => moderateSymptoms.includes(s))) {
      urgencyLevel = "medium";
    }

    // Generate possible conditions (simplified)
    const possibleConditions = [];
    if (selectedSymptoms.includes("Fever") && selectedSymptoms.includes("Cough")) {
      possibleConditions.push("Upper respiratory infection", "Flu", "COVID-19");
    }
    if (selectedSymptoms.includes("Chest pain") && selectedSymptoms.includes("Shortness of breath")) {
      possibleConditions.push("Heart condition", "Pneumonia", "Anxiety");
    }
    if (selectedSymptoms.includes("Headache") && selectedSymptoms.includes("Fever")) {
      possibleConditions.push("Viral infection", "Migraine", "Sinusitis");
    }
    if (possibleConditions.length === 0) {
      possibleConditions.push("Multiple possible conditions", "Requires professional evaluation");
    }

    setAssessment({
      urgencyLevel,
      possibleConditions: possibleConditions.slice(0, 3),
      recommendations: getRecommendations(urgencyLevel, selectedSymptoms)
    });
  };

  const getRecommendations = (urgency: string, symptoms: string[]) => {
    const baseRecs = [
      "Stay hydrated and get adequate rest",
      "Monitor your symptoms closely",
      "Take over-the-counter medications as needed for symptom relief"
    ];

    if (urgency === "high") {
      return [
        "Seek immediate medical attention",
        "Do not delay - contact emergency services",
        "Bring someone with you if possible"
      ];
    } else if (urgency === "medium") {
      return [
        "Schedule a consultation with a doctor within 24 hours",
        "Monitor symptoms and note any changes",
        ...baseRecs
      ];
    } else {
      return [
        "Consider scheduling a routine consultation",
        ...baseRecs,
        "Contact a doctor if symptoms worsen"
      ];
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-8">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
            AI Symptom Checker
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get preliminary guidance on your symptoms. This tool helps you understand when to seek medical care but should not replace professional medical advice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Symptom Selection */}
          <div className="lg:col-span-2 space-y-6">
            {/* Patient Information */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Patient Information
                </CardTitle>
                <CardDescription>
                  Provide basic information for better assessment
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Age Group</label>
                  <Select onValueChange={setAgeGroup}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select age group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="child">Child (0-12 years)</SelectItem>
                      <SelectItem value="teen">Teenager (13-19 years)</SelectItem>
                      <SelectItem value="adult">Adult (20-59 years)</SelectItem>
                      <SelectItem value="senior">Senior (60+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Symptom Duration</label>
                  <Select onValueChange={setDuration}>
                    <SelectTrigger>
                      <SelectValue placeholder="How long?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hours">Few hours</SelectItem>
                      <SelectItem value="1-2days">1-2 days</SelectItem>
                      <SelectItem value="3-7days">3-7 days</SelectItem>
                      <SelectItem value="weeks">More than a week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Symptom Categories */}
            {symptomCategories.map((category) => (
              <Card key={category.id} className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="font-heading flex items-center gap-2">
                    <category.icon className="h-5 w-5 text-primary" />
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.symptoms.map((symptom) => (
                      <div key={symptom} className="flex items-center space-x-2">
                        <Checkbox
                          id={symptom}
                          checked={selectedSymptoms.includes(symptom)}
                          onCheckedChange={() => handleSymptomToggle(symptom)}
                        />
                        <label htmlFor={symptom} className="text-sm font-medium cursor-pointer">
                          {symptom}
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Analysis Panel */}
          <div className="space-y-6">
            <Card className="shadow-medical border-0 sticky top-24">
              <CardHeader>
                <CardTitle className="font-heading">Selected Symptoms</CardTitle>
                <CardDescription>
                  {selectedSymptoms.length} symptoms selected
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedSymptoms.length > 0 ? (
                  <div className="space-y-2">
                    {selectedSymptoms.map((symptom) => (
                      <Badge key={symptom} variant="secondary" className="mr-1 mb-1">
                        {symptom}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm">
                    Select symptoms from the categories to get started
                  </p>
                )}

                <Button 
                  onClick={analyzeSymptoms}
                  disabled={selectedSymptoms.length === 0}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                >
                  <Brain className="h-4 w-4 mr-2" />
                  Analyze Symptoms
                </Button>
              </CardContent>
            </Card>

            {/* Assessment Results */}
            {assessment && (
              <Card className="shadow-medical border-0">
                <CardHeader>
                  <CardTitle className="font-heading">Assessment Results</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Badge className={urgencyLevels[assessment.urgencyLevel].color}>
                      {assessment.urgencyLevel.toUpperCase()} PRIORITY
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-2">
                      {urgencyLevels[assessment.urgencyLevel].message}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Possible Conditions:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {assessment.possibleConditions.map((condition: string, index: number) => (
                        <li key={index}>• {condition}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Recommendations:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {assessment.recommendations.map((rec: string, index: number) => (
                        <li key={index}>• {rec}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <Button className="w-full" variant="outline">
                      Book Consultation
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Disclaimer */}
            <Card className="border-accent/20 bg-accent-soft/30">
              <CardContent className="p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Medical Disclaimer</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      This tool provides general information only and should not replace professional medical advice. 
                      Always consult with a qualified healthcare provider for proper diagnosis and treatment.
                    </p>
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