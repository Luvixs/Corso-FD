const Button = (props) => {

    const customStyle = {
        border: "3px solid black",
        marginBottom: "10px",
    }

    return(
        <button style={customStyle}> {props.buttonText || "Bottone 1"} </button>
    )
}

export default Button