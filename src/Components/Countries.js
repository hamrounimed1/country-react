import React , {useEffect, useState} from 'react';
import axios from 'axios';
import Country from './Country';
import Filtre from './Filtre';
import '../App.css'


export default function Countries() {
  const [countries,setCountries]=useState([]);
  const [search,setSearch]=useState('');
  const [selectedContinent,setSelectedContinent]=useState('');
  const [nbMax,setnbMax]=useState(10);
  const continents=["Africa","Europe","Asia","Americas"]
  const getFiltre = (value) => {
    setSearch(value);
    console.log('value:  ',value);  


  }

    

    useEffect(()=>{
      axios.get('https://restcountries.com/v2/all?fields=name,capital,region,flag')
      .then((res)=>setCountries(res.data));
    console.log(countries);
    },[]

    )
   
  return (
    <div className='container'>
    <h1>Countries</h1>
      <Filtre onChange={getFiltre} />
      <div className="box"> 
      <input type="range" min="1" max="250" defaultValue={nbMax} onChange={(e) =>setnbMax(e.target.value)}  /> 
     {
       continents.map((continent) => {
        return(
      <div className="form-check">
       <input className="form-check-input" type="radio" name="cont" 
       id={continent} onChange={(e) =>setSelectedContinent(e.target.id) }/>
       <label className="form-check-label" for="">{continent} </label>
      </div>

        )
       })
     }
     
      </div>
    <div className='row '>
   
        {countries.slice(0,nbMax)
        .filter((country) => {            
          return country.name.toLowerCase().includes(search.toLowerCase());
        }).filter((country)=>{ return country.name.includes(selectedContinent);
        } ).map((country,index)=>{
            return(
              

                  <Country country={country} key={index}/>
               
                )
              })}
      </div>
    
  </div>
  )
}
