import * as React from "react"
import { Link } from "gatsby"
import { navigationList } from "../data"
import * as styles from "../styles/navigation.module.css"

const Navigation = () => (
  <div className={styles.navigation}>
    {navigationList.map((link, i) => (
      <div className={styles.menuList} key={link.url}>
        <Link
          className={styles.menuLink}
          to={link.url}
          activeClassName={styles.activeLink}>
          {link.text}
        </Link>
      </div>
    ))}
  </div>
)

export default Navigation
