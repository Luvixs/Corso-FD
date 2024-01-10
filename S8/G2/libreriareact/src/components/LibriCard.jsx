import ButtonsCat from './ButtonsCat';
import {useState} from 'react';
import SingleCard from './SingleCard';

const LibriCard = () => {
    const [card, setCard] = useState([]);
    const categories = ['fantasy', 'history', 'horror','romance', 'scifi']
    return(
        <>
            <ButtonsCat categories={categories} setCard = {setCard}/>
            <div className='d-flex justify-content-between flex-wrap gap-3'>
            {card.map((book) =>
            <SingleCard book={book} key={book.asin}/>
            //     <Card style={{ width: '18rem' }} key={book.asin}>
            //         <Card.Img variant="top" src={book.img} />
            //         <Card.Body>
            //         <Card.Title>{book.title}</Card.Title>
            //         <Card.Text>
            //             {book.category + ' ' + book.price}
            //         </Card.Text>
            //         <Button variant="primary">Acquista</Button>
            //         </Card.Body>
            //    </Card>
            )}
            </div>
        </>
    )
}

export default LibriCard