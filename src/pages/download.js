import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import * as styles from "../styles/index.module.css"

const Download = (props) => {
  const URL = props?.location?.state?.url

  return (
    <Layout>
      <div className={styles.mainWrapper}>
        <h1>Youtube Downloader</h1>
        <p>Convert and download Youtube videos in MP3, MP4, 3GP for free</p>
        <iframe
          src={`https://yougomusic.com/api/widgetv2?url=${URL}`}
          className={styles.iframe}
          width="100%"
          height="100%"
          allowTransparency="true"
          scrolling="no"
        />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Download"/>

export default Download
