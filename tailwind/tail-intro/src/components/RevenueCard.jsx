//code that i write here will give a full width card
//it is upto you to change the size using grid
import { CheckBadge } from "./Check"
import { RightArrow } from "./RightArrow"
export const RevenueCard=({title,orderCount,amount})=>{
    return <div className="bg-white rounded  shadow-md p-2 hover:bg-blue-500">  {/*rounded is for border radius, shadow-md is for box shadow */}
        <div className="text-gray-700">
            <div className="flex">
                <div>
                    {title}
                </div>
                <div className="ml-1 flex justify-center flex-col">
                    <CheckBadge></CheckBadge>
                </div>
            </div>
        </div>

        <div className="flex justify-between pt-2">
            <div className="font-semibold text-4xl">
                Rs.{amount}
            </div>
            
            {orderCount?<div className="flex cursor-pointer underline font-medium flex-col justify-center">
                <div className="flex">  {/*this is needed as when we do justify-center the arrow would go down */}
                    <div className="text-blue-400">
                        {orderCount} orders 
                    </div>
                    <RightArrow></RightArrow>
                </div>  

            </div>:null}
        </div>
        
    </div>
}

/*
Search for icons in tailwind and choose heroicons
copy svg and paste  here    
*/