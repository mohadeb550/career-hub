import { useLoaderData, useParams } from "react-router-dom"


export default function JobDetails() {

    const jobs = useLoaderData();
    const { id } = useParams();

    console.log(jobs, id)

  return (
    <div>JobDetails</div>
  )
}
