import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const HomePage = () => {

    const [advocates,setAdvocates]=useState([])

    useEffect(()=>{
        getData()
    },[])

    let getData=async(query='')=>{
       let response=await axios.get(`http://127.0.0.1:8000/advocates/?query=${query}`)
       setAdvocates(response.data)
    }

    let searchData=(e)=>{
        e.preventDefault()
       let query= e.target.query.value
       getData(query)
    }

  return (
    <div className='main-container'>
        
        <div className="header"><h1>LINK UP</h1></div>
        
        <p className='adv'><Link to={`/addAdvocate`}>Add Advocate</Link></p>

        <div className='form_wrapper'>
             
            <form onSubmit={searchData} id="search_form">
                <input className="inp" type="text" name="query" placeholder="Search for advocates" />
                <input className='sch'  type="submit" value="Search" />
            </form>
        </div>

        <div className='advocate_list'>

            {advocates.map((advocate,index)=>(
                <div className='advocate_wrapper' key={index}>
                        <strong>{advocate.username}</strong>
                        <br />
                        <p>{advocate.bio}</p>
                        
                        <Link to={`/advocate/${advocate.username}`}>view</Link>
                </div>
            ))}
        </div>
    </div>
    
  )
}

export default HomePage