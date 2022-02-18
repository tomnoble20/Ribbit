import styles from './header-actions.module.css'
import DropdownPanel from '../dropdown/panel/panel'
export default function HeaderActions({listenForModalTrigger, isUserLoggedIn}) {

    function handleClick() {
        listenForModalTrigger(setModal => true)
    }
    return(
        <div className={styles['header-actions']}>
            {!isUserLoggedIn ? <button className={`${styles['header-actions__button']} ${'button button--secondary'}`} onClick={handleClick}>Log In</button> : ''}
            {!isUserLoggedIn ? <button className={`${styles['header-actions__button']} ${'button button--primary'}`}>Sign Up</button> : ''}

            <button aria-label="user account menu" aria-haspopup="true" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>     
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <DropdownPanel></DropdownPanel>
        </div>
    )
}