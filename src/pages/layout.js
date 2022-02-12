import * as React from "react"
import { Link } from "gatsby"

//css classnames
import { mainStyle, navLinkText } from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={mainStyle}>
      <title>Layout</title>
      <nav>
        <Link to="/" className={navLinkText}>
          Home
        </Link>
        <Link to="/about" className={navLinkText}>
          About page
        </Link>
      </nav>

      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
