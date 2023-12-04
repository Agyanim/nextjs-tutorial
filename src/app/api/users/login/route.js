import { NextResponse } from "next/server"

export  function GET (_request){
    return NextResponse.json("hello")
}