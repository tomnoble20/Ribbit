
import Head from 'next/head'
import GlobalHeader from '../components/global/header/header'
import Modal from '../components/global/modal/modal'
import LoginForm from '../components/forms/login/login'
import React, { useState } from 'react';
import { SessionProvider } from "next-auth/react"
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home({Component, pageProps}) {
  const {data: session} = useSession();
  const [isModalActive, listenForModalTrigger] = useState(false)


  function checkIfUserIsLoggedIn(session) {
    return session?.user ? true : false
  }


  return (
        <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <GlobalHeader listenForModalTrigger={listenForModalTrigger} isUserLoggedIn={checkIfUserIsLoggedIn(session)}></GlobalHeader>
        <Modal isModalActive={isModalActive} modalTrigger={listenForModalTrigger}>
        <button onClick={() => signIn()}>Sign in</button>
          <LoginForm>
          </LoginForm>
        </Modal>
      </div>

  )
}
