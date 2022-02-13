import Image from 'next/image'
import SearchBar from '../search-bar/search-bar'
import HeaderActions from '../header-actions/header-actions'
import styles from './header.module.css'

export default function GlobalHeader({listenForModalTrigger}){
    return(
    <header className={styles.globalHeader}>
        <div className={styles['global-header__logo']}>
            <Image src="/logo.svg" alt="Ribbit Logo" width={32} height={32} />
        </div>
        <SearchBar></SearchBar>
        <HeaderActions listenForModalTrigger={listenForModalTrigger}></HeaderActions>
    </header>
    )
}