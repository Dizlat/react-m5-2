import { Link } from "react-router-dom";


export default function ErrorPage() {
    return (
        <>
            <h1>404 page not found</h1>
            <Link to='/'>Go To Home</Link>
        </>
    )
}