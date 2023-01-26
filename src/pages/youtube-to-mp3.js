import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Converter from "../components/converter"
import Sections from "../components/sections"
import * as styles from "../styles/index.module.css"

const Mp3 = () => (
  <Layout>
    <div className={styles.mainWrapper}>
      <h1>Youtube to MP3</h1>
      <p>Download MP3 from Youtube with our YouTube to MP3 converter and downloader.</p>
      <Converter/>
    </div>
    <Sections/>
  </Layout>
)

export const Head = () => <Seo title="Youtube to Mp3 Converter"/>

export default Mp3
