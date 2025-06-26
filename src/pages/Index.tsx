
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WalletConnector } from "@/components/WalletConnector";
import { WorkoutLogger } from "@/components/WorkoutLogger";
import { DietLogger } from "@/components/DietLogger";
import { ProgressTracker } from "@/components/ProgressTracker";
import { HistoryViewer } from "@/components/HistoryViewer";
import { Dumbbell, Shield, Trophy, Calendar } from "lucide-react";

const Index = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [totalDays, setTotalDays] = useState(0);

  const handleWalletConnect = () => {
    setIsConnected(true);
    // This will be connected to actual Web3 wallet later
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <Shield className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">Blockchain-Powered Fitness</span>
            </div>
            
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-6">
              FitLogChain
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Track your fitness journey on the blockchain. 30 days of consistency rewards you with a unique NFT that proves your dedication.
            </p>
            
            <WalletConnector onConnect={handleWalletConnect} />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20 p-6 hover:bg-white/10 transition-all duration-300">
              <Dumbbell className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Workout Tracking</h3>
              <p className="text-gray-300">Log exercises, sets, reps, and weights. Every workout is permanently recorded on-chain.</p>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20 p-6 hover:bg-white/10 transition-all duration-300">
              <Calendar className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Diet Logging</h3>
              <p className="text-gray-300">Track meals, calories, and timing. Build healthy eating habits with blockchain accountability.</p>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20 p-6 hover:bg-white/10 transition-all duration-300">
              <Trophy className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">NFT Rewards</h3>
              <p className="text-gray-300">Complete 30 consecutive days and mint your "Consistency Champion" NFT as proof of dedication.</p>
            </Card>
          </div>

          {/* Challenge Info */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">The 30-Day Challenge</h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Commit to logging your workouts and meals every day for 30 days. 
              Miss a day? Your streak resets. Complete the challenge and earn a unique NFT that represents your commitment to fitness.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            FitLogChain Dashboard
          </h1>
          <div className="text-white">
            <span className="text-sm text-gray-300">Connected: </span>
            <span className="text-green-400 font-mono">0x1234...5678</span>
          </div>
        </div>

        {/* Progress Overview */}
        <ProgressTracker currentStreak={currentStreak} totalDays={totalDays} />

        {/* Main Content Tabs */}
        <Tabs defaultValue="log" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-sm">
            <TabsTrigger value="log" className="data-[state=active]:bg-purple-500">Log Activity</TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-purple-500">Progress</TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-purple-500">History</TabsTrigger>
          </TabsList>

          <TabsContent value="log" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <WorkoutLogger onLog={() => setCurrentStreak(prev => prev + 1)} />
              <DietLogger onLog={() => setTotalDays(prev => prev + 1)} />
            </div>
          </TabsContent>

          <TabsContent value="progress">
            <ProgressTracker currentStreak={currentStreak} totalDays={totalDays} detailed />
          </TabsContent>

          <TabsContent value="history">
            <HistoryViewer />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
