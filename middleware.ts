import { type NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export function middleware(req: NextRequest){
    const cookie = req.cookies.has('visitorId')

    if (!cookie){
        const res = NextResponse.next()
        const newId = uuid()
        res.cookies.set('visitor', newId, {maxAge: 60 * 60 * 24 * 365})
    }

}