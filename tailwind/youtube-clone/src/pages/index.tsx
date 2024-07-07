import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "../components/VideoCard"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div >
        {/*<VideoCard></VideoCard>  For VideoCard1.tsx */}
        <VideoCard
        title={"How to learn coding in 30 days | 30 day plan | Code with me"}
        image={"photo.jpg"}
        thumbImage={"photo.jpg"}
        author={"Hari Menon"}
        views={"100k"}
        timestamp={"2 days ago"}
        ></VideoCard>
      </div>
  );
}
