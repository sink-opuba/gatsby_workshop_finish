import React from "react"

const BlogListItems = ({ posts }) => {
  return posts.map((post, index) => {
    return (
      <article key={index} className="blog-list__article">
        <h3>{post.node.frontmatter.title}</h3>
        <p>
          {" "}
          {post.node.excerpt}
          <span>
            {" "}
            <a href={`blog/${post.node.frontmatter.path}`}>Read &rarr;</a>
          </span>
        </p>
        <p className="blog-list__date"> {post.node.frontmatter.date}</p>
      </article>
    )
  })
}

export default BlogListItems
