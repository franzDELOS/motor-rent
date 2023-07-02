
const Button = ({ text, onClick, ...rest }) => {

    return (
        <button  onClick={onClick} {...rest}>
        {text}
      </button>
    )
}

export default Button