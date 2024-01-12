import {useState, useEffect} from 'react'


const Gallery = ({url}) => {
    const [movies, setMovies] = useState([])
  
    useEffect(() => {
        fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            setMovies(data.Search);
        })
    },[])

    return(
        <>
            <div className="d-flex mx-4 mt-3 gap-2 "> 
            {movies.slice(0,6).map((movie) => (
                <img className='border border-secondary' key={movie.imdbID} src={movie.Poster} alt={movie.Title}  />
            ))}
            </div>
        </>
        
    )
}

export default Gallery