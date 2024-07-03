import "./Post.css"
import {useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostTemplate from "components/PostTemplate"
import photoCover from "assets/about_cover.png"
import ReactMarkdown from 'react-markdown'
import Error404 from "pages/Error404"
import Default from "pages/Default"
import PostCard from "components/PostCard"

const Post = () => {
    const param = useParams()
    const post = posts.find((post) => post.id === Number(param.id))
    const otherPosts = posts.filter((post) => post.id !== Number(param.id)).slice(0,4)

    if(!post) {
        return <Error404/>
    }

    return (
        <Default>
            <PostTemplate photoCover={photoCover} title={post.title}>
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.text}
                    </ReactMarkdown>
                    <h3>Other posts you might like:</h3>
                    <div className="other-posts-container">
                        {
                            otherPosts.map((post) => (
                                <PostCard key={post.id} post={post}/>
                            ))
                        }
                    </div>
                </div>
            </PostTemplate>
        </Default>
    )
}

export default Post