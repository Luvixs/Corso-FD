import {Card, Button} from 'react-bootstrap'; 
import {useState} from 'react';


const SingleCard = ({book}) => {

    const [selected, setSelected] = useState(false)
// attributo style condizionale
const selectedStyle = {
    boxShadow: selected? '8px 10px 18px grey' : false
    
}
    return (
        <Card style={{ width: '18rem', ...selectedStyle}} key={book.asin}>
            <Card.Img variant="top" src={book.img} onClick={()=>{setSelected(!selected)}}/>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                {book.category + ' ' + book.price}
                </Card.Text>
                <Button variant="primary">Acquista</Button>
            </Card.Body>
        </Card>
    )
}

export default SingleCard