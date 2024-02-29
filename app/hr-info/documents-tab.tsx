import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Document } from "../types";
import { payslips } from "../dummydata";

function DocumentElement({ document }: { document: Document }) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col pb-3 leading-tight">
        <span className="font-semibold text-[13px] 2xl:text-base">
          {document?.name}
        </span>
        <span className="font-light text-muted-foreground text-xs 2xl:text-sm">
          {document?.month
            ? `${document?.month} ${document?.year}`
            : document?.year}
        </span>
      </div>
      
    </div>
  );
}

function DocsCard({
  title,
  documents,
}: {
  title: string;
  documents: Document[];
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-[calc(100%-3rem)] 2xl:h-[calc(100%-4rem)]">
        {documents?.map((document, index) => <DocumentElement document={document} key={title+index}/>)}
      </CardContent>
    </Card>
  );
}

export default function DocumentsTab() {
  return (
    <div className="h-full grid grid-cols-3 gap-3 2xl:gap-4">
      <DocsCard documents={payslips} title="Pay Slips"/>
      <DocsCard documents={[]} title="Form 16"/>
      <DocsCard documents={[]} title="Others" />
    </div>
  );
}
