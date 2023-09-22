import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';

export default function AppliedJob({job}) {

    const {id,  logo, job_title, company_name , remote_or_onsite , location, job_type, salary  } = job;



  return (
    
    <div className="card card-compact bg-base-100 border pt-8">
    <figure><img src={logo} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title"> {job_title} </h2>
      <p> {company_name} </p>

      <div>
        <button className="btn btn-outline btn-secondary mr-3"> {remote_or_onsite} </button>
        <button className="btn btn-outline btn-secondary"> {job_type} </button>
      </div>

    <div className='my-2 flex gap-5'>
        <h2 ><CiLocationOn className='text-xl inline' />  {location}</h2>
        <h2 ><AiOutlineDollarCircle className='text-xl inline' />  {salary}</h2>
    </div>

      <div className="card-actions ">
      <Link to={`/job/${id}`}> <button className="btn btn-primary"> View Details </button> </Link>
      </div>
    </div>
  </div>
  )
}
