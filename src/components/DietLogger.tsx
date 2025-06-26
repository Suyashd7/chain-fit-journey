
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

    console.log("Logging meal:", { mealType, foods, calories, timing, timestamp: new Date() });
    
    toast({
      title: "Meal Logged",
      description: `${mealType} has been recorded successfully.`,
    });

    setMealType("");
    setFoods("");
    setCalories("");
    setTiming("");
    
    onLog();
  };

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-lg font-medium text-gray-900">
          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
            <Calendar className="w-4 h-4 text-gray-700" />
          </div>
          Log Meal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="mealType" className="text-sm font-medium text-gray-700">Meal Type *</Label>
            <Select value={mealType} onValueChange={setMealType}>
              <SelectTrigger className="mt-1 border-gray-200 focus:border-gray-900 focus:ring-gray-900">
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
            <Label htmlFor="foods" className="text-sm font-medium text-gray-700">Foods Consumed *</Label>
            <Textarea
              id="foods"
              value={foods}
              onChange={(e) => setFoods(e.target.value)}
              placeholder="e.g., Grilled chicken, brown rice, broccoli"
              className="mt-1 border-gray-200 focus:border-gray-900 focus:ring-gray-900"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="calories" className="text-sm font-medium text-gray-700">Calories</Label>
              <Input
                id="calories"
                type="number"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                placeholder="450"
                className="mt-1 border-gray-200 focus:border-gray-900 focus:ring-gray-900"
              />
            </div>
            <div>
              <Label htmlFor="timing" className="text-sm font-medium text-gray-700">Time</Label>
              <Input
                id="timing"
                type="time"
                value={timing}
                onChange={(e) => setTiming(e.target.value)}
                className="mt-1 border-gray-200 focus:border-gray-900 focus:ring-gray-900"
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gray-900 hover:bg-gray-800 text-white h-11"
          >
            <Plus className="w-4 h-4 mr-2" />
            Log Meal
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
