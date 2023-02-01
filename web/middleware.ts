import { withAuth, NextRequestWithAuth } from 'next-auth/middleware'


export const config = {
  matcher: ["/:path*"]
}

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    console.log('~~req: ', req)
  },
  {
    secret: process.env.SECRET,
    callbacks: {
      authorized: ({ token }) => !!token
    }
  }
)