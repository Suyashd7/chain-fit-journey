
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DietLoggerProps {
  onLog: () => void;
}

export const DietLogger = ({ onLog }: DietLoggerProps) => {
  const [mealType, setMealType] = useState("");
  const [foods, setFoods] = useState("");
  const [calories, setCalories] = useState("");
  const [timing, setTiming] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!mealType || !foods) {
      toast({
        title: "Missing Information",
        description: "Please select meal type and enter foods consumed.",
        variant: "destructive",
      });
      return;
    }

    // This would submit to blockchain
    console.log("Logging meal:", { mealType, foods, calories, timing, timestamp: new Date() });
    
    toast({
      title: "Meal Logged!",
      description: `${mealType} has been recorded on the blockchain.`,
    });

    // Reset form
    setMealType("");
    setFoods("");
    setCalories("");
    setTiming("");
    
    onLog();
  };

  return (
    <Card className="bg-white/5 backdrop-blur-sm border-green-500/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <Calendar className="w-5 h-5 text-green-400" />
          Log Meal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="mealType" className="text-gray-300">Meal Type *</Label>
            <Select value={mealType} onValueChange={setMealType}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Select meal type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="breakfast">Breakfast</SelectItem>
                <SelectItem value="lunch">Lunch</SelectItem>
                <SelectItem value="dinner">Dinner</SelectItem>
                <SelectItem value="snack">Snack</SelectItem>
                <SelectItem value="pre-workout">Pre-workout</SelectItem>
                <SelectItem value="post-workout">Post-workout</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="foods" className="text-gray-300">Foods Consumed *</Label>
            <Textarea
              id="foods"
              value={foods}
              onChange={(e) => setFoods(e.target.value)}
              placeholder="e.g., Grilled chicken, brown rice, broccoli"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="calories" className="text-gray-300">Calories (optional)</Label>
              <Input
                id="calories"
                type="number"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                placeholder="450"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
            <div>
              <Label htmlFor="timing" className="text-gray-300">Time</Label>
              <Input
                id="timing"
                type="time"
                value={timing}
                onChange={(e) => setTiming(e.target.value)}
                className="bg-white/10 border-white/20 text-white"
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
          >
            <Plus className="w-4 h-4 mr-2" />
            Log Meal to Blockchain
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
