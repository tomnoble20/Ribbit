import styles from './panel.module.css';

/*
TODO: Create Dark Mode Component and Functionality
*/

export default function Nav() {
    return(
      <nav className={`${styles['dropdown-panel__nav']}`}>
        <li>
          <button>Dark Mode</button>
        </li>
      </nav>
    )
}