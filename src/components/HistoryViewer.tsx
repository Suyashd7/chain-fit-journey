
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Activity } from "lucide-react";

export const HistoryViewer = () => {
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
    <div className="space-y-8">
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-medium text-gray-900">Filter History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Select>
              <SelectTrigger className="border-gray-200 focus:border-gray-900 focus:ring-gray-900">
                <SelectValue placeholder="All days" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="border-gray-200 focus:border-gray-900 focus:ring-gray-900">
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="workout">Workouts</SelectItem>
                <SelectItem value="meal">Meals</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="border-gray-200 focus:border-gray-900 focus:ring-gray-900">
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
          <Card key={entry.id} className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    {entry.type === "workout" ? (
                      <Activity className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Calendar className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant={entry.type === "workout" ? "default" : "secondary"} className="text-xs">
                        {entry.type}
                      </Badge>
                      <span className="text-sm text-gray-500">{entry.date}</span>
                    </div>
                    {entry.type === "workout" ? (
                      <p className="text-gray-900">
                        <span className="font-medium">{entry.data.exercise}</span> - 
                        {entry.data.sets} sets × {entry.data.reps} reps
                        {entry.data.weight && ` @ ${entry.data.weight} lbs`}
                      </p>
                    ) : (
                      <p className="text-gray-900">
                        <span className="font-medium capitalize">{entry.data.mealType}</span> - 
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
