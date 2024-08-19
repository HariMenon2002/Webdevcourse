import React from "react"

interface no{
    children:React.ReactNode
}

export default function({children}:no){
    return <div>
        <div className="border-b text-center">
            20%off for the next 3 days included in signin
        </div>
        {children}
    </div>
}