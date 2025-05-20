import {
  BriefcaseBusiness,
  CircleGauge,
  Hourglass,
  MailCheck,
  UserRoundPen,
} from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { FailedIcon } from "@/icons/FailedIcon";
import { WhatsAppIcon } from "@/icons/WhatsAppIcon";

const stats = [
  {
    icon: <UserRoundPen className="size-8 text-green-500" />,
    value: 0,
    label: "Quota",
  },
  {
    icon: <CircleGauge className="size-8 text-red-500" />,
    value: 0,
    label: "Used",
  },
  {
    icon: <WhatsAppIcon className="size-10 text-yellow-600" />,
    value: 0,
    label: "Connected",
  },
  {
    icon: <BriefcaseBusiness className="size-8 text-yellow-500" />,
    value: 0,
    label: "Balance",
  },
  {
    icon: <MailCheck className="size-8 text-yellow-500" />,
    value: 0,
    label: "Sent",
  },
  {
    icon: <Hourglass className="size-8 text-yellow-600" />,
    value: 0,
    label: "Queee",
  },
  {
    icon: <FailedIcon className="size-8 text-yellow-600" />,
    value: 0,
    label: "Failed",
  },
];

export function AccountStatisticsCard() {
  return (
    <div className="flex flex-col gap-4 px-4 lg:px-6">
      <Card className="w-full pt-3 shadow-lg">
        <CardHeader className="relative">
          <CardDescription className="border-b pb-3 text-base font-medium">
            WhatsApp Account Statistics
          </CardDescription>
          <CardTitle className="sr-only"></CardTitle>
        </CardHeader>
        <CardContent className="flex justify-evenly">
          {stats.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.icon}
              <div className="flex flex-col">
                <div className="text-sm font-medium">{item.value}</div>
                <div className="text-xs text-muted-foreground">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
