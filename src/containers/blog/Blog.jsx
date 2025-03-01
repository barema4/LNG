import React from 'react'
import { Article } from '../../components'
import "./blog.css"
// import { blog01, blog02, blog03, blog04, blog05 } from "./imports.js"

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <div className="blog-header">
          A lot is happening, We are blogging about it.
        </div>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupB">
          <Article date="Jul 05,2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article date="Jul 05,2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article date="Jul 05,2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article  date="Jul 05,2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog