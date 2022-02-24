import styles from './modal.module.css';

export default function Modal({isModalActive, setIsModalActive, children}) {
    
    function listenForModalCloseEvent() {
        setIsModalActive(false)
    }

    return(
        <div className={isModalActive ? `${styles['modal']} ${styles['modal--active']}` : `${styles['modal']}`} role="dialog" aria-modal="true">
            <div className={styles['modal__overlay']}></div>
            <div className={styles['modal__inner']}>
                <header className={styles['modal__header']}>
                    <button className={styles['modal__close-trigger']} type="button" onClick={listenForModalCloseEvent}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button> 
                </header>
                <div className={styles['modal__body']}>{children}</div> 
            </div>
        </div>
    )
}