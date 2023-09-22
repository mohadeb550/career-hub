
import { useEffect, useState } from "react"
import Job from "./Job.jsx"

export default function FeaturedJobs() {

    const [ jobs , setJobs ] = useState([])
    const [dataLength , setDataLength ] = useState(4);
    // const [ bool , setBool ] = useState(false);

    useEffect(()=> {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data) )
    },[])

    // const handleShowAll = () => {
    //     setBool(!bool);
    //     console.log(bool)
    //     bool? setDataLength(jobs.length) : setDataLength(4);
    // }


  return (
    <div className="my-8">
        <div className="text-center">
        <h2 className="text-4xl"> Featured Jobs </h2>
        <p> Explore thousands of job opportunities with all the information you need. Its your future </p>
        </div>

        <div className="grid grid-cols-2 gap-8 my-10">
            {jobs.slice(0, dataLength).map(job => <Job  key={job.id} job={job} /> )}
        </div>
        
        <div className={`text-center ${dataLength === jobs.length && 'hidden'}`}>
            <button onClick={()=> setDataLength(jobs.length)} className="btn btn-accent"> Show All Jobs </button>
        </div>
    </div>

  )
}
