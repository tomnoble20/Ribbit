import styles from './panel.module.css';
import Footer from './footer';
import Nav from './nav';
import Layout from './layout';

/*
 TODO: Refactor Panel to be agnostic 
*/

export default function DropdownPanel({isActive, signOut}) {
    return(
        <div className={`${styles['dropdown-panel']}`} aria-hidden={isActive ? "false" : "true"}>
          <Layout nav={<Nav/>} footer={<Footer signOutMethod={signOut}/>}></Layout>
        </div>
    )
}