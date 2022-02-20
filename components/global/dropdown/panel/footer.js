import styles from './panel.module.css';


export default function Footer({signOutMethod}) {
    return(
      <footer className={`${styles['dropdown-panel__footer']}`}>
        <button onClick={signOutMethod}>Log Out</button>
      </footer>
    )
}