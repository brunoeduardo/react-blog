import { Link } from "react-router-dom"
import "./PostCard.css"
import Button from "components/Button"

const PostCard = ({post}) => {
    return (
        <Link to={`/post/${post.id}`}>
            <div className="post">
                <img className="cover" src={`/assets/posts/${post.id}/cover.png`} alt="cover post" />

                <h2 className="title">{post.title}</h2>

                <Button>Read</Button>
            </div>
        </Link>
    )
}

export default PostCard