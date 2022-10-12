import React from 'react'

const Navbar = ({setTexte}) => {
  return (
    <div>

      <input onChange={(e)=>setTexte(e.target.value)}
      type= "text"
     placeholder="Rechercher"
      ></input> 
    </div>
  )
}

export default Navbar