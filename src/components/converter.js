import * as React from "react"
import { useState } from "react"
import { navigate } from "gatsby"
import * as styles from "../styles/converter.module.css"

const Converter = () => {
  const [inputValue, setInputValue] = useState()
  const [error, setError] = useState(false)

  const isYtUrl = (url) => {
    const ytRegex = new RegExp(
      /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\\-]+\?v=|embed\/|v\/)?)([\w\\-]+)(\S+)?$/g
    )
    return ytRegex.test(url)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleClickConvert = () => {
    if (isYtUrl(inputValue)) {
      navigate("/download", { state: { url: inputValue } })
    } else {
      setError(true)
    }
  }

  return (
    <>
      <div className={styles.converter}>
        <input
          type="search"
          className={styles.search}
          placeholder="Paste Youtube link here"
          onChange={handleInputChange}
        />
        <button
          className={styles.button}
          type="button"
          onClick={handleClickConvert}
        >
          Convert
        </button>
      </div>
      {error &&
      <div className={styles.invalidUrl}>
        <div className={styles.invalidTitle}>Invalid Youtube video url.</div>
      </div>
      }
    </>
  )
}

export default Converter
