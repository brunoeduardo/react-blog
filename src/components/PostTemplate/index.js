import "./PostTemplate.css"

const PostTemplate = ({children, photoCover, title}) => {
    return (
        <article className="postTemplateContainer">
            <div className="photoCover" style={{backgroundImage: `url(${photoCover})`}}></div>
            <h2 className="postTitle"> {title}</h2>
            <div className="postContentContainer">
                {children}
            </div>
        </article>
    )
}

export default PostTemplate