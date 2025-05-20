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
import { Input } from "../ui/input";
import { ExportSelect } from "./ExportSelect";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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

export function AccountTable() {
  return (
    <div className="flex flex-col items-end  mt-5 px-4">
      <div className="self-start">
        <ExportSelect />
        <div className="flex items-center gap-1 mt-3 mx-2">
          <span className="text-xs text-gray-500">Show</span>
          <select className="text-xs text-gray-500 w-10 border border-gray-300">
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
            <option value="80">80</option>
            <option value="100">100</option>
          </select>
          <span className="text-xs text-gray-500">entries</span>
        </div>
      </div>
      <div className="flex w-1/3 items-center gap-3 mb-2">
        <h4 className="text-xs font-semibold">Accounts</h4>
        <Input placeholder="Search..." />
      </div>
      <Table>
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
        <TableHeader className="bg-black">
          <TableRow>
            <TableHead className="w-[100px] text-white">Instance</TableHead>
            <TableHead className="text-white">Details</TableHead>
            <TableHead className="text-white">Account</TableHead>
            <TableHead className="text-white">Connection</TableHead>
            <TableHead className="text-white">Reset</TableHead>
            <TableHead className="text-white">Queue</TableHead>
            <TableHead className="text-white">Off</TableHead>
            <TableHead className="text-right text-white">Control</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accounts.map((acc, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{acc.instance}</TableCell>
              <TableCell>{acc.details}</TableCell>
              <TableCell>{acc.account}</TableCell>
              <TableCell>{acc.connection}</TableCell>
              <TableCell>{acc.reset}</TableCell>
              <TableCell>{acc.queue}</TableCell>
              <TableCell>{acc.off ? "Yes" : "No"}</TableCell>
              <TableCell className="text-right">{acc.control}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={7}>Total Instances</TableCell>
            <TableCell className="text-right">{accounts.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
