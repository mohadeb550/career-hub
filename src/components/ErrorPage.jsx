import { Link } from "react-router-dom"

export default function ErrorPage() {
  return (
    <div className="m-20">
        <h2 className="text-4xl text-red-600 font-bold "> Oops!!! </h2>

       <Link to='/'> <button className="btn btn-accent"> Go Home </button></Link>
    </div>
  )
}
