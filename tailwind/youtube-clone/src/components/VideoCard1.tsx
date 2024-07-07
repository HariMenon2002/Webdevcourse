
export function VideoCard(){
    return <div>
       <img src="/photo.jpg" className="rounded-xl"></img>  {/*this is for thumbnail, rounded is to round the border */}

       {/* the below code is for image of channel and video title*/}
       <div className="grid grid-cols-12 pt-2 ">   {/*using grid for it such the entire grid is 12 columns ,you can also add bg-red-500 to highlight the area*/}
            <div className="col-span-1">
                <img className={"rounded-full w-12 h-12"} src="/photo.jpg" alt="not available" />{/*w is for width */}
            </div> {/*among 12 i am using 2 for image*/}

            <div className="col-span-11 pl-1">  {/*pl is for padding left,pt is for padding at top*/}
                <div>
                    Jawan:Chaleya(Hindi)
                    Sharukh khan
                </div>

                <div className="col-span-11  text-gray-600 text-base"> {/*text-base is for font, text-gray-600 is to make font grey color */}
                    Harikrat Singh
                </div>

                <div className="col-span-11  text-gray-600 text-base">
                    46Mn | 13 days ago
                </div>
            </div> {/*among 12 i am using 10 for title*/}

       </div>
    </div>
}