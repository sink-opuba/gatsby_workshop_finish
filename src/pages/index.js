import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout.jsx"
import Image from "../components/image"
import SEO from "../components/seo"
import BlogList from "../components/BlogList/BlogList"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query postQuery {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMM Do, YYYY")
              path
            }
            excerpt(pruneLength: 160)
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Sinkopere Opuba" />
      <div className="index-container">
        <section className="sink-section">
          <div className="sink-section__heading">
            <h1>
              {" "}
              Hi, I'm Sinkopere Opuba, a software Developer with a bias toward
              JavaScript and its ecosystem. Welcome to the Workshop👏
            </h1>
          </div>
          <div className="sink-section__img">
            <Image />
          </div>
        </section>
        <section className="blog-section">
          <h3>Articles</h3>
          <BlogList data={data} />
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
