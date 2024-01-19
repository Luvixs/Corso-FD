import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react"

const Search = ({searchWeather}) => {
    const [city, setCity] = useState('')
    return(
        <Form className="d-flex">
        <Form.Control
          type="text"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={city}
          onChange={(e)=>setCity(e.target.value)}
        />
        <Button variant="outline-success" onClick={()=>searchWeather(city)}>Search</Button>
      </Form>
    )
}

export default Search