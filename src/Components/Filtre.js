import React, { useState } from 'react'


export default function Filtre({onchange}) {
    const [filter,setFilter]=useState("")
    const search = (event) => {
    
        setFilter(event.target.value);
        onchange(filter);    
        
    }
  return (
    <div className="input-group mb-5">
        <div className="input-group-prepend">
            <span input-group-text>Filter</span>
        </div>
        <input type="text" placeholder="search..." value={filter}
         onChange={search} className="form-control"/>

    </div>
  )
}
