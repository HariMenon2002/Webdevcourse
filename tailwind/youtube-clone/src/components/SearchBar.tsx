export const SearchBar = () => {
    return (
        <div >
            
                <div className="hidden sm:flex w-96 flex text-gray-900 border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2">
                    <input 
                        id="default-search" 
                        className="w-full bg-transparent text-black border-none outline-none" 
                        placeholder="Search" 
                        required 
                    />
                    <button className="bg-transparent text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </button>
                </div>
            
        </div>
    );
}

/*
In Tailwind CSS, the sm:hidden utility class is used to apply the hidden class when the viewport width is equal to or greater than the small breakpoint (640px by default). This means that the element will be hidden on screens that are at least 640px wide.

If you want the element to be hidden on smaller screens and visible on larger screens, you should use the hidden class directly and combine it with a utility class like sm:block to make it visible at the small breakpoint and above. 

max-sm:hidden block can also be used here
*/