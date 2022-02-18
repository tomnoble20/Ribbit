import styles from './panel.module.css'

export default function DropdownPanel() {
    return(
        <div className={`${styles['dropdown-panel']}`}>
          <nav>
            <li>Dark Mode</li>
          </nav>
          <footer>
            Logout
          </footer>
        </div>
    )
}