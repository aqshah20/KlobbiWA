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
const invoices = [
  {
    id: "1",
    name: "Running 24/7",
    package: "admin@domain.com",
    price: "Connected",
    tax: "Connected",
    time: "Never",
    status: "Never",
    action: "Never",
    print: "Never",
  },
  {
    id: "2",
    name: "Running 24/7",
    package: "admin@domain.com",
    price: "Connected",
    tax: "Connected",
    time: "Never",
    status: "Never",
    action: "Never",
    print: "Never",
  },
  {
    id: "3",
    name: "Running 24/7",
    package: "admin@domain.com",
    price: "Connected",
    tax: "Connected",
    time: "Never",
    status: "Never",
    action: "Never",
    print: "Never",
  },
];

export function InvoiceTable() {
  return (
    <div className="flex flex-col items-end  mt-5 px-4">
      <div className="self-start">
        <div className="flex gap-2 items-center">
          <ExportSelect />
          <Button>
            <Plus /> Add New Invoice
          </Button>
        </div>
        <div className="flex items-center gap-1 mt-3 mx-2">
          <span className="text-xs text-gray-500">Show</span>
          <select className="text-xs text-gray-500 w-10 border border-gray-300">
            <option value="20">Id</option>
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
            <TableHead className="text-white">NAME</TableHead>
            <TableHead className="text-white">PACKAGE</TableHead>
            <TableHead className="text-white">PRICE</TableHead>
            <TableHead className="text-white">TAX</TableHead>
            <TableHead className="text-white">TIME</TableHead>
            <TableHead className="text-white">STATUS</TableHead>
            <TableHead className="text-white">ACTION</TableHead>
            <TableHead className="text-white">PRINT</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.name}</TableCell>
              <TableCell>{invoice.package}</TableCell>
              <TableCell>{invoice.price}</TableCell>
              <TableCell>{invoice.tax}</TableCell>
              <TableCell>{invoice.time}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{invoice.action}</TableCell>
              <TableCell className="text-right">{invoice.print}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={9}>Total Instances</TableCell>
            <TableCell className="text-right">{invoices.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
