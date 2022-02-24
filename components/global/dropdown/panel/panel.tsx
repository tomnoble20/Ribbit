import React, {MouseEventHandler} from 'react';

import styles from './panel.module.css';
import Footer from './footer';
import Nav from './nav';
import Layout from './layout';

/*
 TODO: Refactor Panel to be agnostic 
*/

type PropTypes = {
  isActive: Boolean,
  signOut: MouseEventHandler,
  absolutePosition: Number,
} 

export default function DropdownPanel({isActive, signOut, absolutePosition} : PropTypes) {
    const inlineStyles = {"--top": `${absolutePosition}px`} as React.CSSProperties;
    return( 
        <div className={`${styles['dropdown-panel']}`} style={inlineStyles} aria-hidden={isActive ? "false" : "true"}>
          <Layout>
            <Nav/>
            <Footer signOutMethod={signOut}/>
          </Layout>
        </div>
    )
}