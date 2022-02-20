export default function DropdownTrigger({dropdownTrigger, children}) {
    return(
        <button aria-haspopup="true" aria-expanded="false" onClick={dropdownTrigger}>
          { children }
        </button>
    )
}