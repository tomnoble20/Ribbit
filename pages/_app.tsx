import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

type PropTypes = {
  Component: any,
  session: any
}

function MyApp({ Component, pageProps: {session, ...pageProps} } : PropTypes) {
  return( 
    <SessionProvider session={session}>
      <Component {...pageProps}></Component>
    </SessionProvider>
  )
}

export default MyApp
