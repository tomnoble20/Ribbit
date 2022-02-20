import Image from 'next/image'
import SearchBar from '../search-bar/search-bar'
import HeaderActions from '../header-actions/header-actions'
import styles from './header.module.css'
import useResizeObserver from '@react-hook/resize-observer'
import {useState, useLayoutEffect, useRef } from 'react'

export default function GlobalHeader({listenForModalTrigger, isUserLoggedIn}){
    const [elHeight, setSize] = useState()
    const ref = useRef(null)

    useLayoutEffect(() => {
        setSize(ref.current.offsetHeight)
    })

    return(
        <header className={styles.globalHeader} ref={ref}>
            <div className={styles['global-header__logo']}>
                <Image src="/logo.svg" alt="Ribbit Logo" width={32} height={32} />
            </div>
            <SearchBar></SearchBar>
            <HeaderActions listenForModalTrigger={listenForModalTrigger} isUserLoggedIn={isUserLoggedIn} globalHeaderHeight={elHeight}></HeaderActions>
        </header>
    )
}