import "./Post.css"

const Post = ({post}) => {
    return (
        <div className="post">
            <img className="cover" src={`assets/posts/${post.id}/cover.png`} alt="cover post" />

            <h2 className="title">{post.title}</h2>

            <button className="btn-read">Read</button>
        </div>
    )
}

export default Post