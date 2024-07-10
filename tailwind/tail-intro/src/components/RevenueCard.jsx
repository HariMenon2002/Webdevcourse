//code that i write here will give a full width card
//it is upto you to change the size using grid
import { RightArrow } from "./RightArrow"
export const RevenueCard=({title,orderCount,amount})=>{
    return <div className="bg-white rounded  shadow-md p-2">  {/*rounded is for border radius, shadow-md is for box shadow */}
        <div className="text-gray-700">
            {title}
             ?
        </div>

        <div className="flex justify-between">
            <div>
                Rs.{amount}
            </div>
            
            {orderCount?<div className="flex">
                <div className="text-blue-400">
                    {orderCount} orders 
                </div>
                <RightArrow></RightArrow>



            </div>:null}
        </div>
        
    </div>
}

/*
Search for icons in tailwind and choose heroicons
copy svg and paste  here    
*/