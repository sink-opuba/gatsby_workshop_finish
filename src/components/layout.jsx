import React, { useState } from "react"
import PropTypes from "prop-types"

import Header from "./Header/Header"
import "./styles/_main.scss"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  return (
    <>
      <Header sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      <div onClick={() => setSideBarOpen(false)}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
