import { Card, CardContent } from "../ui/card";
import { Rocket } from "lucide-react";
import { Button } from "../ui/button";

function WhatsAppConnectCard() {
  return (
    <Card className="shadow-md">
      <CardContent>
        <div className="flex justify-center items-center flex-col">
          <h4 className="flex gap-2 items-center text-xl mt-5 font-semibold">
            <Rocket className="text-red-400" /> Connect Your Whats App Account!
          </h4>
          <p className="text-sm text-gray-500 mt-2 font-semibold">
            Press "Start Now" Button To authorize Your WhatsApp Account.
          </p>
          <Button className="mt-5">Start Now</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default WhatsAppConnectCard;
