// import { type NextRequest, NextResponse } from "next/server";
// import { v4 as uuid } from "uuid";

// export function middleware(req: NextRequest) {
//   const isViewer = req.cookies.has('viewerId')
//   const  response = NextResponse.next()

//   if (!isViewer){
//     const id = uuid()
//     response.cookies.set({
//       name: 'viewerId',
//       value: id,
//       httpOnly: true,
//       maxAge: 60 * 60 * 24 * 30,
//       path: '/',
//       sameSite: 'strict',
//       secure: process.env.NODE_ENV === 'production',
//     });
//   }

//   return response
// }

// export const config = {
//   matcher: [
//     '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
//     // "/", "/exhibit"
//   ],
// }