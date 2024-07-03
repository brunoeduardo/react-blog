import "./Init.css"
import posts from "json/posts.json"
import Post from "components/Post"

const Init = () => {
    return(
        <ul className="posts">
            {posts.map((post) => (
                <li key={post.id}>
                    <Post post={post}/>
                </li>
            ))}
        </ul>
        )
}

export default Init