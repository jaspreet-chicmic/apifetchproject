import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const API_URL_COUNTRIES = "https://countriesnow.space/api/v0.1/countries/capital";

function Home() {
    const [allItems, setAllItems] = useState(()=>[]);//let state know its type i.e array 

    //on mount
    useEffect(()=>{
        fetch(API_URL_COUNTRIES)
        .then(res=>{
            if(res.ok)
                return res.json()
            alert("error occured 404");
        })
        .then(data=>{
            let countries = (data.data)?.map((country,index,arr)=>{
                return country.name;
            });
            setAllItems([...countries]);//[] must be provided
        },error=>console.log("error"))
    },[])

    const [selectedItem, setSelectedItem] = useState("");
    const [clickedItem,setClickedItem] = useState("");
    
    return (
        <div>
            <select value={selectedItem} onChange={(e)=>{
                    setSelectedItem(e.target.value)
                }}>
                <option key={-23} value="select">Select country</option>
                {allItems.map((oneItem,index)=>{
                    return <option key = {index} value={oneItem}>{oneItem}</option>
                })}
            </select>
            <h3>{(selectedItem !== "")?`Selected Country: ${selectedItem}`:"Please select a country."}</h3>
            
            <Link to={"/Cities/"+ selectedItem}><button onClick={()=>{
                // (selectedItem && setClickedItem(selectedItem))
                if(selectedItem === "")
                 alert("Select a country");
                else
                    setClickedItem(selectedItem)
                }}>Cities</button></Link>
        </div>
  )
}

export default Home
