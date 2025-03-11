import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Nav from "../components/nav"

const IndexPage = ({ data }) => {
  const songbooks = data.allMarkdownRemark.edges.map(edge => edge.node)

  return (
    <Layout>
      <Nav>
        {songbooks.map(({ tableOfContents }) => (
          <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
        ))}
      </Nav>
      <div className={styles.textCenter} style={{ marginTop: 100 }}>
        <StaticImage
          src="https://grandillusioncinema.org/wp-content/uploads/2023/06/midsommar.jpg"
          loading="eager"
          width={400}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <h1>Midsommar i Gassarvet</h1>
        <h2>21 Juni 2024</h2>
      </div>
      {songbooks.map(({ html }) => (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ))}
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          tableOfContents
          headings {
            value
          }
        }
      }
    }
  }
`

export default IndexPage
