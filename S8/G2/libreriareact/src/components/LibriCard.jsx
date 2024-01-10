import ButtonsCat from './ButtonsCat';
import {Card, Button} from 'react-bootstrap';
import {useState} from 'react';

const LibriCard = () => {
    const [card, setCard] = useState([]);
    const categories = ['fantasy', 'history', 'horror','romance', 'scifi']
    return(
        <>
            <ButtonsCat categories={categories} setCard = {setCard}/>
            {card.map((book) =>
                <Card style={{ width: '18rem' }} key={book.asin}>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        {book.category + ' ' + book.price}
                    </Card.Text>
                    <Button variant="primary">Acquista</Button>
                    </Card.Body>
               </Card>
            )}
        </>
    )
}

export default LibriCard