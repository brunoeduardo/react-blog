import "./Init.css"
import Banner from "components/Banner"
import posts from "json/posts.json"
import Post from "components/Post"

const Init = () => {
    return(
    <div>
        <Banner/>
        <ul className="posts">
            {posts.map((post) => (
                <li key={post.id}>
                    <Post post={post}/>
                </li>
            ))}
        </ul>
    </div>
        )
}

export default Init