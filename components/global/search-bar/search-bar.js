import styles from './search-bar.module.css'

export default function SearchBar() {
    return (
        <form className={styles['search-bar']}>
            <label className={`${styles['search-bar__label']} ${'hideElement'}`} htmlFor="search">Search Ribbit</label>
            <input className={styles['search-bar__input']} id="search" type="text" placeholder="Search Ribbit"></input>
        </form>
    )
}