// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogData

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="outer">
        <div>
          <img src={imageUrl} className="largephoto" />
        </div>
        <div>
          <p>{topic}</p>
          <h2>{title}</h2>
          <div className="outer">
            <img src={avatarUrl} className="smallphoto" />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
