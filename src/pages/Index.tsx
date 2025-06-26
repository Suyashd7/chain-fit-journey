
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WalletConnector } from "@/components/WalletConnector";
import { WorkoutLogger } from "@/components/WorkoutLogger";
import { DietLogger } from "@/components/DietLogger";
import { ProgressTracker } from "@/components/ProgressTracker";
import { HistoryViewer } from "@/components/HistoryViewer";
import { Activity, Database, Award, Calendar } from "lucide-react";
import { WorkoutSplit } from "@/components/WorkoutSplit";
import { BodyweightLogger } from "@/components/BodyweightLogger";

const Index = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [totalDays, setTotalDays] = useState(0);

  const handleWalletConnect = () => {
    setIsConnected(true);
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gray-50 rounded-full px-6 py-3 mb-8">
              <Database className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Blockchain-Powered Fitness</span>
            </div>
            
            <h1 className="text-6xl font-light text-gray-900 mb-6 tracking-tight">
              FitLogChain
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Track your fitness journey with permanent, verifiable records. 
              Complete 30 days of consistency to earn your achievement NFT.
            </p>
            
            <WalletConnector onConnect={handleWalletConnect} />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-0 shadow-sm hover:shadow-md transition-shadow">
              <Activity className="w-8 h-8 text-gray-900 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Workout Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Log exercises, sets, and reps with immutable blockchain records.
              </p>
            </Card>
            
            <Card className="p-8 border-0 shadow-sm hover:shadow-md transition-shadow">
              <Calendar className="w-8 h-8 text-gray-900 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diet Logging</h3>
              <p className="text-gray-600 leading-relaxed">
                Track meals and nutrition with timestamped, verified entries.
              </p>
            </Card>
            
            <Card className="p-8 border-0 shadow-sm hover:shadow-md transition-shadow">
              <Award className="w-8 h-8 text-gray-900 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Achievement NFTs</h3>
              <p className="text-gray-600 leading-relaxed">
                Earn verifiable proof of your 30-day consistency commitment.
              </p>
            </Card>
          </div>

          {/* Challenge Info */}
          <div className="text-center mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-6">The 30-Day Challenge</h2>
            <p className="text-gray-600 leading-relaxed">
              Maintain daily logging for 30 consecutive days. Every entry is permanently recorded 
              on the blockchain, creating an immutable record of your commitment to health and fitness.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-light text-gray-900">
            FitLogChain
          </h1>
          <div className="text-sm text-gray-600">
            <span className="text-gray-500">Connected: </span>
            <span className="font-mono text-gray-900">0x1234...5678</span>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="mb-12">
          <ProgressTracker currentStreak={currentStreak} totalDays={totalDays} />
        </div>

        {/* Main Content */}
        <Tabs defaultValue="log" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white border shadow-sm">
            <TabsTrigger value="log" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white">
              Log Activity
            </TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white">
              Progress
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white">
              History
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white">
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="log" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
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

          <TabsContent value="profile" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <WorkoutSplit />
              <BodyweightLogger />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
