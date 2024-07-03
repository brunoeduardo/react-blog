import "./Button.css"

const Button = ({children, size})=> {
    return (
        <button className={`btn ${size}`}>{children}</button>

    )
}

export default Button