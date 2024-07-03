import { Link } from "react-router-dom"
import "./PostCard.css"

const PostCard = ({post}) => {
    return (
        <Link to={`post/${post.id}`}>
            <div className="post">
                <img className="cover" src={`assets/posts/${post.id}/cover.png`} alt="cover post" />

                <h2 className="title">{post.title}</h2>

                <button className="btn-read">Read</button>
            </div>
        </Link>
    )
}

export default PostCard