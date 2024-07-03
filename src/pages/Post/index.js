import "./Post.css"
import { useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostTemplate from "components/PostTemplate"
import photoCover from "assets/about_cover.png"
import ReactMarkdown from 'react-markdown'

const Post = () => {
    const param = useParams()
    const post = posts.find((post) => post.id === Number(param.id))
    
    if(!post) {
        return 'Post not found'
    }

    return (
        <PostTemplate photoCover={photoCover} title={post.title}>
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.text}
                </ReactMarkdown>
            </div>
        </PostTemplate>
    )
}

export default Post