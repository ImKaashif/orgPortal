import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeClosedIcon, EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { videoDetails } from "../types";
import { videos } from "../dummydata";

function VideoCard({ video }: { video: videoDetails }) {
  return (
    <Card className="2xl:h-80 h-64 dark:bg-card-secondary">
      <CardContent className="2xl:p-4 p-2 pt-0 h-full">
        <div className="flex flex-col space-y-2 h-full">
          <img
            src={video?.thumbnail}
            alt="thumbnail"
            className="2xl:mt-1 mt-2 mb-2 rounded-md"
          />
          <span className="font-semibold tracking-tight overflow-x-hidden text-ellipsis line-clamp-2 2xl:text-base text-xs">
            {video?.title}
          </span>
          <span className="flex items-center 2xl:text-xs text-[10px] space-x-2">
            <EyeOpenIcon />
            <span>2000</span>
          </span>
          <span className="overflow-hidden line-clamp-2 2xl:text-xs text-[10px] leading-relaxed mt-1">
            {video?.desc}
          </span>
          <span className="2xl:text-[10px] text-[8px]">1 week ago</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function VideosTab() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Videos</CardTitle>
      </CardHeader>
      <CardContent className="h-[calc(100%-3rem)] 2xl:h-[calc(100%-4rem)]">
        <div className="grid grid-cols-4 2xl:grid-cols-5 gap-2 auto-rows-min 2xl:gap-3 h-full overflow-y-auto pb-2">
          {videos?.map((video, index) => (
            <VideoCard video={video} key={"v-card-" + index} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
