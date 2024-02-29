import { TCellData } from "@/app/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

function Row({ row, rowIndex }: { row: TCellData[], rowIndex: number }) {
  return (
    <TableRow>
      {row?.map((cell, index) => <TableCell className={cn("", cell?.className)} key={rowIndex+"cell-"+index}>{cell?.data}</TableCell>)}
    </TableRow>
  )
}

function GenericTable({
  headings,
  rows,
}: {
  headings: TCellData[];
  rows: TCellData[][];
}) {
  return (
    <Table className="h-full">
      <TableHeader>
        <TableRow>
          {headings.map((heading, index) => (
            <TableHead key={index} className={cn("", heading?.className)}>
              {heading.data}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="overflow-y-auto h-[calc(100%-3rem)]">
        {rows?.map((row, index) => (
          <Row row={row} key={"row-" + index} rowIndex={index} />
        ))}
      </TableBody>
    </Table>
  );
}

export default GenericTable;
