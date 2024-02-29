import GenericTable from "@/components/generic-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { TCellData } from "../types";

function GuidelinesTab() {
  const headings: TCellData[] = [
    {
      data: "Guideline",
    },
    {
      data: "Download",
      className: "w-16",
    },
  ];
  const rows: TCellData[][] = [
    [{ data: "Reimbursement for Internet Expense" }],
    [{ data: "Reimbursements for moving/Relocation Expenses" }],
  ];
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          Guidelines
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[calc(100%-3rem)] testing">
        <GenericTable headings={headings} rows={rows} />
      </CardContent>
    </Card>
  );
}

export default GuidelinesTab;
