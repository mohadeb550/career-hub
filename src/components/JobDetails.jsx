import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "./localstorage";

export default function JobDetails() {
  

  const jobs = useLoaderData();
  const { id } = useParams();

  const job = jobs.find(job => job.id === +id);


  const handleApplyJob = () => {
    saveJobApplication(id)
    toast('You have applied succesfully')

  }



  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <h3> Details coming here </h3>
          <img src={job.logo} />
          <h2> Job Details of : {job.job_title}</h2>
          <p>{job.company_name}</p>
        </div>

        <div className="border">
          <h2 className="text-2xl"> Side things </h2>
          <button onClick={handleApplyJob} className="btn btn-primary w-full"> Apply</button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
