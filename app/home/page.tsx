import { Metadata } from "next";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import GenericTable from "@/components/generic-table";
import Announcements from "@/components/announcements";
import { Announcement, TCellData } from "../types";
import Layout from "@/components/layout";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page shows common data at a glance.",
};

export default function DashboardPage() {
  const announcementList: Announcement[] = [
    {
      title: "Test announcement",
    },
    {
      title: "Test announcement 2",
    },
  ];

  const headings: TCellData[] = [
    {
      data: "Day",
    },
    {
      data: "Date",
    },
    {
      data: "Entry",
    },
    {
      data: "Exit",
    },
    {
      data: "Working Hrs",
    },
    {
      data: "Free Hrs",
    },
    {
      data: "Total Hrs",
    },
    {
      data: "Status",
    },
    {
      data: "Details",
    },
  ]
  return (
    <>
      <Layout>
        <PageTitle title="Home">
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button>show</Button>
          </div>
        </PageTitle>

        <div className="grid gap-3 grid-cols-7 grid-rows-4 h-[calc(100%-3rem)]">
          <Card className="col-span-5 row-span-4">
            <CardHeader>
              <CardTitle>Attendance Details</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <GenericTable headings={headings} rows={[]}/>
            </CardContent>
          </Card>
          <Card className="w-full col-span-2 row-span-2">
            <CardHeader>
              <CardTitle>Announcements</CardTitle>
            </CardHeader>
            <CardContent className="h-[calc(100%-3rem)] pr-1">
              <Announcements announcementList={announcementList} />
            </CardContent>
          </Card>
          <Card className="w-full row-span-2 hidden 2xl:block">
            <CardHeader>
              <CardTitle>Birthday</CardTitle>
              <CardContent className="h-[calc(100%-3rem)]"></CardContent>
            </CardHeader>
          </Card>
          <Card className="w-full row-span-2 hidden 2xl:block">
            <CardHeader>
              <CardTitle>Work Anniversary</CardTitle>
              <CardContent className="h-[calc(100%-3rem)]"></CardContent>
            </CardHeader>
          </Card>
          <Card className="w-full col-span-2 row-span-2 2xl:hidden">
            <CardHeader>
              <CardTitle>Birthday & Anniversary</CardTitle>
            </CardHeader>
            <CardContent className="h-[calc(100%-3rem)] pr-1">
              {/* <Announcements announcementList={announcementList} /> */}
            </CardContent>
          </Card>
        </div>
      </Layout>
    </>
  );
}
