
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
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium text-gray-900">Workout Split</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <Label htmlFor="splitType" className="text-sm font-medium text-gray-700">Select Split</Label>
            <Select value={splitType} onValueChange={setSplitType}>
              <SelectTrigger className="mt-1 border-gray-200 focus:border-gray-900 focus:ring-gray-900">
                <SelectValue placeholder="Choose split type" />
              </SelectTrigger>
              <SelectContent>
                {SPLIT_OPTIONS.map(opt => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {splitType === "custom" && (
            <div>
              <Label htmlFor="customDays" className="text-sm font-medium text-gray-700">Custom Days</Label>
              <Input
                id="customDays"
                value={customDays}
                onChange={e => setCustomDays(e.target.value)}
                placeholder="e.g., Chest, Back, Legs, Arms"
                className="mt-1 border-gray-200 focus:border-gray-900 focus:ring-gray-900"
              />
            </div>
          )}
          <Button onClick={handleSave} className="w-full bg-gray-900 hover:bg-gray-800 text-white">
            Save Split
          </Button>
          {savedSplit && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-medium text-gray-900 mb-1">Current Split:</div>
              <div className="text-gray-700">{SPLIT_OPTIONS.find(opt => opt.value === savedSplit.type)?.label || "Custom"}</div>
              {savedSplit.days && <div className="text-gray-600 text-sm">Days: {savedSplit.days}</div>}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default WorkoutSplit;
