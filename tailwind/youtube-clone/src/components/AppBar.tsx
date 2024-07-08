import { SearchBar } from "./SearchBar"

export const AppBar=()=>{
    return <div className="flex justify-between pt-1 p-3">
        <div className="text-md inline-flex items-center pb-2">{/*inline-flex items-center helps in centering the item vertically in the flex */}
            Youtube
        </div>
        <div>
            <SearchBar/>
        </div>
        <div>
            Signin
        </div>
    </div>
}