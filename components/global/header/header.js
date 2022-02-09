import Image from 'next/image'
import styles from './header.module.css'

export default function GlobalHeader(){
    return(
    <header className={styles.globalHeader}>
        <Image src="/logo.svg" alt="Ribbit Logo" width={32} height={32} />
    </header>
    )
}