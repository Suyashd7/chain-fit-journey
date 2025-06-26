
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dumbbell, Plus } from "lucide-react";
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

    // This would submit to blockchain
    console.log("Logging workout:", { exercise, sets, reps, weight, notes, timestamp: new Date() });
    
    toast({
      title: "Workout Logged!",
      description: `${exercise} has been recorded on the blockchain.`,
    });

    // Reset form
    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
    setNotes("");
    
    onLog();
  };

  return (
    <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <Dumbbell className="w-5 h-5 text-purple-400" />
          Log Workout
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="exercise" className="text-gray-300">Exercise Name *</Label>
            <Input
              id="exercise"
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
              placeholder="e.g., Bench Press, Squats"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="sets" className="text-gray-300">Sets *</Label>
              <Input
                id="sets"
                type="number"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                placeholder="3"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
            <div>
              <Label htmlFor="reps" className="text-gray-300">Reps *</Label>
              <Input
                id="reps"
                type="number"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                placeholder="10"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="weight" className="text-gray-300">Weight (lbs)</Label>
            <Input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="135"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <Label htmlFor="notes" className="text-gray-300">Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="How did the workout feel?"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            <Plus className="w-4 h-4 mr-2" />
            Log Workout to Blockchain
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
