import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
const POST_API_URL = "https://countriesnow.space/api/v0.1/countries/cities";

function Cities() {
  const {selectedItem} = useParams();
  const [cities,setCities] = useState(()=>[]);//fixed array 
  const [filteredCities, setFilteredCities] = useState(()=>[])
  const [searchedTerm,setSearchedTerm] = useState(()=>"");
  const [error,setError] = useState(()=>"");
  const [loading,setLoading] = useState(()=>true);
  //useref
  //onmount
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
        setCities(citiesArray);
        setFilteredCities(citiesArray);
        setLoading(false);
      })
    .catch(error=>{
      console.log(error.message);
      setError(error.message);
  })
  return ()=>{
    setLoading(true);
  }
  },[])

  useEffect(()=>{
    let id = setTimeout(()=>{
        let filteredArray = [], citiesArray = cities;
        filteredArray = citiesArray?.filter(city => {
        // let slicedTerm = (city.slice(0,searchedTerm.length));
        let lower = city.toLowerCase();
        let lowerSearch = searchedTerm.toLowerCase();
        return (lower.includes(lowerSearch));
      });
      setLoading(false);
      // console.log(filteredArray.at(-1));
      setFilteredCities(filteredArray);
    },500);
    
    return () => {
      setLoading(true);
      clearTimeout(id)
    };
    // setLoading(false);
  },[searchedTerm])

  return (
    <div>
    <Link to="/"><button>Countries</button></Link>
    <input value={searchedTerm} onChange={((e)=>{setSearchedTerm(e.target.value)} )}></input>
    <h3>Cities of {selectedItem}</h3>
    {(error) && <div>{error}</div>}
    {(loading) && <div>loading...</div>}

    {/* {()} */}
    {/* in js || and && work different */}
    {/* {error || null} */}

      {(!loading) && <ul>
        {filteredCities?.map((city,idx)=> {
          return <li key={idx}>{city}</li>
        })}
      </ul>}
    </div>
  )
}

export default Cities

// let filteredArray = [];
//       filteredArray = citiesArray?.filter(city => {
//         // let slicedTerm = (city.slice(0,searchedTerm.length));
//         let lower = city.toLowerCase();
//         let lowerSearch = searchedTerm.toLowerCase();
//         return (lower.includes(lowerSearch));
//       });

// useEffect(()=>{
//   let id = setTimeout(() => fetch(POST_API_URL,{
//       method:'POST',
//       headers:{
//           'Content-Type':'application/json'
//       },
//       body:JSON.stringify({
//           "country": selectedItem
//       })
//   })
//   .then(res=>{
//     if(res.ok)
//       return res.json()
//     throw Error("Unable to fetch");
//   })
//   .then(data=>
//     {
//       let citiesArray = [];
//       citiesArray = ([...data.data])?.map((city,idx) => city);
      // let filteredArray = [];
      // filteredArray = citiesArray?.filter(city => {
      //   // let slicedTerm = (city.slice(0,searchedTerm.length));
      //   let lower = city.toLowerCase();
      //   let lowerSearch = searchedTerm.toLowerCase();
      //   return (lower.includes(lowerSearch));
      // });
      // setCities(filteredArray);
      // setLoading(false);
//     })
//   .catch(error=>{
//     console.log(error.message);
//     setError(error.message);
// }),1000);
// return ()=>{
  // setLoading(true);
//   clearTimeout(id);
// };

// },[searchedTerm])




// Navigate