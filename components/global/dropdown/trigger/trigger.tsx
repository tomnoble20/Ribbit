import React, {MouseEventHandler} from 'react';


type PropTypes = {
  dropdownTrigger: Function,
  children: MouseEventHandler,
} 

export default function DropdownTrigger({dropdownTrigger, children}: PropTypes) {
    return(
        <button aria-haspopup="true" aria-expanded="false" onClick={dropdownTrigger}>
          { children }
        </button>
    )
}