
export function VideoCard(props: any){
    return <div className="p-3 cursor-pointer">  {/*p is for padding */}
       <img src={props.image} className="rounded-xl"></img>  {/*this is for thumbnail, rounded is to round the border */}

       {/* the below code is for image of channel and video title*/}
       <div className="grid grid-cols-12 pt-2 ">   {/*using grid for it such the entire grid is 12 columns ,you can also add bg-red-500 to highlight the area*/}
            <div className="col-span-1">
                <img className={"rounded-full w-12 h-12"} src={props.thumbImage} alt="not available" />{/*w is for width */}
            </div> {/*among 12 i am using 2 for image*/}

            <div className="col-span-11 pl-1">  {/*pl is for padding left,pt is for padding at top*/}
                <div>
                    {props.title}
                </div>

                <div className="col-span-11  text-gray-600 text-base"> {/*text-base is for font, text-gray-600 is to make font grey color */}
                    {props.author}
                </div>

                <div className="col-span-11  text-gray-600 text-base">
                    {props.views} | {props.timestamp}
                </div>
            </div> {/*among 12 i am using 10 for title*/}

       </div>
    </div>
}


//https://github.com/100xDevs-hkirat/week-12.2/tree/main 