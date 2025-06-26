
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Dumbbell } from "lucide-react";

export const HistoryViewer = () => {
  // Mock data - this would come from blockchain
  const mockEntries = [
    {
      id: 1,
      type: "workout",
      date: "2024-01-15",
      data: { exercise: "Bench Press", sets: 3, reps: 10, weight: 135 }
    },
    {
      id: 2,
      type: "meal",
      date: "2024-01-15",
      data: { mealType: "lunch", foods: "Grilled chicken, brown rice, broccoli", calories: 450 }
    },
    {
      id: 3,
      type: "workout",
      date: "2024-01-14",
      data: { exercise: "Squats", sets: 4, reps: 8, weight: 185 }
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
        <CardHeader>
          <CardTitle className="text-white">Filter History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Select>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="All days" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="workout">Workouts</SelectItem>
                <SelectItem value="meal">Meals</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="All meals" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="breakfast">Breakfast</SelectItem>
                <SelectItem value="lunch">Lunch</SelectItem>
                <SelectItem value="dinner">Dinner</SelectItem>
                <SelectItem value="snack">Snack</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {mockEntries.map((entry) => (
          <Card key={entry.id} className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {entry.type === "workout" ? (
                    <Dumbbell className="w-5 h-5 text-purple-400" />
                  ) : (
                    <Calendar className="w-5 h-5 text-green-400" />
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant={entry.type === "workout" ? "default" : "secondary"}>
                        {entry.type}
                      </Badge>
                      <span className="text-sm text-gray-300">{entry.date}</span>
                    </div>
                    {entry.type === "workout" ? (
                      <p className="text-white">
                        <span className="font-semibold">{entry.data.exercise}</span> - 
                        {entry.data.sets} sets × {entry.data.reps} reps
                        {entry.data.weight && ` @ ${entry.data.weight} lbs`}
                      </p>
                    ) : (
                      <p className="text-white">
                        <span className="font-semibold capitalize">{entry.data.mealType}</span> - 
                        {entry.data.foods}
                        {entry.data.calories && ` (${entry.data.calories} cal)`}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
