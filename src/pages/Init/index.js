import "./Init.css"
import posts from "json/posts.json"
import PostCard from "components/PostCard"

const Init = () => {
    return(
        <ul className="posts">
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post}/>
                </li>
            ))}
        </ul>
        )
}

export default Init