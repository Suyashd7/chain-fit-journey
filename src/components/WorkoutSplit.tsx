import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const SPLIT_OPTIONS = [
  { value: "push-pull-legs", label: "Push/Pull/Legs" },
  { value: "upper-lower", label: "Upper/Lower" },
  { value: "full-body", label: "Full Body" },
  { value: "custom", label: "Custom" },
];

export const WorkoutSplit = () => {
  const [splitType, setSplitType] = useState("");
  const [customDays, setCustomDays] = useState("");
  const [savedSplit, setSavedSplit] = useState<{ type: string; days?: string } | null>(null);

  const handleSave = () => {
    setSavedSplit({ type: splitType, days: splitType === "custom" ? customDays : undefined });
  };

  return (
    <Card className="bg-white/5 backdrop-blur-sm border-blue-500/20">
      <CardHeader>
        <CardTitle className="text-white">My Workout Split</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Label htmlFor="splitType" className="text-gray-300">Select Split</Label>
          <Select value={splitType} onValueChange={setSplitType}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Choose split type" />
            </SelectTrigger>
            <SelectContent>
              {SPLIT_OPTIONS.map(opt => (
                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {splitType === "custom" && (
            <div>
              <Label htmlFor="customDays" className="text-gray-300">Custom Days (comma separated)</Label>
              <Input
                id="customDays"
                value={customDays}
                onChange={e => setCustomDays(e.target.value)}
                placeholder="e.g., Chest, Back, Legs, Arms"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
          )}
          <Button onClick={handleSave} className="bg-gradient-to-r from-blue-500 to-purple-500 w-full">Save Split</Button>
          {savedSplit && (
            <div className="mt-4 text-white">
              <div className="font-semibold">Current Split:</div>
              <div>{SPLIT_OPTIONS.find(opt => opt.value === savedSplit.type)?.label || "Custom"}</div>
              {savedSplit.days && <div>Days: {savedSplit.days}</div>}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default WorkoutSplit; 