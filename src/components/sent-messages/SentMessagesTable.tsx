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
import { ExportSelect } from "../ExportSelect";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";
import { DatePicker } from "../DatePicker";
const inbox = [
  {
    id: "1",
    from: "admin@domain.com",
    to: "user@domain.com",
    messageContacts: "Connected",
    status: "Never",
    time: "Never",
    reply: "Never",
  },
  {
    id: "2",
    from: "admin@domain.com",
    to: "user@domain.com",
    messageContacts: "Connected",
    status: "Never",
    time: "Never",
    reply: "Never",
  },
];

export function SentMessagesTable() {
  return (
    <div className="flex flex-col items-end  mt-5 px-4">
      <div className="self-start space-y-4">
        <div className="flex gap-2 items-center">
          <DatePicker />
          <Button>Filter</Button>
        </div>
        <div className="flex gap-2 items-center">
          <ExportSelect />
        </div>
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
        <h4 className="text-sm font-semibold">Search:</h4>
        <Input placeholder="Search..." />
      </div>
      <div className="w-full overflow-x-auto mt-5 px-4">
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

          {/* ✅ Full width header */}
          <TableHeader className="bg-black w-full">
            <TableRow>
              <TableHead className="text-white">#</TableHead>
              <TableHead className="text-white">ID</TableHead>
              <TableHead className="text-white">FROM</TableHead>
              <TableHead className="text-white">TO</TableHead>
              <TableHead className="text-white">MESSAGE</TableHead>
              <TableHead className="text-white">STATUS</TableHead>
              <TableHead className="text-white">TIME</TableHead>
              <TableHead className="text-white">REPLY</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {inbox.map((group, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">{idx + 1}</TableCell>
                <TableCell>{group.id}</TableCell>
                <TableCell>{group.from}</TableCell>
                <TableCell>{group.to}</TableCell>
                <TableCell>{group.messageContacts}</TableCell>
                <TableCell>{group.status}</TableCell>
                <TableCell>{group.time}</TableCell>
                <TableCell>{group.reply}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={6}>Total Instances</TableCell>
              <TableCell className="text-right">{inbox.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
