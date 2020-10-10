import React, { useState } from "react"
import { chunkArray } from "../../helpers/chunkArray"
import "./BlogList.scss"
import BlogListItems from "./BlogListItems"

const BlogList = ({ data }) => {
  const [state, setState] = useState({
    page: 1,
    chunksPerPage: 1,
    allLoaded: false,
  })

  const edges = data.allMarkdownRemark.edges
  const posts = [...edges]
  const { allLoaded, page, chunksPerPage } = state

  // Implements See more articles feature
  const renderPosts = () => {
    let { page, chunksPerPage } = state
    let chunks = chunkArray(Array.from(posts), 2)
    let paginated = Array.from(chunks).splice(0, page * chunksPerPage)
    return paginated.map((group, index) => (
      <BlogListItems posts={group} key={index} />
    ))
  }

  const onLoad = () => {
    let allLoaded = (page + 1) * chunksPerPage >= posts.length / 2
    setState(prevState => ({
      ...prevState,
      page: prevState.page + 1,
      allLoaded,
    }))
  }

  return (
    <section className="blog-list__container">
      {renderPosts()}
      {posts.length >= chunksPerPage * 2 + 1 && (
        <div className="more-articles-box">
          <button type="button" onClick={onLoad} disabled={allLoaded}>
            {allLoaded ? "All loaded" : "See More"}
          </button>
        </div>
      )}
    </section>
  )
}

export default BlogList
