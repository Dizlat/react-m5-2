import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function AboutPage() {

    const { id } = useParams()
    const [ photo, setPhoto] = useState({})


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${ id }`)
            .then(res => res.json())
            .then(photo => setPhoto(photo))
    })

    return (
        <>
            <h1>About photo</h1>
            <img src={photo.url} alt=''/>
        </>
    )
}