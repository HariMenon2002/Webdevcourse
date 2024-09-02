import { NextRequest, NextResponse } from "next/server";


export function GET(req:NextRequest, arg:any){ //instead of arg you can also do
    // {params: {authId}}:{params:{authId:string[]}}

    console.log(arg.params.authId) //gives me the route names as an array of strings
    return NextResponse.json({
        message:"asd"
    })
}

export function POST(){
    return NextResponse.json({
        message:"asd"
    })
}