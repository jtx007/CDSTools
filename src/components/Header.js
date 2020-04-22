import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "../styles/styles.css"

const Header = ({ siteTitle, menuLinks }) => (
  <div className="navbar">
    <h2>
      <Link className="navLogo" to="/">
        {siteTitle}
      </Link>
    </h2>
    <nav>
      <ul className="navlinksContainer">
        {menuLinks.map(link => (
          <li className="navlink" key={link.name}>
            <h4>
              <Link activeClassName="activeLink" to={link.link}>
                {link.name}
              </Link>
            </h4>
          </li>
        ))}
      </ul>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
}

export default Header
