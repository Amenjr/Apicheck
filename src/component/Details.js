import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react';

function Details({user}) {
    const [moreDetails, setmoreDetails] = useState({});
    const [loading, setloading] = useState(true);
    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>{setmoreDetails(res.data);setloading(false)})
        .catch((err)=>console.log(err));
        
    }, [])
    let { id }=useParams()
    return (
        <div>
            { loading ? <h1 style={{textAlign:'center'}}>Wait please ...</h1>:
              <div style={{display:'flex',flexDirection:'column',marginLeft:'550px',marginTop:'50px',marginBottom:'20px',borderRadius:'5px',width:'550px',padding:'20px',backgroundColor:'black',boxShadow:'12px 12px 2px 1px rgba(16, 16, 24,0.08)'}}>

              <h2><span style={{color: 'red'}}>Name:</span>{moreDetails.name}</h2>
              <h2><span style={{color: 'red'}}>LastName:</span>{moreDetails.username}</h2>
              <h2><span style={{color: 'red'}}>email:</span>{moreDetails.email}</h2>
              <h2><span style={{color: 'red'}}>Adress:</span></h2>
              <h3><span style={{color: 'blue'}}>   * street:</span>{moreDetails.address.street}</h3>
              <h3><span style={{color: 'blue'}}>   * suite:</span>{moreDetails.address.suite}</h3>
              <h3><span style={{color: 'blue'}}>   * city:</span>{moreDetails.address.city}</h3>
              <h3><span style={{color: 'blue'}}>   * zipcode:</span>{moreDetails.address.zipcode}</h3>
              <h3><span style={{color: 'blue'}}>   * geo:</span></h3>
              <h4><span style={{color: 'green'}}>   - lat:</span>{moreDetails.address.geo.lat}</h4>
              <h4><span style={{color: 'green'}}>   - lng:</span>{moreDetails.address.geo.lng}</h4>
              <h2><span style={{color: 'red'}}>phone:</span>{moreDetails.phone}</h2>
              <h2><span style={{color: 'red'}}>website:</span>{moreDetails.website}</h2>
              <h2><span style={{color: 'red'}}>Company:</span></h2>
              <h3><span style={{color: 'blue'}}>   * name:</span>{moreDetails.company.name}</h3>
              <h3><span style={{color: 'blue'}}>   * catchPhrase:</span>{moreDetails.company.catchPhrase}</h3>
              <h3><span style={{color: 'blue'}}>   * bs:</span>{moreDetails.company.bs}</h3>
            </div>
            
            }
            
        </div>
    )
}

export default Details;
