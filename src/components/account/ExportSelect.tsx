import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  FileTextIcon,
  FileSpreadsheetIcon,
  FileText,
  File,
} from "lucide-react";

export function ExportSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Export format" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Export Options</SelectLabel>
          <SelectItem value="pdf" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            PDF
          </SelectItem>
          <SelectItem value="csv" className="flex items-center gap-2">
            <FileSpreadsheetIcon className="w-4 h-4" />
            CSV
          </SelectItem>
          <SelectItem value="word" className="flex items-center gap-2">
            <File className="w-4 h-4" />
            Word
          </SelectItem>
          <SelectItem value="excel" className="flex items-center gap-2">
            <FileSpreadsheetIcon className="w-4 h-4" />
            Excel
          </SelectItem>
          <SelectItem value="txt" className="flex items-center gap-2">
            <FileTextIcon className="w-4 h-4" />
            Text
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
