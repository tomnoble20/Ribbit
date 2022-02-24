
type Props = {
  nav?: any,
  footer?: any
}

export default function Layout({nav, footer} : Props) {
    return(
        <div>
          {nav}
          {footer}
        </div>
    )
}