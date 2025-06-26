
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
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Current Streak</p>
                <p className="text-2xl font-bold text-white">{currentStreak} days</p>
              </div>
              <Clock className="w-8 h-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 backdrop-blur-sm border-green-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Total Days</p>
                <p className="text-2xl font-bold text-white">{totalDays} / {targetDays}</p>
              </div>
              <Calendar className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 backdrop-blur-sm border-yellow-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Progress</p>
                <p className="text-2xl font-bold text-white">{Math.round(progressPercentage)}%</p>
              </div>
              <Trophy className="w-8 h-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 backdrop-blur-sm border-blue-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">NFT Status</p>
                <p className="text-lg font-bold text-white">{canMintNFT ? "Ready!" : "Locked"}</p>
              </div>
              <CheckCircle className={`w-8 h-8 ${canMintNFT ? 'text-green-400' : 'text-gray-400'}`} />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
        <CardHeader>
          <CardTitle className="text-white">30-Day Challenge Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between text-sm text-gray-300 mb-2">
              <span>Days Completed</span>
              <span>{totalDays} / {targetDays}</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Streak Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Current Streak:</span>
                  <span className="text-white font-semibold">{currentStreak} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Days Until NFT:</span>
                  <span className="text-white font-semibold">{Math.max(0, targetDays - currentStreak)} days</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">NFT Reward</h3>
              {canMintNFT ? (
                <div className="space-y-2">
                  <p className="text-green-400">🎉 Congratulations! You've completed the 30-day challenge!</p>
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                    <Trophy className="w-4 h-4 mr-2" />
                    Mint Consistency Champion NFT
                  </Button>
                </div>
              ) : (
                <p className="text-gray-300">
                  Complete 30 consecutive days of logging to unlock your "Consistency Champion" NFT.
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
