import React, {MouseEventHandler} from 'react';
import styles from './panel.module.css';


type Props = {
  signOutMethod: MouseEventHandler,
};

export default function Footer({signOutMethod}: Props) {
    return(
      <footer className={`${styles['dropdown-panel__footer']}`}>
        <button onClick={signOutMethod}>Log Out</button>
      </footer>
    )
}