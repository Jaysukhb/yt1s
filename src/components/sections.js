import * as React from "react"
import { navigate } from "gatsby-link"
import { bestDescription, links, typeIcon, typeDesc, stepCount, queAns } from "../data"
import * as styles from "../styles/sections.module.css"

const Sections = () => {
  const handleClickConvert = () => {
    navigate("/")
  }
  return (
    <div className={styles.container}>
      <div className={styles.sectionBest}>
        <h2>The Best Youtube Downloader</h2>
        <div>
          {bestDescription.map((item) => (
            <p className={styles.description}>{item.description}</p>
          ))}
        </div>
        <ul className={styles.listItem}>
          {links.map(link => (
            <li className={styles.list}>
              <div className={styles.image} style={link.style}>{link.url}</div>
              <div className={styles.desList}>
                <h3>{link.text}</h3>
                <p>{link.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.sectionDownType}>
          <h2>Youtube Video Downloader</h2>
          <ul className={styles.listIcon}>
            {typeIcon.map(link => (
              <li className={styles.listIconImg}>{link.url}</li>
            ))}
          </ul>
          <p className={styles.description}>{typeDesc}</p>
          <button
            className={styles.convertNext}
            onClick={handleClickConvert}>
            Convert now
          </button>
        </div>
        <div className={styles.sectionCount}>
          <h2>How to download Youtube video? </h2>
          <ul className={styles.listCount}>
            {stepCount.map(item => (
              <li className={styles.listWrapper}>
                <span style={item.style} className={styles.listStep}>{item.number}</span>
                <span className={styles.listText}>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.sectionQue}>
          <h2>Questions and Answers</h2>
          <div>
            {queAns.map((item) => (
              <div className={styles.answer}>
                <h4>{item.que}</h4>
                <div>
                  {item.ans.map((item) => (
                    <div>{item.ans}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sections
