import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DatePicker } from "../DatePicker";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
function SentStatisticForm() {
  const accounts = [
    {
      instance: "Alpha",
      details: "Running 24/7",
      account: "admin@domain.com",
      connection: "Connected",
      reset: "Never",
      queue: 5,
      off: false,
      control: "Pause",
    },
    {
      instance: "Beta",
      details: "Idle",
      account: "user@domain.com",
      connection: "Disconnected",
      reset: "2h ago",
      queue: 0,
      off: true,
      control: "Start",
    },
    {
      instance: "Gamma",
      details: "Scheduled",
      account: "bot@domain.com",
      connection: "Pending",
      reset: "1d ago",
      queue: 2,
      off: false,
      control: "Pause",
    },
  ];

  return (
    <div>
      <Card className=" pt-3 shadow-lg mt-5 mx-4 lg:mx-6">
        <CardHeader className="relative">
          <CardDescription className="border-b pb-3 text-base font-medium">
            Sent Statistics
          </CardDescription>
          <CardTitle className="sr-only"></CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items- gap-6">
          <div className="flex items-center gap-2">
            <DatePicker width="w-[400px]" />
            <Button>Filter</Button>
          </div>
          <RadioGroup defaultValue="number" className="flex gap-2 items-center">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="date" id="r1" />
              <Label htmlFor="r1">Date Wise</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="instance" id="r2" />
              <Label htmlFor="r2">Instance Wise</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="number" id="r3" />
              <Label htmlFor="r3">Number Wise</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="delivery" id="r4" />
              <Label htmlFor="r4">Delivery Wise</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
      <Card className="w-3/5 pt-3 mb-4 shadow-lg mt-5 mx-4 lg:mx-6">
        <CardHeader className="relative">
          <CardDescription className="border-b pb-3 text-base font-medium">
            Statistics 2025-05-20 - To - 2025-05-20
          </CardDescription>
          <CardTitle className="sr-only"></CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items- gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 mx-2">
              <span className="text-xs text-gray-500">Search</span>
              <select className="text-xs text-gray-500 w-10 border border-gray-300">
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="60">60</option>
                <option value="80">80</option>
                <option value="100">100</option>
              </select>
              <span className="text-xs text-gray-500">entries</span>
            </div>
            <div className="flex w-1/3 items-center gap-3 mb-2">
              <h4 className="text-sm font-semibold">Search:</h4>
              <Input placeholder="Search..." />
            </div>
          </div>
          <div className="w-full overflow-x-auto ">
            <Table className="w-full table-auto">
              <TableCaption>
                <Pagination className="mt-4">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </TableCaption>

              <TableHeader className="bg-gray-400 w-full">
                <TableRow>
                  <TableHead className="text-gray-800">ID</TableHead>
                  <TableHead className="text-gray-800">DATA</TableHead>
                  <TableHead className="text-gray-800">NO OF SMS</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {accounts.map((acc, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">
                      {acc.instance}
                    </TableCell>
                    <TableCell>{acc.details}</TableCell>
                    <TableCell>{acc.account}</TableCell>
                  </TableRow>
                ))}
              </TableBody>

              <TableFooter>
                <TableRow className="bg-gray-400">
                  <TableCell colSpan={2}>TOTAL</TableCell>
                  <TableCell className="text-right">
                    {accounts.length}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SentStatisticForm;
