import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import DrawToggleButton from "../DrawToggleButton/DrawToggleButton"
import SideBar from "../SideBar/SideBar.jsx"

const Header = ({ sideBarOpen, setSideBarOpen }) => {
  const toggleSideBarClick = () => setSideBarOpen(!sideBarOpen)
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Link to="/">Gatsby Workshop</Link>
        </div>
        <div className="nav-link">
          <ul>
            <li>
              <a href="/#blog">Blog</a>
            </li>

            <li>
              <Link href="/">About</Link>
            </li>
          </ul>
        </div>
        <div className="nav-toggle">
          <DrawToggleButton click={toggleSideBarClick} />
        </div>
      </header>
      <SideBar show={sideBarOpen} handleClick={toggleSideBarClick} />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  sideBarOpen: PropTypes.bool,
  setSideBarOpen: PropTypes.func,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
