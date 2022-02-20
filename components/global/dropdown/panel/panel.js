import styles from './panel.module.css';
import Footer from './footer';
import Nav from './nav';
import Layout from './layout';

/*
 TODO: Refactor Panel to be agnostic 
*/

export default function DropdownPanel({isActive, signOut, absolutePosition}) {
    const inlineStyles = {"--top": `${absolutePosition}px`}
    return(
        <div className={`${styles['dropdown-panel']}`} style={inlineStyles} aria-hidden={isActive ? "false" : "true"}>
          <Layout nav={<Nav/>} footer={<Footer signOutMethod={signOut}/>}></Layout>
        </div>
    )
}