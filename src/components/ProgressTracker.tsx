
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, Clock, CheckCircle } from "lucide-react";

interface ProgressTrackerProps {
  currentStreak: number;
  totalDays: number;
  detailed?: boolean;
}

export const ProgressTracker = ({ currentStreak, totalDays, detailed = false }: ProgressTrackerProps) => {
  const targetDays = 30;
  const progressPercentage = (totalDays / targetDays) * 100;
  const canMintNFT = currentStreak >= targetDays;

  if (!detailed) {
    return (
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Current Streak</p>
                <p className="text-2xl font-light text-gray-900">{currentStreak}</p>
                <p className="text-xs text-gray-500">days</p>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Days</p>
                <p className="text-2xl font-light text-gray-900">{totalDays}</p>
                <p className="text-xs text-gray-500">of {targetDays}</p>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Progress</p>
                <p className="text-2xl font-light text-gray-900">{Math.round(progressPercentage)}</p>
                <p className="text-xs text-gray-500">percent</p>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">NFT Status</p>
                <p className="text-lg font-medium text-gray-900">{canMintNFT ? "Ready" : "Locked"}</p>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <CheckCircle className={`w-5 h-5 ${canMintNFT ? 'text-green-600' : 'text-gray-400'}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-medium text-gray-900">30-Day Challenge Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-3">
            <span>Days Completed</span>
            <span>{totalDays} of {targetDays}</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Streak Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Current Streak:</span>
                <span className="font-medium text-gray-900">{currentStreak} days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Days Until NFT:</span>
                <span className="font-medium text-gray-900">{Math.max(0, targetDays - currentStreak)} days</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Achievement NFT</h3>
            {canMintNFT ? (
              <div className="space-y-3">
                <p className="text-green-600 text-sm">Congratulations! You've completed the 30-day challenge.</p>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  <Trophy className="w-4 h-4 mr-2" />
                  Mint Achievement NFT
                </Button>
              </div>
            ) : (
              <p className="text-gray-600 text-sm">
                Complete 30 consecutive days of logging to unlock your achievement NFT.
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
