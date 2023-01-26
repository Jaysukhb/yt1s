import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Converter from "../components/converter"
import Sections from "../components/sections"
import * as styles from "../styles/index.module.css"

const Mp4 = () => (
  <Layout>
    <div className={styles.mainWrapper}>
      <h1>Youtube to MP4</h1>
      <p>Convert Youtube videos to MP4 files for free with our Youtube Converter.</p>
      <Converter/>
    </div>
    <Sections/>
  </Layout>
)

export const Head = () => <Seo title="Youtube to Mp4 Converter"/>

export default Mp4
