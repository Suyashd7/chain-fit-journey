
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

interface WalletConnectorProps {
  onConnect: () => void;
}

export const WalletConnector = ({ onConnect }: WalletConnectorProps) => {
  const handleConnect = () => {
    // This would integrate with MetaMask/Web3 wallet
    onConnect();
  };

  return (
    <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20 p-8 max-w-md mx-auto">
      <div className="text-center">
        <Shield className="w-16 h-16 text-purple-400 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-4">Connect Your Wallet</h3>
        <p className="text-gray-300 mb-6">
          Connect your Web3 wallet to start tracking your fitness journey on the blockchain.
        </p>
        <Button 
          onClick={handleConnect}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
        >
          Connect MetaMask
        </Button>
        <p className="text-xs text-gray-400 mt-4">
          Don't have MetaMask? <a href="#" className="text-purple-400 hover:underline">Get it here</a>
        </p>
      </div>
    </Card>
  );
};
