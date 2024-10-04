import NextAuth, { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import authOptions from "./app/api/auth/[...nextauth]/utils/authOptions";
import { getSession } from "next-auth/react";

export async function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
