import GenericTable from "@/components/generic-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { TCellData } from "../types";
import { Button } from "@/components/ui/button";

export default function PolicyTab() {
  const headings: TCellData[] = [
    {
      data: "Policy",
    },
    {
      data: "Download",
      className: "w-16",
    },
  ];
  const rows: TCellData[][] = [
    [{ data: "Working Hours - Hybrid Working Model" }, { data: <Button variant="outline">Download</Button>}],
    
  ];
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          Policy
        </CardTitle>
      </CardHeader>
      <CardContent>
        <GenericTable headings={headings} rows={rows} />
      </CardContent>
    </Card>
  );
}