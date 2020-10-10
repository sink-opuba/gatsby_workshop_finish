import React from "react"
import { graphql, Link } from "gatsby"
import site from "../../gatsby-config"
import Img from "gatsby-image"

import Layout from "../components/layout"
import "./blogTemplate.scss"
import SEO from "../components/seo"

const Blog = ({ data, pageContext, location }) => {
  const url = `${site.siteMetadata.siteUrl + location.pathname}`
  const post = data.markdownRemark
  const { next, prev } = pageContext
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="blog-container">
        <div className="post-meta-info">
          <h1>{post.frontmatter.title}</h1>
          <div>
            <h5>
              {post.frontmatter.date} . {post.timeToRead} min Read{" . "}{" "}
            </h5>
          </div>
        </div>

        <div className="featured-img">
          <Img
            alt={post.frontmatter.imagedescription}
            fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
          />
        </div>
        <div className="blog-post-body">
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </div>
        <div className="share-article">
          <span> - SHARE ARTICLE</span>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href={`https://twitter.com/share?text=${post.frontmatter.title}&url=${url}&hashtags=${post.frontmatter.tag}&via=sinkopuba`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href={`http://www.linkedin.com/shareArticle?mini=true&url=${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>

        <div className="article-links">
          {prev && (
            <Link to={`blog/${prev.path}`}>
              Prev <span>&larr;</span> {prev.title}
            </Link>
          )}
          {next && (
            <Link to={`blog/${next.path}`}>
              Next <span>&rarr; </span> {next.title}
            </Link>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      id
      frontmatter {
        title
        path
        date(formatString: "MMM Do, YYYY")
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imagedescription
      }
      html
      timeToRead
    }
  }
`
