import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root'
import Home from './components/Home'
import AppliedJobs from './components/AppliedJobs'
import ErrorPage from './components/ErrorPage'
import JobDetails from './components/JobDetails'


 const router = createBrowserRouter([

  {path:'/', element: <Root/>, errorElement: <ErrorPage/> , children:[

    {path: '/', element: <Home/>},
    {path: '/applied', element: <AppliedJobs/>},
    {path: 'job/:id', loader: ()=> fetch('jobs.json'), element: <JobDetails/>}
    
  ]}

 ])



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
