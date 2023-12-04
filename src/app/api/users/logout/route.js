import { NextResponse } from "next/server"


export const GET=(request)=>{
    return NextResponse.json({success: true,
    message:"Log in successful"})
}