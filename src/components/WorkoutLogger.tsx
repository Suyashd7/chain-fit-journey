
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Activity, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WorkoutLoggerProps {
  onLog: () => void;
}

export const WorkoutLogger = ({ onLog }: WorkoutLoggerProps) => {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [notes, setNotes] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!exercise || !sets || !reps) {
      toast({
        title: "Missing Information",
        description: "Please fill in exercise name, sets, and reps.",
        variant: "destructive",
      });
      return;
    }

    console.log("Logging workout:", { exercise, sets, reps, weight, notes, timestamp: new Date() });
    
    toast({
      title: "Workout Logged",
      description: `${exercise} has been recorded successfully.`,
    });

    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
    setNotes("");
    
    onLog();
  };

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-lg font-medium text-gray-900">
          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
            <Activity className="w-4 h-4 text-gray-700" />
          </div>
          Log Workout
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="exercise" className="text-sm font-medium text-gray-700">
              Exercise Name *
            </Label>
            <Input
              id="exercise"
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
              placeholder="e.g., Bench Press, Squats"
              className="mt-1 border-gray-200 focus:border-gray-900 focus:ring-gray-900"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="sets" className="text-sm font-medium text-gray-700">Sets *</Label>
              <Input
                id="sets"
                type="number"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                placeholder="3"
                className="mt-1 border-gray-200 focus:border-gray-900 focus:ring-gray-900"
              />
            </div>
            <div>
              <Label htmlFor="reps" className="text-sm font-medium text-gray-700">Reps *</Label>
              <Input
                id="reps"
                type="number"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                placeholder="10"
                className="mt-1 border-gray-200 focus:border-gray-900 focus:ring-gray-900"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="weight" className="text-sm font-medium text-gray-700">Weight (lbs)</Label>
            <Input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="135"
              className="mt-1 border-gray-200 focus:border-gray-900 focus:ring-gray-900"
            />
          </div>
          
          <div>
            <Label htmlFor="notes" className="text-sm font-medium text-gray-700">Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="How did the workout feel?"
              className="mt-1 border-gray-200 focus:border-gray-900 focus:ring-gray-900"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gray-900 hover:bg-gray-800 text-white h-11"
          >
            <Plus className="w-4 h-4 mr-2" />
            Log Workout
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
