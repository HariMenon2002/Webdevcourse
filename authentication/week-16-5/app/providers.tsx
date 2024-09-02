"use client";

import { SessionProvider } from "next-auth/react";

export function Providers({children}:{  
    children: React.ReactNode
}){
    return <SessionProvider>
        {children}
    </SessionProvider>
}

//anything passes inside <Providers></Providers> will go to children