import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Converter from "../components/converter"
import Sections from "../components/sections"
import * as styles from "../styles/index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={styles.mainWrapper}>
      <h1>Youtube Downloader</h1>
      <p>Convert and download Youtube videos in MP3, MP4, 3GP for free .</p>
      <Converter/>
    </div>
    <Sections/>
  </Layout>
)

export const Head = () => <Seo title="Youtube Downloader - Online Youtube Video Downloader"/>

export default IndexPage
