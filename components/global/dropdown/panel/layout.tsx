
type PropTypes = {
  nav?: any,
  footer?: any
}

export default function Layout({nav, footer} : PropTypes) {
    return(
        <div>
          {nav}
          {footer}
        </div>
    )
}