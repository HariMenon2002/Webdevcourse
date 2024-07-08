//i am now making a grid for all the videos

import { VideoCard } from "./VideoCard"

const VIDEOS=[{
    title:"How to learn coding in 30 days | 30 day plan | Code with me",
    image:"photo.jpg",
    thumbImage:"photo.jpg",
    author:"Hari Menon",
    views:"100k",
    timestamp:"2 days ago",
},{
    title:"How to learn jumping in 30 days | 30 day plan | Code with me",
    image:"photo.jpg",
    thumbImage:"photo.jpg",
    author:"Hari Menon",
    views:"100k",
    timestamp:"2 days ago",
},{
    title:"How to learn playing in 30 days | 30 day plan | Code with me",
    image:"photo.jpg",
    thumbImage:"photo.jpg",
    author:"Hari Menon",
    views:"100k",
    timestamp:"2 days ago",
},{
    title:"How to learn dancing in 30 days | 30 day plan | Code with me",
    image:"photo.jpg",
    thumbImage:"photo.jpg",
    author:"Hari Menon",
    views:"100k",
    timestamp:"2 days ago",
}]

export const VideoGrid=()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"> {/*ie make the grid with 1 col initially , when you expland screen make two at midpoint and when screen becomes large make it 4 */}
        {VIDEOS.map(video=><div>
            <VideoCard
                title={video.title}
                image={video.image}
                thumbImage={video.thumbImage}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}
            ></VideoCard>
        </div>)}
    </div>
} 