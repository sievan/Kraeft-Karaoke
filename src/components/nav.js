import React, { useState } from "react"
import { FaTimes, FaBars } from "react-icons/fa"
import * as styles from "./index.module.css"

const Nav = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      {open && (
        <div className={styles.menuContent} onClick={() => setOpen(!open)}>
          <a className={styles.navButton} style={{ margin: "1rem" }}>
            <FaTimes style={{ width: "48px", height: "48px" }} />
          </a>
          <div className={styles.menuChildren}>{children}</div>
        </div>
      )}
      <div className={styles.topBar}>
        <a onClick={() => setOpen(!open)} className={styles.navButton}>
          {open ? (
            <FaTimes style={{ width: "100%", height: "100%" }} />
          ) : (
            <FaBars style={{ width: "100%", height: "100%" }} />
          )}
        </a>
      </div>
    </>
  )
}

export default Nav
