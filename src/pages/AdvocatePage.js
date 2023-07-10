import React,{useEffect,useState} from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'

const AdvocatePage = () => {
    const params=useParams()
    const username=params.username

    const [advocate,setAdvocate]=useState(null)

    useEffect(()=>{
        getData()
    },[username])

    let getData=async()=>{
       let response=await axios.get(`http://127.0.0.1:8000/advocates/${username}`)
       setAdvocate(response.data)
    }

  return (
    <>
    {advocate&&(       
        <div> 
            <h1>Name: {advocate.username}</h1>
            <p>Bio : {advocate.bio}</p>
            <p>Company : {advocate.Company.name}</p>
        </div>
        )}
    </>
  )
}

export default AdvocatePage