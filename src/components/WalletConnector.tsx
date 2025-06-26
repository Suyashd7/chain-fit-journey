
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wallet } from "lucide-react";

interface WalletConnectorProps {
  onConnect: () => void;
}

export const WalletConnector = ({ onConnect }: WalletConnectorProps) => {
  const handleConnect = () => {
    onConnect();
  };

  return (
    <Card className="p-8 max-w-md mx-auto border-0 shadow-lg">
      <div className="text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Wallet className="w-8 h-8 text-gray-700" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect Wallet</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Connect your Web3 wallet to start tracking your fitness journey on the blockchain.
        </p>
        <Button 
          onClick={handleConnect}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white h-12"
        >
          Connect MetaMask
        </Button>
        <p className="text-xs text-gray-500 mt-4">
          Don't have MetaMask? <a href="#" className="text-gray-900 hover:underline">Get it here</a>
        </p>
      </div>
    </Card>
  );
};
