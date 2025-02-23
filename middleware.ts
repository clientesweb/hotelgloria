import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Obtener el hostname actual
  const hostname = request.headers.get("host") || "hotelgloria.ar"
  const { pathname } = request.nextUrl

  // Manejar las rutas de habitaciones
  if (pathname.startsWith("/habitaciones/")) {
    const url = new URL(`/habitaciones/${pathname.split("/").pop()}`, `https://${hostname}`)
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/habitaciones/:path*"],
}

