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
import { Plus } from "lucide-react";
const groups = [
  {
    id: "1",
    group: "Running 24/7",
    members: "admin@domain.com",
    addContacts: "Connected",
    action: "Never",
    view: "Never",
  },
  {
    id: "2",
    group: "Running 24/7",
    members: "admin@domain.com",
    addContacts: "Connected",
    action: "Never",
    view: "Never",
  },
  {
    id: "3",
    group: "Running 24/7",
    members: "admin@domain.com",
    addContacts: "Connected",
    action: "Never",
    view: "Never",
  },
];

export function GroupTable() {
  return (
    <div className="flex flex-col items-end  mt-5 px-4">
      <div className="self-start">
        <div className="flex gap-2 items-center">
          <ExportSelect />
          <Button>
            <Plus /> Add New Group
          </Button>
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
            <TableHead className="w-[100px] text-white">#</TableHead>
            <TableHead className="text-white">ID</TableHead>
            <TableHead className="text-white">GROUP</TableHead>
            <TableHead className="text-white">MEMBERS</TableHead>
            <TableHead className="text-white">ADD CONTACTS</TableHead>
            <TableHead className="text-white">ACTION</TableHead>
            <TableHead className="text-white">VIEW</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {groups.map((group, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell className="font-medium">{group.id}</TableCell>
              <TableCell>{group.group}</TableCell>
              <TableCell>{group.members}</TableCell>
              <TableCell>{group.addContacts}</TableCell>
              <TableCell>{group.action}</TableCell>
              <TableCell>{group.view}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={7}>Total Instances</TableCell>
            <TableCell className="text-right">{groups.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
