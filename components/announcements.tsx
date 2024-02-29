import { Announcement } from "@/app/types";
import { Button } from "./ui/button";

function Announcements({ announcementList }: {announcementList: Announcement[]}) {
  return (
    <div className="space-y-4 h-full overflow-y-auto box-border">
      {announcementList.map((announcement, index) => (
        <div className="flex items-center justify-between pr-2" key={"announcement-" + index}>
          <div className="">
            <p className="text-sm font-medium leading-none">{ announcement.title }</p>
          </div>
          <Button variant="outline">more</Button>
        </div>
      ))}
    </div>
  );
}

export default Announcements;
