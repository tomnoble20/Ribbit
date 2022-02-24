import styles from './header-actions.module.css'
import DropdownPanel from '../dropdown/panel/panel'
import DropdownTrigger from '../dropdown/trigger/trigger'
import React, { useState } from 'react';
import {signOut, useSession } from 'next-auth/react';

type PropTypes = {
    setIsModalActive: Function,
    isUserLoggedIn: Boolean,
    globalHeaderHeight: Number
  } 


export default function HeaderActions({setIsModalActive, isUserLoggedIn, globalHeaderHeight} : PropTypes) {
    const [isDropdownActive, setIsDropdownActive] = useState(false)

    function listenForModalOpenEvent() {
        setIsModalActive(true)
    }

    function listenForDropdownTriggerEvent() {
        setIsDropdownActive(isDropdownActive => !isDropdownActive)
    }

    return(
        <div className={styles['header-actions']}>
            {!isUserLoggedIn ? <button className={`${styles['header-actions__button']} ${'button button--secondary'}`} onClick={listenForModalOpenEvent}>Log In</button> : ''}
            {!isUserLoggedIn ? <button className={`${styles['header-actions__button']} ${'button button--primary'}`}>Sign Up</button> : ''}


            <DropdownTrigger dropdownTrigger={listenForDropdownTriggerEvent}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>     
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </DropdownTrigger>
  
            <DropdownPanel isActive={isDropdownActive} signOut={signOut} absolutePosition={globalHeaderHeight}></DropdownPanel>
        </div>
    )
}