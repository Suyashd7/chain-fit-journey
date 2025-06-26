import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

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
    <Card className="bg-white/5 backdrop-blur-sm border-pink-500/20">
      <CardHeader>
        <CardTitle className="text-white">Daily Bodyweight</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Label htmlFor="weight" className="text-gray-300">Enter Today's Bodyweight (kg or lbs)</Label>
          <div className="flex gap-2">
            <Input
              id="weight"
              type="number"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              placeholder="e.g., 70.5"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button onClick={handleLog} className="bg-gradient-to-r from-pink-500 to-purple-500">Log</Button>
          </div>
          {entries.length > 0 && (
            <div className="mt-4">
              <div className="font-semibold text-white mb-2">Previous Entries:</div>
              <ul className="text-gray-200 space-y-1 max-h-40 overflow-y-auto">
                {entries.map((entry, idx) => (
                  <li key={idx}>{entry.date}: <span className="font-mono">{entry.weight}</span></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default BodyweightLogger; 