
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Scale } from "lucide-react";

interface Entry {
  date: string;
  weight: string;
}

export const BodyweightLogger = () => {
  const [weight, setWeight] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);

  const handleLog = () => {
    if (!weight) return;
    const today = new Date().toISOString().slice(0, 10);
    setEntries(prev => [{ date: today, weight }, ...prev]);
    setWeight("");
  };

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-lg font-medium text-gray-900">
          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
            <Scale className="w-4 h-4 text-gray-700" />
          </div>
          Daily Bodyweight
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <Label htmlFor="weight" className="text-sm font-medium text-gray-700">
              Today's Bodyweight (kg or lbs)
            </Label>
            <div className="flex gap-3 mt-1">
              <Input
                id="weight"
                type="number"
                value={weight}
                onChange={e => setWeight(e.target.value)}
                placeholder="70.5"
                className="border-gray-200 focus:border-gray-900 focus:ring-gray-900"
              />
              <Button onClick={handleLog} className="bg-gray-900 hover:bg-gray-800 text-white px-6">
                Log
              </Button>
            </div>
          </div>
          {entries.length > 0 && (
            <div>
              <div className="font-medium text-gray-900 mb-3">Previous Entries</div>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {entries.map((entry, idx) => (
                  <div key={idx} className="flex justify-between text-sm p-2 bg-gray-50 rounded">
                    <span className="text-gray-600">{entry.date}</span>
                    <span className="font-mono text-gray-900">{entry.weight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default BodyweightLogger;
