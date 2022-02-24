import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

type PropTypes = {
  Component: any,
  session: null | any // todo replace all any values
}

function MyApp({ Component, session} : PropTypes) {
  return( 
    <SessionProvider session={session}>
      <Component session={session}></Component>
    </SessionProvider>
  )
}

export default MyApp
