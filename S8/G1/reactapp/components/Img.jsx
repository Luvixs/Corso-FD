
const Img = (props) => {

    const customStyleImg = {
        width: "300px",
        height: "400px",
    }
    
    return(
        <img style={customStyleImg} src={props.url} alt={props.tagAlt} />
    )
}

export default Img