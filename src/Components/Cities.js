import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
const POST_API_URL = "https://countriesnow.space/api/v0.1/countries/cities";

function Cities() {
  const {selectedItem} = useParams();
  const [cities,setCities] = useState(()=>[]);
  const [searchedTerm,setSearchedTerm] = useState(()=>"");
  const [error,setError] = useState(()=>"");
  const [filteredArrayCities,setFilteredArrayCities] = useState(()=>[]);

  useEffect(()=>{
    fetch(POST_API_URL,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "country": selectedItem
        })
    })
    .then(res=>{
      if(res.ok)
        return res.json()
      throw Error("Unable to fetch");
    })
    .then(data=>
      {
        let citiesArray = [];
        citiesArray = ([...data.data])?.map((city,idx) => city);
        let filteredArray = [];
        filteredArray = citiesArray?.filter(city => {
          // let slicedTerm = (city.slice(0,searchedTerm.length));
          let lower = city.toLowerCase();
          let lowerSearch = searchedTerm.toLowerCase();
          return (lower.includes(lowerSearch));
        });
        setCities(filteredArray);
      })
    .catch(error=>{
      console.log(error.message);
      setError(error.message);
  });

},[searchedTerm])

  return (
    <div>
    <Link to="/"><button>Countries</button></Link>
    <input value={searchedTerm} onChange={((e)=> setSearchedTerm(e.target.value))}></input>
    <h3>Cities of {searchedTerm}</h3>
    {(error) && <div>{error}</div>}
    {/* in js || and && work different */}
    {/* {error || null} */}
      <ul>
        {cities?.map((city,idx)=> {
          return <li key={idx}>{city}</li>
        })}
      </ul>
    </div>
  )
}

export default Cities