import React from 'react'

export default function (props) {
   return (
    
        
  <div class="card col-sm-3 ">
    <img class="card-img-top  " src={props.country.flag} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{props.country.name}</h5>
      <p class="card-text">{props.country.capital}</p>
    </div>
  </div>
 

   
  )
}
