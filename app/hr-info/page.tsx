import PageTitle from "@/components/PageTitle";
import Layout from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import React from "react";
import GuidelinesTab from "./guidelines-tab";
import VideosTab from "./videos-tab";
import { Holiday } from "../types";
import { holidays } from "../dummydata";
import PolicyTab from "./poilcy-tab";
import DocumentsTab from "./documents-tab";

export const metadata: Metadata = {
  title: "HR Info",
  description:
    "HR Info allows access to the information related to HR department.",
};

function HolidayElement({ holidayData }: { holidayData: Holiday }) {
  return (
    <div className="flex flex-col pb-3 leading-tight">
      <span className="font-semibold text-sm 2xl:text-base">
        {holidayData?.name}
      </span>
      <span className="font-light text-muted-foreground text-xs 2xl:text-sm">
        {holidayData?.date}
      </span>
    </div>
  );
}

export default function HRInfoPage() {
  return (
    <Layout>
      <PageTitle title="HR Info" />
      <Tabs defaultValue="documents" className="space-y-4 h-[calc(100%-3rem)]">
        <TabsList>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="policy">Policy</TabsTrigger>
          <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        <div className="grid grid-cols-4 gap-3 2xl:h-[calc(100%-3rem)] h-[calc(100%-2rem)]">
          <div className="col-span-3 h-full overflow-hidden">
            <TabsContent value="documents" className="space-y-4 h-full mt-0">
              <DocumentsTab />
            </TabsContent>
            <TabsContent value="policy" className="space-y-4 h-full mt-0">
              <PolicyTab />
            </TabsContent>
            <TabsContent value="guidelines" className="space-y-4 h-full mt-0">
              <GuidelinesTab />
            </TabsContent>
            <TabsContent value="videos" className="space-y-4 h-full mt-0">
              <VideosTab />
            </TabsContent>
          </div>
          <Card className="w-full h-full overflow-hidden">
            <CardHeader>
              <CardTitle>Holidays</CardTitle>
            </CardHeader>
            <CardContent className="h-[calc(100%-4rem)] pr-1 overflow-y-auto">
              {holidays.map((holidayData, index) => (
                <HolidayElement holidayData={holidayData} key={index} />
              ))}
            </CardContent>
          </Card>
        </div>
      </Tabs>
    </Layout>
  );
}
