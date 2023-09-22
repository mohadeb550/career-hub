import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"
import { getStoredJobApplication } from "./localstorage";
import AppliedJob from "./AppliedJob";


export default function AppliedJobs() {

  const [ jobsApplied , setJobsApplied ] = useState([])

  const jobs = useLoaderData();

  useEffect(()=> {
    const storedJobIds = getStoredJobApplication();
    if(storedJobIds.length){
      const jobApplied = jobs.filter(job => storedJobIds.includes(job.id.toString()) )

      setJobsApplied(jobApplied)
    }
  },[])

  return (
    <div className="">
      {jobsApplied.map(job => <AppliedJob job={job} /> )}
    </div>
  )
}
