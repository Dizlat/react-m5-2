import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function MainPage() {

    const [ photos, setPhotos ] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(photos => setPhotos(photos))
    }, [])

    return (
        <>
            <h1>Photo List</h1>
            {photos.slice(0, 10).map( photo => 
                <div>
                    <Link to={`about/${photo.id}`}>{photo.title}</Link>
                    <p>-------------------------</p>
                </div>
            )}
        </>
    )
}